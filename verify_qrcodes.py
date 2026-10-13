"""验证：把生成的二维码图片解码回来，确认里面存的 URL 正确且为百分号编码。"""
import sys
from pathlib import Path
from urllib.parse import urlparse, parse_qs, unquote

try:
    from PIL import Image
    import qrcode
except ImportError:
    sys.exit("缺少依赖")

try:
    from pyzbar.pyzbar import decode as zbar_decode
    HAS_ZBAR = True
except Exception:
    HAS_ZBAR = False


def main():
    folder = Path(__file__).parent / "qrcodes" / "单码"
    files = sorted(folder.glob("*.png"))
    if not files:
        sys.exit("没有找到二维码图片")

    # 用 pyzbar 解码真实二维码内容（未安装则只报告文件数）
    if not HAS_ZBAR:
        print(f"（未安装 pyzbar，跳过解码验证）共 {len(files)} 张二维码")
        # 退而求其次：打印生成器会写入的 URL
        sys.path.insert(0, str(Path(__file__).parent))
        import gen_qrcodes as g
        from urllib.parse import quote
        safe = ":/?#[]@!$&'()*+,;="
        sep = "&" if "?" in g.DEFAULT_BASE else "?"
        for loc in g.LOCATIONS[:3]:
            url = (g.DEFAULT_BASE + sep
                   + f"campus={quote(loc[1], safe=safe)}"
                   + f"&building={quote(loc[2], safe=safe)}"
                   + f"&floor={quote(loc[3], safe=safe)}"
                   + f"&spot={quote(loc[4], safe=safe)}"
                   + f"&id={quote(loc[0], safe=safe)}")
            print(f"  {loc[2]} {loc[3]} {loc[4]}")
            print(f"    {url}")
        return

    ok = 0
    for f in files:
        res = zbar_decode(Image.open(f))
        if not res:
            print(f"  !! 无法解码: {f.name}")
            continue
        url = res[0].data.decode("utf-8")
        p = urlparse(url)
        qs = {k: unquote(v[0]) for k, v in parse_qs(p.query).items()}
        nonscii = [c for c in url if ord(c) > 127]
        flag = "OK " if not nonscii else "!! 含非 ASCII 字符"
        print(f"  {flag} {f.name[:34]:<34} {qs.get('building','?')} {qs.get('floor','?')} {qs.get('spot','?')}")
        if not nonscii:
            ok += 1

    print(f"\n共 {len(files)} 张，解码成功且全部为 ASCII（百分号编码）: {ok}")
    if files:
        res = zbar_decode(Image.open(files[0]))
        if res:
            print("\n第一张的完整内容：")
            print("  " + res[0].data.decode("utf-8"))


if __name__ == "__main__":
    main()
