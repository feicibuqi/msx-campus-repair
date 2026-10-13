# -*- coding: utf-8 -*-
"""
码上修 · 二维码批量生成脚本

用法：
    python gen_qrcodes.py                      # 用本机 IP 生成（手机连同一 WiFi 即可扫码）
    python gen_qrcodes.py -b https://xxx.com   # 指定线上地址（部署后重新生成用）

产出：
    qrcodes/单码/      每个点位一张独立二维码图
    qrcodes/打印页/    A4 打印页（每页 6 张卡片，直接打印张贴）
    qrcodes/汇总预览.png
"""

import argparse
import socket
import sys
from pathlib import Path
from urllib.parse import quote

# Windows 控制台默认 GBK，强制 UTF-8 输出，避免中文/符号打印崩溃
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

import qrcode
from qrcode.constants import ERROR_CORRECT_H, ERROR_CORRECT_M
from PIL import Image, ImageDraw, ImageFont

# ---------------------------------------------------------------- 点位表
# 演示用点位：校区 / 楼栋 / 楼层 / 点位（码越细，"位置自动填好"的效果越明显）
LOCATIONS = [
    ("zx-zhixinB-5f-elev", "中心校区", "知新楼B座", "5层", "东电梯厅", "zx"),
    ("zx-zhixinB-5f-stair", "中心校区", "知新楼B座", "5层", "东楼梯口", "zx"),
    ("zx-zhixinB-5f-wc", "中心校区", "知新楼B座", "5层", "卫生间门口", "zx"),
    ("zx-zhixinB-4f-elev", "中心校区", "知新楼B座", "4层", "东电梯厅", "zx"),
    ("zx-zhixinB-3f-corridor", "中心校区", "知新楼B座", "3层", "走廊东段", "zx"),
    ("zx-zhixinB-1f-hall", "中心校区", "知新楼B座", "1层", "门厅", "zx"),
    ("zx-tushuguan-3f-stair", "中心校区", "图书馆", "3层", "南楼梯口", "zx"),
    ("zx-tushuguan-2f-wc", "中心校区", "图书馆", "2层", "卫生间门口", "zx"),
    ("zx-msz-12-501", "中心校区", "学生公寓12号楼", "5层", "走廊东头", "zx"),
    ("zx-msz-12-5f-wc", "中心校区", "学生公寓12号楼", "5层", "公共水房", "zx"),
    ("zx-msz-12-5f-stair", "中心校区", "学生公寓12号楼", "5层", "楼梯口", "zx"),
    ("zx-msz-12-1f-hall", "中心校区", "学生公寓12号楼", "1层", "门厅", "zx"),
    ("zx-canteen-yushan-1f", "中心校区", "玉兰园餐厅", "1层", "东侧入口", "zx"),
    ("zx-canteen-yushan-2f", "中心校区", "玉兰园餐厅", "2层", "洗手池旁", "zx"),
    ("rq-zhixinA-5f-elev", "软件园校区", "知新楼A座", "5层", "西电梯厅", "rq"),
    ("rq-zhixinA-5f-stair", "软件园校区", "知新楼A座", "5层", "西楼梯口", "rq"),
    ("rq-msz-3-403", "软件园校区", "学生公寓3号楼", "4层", "走廊西头", "rq"),
    ("rq-msz-3-4f-wc", "软件园校区", "学生公寓3号楼", "4层", "公共水房", "rq"),
]

# ---------------------------------------------------------------- 配置
DPI = 300
CARD_W, CARD_H = 1000, 1450          # 单张卡片像素尺寸（300dpi 下约 8.5 × 12.3 cm）
COLS, ROWS = 2, 3                    # 每页 2 列 × 3 行 = 6 张
GAP = 40
MARGIN = 40
A4_W, A4_H = 2480, 3508              # A4 @ 300dpi

