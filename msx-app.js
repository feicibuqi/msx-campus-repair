/* 码上修 · 页面包（由 build_cdn.py 从 index.html 生成，请勿直接编辑） */
(function () {
  'use strict';
  var CSS = ":root{\n  --primary:#8C1C13;\n  --primary-dark:#6E150E;\n  --primary-soft:#FDF3F2;\n  --line:#EBE7E2;\n  --bg:#F4F2EF;\n  --card:#FFFFFF;\n  --text:#1F1B18;\n  --sub:#7A716A;\n  --muted:#A79F98;\n  --accent:#1F6FB2;\n  --accent-soft:#EEF5FC;\n  --ok:#2F855A;\n  --ok-soft:#EDF7F1;\n  --warn:#B7791F;\n  --radius:14px;\n  --shadow:0 1px 2px rgba(31,27,24,.05), 0 6px 20px rgba(31,27,24,.05);\n}\n*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\nhtml,body{margin:0;padding:0}\nbody{\n  font-family:-apple-system,BlinkMacSystemFont,\"SF Pro SC\",\"PingFang SC\",\"Microsoft YaHei\",\"Helvetica Neue\",sans-serif;\n  background:var(--bg);color:var(--text);font-size:16px;line-height:1.6;\n  -webkit-font-smoothing:antialiased;\n}\n.shell{max-width:520px;margin:0 auto;min-height:100vh;background:var(--bg);\n  display:flex;flex-direction:column;position:relative;}\n\n/* ---------- 顶栏 ---------- */\n.topbar{background:var(--primary);color:#fff;padding:14px 16px 16px;\n  position:sticky;top:0;z-index:20;box-shadow:0 2px 10px rgba(110,21,14,.22)}\n.topbar .row{display:flex;align-items:center;gap:10px}\n.brand{display:flex;align-items:center;gap:9px;font-weight:700;font-size:18px;letter-spacing:.5px}\n.brand .mark{width:26px;height:26px;border-radius:8px;background:#fff;color:var(--primary);\n  display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800}\n.topbar .slogan{font-size:12.5px;opacity:.86;margin-top:3px;letter-spacing:.3px}\n\n/* ---------- 通用卡片 ---------- */\nmain{flex:1;padding:14px 14px 130px}\n.card{background:var(--card);border-radius:var(--radius);box-shadow:var(--shadow);\n  padding:16px;margin-bottom:14px;border:1px solid rgba(235,231,226,.9)}\n.card.tight{padding:14px}\n.sec-title{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:700;\n  color:var(--text);margin:0 0 12px}\n.sec-title .dot{width:4px;height:15px;border-radius:2px;background:var(--primary)}\n.sec-title .opt{margin-left:auto;font-size:12px;font-weight:400;color:var(--muted)}\n\n/* ---------- 位置卡 ---------- */\n.loc-card{position:relative;background:linear-gradient(160deg,#FFF9F8 0%,#FFFFFF 62%);\n  border:1px solid #F0D9D6}\n.loc-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;\n  color:var(--primary);background:var(--primary-soft);border:1px solid #F2D6D3;\n  padding:4px 10px;border-radius:999px;margin-bottom:12px}\n.loc-badge.pending{color:#8A6D1F;background:#FCF8EC;border-color:#F0E4C4}\n.loc-badge .pulse{width:6px;height:6px;border-radius:50%;background:currentColor;\n  animation:pulse 1.6s ease-in-out infinite}\n@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.75)}}\n.loc-main{font-size:21px;font-weight:750;letter-spacing:.2px;line-height:1.35}\n.loc-main .floor{color:var(--primary)}\n.loc-sub{font-size:13.5px;color:var(--sub);margin-top:5px}\n.loc-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:13px;padding-top:13px;\n  border-top:1px dashed var(--line)}\n.chip{font-size:12.5px;color:var(--sub);background:#F7F5F2;border:1px solid var(--line);\n  padding:4px 10px;border-radius:8px}\n.chip b{color:var(--text);font-weight:600}\n.loc-path{font-size:12.5px;color:var(--muted);margin:-4px 0 8px;line-height:1.5}\n.loc-path i{font-style:normal;color:#D3CCC5;margin:0 2px}\n.loc-note{font-size:12px;color:var(--muted);margin-top:11px;padding-top:11px;\n  border-top:1px dashed var(--line);line-height:1.6}\n.loc-empty{text-align:center;padding:6px 0 2px}.loc-empty .big{font-size:15px;font-weight:650;margin-bottom:4px}\n.loc-empty .small{font-size:13px;color:var(--sub)}\n.loc-empty .code{font-family:ui-monospace,Consolas,monospace;font-size:12.5px;\n  background:#F7F5F2;border:1px solid var(--line);border-radius:8px;padding:7px 10px;\n  color:var(--accent);margin-top:10px;word-break:break-all;text-align:left;display:block}\n\n/* ---------- 表单 ---------- */\n.field{margin-bottom:14px}\n.field:last-child{margin-bottom:0}\n.field label{display:block;font-size:13.5px;font-weight:600;color:#4A423C;margin-bottom:7px}\n.field label .req{color:var(--primary);margin-left:2px}\n.field label .hint{font-weight:400;color:var(--muted);font-size:12.5px;margin-left:6px}\ninput[type=text],input[type=tel],textarea{\n  width:100%;border:1px solid var(--line);background:#FCFBFA;border-radius:10px;\n  padding:12px 13px;font-size:16px;font-family:inherit;color:var(--text);\n  transition:border-color .15s, background .15s;appearance:none}\ninput:focus,textarea:focus{outline:none;border-color:#D9B7B3;background:#fff}\ntextarea{resize:vertical;min-height:88px;line-height:1.55}\ninput::placeholder,textarea::placeholder{color:#BCB4AD}\n.two-col{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n\n/* ---------- 报修类型 ---------- */\n.types{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}\n.type{border:1.5px solid var(--line);background:#FCFBFA;border-radius:12px;\n  padding:11px 6px 9px;text-align:center;cursor:pointer;transition:all .15s;user-select:none}\n.type .ico{font-size:21px;line-height:1.2}\n.type .txt{font-size:12.5px;color:#5A524B;margin-top:3px;font-weight:500}\n.type.on{border-color:var(--primary);background:var(--primary-soft);box-shadow:0 0 0 3px rgba(140,28,19,.07)}\n.type.on .txt{color:var(--primary);font-weight:650}\n.type:active{transform:scale(.97)}\n\n/* ---------- 紧急程度 ---------- */\n.urg{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}\n.urg .item{border:1.5px solid var(--line);background:#FCFBFA;border-radius:12px;\n  padding:10px 6px;text-align:center;cursor:pointer;transition:all .15s;user-select:none}\n.urg .item .t{font-size:13.5px;font-weight:650;color:#4A423C}\n.urg .item .d{font-size:11.5px;color:var(--muted);margin-top:2px}\n.urg .item.on{border-color:var(--primary);background:var(--primary-soft)}\n.urg .item.on .t{color:var(--primary)}\n.urg-tip{font-size:12.5px;color:var(--warn);background:#FCF8EC;border:1px solid #F0E4C4;\n  border-radius:9px;padding:9px 11px;margin-top:10px;display:none}\n.urg-tip.show{display:block}\n\n/* ---------- 上传 ---------- */\n.media{display:grid;grid-template-columns:repeat(4,1fr);gap:9px}\n.up{border:1.5px dashed #D8D2CB;background:#FCFBFA;border-radius:12px;aspect-ratio:1;\n  display:flex;flex-direction:column;align-items:center;justify-content:center;\n  cursor:pointer;transition:all .15s;position:relative;overflow:hidden}\n.up:active{transform:scale(.97)}\n.up .plus{font-size:22px;color:#C4BCB4;line-height:1}\n.up .lb{font-size:11px;color:var(--muted);margin-top:4px}\n.up img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.up .del{position:absolute;top:3px;right:3px;width:19px;height:19px;border-radius:50%;\n  background:rgba(0,0,0,.55);color:#fff;font-size:12px;display:flex;align-items:center;\n  justify-content:center;z-index:2;line-height:1}\n.media-hint{font-size:12px;color:var(--muted);margin-top:9px}\n\n/* ---------- 底部提交条 ---------- */\n.submitbar{position:fixed;left:0;right:0;bottom:0;z-index:30;background:rgba(255,255,255,.94);\n  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);\n  border-top:1px solid var(--line);padding:11px 14px calc(11px + env(safe-area-inset-bottom))}\n.submitbar .inner{max-width:520px;margin:0 auto}\n.btn{width:100%;border:none;border-radius:12px;background:var(--primary);color:#fff;\n  font-size:16.5px;font-weight:700;font-family:inherit;padding:14px;cursor:pointer;\n  letter-spacing:.5px;transition:all .15s;box-shadow:0 3px 12px rgba(140,28,19,.25)}\n.btn:active{transform:scale(.985)}\n.btn:disabled{background:#D5CFC9;color:#fff;box-shadow:none;cursor:not-allowed}\n.btn.ghost{background:#fff;color:var(--primary);border:1.5px solid #EBD3D0;box-shadow:none}\n.btn.small{font-size:14.5px;padding:11px}\n\n/* ---------- 演示工具条 ---------- */\n.demobar{display:flex;gap:8px;margin-top:10px}\n.demobar .dbtn{flex:1;font-size:12.5px;color:var(--sub);background:#fff;\n  border:1px solid var(--line);border-radius:9px;padding:8px 6px;text-align:center;\n  cursor:pointer;font-family:inherit}\n.demobar .dbtn:active{background:#F7F5F2}\n\n/* ---------- 成功页 ---------- */\n.done-hero{text-align:center;padding:14px 0 4px}\n.done-hero .ring{width:62px;height:62px;border-radius:50%;background:var(--ok-soft);\n  color:var(--ok);font-size:31px;display:flex;align-items:center;justify-content:center;\n  margin:0 auto 12px;animation:pop .4s cubic-bezier(.2,1.4,.5,1)}\n@keyframes pop{0%{transform:scale(.5);opacity:0}100%{transform:scale(1);opacity:1}}\n.done-hero h2{margin:0;font-size:20px;font-weight:750}\n.done-hero p{margin:5px 0 0;font-size:13.5px;color:var(--sub)}\n.ordno{font-family:ui-monospace,Consolas,monospace;font-size:15px;font-weight:700;\n  color:var(--accent);background:var(--accent-soft);border:1px solid #D8E7F5;\n  border-radius:10px;padding:11px;text-align:center;margin:14px 0;letter-spacing:.6px}\n.kv{display:flex;justify-content:space-between;gap:12px;font-size:13.5px;\n  padding:8px 0;border-bottom:1px dashed var(--line)}\n.kv:last-child{border-bottom:none}\n.kv .k{color:var(--sub);flex:none}\n.kv .v{text-align:right;font-weight:550}\n\n/* ---------- 时间轴 ---------- */\n.tl{margin-top:4px}\n.tl .step{display:flex;gap:12px;position:relative;padding-bottom:18px}\n.tl .step:last-child{padding-bottom:0}\n.tl .step::before{content:\"\";position:absolute;left:8px;top:19px;bottom:-2px;width:2px;background:var(--line)}\n.tl .step:last-child::before{display:none}\n.tl .step.done::before{background:#BFE0CC}\n.tl .node{width:18px;height:18px;border-radius:50%;border:2px solid var(--line);\n  background:#fff;flex:none;z-index:1;margin-top:1px;\n  display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff}\n.tl .step.done .node{background:var(--ok);border-color:var(--ok)}\n.tl .step.now .node{background:#fff;border-color:var(--primary);box-shadow:0 0 0 4px rgba(140,28,19,.12)}\n.tl .step.now .node::after{content:\"\";width:7px;height:7px;border-radius:50%;background:var(--primary)}\n.tl .body .t{font-size:14px;font-weight:650}\n.tl .step.todo .body .t{color:var(--muted);font-weight:500}\n.tl .body .d{font-size:12.5px;color:var(--muted);margin-top:1px}\n.tl-note{font-size:12.5px;color:var(--sub);background:#F7F5F2;border-radius:9px;\n  padding:10px 12px;margin-top:14px;line-height:1.6}\n\n/* ---------- 历史 ---------- */\n.hist{border:1px solid var(--line);border-radius:12px;padding:13px;margin-bottom:11px;\n  background:#FCFBFA}\n.hist .h-top{display:flex;justify-content:space-between;align-items:center;gap:10px}\n.hist .h-no{font-family:ui-monospace,Consolas,monospace;font-size:13px;color:var(--accent);font-weight:600}\n.hist .h-st{font-size:12px;padding:3px 9px;border-radius:999px;background:var(--accent-soft);\n  color:var(--accent);font-weight:600;white-space:nowrap}\n.hist .h-st.s3{background:var(--ok-soft);color:var(--ok)}\n.hist .h-ti{font-size:14.5px;font-weight:600;margin:7px 0 3px}\n.hist .h-lo{font-size:12.5px;color:var(--sub)}\n.hist .h-act{margin-top:10px;display:flex;gap:8px}\n.hist .h-act button{font-family:inherit;font-size:12.5px;padding:7px 12px;border-radius:8px;\n  border:1px solid var(--line);background:#fff;color:var(--sub);cursor:pointer}\n.hist .h-act button.p{background:var(--primary-soft);color:var(--primary);border-color:#F0D9D6}\n\n/* ---------- 对比弹层 ---------- */\n.mask{position:fixed;inset:0;background:rgba(31,27,24,.5);z-index:60;display:none;\n  align-items:flex-end;justify-content:center;backdrop-filter:blur(2px)}\n.mask.show{display:flex}\n.sheet{background:#fff;border-radius:18px 18px 0 0;width:100%;max-width:520px;\n  max-height:88vh;overflow-y:auto;padding:22px 18px calc(22px + env(safe-area-inset-bottom));\n  animation:up .28s cubic-bezier(.2,.9,.3,1)}\n@keyframes up{from{transform:translateY(30px);opacity:.6}to{transform:none;opacity:1}}\n.sheet h3{margin:0 0 4px;font-size:18px}\n.sheet .lead{font-size:13px;color:var(--sub);margin:0 0 16px}\n.cmp{display:grid;grid-template-columns:1fr 1fr;gap:11px}\n.cmp .col{border:1px solid var(--line);border-radius:12px;padding:13px;background:#FCFBFA}\n.cmp .col.new{border-color:#EBD3D0;background:var(--primary-soft)}\n.cmp .col .h{font-size:13px;font-weight:700;margin-bottom:9px}\n.cmp .col.new .h{color:var(--primary)}\n.cmp ol{margin:0;padding-left:19px;font-size:13px;line-height:1.85;color:#5A524B}\n.cmp .col.new ol{color:var(--text)}\n.cmp .foot{font-size:12.5px;color:var(--sub);margin-top:11px;padding-top:9px;\n  border-top:1px dashed var(--line)}\n.cmp .foot b{color:var(--primary)}\n.research{font-size:13px;line-height:1.75;color:#5A524B;background:#F7F5F2;border-radius:10px;\n  padding:13px;margin-top:14px}\n.research b{color:var(--text)}\n.toast{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:80;\n  background:rgba(31,27,24,.9);color:#fff;font-size:13.5px;padding:10px 18px;\n  border-radius:999px;opacity:0;pointer-events:none;transition:opacity .25s;white-space:nowrap}\n.toast.show{opacity:1}\n.hide{display:none !important}";
  var HTML = "<div class=\"shell\">\n\n  <!-- ============ 页头 ============ -->\n  <header class=\"topbar\">\n    <div class=\"row\" style=\"justify-content:space-between\">\n      <div>\n        <div class=\"brand\"><span class=\"mark\">修</span>码上修</div>\n        <div class=\"slogan\">扫码定位 · 一码直达 · 报修不再找入口</div>\n      </div>\n      <div id=\"histBtn\" style=\"font-size:13px;opacity:.92;padding:6px 2px;cursor:pointer;\n           white-space:nowrap;text-decoration:underline;text-underline-offset:3px\">我的报修</div>\n    </div>\n  </header>\n\n  <main>\n    <!-- ============ 位置卡 ============ -->\n    <section class=\"card loc-card\" id=\"locCard\"></section>\n\n    <!-- ============ 报修表单 ============ -->\n    <form id=\"form\" autocomplete=\"off\" novalidate>\n\n      <section class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>报修内容<span class=\"opt\">选一项</span></h3>\n        <div class=\"types\" id=\"types\"></div>\n      </section>\n\n      <section class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>问题描述<span class=\"opt\">说清楚更好修</span></h3>\n        <div class=\"field\">\n          <label for=\"title\">一句话概括<span class=\"req\">*</span></label>\n          <input type=\"text\" id=\"title\" placeholder=\"例：走廊顶灯不亮、水房水龙头漏水\" maxlength=\"40\">\n        </div>\n        <div class=\"field\">\n          <label for=\"desc\">详细情况<span class=\"hint\">补充现象、出现时间</span></label>\n          <textarea id=\"desc\" placeholder=\"例：今天早上发现，灯管完全不亮，旁边两盏正常。\" maxlength=\"300\"></textarea>\n        </div>\n      </section>\n\n      <section class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>现场照片<span class=\"opt\">选填 · 最多 3 张</span></h3>\n        <div class=\"media\" id=\"media\"></div>\n        <div class=\"media-hint\">照片由维修人员与管理员可见；拍摄时请避开私人物品与个人隐私。</div>\n      </section>\n\n      <section class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>紧急程度</h3>\n        <div class=\"urg\" id=\"urg\"></div>\n        <div class=\"urg-tip\" id=\"urgTip\">🚨 如遇跑水、漏电、电梯困人等紧急情况，请<b>先拨打后勤值班电话</b>，线上报修用于补充记录。</div>\n      </section>\n\n      <section class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>报修人<span class=\"opt\">用于联系与进度更新</span></h3>\n        <div class=\"two-col\">\n          <div class=\"field\">\n            <label for=\"name\">姓名<span class=\"req\">*</span></label>\n            <input type=\"text\" id=\"name\" placeholder=\"张三\" maxlength=\"20\">\n          </div>\n          <div class=\"field\">\n            <label for=\"sid\">学号 / 工号</label>\n            <input type=\"text\" id=\"sid\" placeholder=\"选填\" maxlength=\"20\" inputmode=\"numeric\">\n          </div>\n        </div>\n        <div class=\"field\">\n          <label for=\"phone\">手机号<span class=\"req\">*</span><span class=\"hint\">维修需要进门时联系</span></label>\n          <input type=\"tel\" id=\"phone\" placeholder=\"11 位手机号\" maxlength=\"11\" inputmode=\"numeric\">\n        </div>\n      </section>\n\n      <div class=\"demobar\" id=\"demobar\">\n        <button type=\"button\" class=\"dbtn\" id=\"cmpBtnBtn\">🆚 对比旧流程（提案用）</button>\n        <button type=\"button\" class=\"dbtn\" id=\"fillBtn\">⚡ 一键填充演示</button>\n      </div>\n    </form>\n\n    <!-- ============ 提交成功 ============ -->\n    <section id=\"done\" class=\"hide\">\n      <div class=\"card\">\n        <div class=\"done-hero\">\n          <div class=\"ring\">✓</div>\n          <h2 id=\"doneHeroTitle\">报修已提交</h2>\n          <p id=\"doneHeroSub\">后勤已收到，进度会通过短信通知你</p>\n        </div>\n        <div class=\"ordno\" id=\"ordNo\">—</div>\n        <div id=\"doneKv\"></div>\n        <button type=\"button\" class=\"btn ghost small\" id=\"copyBtn\" style=\"margin-top:12px\">复制工单号</button>\n      </div>\n\n      <div class=\"card\">\n        <h3 class=\"sec-title\"><span class=\"dot\"></span>处理进度</h3>\n        <div class=\"tl\" id=\"timeline\"></div>\n        <div class=\"tl-note\">\n          以往报修最大的问题不是\"报不上去\"，而是<b>报完看不见进展</b>。本平台把状态实时回传给报修人，\n          同一地点已有报修时会自动合并并显示\"已有 N 人报修\"，避免重复刷屏、也便于后勤按热度派单。\n        </div>\n      </div>\n\n      <button type=\"button\" class=\"btn ghost small\" id=\"againBtn\" style=\"margin-bottom:60px\">再报一处 / 修改</button>\n    </section>\n\n    <!-- ============ 历史 ============ -->\n    <section id=\"history\" class=\"hide\"></section>\n  </main>\n\n  <!-- ============ 底部提交条 ============ -->\n  <div class=\"submitbar\" id=\"submitbar\">\n    <div class=\"inner\">\n      <button type=\"submit\" form=\"form\" class=\"btn\" id=\"submitBtn\">提交报修</button>\n    </div>\n  </div>\n</div>\n\n<!-- ============ 对比弹层 ============ -->\n<div class=\"mask\" id=\"mask\">\n  <div class=\"sheet\">\n    <h3>旧流程 vs 码上修</h3>\n    <p class=\"lead\">同一件事：在 3 号楼 5 层发现灯坏了</p>\n    <div class=\"cmp\">\n      <div class=\"col\">\n        <div class=\"h\">😮‍💨 现在</div>\n        <ol>\n          <li>打开学校官网</li>\n          <li>找到服务大厅</li>\n          <li>登录统一身份认证</li>\n          <li>搜索\"报修\"服务</li>\n          <li>翻页选择校区</li>\n          <li>选择教学楼</li>\n          <li>选择楼层</li>\n          <li>填写问题描述</li>\n        </ol>\n        <div class=\"foot\">约 <b>8 步</b>、1～2 分钟</div>\n      </div>\n      <div class=\"col new\">\n        <div class=\"h\">⚡ 码上修</div>\n        <ol>\n          <li>扫楼层里的二维码</li>\n          <li>位置已自动填好</li>\n          <li>拍一张照片</li>\n          <li>点提交</li>\n        </ol>\n        <div class=\"foot\">约 <b>3 步</b>、20 秒内</div>\n      </div>\n    </div>\n    <div class=\"research\">\n      <b>提案背景（实测）</b><br>\n      现有报修入口位于服务大厅深处，需逐级选择校区 / 楼栋 / 楼层；且该事项未向学生角色开放，\n      学生在服务大厅内无法自助进入。本方案不改动后台系统，只在<b>入口层</b>做两件事：\n      把入口搬到故障现场，把位置信息交给二维码。\n    </div>\n    <button type=\"button\" class=\"btn\" id=\"closeMask\" style=\"margin-top:16px\">知道了</button>\n  </div>\n</div>\n\n<div class=\"toast\" id=\"toast\"></div>\n<input type=\"file\" id=\"fileIn\" accept=\"image/*\" class=\"hide\" multiple>";
  var JS = function () {
/* ==================== 工具 ==================== */
const $ = s => document.querySelector(s);
const params = new URLSearchParams(
  (location.search.slice(1) + '&' + location.hash.replace(/^#/, '')).replace(/^&/, '')
);
const P = k => { try { return (params.get(k) || '').trim(); } catch (e) { return ''; } };

function toast(msg, ms = 1700) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), ms);
}
function hideToast() {
  const t = $('#toast'); clearTimeout(t._h); t.classList.remove('show');
}
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function nowStr(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

/* ==================== 位置：全部来自二维码 ==================== */
const LOC = {
  campus: P('campus'),
  building: P('building'),
  floor: P('floor'),
  spot: P('spot'),
  code: P('id') || P('code')
};
LOC.fixed = !!(LOC.campus && LOC.building);          // 是否由二维码带参进入
LOC.key = [LOC.campus, LOC.building, LOC.floor, LOC.spot].filter(Boolean).join('-') || 'MANUAL';

const t0 = performance.now();                          // 用于统计"扫码到提交"耗时
const MODE = P('mode') || 'demo';                      // demo=带演示辅助按钮；live=线上纯净版
const IS_DEMO = MODE !== 'live';

/* ==================== 位置卡渲染 ==================== */
function renderLoc() {
  const box = $('#locCard');
  if (LOC.fixed) {
    box.innerHTML = `
      <div class="loc-badge"><span class="pulse"></span>位置已由楼层二维码自动识别</div>
      <div class="loc-path">${esc(LOC.campus)} <i>›</i> ${esc(LOC.building)} <i>›</i> ${esc(LOC.floor || '')} <i>›</i> ${esc(LOC.spot || '公共区域')}</div>
      <div class="loc-main">${esc(LOC.building)}
        <span class="floor">${esc(LOC.floor || '')}</span></div>
      <div class="loc-sub">${esc(LOC.spot || '楼内公共区域')}</div>
      <div class="loc-chips">
        <span class="chip">校区 <b>${esc(LOC.campus)}</b></span>
        <span class="chip">楼栋 <b>${esc(LOC.building)}</b></span>
        <span class="chip">楼层 <b>${esc(LOC.floor || '—')}</b></span>
        <span class="chip">点位 <b>${esc(LOC.spot || '—')}</b></span>
        <span class="chip">服务范围 <b>本层公共区域</b></span>
      </div>
      <div class="loc-note">位置信息来自你扫描的二维码，无需手动选择。如与实际位置不符，请更换对应点位的二维码。</div>`;
  } else {
    box.innerHTML = `
      <div class="loc-badge pending"><span class="pulse"></span>未识别位置</div>
      <div class="loc-empty">
        <div class="big">请扫描楼层内的「码上修」二维码</div>
        <div class="small">扫码后校区、楼栋、楼层、点位会自动填入，无需手动选择。</div>
        <code class="code">示例：index.html?campus=中心校区&amp;building=知新楼B座&amp;floor=5层&amp;spot=东电梯厅</code>
      </div>`;
  }
}

/* ==================== 报修类型 ==================== */
const TYPES = [
  { k: '水电', i: '💧' }, { k: '照明', i: '💡' }, { k: '门窗', i: '🚪' },
  { k: '家具', i: '🪑' }, { k: '卫生间', i: '🚻' }, { k: '空调暖气', i: '🌡️' },
  { k: '多媒体设备', i: '📽️' }, { k: '网络', i: '📶' }, { k: '其他', i: '🔧' }
];
let picked = '';
$('#types').innerHTML = TYPES.map(t =>
  `<div class="type" data-k="${t.k}"><div class="ico">${t.i}</div><div class="txt">${t.k}</div></div>`
).join('');
$('#types').addEventListener('click', e => {
  const el = e.target.closest('.type'); if (!el) return;
  const on = el.classList.contains('on');
  document.querySelectorAll('.type').forEach(x => x.classList.remove('on'));
  if (on) { picked = ''; } else { el.classList.add('on'); picked = el.dataset.k; }
  validate();
});

/* ==================== 紧急程度 ==================== */
const URGS = [
  { k: '一般', d: '2 个工作日内', v: 'normal' },
  { k: '较急', d: '24 小时内', v: 'urgent' },
  { k: '紧急', d: '立即处理', v: 'emergency' }
];
let urg = 'normal';
$('#urg').innerHTML = URGS.map((u, i) =>
  `<div class="item${i === 0 ? ' on' : ''}" data-v="${u.v}">
     <div class="t">${u.k}</div><div class="d">${u.d}</div></div>`
).join('');
$('#urg').addEventListener('click', e => {
  const el = e.target.closest('.item'); if (!el) return;
  document.querySelectorAll('.urg .item').forEach(x => x.classList.remove('on'));
  el.classList.add('on'); urg = el.dataset.v;
  $('#urgTip').classList.toggle('show', urg === 'emergency');
});

/* ==================== 图片上传 ==================== */
let photos = [];
function renderMedia() {
  const box = $('#media');
  let h = photos.map((p, i) =>
    `<div class="up"><img src="${p}" alt=""><div class="del" data-i="${i}">×</div></div>`).join('');
  if (photos.length < 3) {
    h += `<div class="up" id="addPhoto"><div class="plus">＋</div><div class="lb">拍照/相册</div></div>`;
  }
  box.innerHTML = h;
  const add = $('#addPhoto');
  if (add) add.onclick = () => $('#fileIn').click();
  box.querySelectorAll('.del').forEach(d => d.onclick = ev => {
    ev.stopPropagation(); photos.splice(+d.dataset.i, 1); renderMedia();
  });
}
$('#fileIn').addEventListener('change', e => {
  const files = [...e.target.files].slice(0, 3 - photos.length);
  files.forEach(f => {
    const r = new FileReader();
    r.onload = () => { photos.push(r.result); renderMedia(); };
    r.readAsDataURL(f);
  });
  e.target.value = '';
});
renderMedia();

/* ==================== 表单校验 ==================== */
function validate() {
  const ok = picked && $('#title').value.trim() && $('#name').value.trim()
    && /^1\d{10}$/.test($('#phone').value.trim());
  $('#submitBtn').disabled = !ok;
  return ok;
}
['title', 'name', 'phone'].forEach(id => $('#' + id).addEventListener('input', validate));
validate();

/* ==================== 提交 ==================== */
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) { toast('请补齐报修类型、描述、姓名和手机号'); return; }

  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  const no = `WX-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-` +
    String(Math.floor(Math.random() * 9000) + 1000);
  const secs = Math.max(1, Math.round((performance.now() - t0) / 1000));

  const order = {
    no, at: nowStr(d), secs,
    campus: LOC.campus, building: LOC.building, floor: LOC.floor, spot: LOC.spot,
    locKey: LOC.key, autoLoc: LOC.fixed,
    type: picked, title: $('#title').value.trim(), desc: $('#desc').value.trim(),
    urg, name: $('#name').value.trim(), sid: $('#sid').value.trim(),
    phone: $('#phone').value.trim(), photos: photos.length, stage: 1
  };

  const all = JSON.parse(localStorage.getItem('msx_orders') || '[]');
  const nowMs = d.getTime();

  /* 同一点位 + 同一类型，24 小时内自动合并，避免重复报修刷屏 */
  const dup = all.find(x => x.locKey === LOC.key && x.type === picked
    && (nowMs - (x.atMs || 0)) < 24 * 3600 * 1000);

  if (dup) {
    dup.merged = (dup.merged || 1) + 1;
    dup.lastAt = nowStr(d);
    localStorage.setItem('msx_orders', JSON.stringify(all.slice(0, 30)));
    hideToast();
    mergeToast(dup);
    renderDone(dup, true);
    return;
  }

  order.atMs = nowMs;
  all.unshift(order);
  localStorage.setItem('msx_orders', JSON.stringify(all.slice(0, 30)));

  const btn = $('#submitBtn');
  btn.disabled = true;
  btn.textContent = '提交中…';
  hideToast();
  setTimeout(() => {
    btn.textContent = '提交报修';
    renderDone(order);
  }, 480);
});

