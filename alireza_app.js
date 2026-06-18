// ═══════════════════════════════════════════════════════════
//  پرونده‌ی علیرضا — اپلیکیشن تعاملی
//  داشبورد فهرست + نمای جزئیات هر بخش
// ═══════════════════════════════════════════════════════════

function escapeHtml(s) {
  if (s == null) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── داشبورد (صفحه‌ی فهرست) ──
function showDashboard() {
  document.getElementById("detail").style.display = "none";
  document.getElementById("homeLink").style.display = "none";
  const dash = document.getElementById("dashboard");
  dash.style.display = "block";

  const qKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
  let cards = "";
  qKeys.forEach((k, i) => {
    const q = DATA.questions[k];
    const title = DATA.titles[k];
    const emoji = DATA.emoji[k];
    cards += `
      <button class="dash-card" onclick="showQuestion('${k}')">
        <span class="dash-card-emoji">${emoji}</span>
        <span class="dash-card-body">
          <span class="dash-card-num">سؤال ${i + 1}</span>
          <span class="dash-card-title">${escapeHtml(title)}</span>
        </span>
        <span class="dash-card-go">←</span>
      </button>`;
  });

  // شمارش کل اشتباهات
  let totalTraps = 0;
  DATA.traps.forEach(g => totalTraps += g.items.length);

  dash.innerHTML = `
    <div class="intro fade-in">
      سلام علیرضا 👋 این پرونده از روی کارِ خودت ساخته شده. ایده‌اش: <b>به‌جای حفظ‌کردن جواب‌ها</b>، با فکر فارسیِ خودت روان‌تر حرف بزنی. از فهرست زیر هر بخشی را که می‌خواهی انتخاب کن — همه‌چیز منظم و جداست تا تمرکزت حفظ شود. 🎯
    </div>

    <div class="dash-section-title">📋 هفت سؤال آزمون</div>
    <div class="dash-grid">${cards}</div>

    <div class="dash-section-title">⚠️ مرور اشتباه‌ها</div>
    <button class="dash-big" onclick="showTraps()">
      <span class="dash-big-emoji">⚠️</span>
      <span class="dash-big-body">
        <span class="dash-big-title">اشتباه‌های گرامری</span>
        <span class="dash-big-sub">${totalTraps} اشتباه واقعی در ۱۱ دسته — قبل از امتحان مرور کن</span>
      </span>
      <span class="dash-big-go">←</span>
    </button>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── نمای یک سؤال ──
function showQuestion(key) {
  const q = DATA.questions[key];
  const qKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
  const idx = qKeys.indexOf(key);
  const title = DATA.titles[key];
  const emoji = DATA.emoji[key];

  document.getElementById("dashboard").style.display = "none";
  document.getElementById("homeLink").style.display = "inline-block";
  const detail = document.getElementById("detail");
  detail.style.display = "block";

  // کارت‌های ۵ نوع جواب
  let answers = "";
  ["Type_1", "Type_2", "Type_3", "Type_4", "Type_5"].forEach(t => {
    if (!q.answers || !q.answers[t]) return;
    const ti = DATA.types[t];
    const best = (t === "Type_4") ? " best" : "";
    answers += `
      <div class="answer-card${best}">
        <button class="answer-head" style="border-right-color:${ti.color}" onclick="this.parentElement.classList.toggle('open')">
          <span class="answer-label" style="color:${ti.color}">${escapeHtml(ti.label)}</span>
          <span class="answer-badge" style="background:${ti.color}">${escapeHtml(ti.badge)}</span>
          <span class="answer-toggle">▾</span>
        </button>
        <div class="answer-body">
          <div class="answer-desc">${escapeHtml(ti.desc)}</div>
          <div class="answer-text" dir="ltr">${escapeHtml(q.answers[t])}</div>
        </div>
      </div>`;
  });

  // بخش تمرین
  let practice = "";
  const hasPractice = (q.practice && q.practice.length) || q.drill;
  if (hasPractice) {
    let skel = "";
    (q.practice || []).forEach(it => {
      const note = it.note ? `<span class="skel-note">${escapeHtml(it.note)}</span>` : "";
      skel += `<div class="skel-item"><span class="skel-chunk" dir="ltr">${escapeHtml(it.chunk)}</span>${note}</div>`;
    });
    let drill = "";
    if (q.drill) {
      drill = `
        <div class="drill-box">
          <div class="drill-title">🎯 جواب کنترل‌شده‌ی ۳۰ ثانیه‌ای (با صدای بلند تمرین کن)</div>
          <div class="drill-text" dir="ltr">${escapeHtml(q.drill)}</div>
        </div>`;
    }
    practice = `
      <div class="practice-section">
        <div class="practice-head">🏋️ تمرین کنترل‌شده</div>
        <div class="practice-sub">این الگوها را به‌جای حفظ‌کردن کل جواب، مثل اسکلت استفاده کن. هر بار با کلمات خودت پُرشان کن.</div>
        ${skel ? `<div class="skel-list">${skel}</div>` : ""}
        ${drill}
      </div>`;
  }

  detail.innerHTML = `
    <div class="back-bar fade-in">
      <button class="back-btn" onclick="showDashboard()">→ فهرست</button>
      <span class="detail-progress">سؤال ${idx + 1} از ۷</span>
    </div>
    <div class="fade-in">
      <div class="q-header">
        <div class="q-num">${emoji}</div>
        <div class="q-texts">
          <div class="q-fr" dir="ltr">${escapeHtml(q.fr)}</div>
          <div class="q-fa">${escapeHtml(q.fa)}</div>
        </div>
      </div>
      <div class="types-legend">
        💡 برای هر سؤال <b>پنج نسخه</b> داری. روی هر کدام بزن تا باز شود. <b>نوع ۴ ⭐</b> نسخه‌ی نهایی امتحان است — آن را تمرین کن.
      </div>
      <div class="answers-wrap">${answers}</div>
      ${practice}
      ${navButtons(idx, qKeys)}
    </div>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// دکمه‌های قبلی/بعدی
function navButtons(idx, qKeys) {
  const prev = idx > 0 ? `<button class="back-btn" style="background:var(--navy-soft)" onclick="showQuestion('${qKeys[idx-1]}')">→ سؤال قبلی</button>` : "<span></span>";
  const next = idx < qKeys.length - 1 ? `<button class="back-btn" style="background:var(--navy-soft)" onclick="showQuestion('${qKeys[idx+1]}')">سؤال بعدی ←</button>` : "<span></span>";
  return `<div style="display:flex; justify-content:space-between; margin-top:26px; gap:10px;">${prev}${next}</div>`;
}

// ── نمای اشتباهات ──
let activeTrapCat = 0;
function showTraps() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("homeLink").style.display = "inline-block";
  const detail = document.getElementById("detail");
  detail.style.display = "block";
  activeTrapCat = 0;
  renderTraps();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTraps() {
  const detail = document.getElementById("detail");
  let tabs = "";
  DATA.traps.forEach((g, i) => {
    const active = (i === activeTrapCat) ? " active" : "";
    tabs += `<button class="trap-tab${active}" onclick="setTrapCat(${i})">${escapeHtml(g.cat)}</button>`;
  });

  const group = DATA.traps[activeTrapCat];
  let items = "";
  group.items.forEach(it => {
    const why = it.why ? `<div class="trap-why">💡 ${escapeHtml(it.why)}</div>` : "";
    items += `
      <div class="trap-item">
        <div class="trap-wrong"><span class="trap-x">✗</span> <span dir="ltr">${escapeHtml(it.wrong)}</span></div>
        <div class="trap-right"><span class="trap-check">✓</span> <span dir="ltr">${escapeHtml(it.right)}</span></div>
        ${why}
      </div>`;
  });

  detail.innerHTML = `
    <div class="back-bar fade-in">
      <button class="back-btn" style="background:var(--terracotta)" onclick="showDashboard()">→ فهرست</button>
      <span class="detail-progress">اشتباه‌های گرامری</span>
    </div>
    <div class="fade-in">
      <div class="traps-intro">
        اینها اشتباه‌هایی هستند که ممکن است هنگام صحبت بگویی. هر کارت: نسخه‌ی <b>اشتباه</b> (خط‌خورده) و نسخه‌ی <b>درست</b> (سبز) با دلیلش. دسته را از بالا انتخاب کن. 🎯
      </div>
      <div class="trap-tabs">${tabs}</div>
      <div class="trap-items">${items}</div>
    </div>`;
}

function setTrapCat(i) {
  activeTrapCat = i;
  renderTraps();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// شروع: نمایش داشبورد
document.addEventListener("DOMContentLoaded", showDashboard);