# 配色（与页面一致）
RED = (140, 28, 19)
RED_SOFT = (253, 243, 242)
DARK = (31, 27, 24)
SUB = (122, 113, 106)
LINE = (226, 220, 214)
WHITE = (255, 255, 255)

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\msyhbd.ttc",
    r"C:\Windows\Fonts\msyh.ttc",
    r"C:\Windows\Fonts\simhei.ttf",
    r"C:\Windows\Fonts\simsun.ttc",
]


def load_font(size, bold=False):
    order = FONT_CANDIDATES if bold else FONT_CANDIDATES[1:] + FONT_CANDIDATES[:1]
    for path in order:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    print("!! 未找到中文字体，中文可能显示为方框", file=sys.stderr)
    return ImageFont.load_default()


F = {
    "brand": load_font(46, True),
    "brand_sub": load_font(28),
    "bldg": load_font(72, True),
    "floor": load_font(58, True),
    "spot": load_font(46),
    "cta": load_font(36),
    "cta_sub": load_font(28),
    "tiny": load_font(24),
    "page": load_font(28),
}


def detect_base():
    """猜测本机局域网地址，手机连同一 WiFi 时可直接扫码。"""
    ip = "127.0.0.1"
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
    except Exception:
        try:
            ip = socket.gethostbyname(socket.gethostname())
        except Exception:
            pass
    return f"http://{ip}:8000/index.html"


# 线上演示地址（部署到 GitHub Pages 后使用）
LIVE_BASE = "https://feicibuqi.github.io/msx-campus-repair/"

# 二维码统一指向线上地址（不依赖现场 WiFi）；加 mode=live 隐藏演示辅助按钮
DEFAULT_BASE = LIVE_BASE + "index.html?mode=live"


def text_w(draw, s, font):
    return draw.textbbox((0, 0), s, font=font)[2]


def center_text(draw, cx, y, s, font, fill):
    draw.text((cx - text_w(draw, s, font) / 2, y), s, font=font, fill=fill)


def make_qr(url):
    qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H,
                       box_size=12, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    return qr.make_image(fill_color="black", back_color="white").convert("RGB")


def build_card(loc, base):
    """生成一张点位卡片：二维码 + 位置大字 + 说明。"""
    lid, campus, bldg, floor, spot, _ = loc
    sep = "&" if "?" in base else "?"
    # 中文参数做百分号编码：部分扫码器不认 URL 里的非 ASCII 字符
    safe = ":/?#[]@!$&'()*+,;="
    q = lambda s: quote(str(s), safe=safe)
    url = (f"{base}{sep}campus={q(campus)}&building={q(bldg)}"
           f"&floor={q(floor)}&spot={q(spot)}&id={q(lid)}")

    card = Image.new("RGB", (CARD_W, CARD_H), WHITE)
    d = ImageDraw.Draw(card)

    # 外框
    d.rounded_rectangle([6, 6, CARD_W - 7, CARD_H - 7], radius=34,
                        outline=LINE, width=4)
    # 顶部品牌条
    d.rounded_rectangle([6, 6, CARD_W - 7, 132], radius=34, fill=RED)
    d.rectangle([6, 100, CARD_W - 7, 132], fill=RED)
    d.text((48, 34), "码上修", font=F["brand"], fill=WHITE)
    d.text((48, 88), "扫码报修 · 位置自动识别", font=F["brand_sub"], fill=(255, 214, 209))

    # 位置信息
    y = 168
    center_text(d, CARD_W / 2, y, bldg, F["bldg"], DARK); y += 96
    line2 = f"{floor} · {spot}"
    center_text(d, CARD_W / 2, y, line2, F["spot"], RED); y += 74

    # 分隔线
    d.line([(90, y), (CARD_W - 90, y)], fill=LINE, width=3)
    y += 34

    # 二维码
    qr_img = make_qr(url)
    qr_side = CARD_W - 300
    qr_img = qr_img.resize((qr_side, qr_side), Image.NEAREST)
    qx = int((CARD_W - qr_side) / 2)
    # 二维码白底 + 细边
    d.rounded_rectangle([qx - 14, y - 14, qx + qr_side + 14, y + qr_side + 14],
                        radius=18, outline=LINE, width=3)
    card.paste(qr_img, (qx, y))
    y += qr_side + 40

    # 引导语
    center_text(d, CARD_W / 2, y, "微信扫一扫，直接报修", F["cta"], DARK); y += 56
    center_text(d, CARD_W / 2, y, "校园网 / 数据网络均可", F["cta_sub"], SUB); y += 48

    # 脚注
    d.line([(90, CARD_H - 96), (CARD_W - 90, CARD_H - 96)], fill=LINE, width=2)
    center_text(d, CARD_W / 2, CARD_H - 78,
                f"码损坏请致电后勤服务热线   |   点位编号 {lid}", F["tiny"], SUB)

    return card, url


