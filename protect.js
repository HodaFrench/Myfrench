/* ═══════════════════════════════════════════════════════════
   محافظت محتوا — Hoda KHEDMATI
   واترمارک لطیف + محدودیت راست‌کلیک
   فقط کافیست در انتهای هر صفحه این خط اضافه شود:
   <script src="protect.js"></script>
   ═══════════════════════════════════════════════════════════ */
(function () {
  // ---------- واترمارک لطیف و تکرارشونده ----------
  var WM_TEXT = "Hoda KHEDMATI · @TCFHODA";

  function addWatermark() {
    if (document.getElementById("hk-watermark")) return;
    var wm = document.createElement("div");
    wm.id = "hk-watermark";
    // یک کاشی SVG کم‌رنگ که به‌صورت الگو تکرار می‌شود
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="340" height="200">' +
      '<text x="170" y="105" fill="rgba(31,58,95,0.05)" font-size="15" ' +
      'font-family="Tahoma,sans-serif" text-anchor="middle" ' +
      'transform="rotate(-24 170 100)">' + WM_TEXT + '</text></svg>';
    var url = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
    wm.style.cssText =
      "position:fixed;inset:0;z-index:2147483646;pointer-events:none;" +
      "background-image:url('" + url + "');background-repeat:repeat;" +
      "opacity:1;mix-blend-mode:multiply;";
    document.body.appendChild(wm);
  }

  // ---------- محدودکردن راست‌کلیک ----------
  function blockContextMenu(e) { e.preventDefault(); return false; }

  // اجرا
  function init() {
    addWatermark();
    document.addEventListener("contextmenu", blockContextMenu);
    // محدودکردن کشیدن تصاویر (drag)
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