/* ==================== 成功页 ==================== */
const STAGES = [
  { t: '已提交', d: '后勤服务大厅已收到你的报修', off: 0 },
  { t: '已受理', d: '后勤值班人员核对信息并派单', off: 3 },
  { t: '维修中', d: '维修人员已接单，前往现场', off: 15 },
  { t: '已完成', d: '维修完成，等待你确认', off: 120 }
];
const pad2 = n => String(n).padStart(2, '0');

/* 依据提交时间推算各节点时间，用于展示进度时间轴 */
function stageTime(o, min) {
  const base = o.atMs ? new Date(o.atMs) : new Date();
  const t = new Date(base.getTime() + min * 60000);
  const sameDay = t.toDateString() === base.toDateString();
  return sameDay
    ? `${pad2(t.getHours())}:${pad2(t.getMinutes())}`
    : `${t.getMonth() + 1}-${pad2(t.getDate())} ${pad2(t.getHours())}:${pad2(t.getMinutes())}`;
}

function mergeToast(o) {
  toast(`同点位已有报修，已合并到 ${o.no}`, 2600);
}

function renderDone(o, justMerged) {
  $('#ordNo').textContent = o.no;
  const n = o.merged || 1;
  $('#doneKv').innerHTML = `
    <div class="kv"><span class="k">报修地点</span><span class="v">${esc(o.building)} ${esc(o.floor)} ${esc(o.spot)}</span></div>
    <div class="kv"><span class="k">位置来源</span><span class="v">${o.autoLoc ? '二维码自动识别' : '未识别'}</span></div>
    <div class="kv"><span class="k">报修类型</span><span class="v">${esc(o.type)}</span></div>
    <div class="kv"><span class="k">问题</span><span class="v">${esc(o.title)}</span></div>
    <div class="kv"><span class="k">现场照片</span><span class="v">${o.photos} 张</span></div>
    <div class="kv"><span class="k">紧急程度</span><span class="v">${o.urg === 'emergency' ? '紧急' : o.urg === 'urgent' ? '较急' : '一般'}</span></div>
    <div class="kv"><span class="k">提交时间</span><span class="v">${esc(o.at)}</span></div>
    <div class="kv"><span class="k">本次耗时</span><span class="v" style="color:var(--primary)">${o.secs} 秒（扫码到提交）</span></div>
    ${n > 1 ? `<div class="kv"><span class="k">合并报修</span><span class="v" style="color:var(--ok)">该点位已有 ${n} 人报修，已合并</span></div>` : ''}`;

  const stage = o.stage || 1;
  $('#timeline').innerHTML = STAGES.map((s, i) => {
    const cls = i < stage ? 'done' : (i === stage ? 'now' : 'todo');
    const when = i <= stage ? stageTime(o, s.off) : '';
    return `<div class="step ${cls}"><div class="node"></div>
      <div class="body"><div class="t">${s.t}${when ? `　<span style="font-weight:400;color:#A79F98;font-size:12.5px">${when}</span>` : ''}</div>
      <div class="d">${s.d}</div></div></div>`;
  }).join('');

  $('#doneHeroTitle').textContent = justMerged ? '已合并到同一张工单' : '报修已提交';
  $('#doneHeroSub').textContent = justMerged
    ? '同一点位、同一类问题，无需重复报修'
    : '后勤已收到，进度会通过短信通知你';
  $('#copyBtn').textContent = '复制工单号';

  $('#form').classList.add('hide');
  $('#done').classList.remove('hide');
  $('#locCard').classList.add('hide');
  $('#submitbar').classList.add('hide');
  $('#history').classList.add('hide');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* 复制工单号（微信内也能用；不可用时退回提示） */
$('#copyBtn').onclick = () => {
  const txt = $('#ordNo').textContent + ' ' +
    `${LOC.building}${LOC.floor}${LOC.spot}`;
  const done = () => { toast('工单号已复制，可发给宿管或辅导员'); };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(done).catch(fallbackCopy);
  } else { fallbackCopy(); }
  function fallbackCopy() {
    try {
      const ta = document.createElement('textarea');
      ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      done();
    } catch (e) { toast('长按上面的工单号即可复制'); }
  }
};

