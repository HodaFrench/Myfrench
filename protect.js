/* ═══════════════════════════════════════════════════════════
   محافظت محتوا — Hoda KHEDMATI · @TCFHODA
   واترمارک قابل‌رؤیت در اسکرین‌شات + محدودیت راست‌کلیک
   استفاده: <script src="protect.js"></script> در انتهای هر صفحه
   ═══════════════════════════════════════════════════════════ */
(function () {
  var WM_TEXT = "هدی خدمتی · Hoda KHEDMATI · @TCFHODA";

  // ---------- ۱) واترمارک تکرارشونده‌ی سراسری ----------
  function addTiledWatermark() {
    if (document.getElementById("hk-watermark")) return;
    var wm = document.createElement("div");
    wm.id = "hk-watermark";
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="380" height="240">' +
      '<text x="190" y="125" fill="rgba(31,58,95,0.10)" font-size="16" ' +
      'font-family="Tahoma,sans-serif" font-weight="bold" text-anchor="middle" ' +
      'transform="rotate(-24 190 120)">' + WM_TEXT + '</text></svg>';
    var url = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
    wm.style.cssText =
      "position:fixed;inset:0;z-index:2147483646;pointer-events:none;" +
      "background-image:url('" + url + "');background-repeat:repeat;" +
      "opacity:1;mix-blend-mode:multiply;";
    document.body.appendChild(wm);
  }

  // ---------- ۲) مهر گوشه‌ها (همیشه در اسکرین‌شات می‌افتد) ----------
  function addCornerStamps() {
    if (document.getElementById("hk-corners")) return;
    var box = document.createElement("div");
    box.id = "hk-corners";
    box.style.cssText =
      "position:fixed;inset:0;z-index:2147483645;pointer-events:none;";
    var positions = [
      "top:10px;left:12px;",
      "top:10px;right:12px;",
      "bottom:10px;left:12px;",
      "bottom:10px;right:12px;",
    ];
    positions.forEach(function (pos) {
      var s = document.createElement("div");
      s.textContent = "✦ Hoda · @TCFHODA";
      s.style.cssText =
        "position:absolute;" + pos +
        "font:600 11px Tahoma,sans-serif;color:rgba(31,58,95,0.30);" +
        "letter-spacing:0.3px;white-space:nowrap;";
      box.appendChild(s);
    });
    document.body.appendChild(box);
  }

  // ---------- ۳) محدودکردن راست‌کلیک و کشیدن ----------
  function blockContextMenu(e) { e.preventDefault(); return false; }

  function init() {
    addTiledWatermark();
    addCornerStamps();
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", function (e) {
      if (e.target && e.target.tagName === "IMG") e.preventDefault();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
