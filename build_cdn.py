"""生成 jsDelivr 备用部署包。

背景：jsDelivr 能免费托管 GitHub 仓库里的文件并给 HTTPS 地址，但它把 .html 当成
text/plain 发送（浏览器会显示源码而不是渲染页面），对 .js 则给出正确的
application/javascript。所以这里把 index.html 拆成：

    index.web.html   —— 极简外壳，只负责加载下面的脚本（CDN 上的 .html 不参与渲染）
    msx-app.js       —— 把页面样式、结构、逻辑打包成一个自包含脚本

访问外壳页时，脚本会把样式注入 <head>、把页面结构写入 <body>，效果与 index.html 一致。

用法：
    python build_cdn.py           # 生成本地文件（含内联兜底，本地可直接打开测试）
    python build_cdn.py --cdn     # 同时把脚本地址指向 jsDelivr（部署用）
"""

import argparse
import json
import re
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = Path(__file__).parent
SRC = ROOT / "index.html"
REPO = "feicibuqi/msx-campus-repair"
BRANCH = "main"

HEAD_RE = re.compile(r"<head>(.*?)</head>", re.S | re.I)
STYLE_RE = re.compile(r"<style>(.*?)</style>", re.S | re.I)
BODY_RE = re.compile(r"<body>(.*?)</body>", re.S | re.I)
SCRIPT_RE = re.compile(r"<script>(.*?)</script>", re.S | re.I)
SCRIPT_TAG_RE = re.compile(r"<script>.*?</script>", re.S | re.I)


def build():
    html = SRC.read_text(encoding="utf-8")

    m_head = HEAD_RE.search(html)
    m_style = STYLE_RE.search(html)
    m_body = BODY_RE.search(html)
    m_script = SCRIPT_RE.search(html)
    if not all([m_head, m_style, m_body, m_script]):
        sys.exit("解析 index.html 失败：缺少 head / style / body / script 区块")

    head = m_head.group(1)
    style = m_style.group(1).strip()
    body = m_body.group(1).strip()
    script = m_script.group(1).strip()

    # 脚本块必须从 body 里剥掉：结构字符串不能包含 </script>
    body = SCRIPT_TAG_RE.sub("", body).strip()

    # 提取 <title>，其余 head 里的 meta 在外壳页里重新写
    m_title = re.search(r"<title>(.*?)</title>", head, re.S | re.I)
    title = m_title.group(1).strip() if m_title else "码上修"

    # 图标：把 data URI 原样搬进外壳页
    m_icon = re.search(r'<link rel="icon"[^>]*>', head, re.I)
    icon = m_icon.group(0) if m_icon else ""

    # 兜底断言：结构里不能出现 </script> 或反引号，否则打包会破
    for name, chunk in (("body", body), ("script", script), ("style", style)):
        if "</script" in chunk.lower():
            sys.exit(f"{name} 里出现 </script，无法安全内联进脚本")

    # 反引号在 style 里不常见；出现就改用普通字符串拼接方式提示
    if "`" in style:
        print("!! 警告：style 里含反引号，将按字面量处理（可能影响解析）")

    app = f"""/* 码上修 · 页面包（由 build_cdn.py 从 index.html 生成，请勿直接编辑） */
(function () {{
  'use strict';
  var CSS = {json.dumps(style, ensure_ascii=False)};
  var HTML = {json.dumps(body, ensure_ascii=False)};
  var JS = function () {{
{script}
  }};

  function boot() {{
    var st = document.createElement('style');
    st.setAttribute('data-msx', '1');
    st.textContent = CSS;
    document.head.appendChild(st);
    document.body.innerHTML = HTML;
    JS();
  }}

  if (document.readyState === 'loading') {{
    document.addEventListener('DOMContentLoaded', boot);
  }} else {{
    boot();
  }}
}})();
"""

    (ROOT / "msx-app.js").write_text(app, encoding="utf-8")

    shell = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1">
<meta name="format-detection" content="telephone=no">
<meta name="theme-color" content="#8C1C13">
{icon}
<title>{title}</title>
</head>
<body>
<noscript>本页面需要启用 JavaScript。</noscript>
<script src="msx-app.js"></script>
</body>
</html>
"""
    (ROOT / "index.web.html").write_text(shell, encoding="utf-8")

    print(f"已生成 msx-app.js（{len(app):,} 字节）")
    print(f"已生成 index.web.html（{len(shell):,} 字节）")


def point_to_cdn():
    """把外壳页的脚本地址指向 jsDelivr，供线上使用。"""
    p = ROOT / "index.web.html"
    html = p.read_text(encoding="utf-8")
    url = f"https://cdn.jsdelivr.net/gh/{REPO}@{BRANCH}/msx-app.js"
    html2 = html.replace('src="msx-app.js"', f'src="{url}"')
    if html2 == html:
        sys.exit("未找到本地脚本引用，无法改写为 CDN 地址")
    out = ROOT / "qrcodes" / "index.cdn.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html2, encoding="utf-8")
    print(f"已生成 CDN 入口：{out}")
    print(f"  脚本地址：{url}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--cdn", action="store_true", help="同时生成指向 jsDelivr 的入口页")
    a = ap.parse_args()
    build()
    if a.cdn:
        point_to_cdn()