$('#againBtn').onclick = () => {
  $('#done').classList.add('hide');
  $('#form').classList.remove('hide');
  $('#locCard').classList.remove('hide');
  $('#submitbar').classList.remove('hide');
  window.scrollTo({ top: 0 });
};

/* ==================== 历史 ==================== */
function renderHistory() {
  const all = JSON.parse(localStorage.getItem('msx_orders') || '[]');
  const SN = ['已提交', '已受理', '维修中', '已完成'];
  let h = `<div class="card"><h3 class="sec-title"><span class="dot"></span>我的报修
    <span class="opt">共 ${all.length} 条</span></h3>`;
  if (!all.length) {
    h += `<div style="text-align:center;color:var(--muted);font-size:13.5px;padding:18px 0">
      还没有报修记录，扫描楼层二维码即可提交。</div>`;
  } else {
    h += all.map((o, i) => `
      <div class="hist">
        <div class="h-top">
          <span class="h-no">${esc(o.no)}</span>
          <span class="h-st s${o.stage}">${SN[o.stage] || '已提交'}</span>
        </div>
        <div class="h-ti">${esc(o.type)} · ${esc(o.title)}${(o.merged || 1) > 1 ? ` <span style="color:var(--ok);font-size:12.5px;font-weight:600">（已合并 ${o.merged} 人报修）</span>` : ''}</div>
        <div class="h-lo">${esc(o.building)} ${esc(o.floor)} ${esc(o.spot)} · ${esc(o.at)} · ${o.secs} 秒提交</div>
        <div class="h-act">
          <button class="p" data-detail="${i}">查看进度</button>
          ${IS_DEMO ? `<button data-adv="${i}">模拟推进（演示用）</button>` : ''}
        </div>
      </div>`).join('');
  }
  h += `<button type="button" class="btn ghost small" id="backBtn" style="margin-top:6px">返回报修</button></div>`;
  $('#history').innerHTML = h;

  $('#history').querySelectorAll('[data-adv]').forEach(b => b.onclick = () => {
    const all2 = JSON.parse(localStorage.getItem('msx_orders') || '[]');
    const i = +b.dataset.adv;
    all2[i].stage = Math.min(3, (all2[i].stage || 1) + 1);
    localStorage.setItem('msx_orders', JSON.stringify(all2));
    renderHistory(); toast('演示：状态已推进到「' + SN[all2[i].stage] + '」');
  });
  $('#history').querySelectorAll('[data-detail]').forEach(b => b.onclick = () => {
    const all2 = JSON.parse(localStorage.getItem('msx_orders') || '[]');
    showDetail(all2[+b.dataset.detail]);
  });
  $('#backBtn').onclick = showForm;
}
function showDetail(o) {
  if (!o) return;
  $('#history').classList.add('hide');
  renderDone(o);
}
function showHistory() {
  renderHistory();
  $('#form').classList.add('hide');
  $('#done').classList.add('hide');
  $('#locCard').classList.add('hide');
  $('#submitbar').classList.add('hide');
  $('#history').classList.remove('hide');
  hideToast();
  window.scrollTo({ top: 0 });
}
function showForm() {
  $('#history').classList.add('hide');
  $('#done').classList.add('hide');
  $('#form').classList.remove('hide');
  $('#locCard').classList.remove('hide');
  $('#submitbar').classList.remove('hide');
  hideToast();
  window.scrollTo({ top: 0 });
}
$('#histBtn').onclick = showHistory;