def build_sheet(cards, page_no, total_pages):
    sheet = Image.new("RGB", (A4_W, A4_H), WHITE)
    for idx, card in enumerate(cards):
        r, c = divmod(idx, COLS)
        x = MARGIN + c * (CARD_W + GAP)
        y = MARGIN + r * (CARD_H + GAP)
        sheet.paste(card, (x, y))
    d = ImageDraw.Draw(sheet)
    foot = f"码上修 · 楼层二维码张贴页  第 {page_no}/{total_pages} 页   （建议过塑或亚克力板，贴于对应点位旁）"
    d.text((MARGIN, A4_H - 60), foot, font=F["page"], fill=SUB)
    return sheet


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("-b", "--base", default=None,
                    help="页面地址前缀，默认用线上地址；传 local 可用本机局域网 IP:8000")
    ap.add_argument("--local", action="store_true",
                    help="改用本机局域网地址生成（现场离线演示用）")
    args = ap.parse_args()

    if args.local:
        base = detect_base()
    else:
        base = args.base or DEFAULT_BASE
    if not base.endswith("index.html") and "?" not in base:
        base = base.rstrip("/") + "/index.html"

    out = Path(__file__).parent / "qrcodes"
    (out / "单码").mkdir(parents=True, exist_ok=True)
    (out / "打印页").mkdir(parents=True, exist_ok=True)

    print(f"页面地址前缀：{base}")
    print(f"共 {len(LOCATIONS)} 个点位\n")

    cards = []
    for loc in LOCATIONS:
        card, url = build_card(loc, base)
        name = f"{loc[5]}_{loc[2]}_{loc[3]}_{loc[4]}".replace("/", "-")
        card.save(out / "单码" / f"{name}.png", dpi=(DPI, DPI))
        cards.append(card)
        print(f"  ✓ {loc[1]} {loc[2]} {loc[3]} {loc[4]}")

    per_page = COLS * ROWS
    pages = [cards[i:i + per_page] for i in range(0, len(cards), per_page)]
    for i, page_cards in enumerate(pages, 1):
        sheet = build_sheet(page_cards, i, len(pages))
        sheet.save(out / "打印页" / f"张贴页_{i}.png", dpi=(DPI, DPI))

    # 汇总预览（缩小版，方便一眼看全）
    thumb_w, thumb_h = 460, 667
    cols = 6
    rows = (len(cards) + cols - 1) // cols
    preview = Image.new("RGB", (cols * (thumb_w + 16) + 16, rows * (thumb_h + 16) + 16), (244, 242, 239))
    for i, card in enumerate(cards):
        r, c = divmod(i, cols)
        preview.paste(card.resize((thumb_w, thumb_h), Image.LANCZOS),
                      (16 + c * (thumb_w + 16), 16 + r * (thumb_h + 16)))
    preview.save(out / "汇总预览.png")

    print(f"\n单码：{out / '单码'}")
    print(f"打印页：{out / '打印页'}（共 {len(pages)} 页，每页 {per_page} 张）")
    print(f"汇总预览：{out / '汇总预览.png'}")


if __name__ == "__main__":
    main()