/* ==================== 对比弹层 ==================== */
$('#cmpBtnBtn').onclick = () => $('#mask').classList.add('show');
$('#closeMask').onclick = () => $('#mask').classList.remove('show');
$('#mask').onclick = e => { if (e.target.id === 'mask') $('#mask').classList.remove('show'); };

/* ==================== 一键填充（现场演示用） ==================== */
$('#fillBtn').onclick = () => {
  if (!picked) { const el = document.querySelector('.type[data-k="照明"]'); if (el) el.click(); }
  $('#title').value = $('#title').value || '走廊顶灯不亮';
  $('#desc').value = $('#desc').value || '今天早上发现，灯管完全不亮，旁边两盏正常。';
  $('#phone').value = $('#phone').value || '13800138000';
  if (urg === 'normal') {
    const el = document.querySelector('.urg .item[data-v="urgent"]');
    if (el) el.click();
  }
  validate();
  toast('已填充演示数据，点「提交报修」');
};

/* ==================== 初始化 ==================== */
renderLoc();
if (!IS_DEMO) $('#demobar').classList.add('hide');

/* 首次进入给一次引导：告诉学生位置为什么已经填好了 */
if (LOC.fixed && !sessionStorage.getItem('msx_tipped_' + LOC.key)) {
  sessionStorage.setItem('msx_tipped_' + LOC.key, '1');
  setTimeout(() => toast('位置已自动识别：' + LOC.building + LOC.floor
    + (LOC.spot ? ' · ' + LOC.spot : ''), 2800), 600);
}
  };

  function boot() {
    var st = document.createElement('style');
    st.setAttribute('data-msx', '1');
    st.textContent = CSS;
    document.head.appendChild(st);
    document.body.innerHTML = HTML;
    JS();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
