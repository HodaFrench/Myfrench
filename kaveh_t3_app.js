// ═══════════════════════════════════════════════════════════
//  پرونده‌ی کاوه محمدی — Tâche 3 (بیان دیدگاه)
//  داشبورد + الگوی استاندارد + ساختارها + سؤالات
// ═══════════════════════════════════════════════════════════

function esc(s) {
  if (s == null) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TYPE_INFO = {
  Type_1: { label: "نوع ۱ — نزدیک به فکر فارسی", desc: "ترجمه‌ی نزدیک به آنچه در ذهن فارسی‌ات می‌گویی. برای ساختن ایده خوب است.", color: "#8a8275", badge: "ساخت ایده" },
  Type_2: { label: "نوع ۲ — طبیعی و کامل", desc: "نسخه‌ی فرانسه‌ی طبیعی و کامل. برای مطالعه عالی است.", color: "#3f8a9c", badge: "مطالعه" },
  Type_3: { label: "نوع ۳ — ساده و امن", desc: "نسخه‌ی ساده‌تر و شفاهی. امن‌ترین گزینه زیر استرس امتحان.", color: "#2e8b6b", badge: "ضد استرس" },
  Type_4: { label: "نوع ۴ — نسخه‌ی نهایی امتحان ⭐", desc: "بهترین نسخه برای امتحان: ساختارمند، استدلالی و کامل. این را تمرین کن!", color: "#b07a4a", badge: "توصیه‌شده" },
  Type_5: { label: "نوع ۵ — ارتقای واژگان C1", desc: "نسخه‌ی سطح‌بالاتر برای تقویت واژگان. کمی سنگین‌تر.", color: "#7a5ba8", badge: "واژگان C1" },
};

const Q_KEYS = ["work", "adapt", "tv"];

// ── داشبورد ──
function showDashboard() {
  document.getElementById("detail").style.display = "none";
  document.getElementById("homeLink").style.display = "none";
  const dash = document.getElementById("dashboard");
  dash.style.display = "block";

  let cards = "";
  Q_KEYS.forEach((k, i) => {
    const q = T3.questions[k];
    cards += `
      <button class="dash-card" onclick="showQuestion('${k}')">
        <span class="dash-card-emoji">${q.emoji}</span>
        <span class="dash-card-body">
          <span class="dash-card-num">موضوع ${i + 1}</span>
          <span class="dash-card-title">${esc(q.titre)}</span>
        </span>
        <span class="dash-card-go">←</span>
      </button>`;
  });

  dash.innerHTML = `
    <div class="intro fade-in">
      سلام کاوه 👋 این پرونده برای <b>Tâche 3</b> است: بیان دیدگاه با استدلال. این تکلیف ۴ دقیقه و ۳۰ ثانیه است و باید پیوسته و ساختارمند حرف بزنی. اول <b>الگوی استاندارد</b> و <b>ساختارهای کلیدی</b> را ببین، بعد سراغ موضوع‌ها برو. هر موضوع پنج نسخه‌ی جواب + ساختار پاراگراف‌بندی + تمرین + نکات گرامری دارد. 🎯
    </div>

    <div class="dash-section-title">📐 پایه‌ها (اول این‌ها را بخوان)</div>
    <button class="dash-big tpl" onclick="showTemplate()">
      <span class="dash-big-emoji">📐</span>
      <span class="dash-big-body">
        <span class="dash-big-title">الگوی استاندارد Tâche 3</span>
        <span class="dash-big-sub">ساختار رسمی آزمون + بارم نمره + زمان‌بندی ۴:۳۰</span>
      </span>
      <span class="dash-big-go">←</span>
    </button>
    <button class="dash-big struct" onclick="showStructures()">
      <span class="dash-big-emoji">🔑</span>
      <span class="dash-big-body">
        <span class="dash-big-title">ساختارها و عبارات کلیدی</span>
        <span class="dash-big-sub">چه بگوید (✓) و چه نگوید (✗) — عبارات حرفه‌ای</span>
      </span>
      <span class="dash-big-go">←</span>
    </button>

    <div class="dash-section-title">📋 سه موضوع تمرینی</div>
    <div class="dash-grid">${cards}</div>
  `;
  window.scrollTo(0, 0);
}

// ── الگوی استاندارد ──
function showTemplate() {
  switchToDetail();
  const t = T3.template;
  let plan = "";
  t.plan.forEach(p => {
    plan += `
      <div class="plan-step">
        <div class="plan-num">${esc(p.step)}<br><span class="plan-time">${esc(p.time)}</span></div>
        <div class="plan-body">
          <div class="plan-fr" dir="ltr">${esc(p.fr)}</div>
          <div class="plan-fa">${esc(p.fa)}</div>
        </div>
      </div>`;
  });
  let bareme = "";
  t.bareme.forEach(b => {
    bareme += `
      <div class="bareme-row">
        <div><div class="bareme-t">${esc(b.t)}</div><div class="bareme-d">${esc(b.d)}</div></div>
        <div class="bareme-p">${esc(b.p)}</div>
      </div>`;
  });

  document.getElementById("detail").innerHTML = `
    <div class="back-bar fade-in">
      <button class="back-btn" style="background:#2e8b6b" onclick="showDashboard()">→ فهرست</button>
      <span class="detail-label">الگوی استاندارد Tâche 3</span>
    </div>
    <div class="fade-in">
      <div class="tpl-block">
        <div class="tpl-block-title">⏱️ مشخصات تکلیف</div>
        <p style="font-size:13.5px; line-height:2;">مدت: <b>${esc(t.duration)}</b><br>
        تو به یک سؤال باز جواب می‌دهی و باید دیدگاهت را با استدلال، پیوسته و قانع‌کننده بیان کنی.</p>
      </div>
      <div class="tpl-block">
        <div class="tpl-block-title">📊 بارم نمره (۸ امتیاز)</div>
        ${bareme}
      </div>
      <div class="tpl-block">
        <div class="tpl-block-title">🗺️ نقشه‌ی جواب (الگوی استاندارد)</div>
        ${plan}
      </div>
    </div>`;
  window.scrollTo(0, 0);
}

// ── ساختارها (باید/نباید) ──
function showStructures() {
  switchToDetail();
  const t = T3.template;
  let dos = "";
  t.do.forEach(d => {
    dos += `<div class="dodont-item do-item"><div class="dodont-fr" dir="ltr">${esc(d.fr)}</div><div class="dodont-fa">${esc(d.fa)}</div></div>`;
  });
  let donts = "";
  t.dont.forEach(d => {
    donts += `<div class="dodont-item dont-item"><div class="dodont-fr" dir="ltr">${esc(d.fr)}</div><div class="dodont-fa">${esc(d.fa)}</div></div>`;
  });

  document.getElementById("detail").innerHTML = `
    <div class="back-bar fade-in">
      <button class="back-btn" style="background:#b07a4a" onclick="showDashboard()">→ فهرست</button>
      <span class="detail-label">ساختارها و عبارات کلیدی</span>
    </div>
    <div class="fade-in">
      <div class="tpl-block">
        <div class="tpl-block-title">🔑 عبارات حرفه‌ای — راهنمای باید و نباید</div>
        <div class="dodont-grid">
          <div>
            <div class="dodont-col-title do-title">✓ این‌ها را بگو</div>
            ${dos}
          </div>
          <div>
            <div class="dodont-col-title dont-title">✗ این‌ها را نگو</div>
            ${donts}
          </div>
        </div>
      </div>
    </div>`;
  window.scrollTo(0, 0);
}

// ── نمای یک موضوع ──
function showQuestion(key) {
  switchToDetail();
  const q = T3.questions[key];
  const idx = Q_KEYS.indexOf(key);

  // ۵ نوع جواب
  let answers = "";
  ["Type_1", "Type_2", "Type_3", "Type_4", "Type_5"].forEach(t => {
    if (!q.answers || !q.answers[t]) return;
    const ti = TYPE_INFO[t];
    const best = (t === "Type_4") ? " best" : "";
    answers += `
      <div class="answer-card${best}">
        <button class="answer-head" style="border-right-color:${ti.color}" onclick="this.parentElement.classList.toggle('open')">
          <span class="answer-label" style="color:${ti.color}">${esc(ti.label)}</span>
          <span class="answer-badge" style="background:${ti.color}">${esc(ti.badge)}</span>
          <span class="answer-toggle">▾</span>
        </button>
        <div class="answer-body">
          <div class="answer-desc">${esc(ti.desc)}</div>
          <div class="answer-text" dir="ltr">${esc(q.answers[t])}</div>
        </div>
      </div>`;
  });

  // ساختار ۶ پاراگرافی
  let struct = "";
  if (q.paragraphs && q.paragraphs.length) {
    let blocks = "";
    q.paragraphs.forEach(p => {
      blocks += `<div class="struct-para"><div class="struct-func">${esc(p.func)}</div><div class="struct-text" dir="ltr">${esc(p.text)}</div></div>`;
    });
    struct = `
      <div class="struct-section">
        <div class="struct-head">🏗️ ساختار پاراگراف‌به‌پاراگراف (نسخه‌ی نهایی)</div>
        ${blocks}
      </div>`;
  }

  // تمرین: اسکلت + جملات طلایی
  let practice = "";
  const hasSkel = q.skeletons2 && q.skeletons2.length;
  const hasGold = q.golden && q.golden.length;
  if (hasSkel || hasGold) {
    let skel = "";
    (q.skeletons2 || []).forEach(s => {
      const lbl = s.label ? `<div class="skel-label">${esc(s.label)}</div>` : "";
      skel += `<div class="skel-item">${lbl}<div class="skel-text" dir="ltr">${esc(s.text)}</div></div>`;
    });
    let gold = "";
    if (hasGold) {
      let items = "";
      q.golden.forEach(g => { items += `<div class="golden-item" dir="ltr">${esc(g)}</div>`; });
      gold = `<div class="golden-box"><div class="golden-title">✨ جملات طلایی (این‌ها را حفظ کن)</div>${items}</div>`;
    }
    practice = `
      <div class="practice-section">
        <div class="practice-head">🏋️ تمرین کنترل‌شده</div>
        <div class="practice-sub">اسکلت‌ها را با کلمات خودت پُر کن. جملات طلایی را حفظ کن تا همیشه آماده باشند.</div>
        ${skel}
        ${gold}
      </div>`;
  }

  // نکات گرامری
  let traps = "";
  if (q.traps && q.traps.length) {
    let items = "";
    q.traps.forEach(it => {
      const why = it.why ? `<div class="trap-why">💡 ${esc(it.why)}</div>` : "";
      items += `
        <div class="trap-item">
          <div class="trap-wrong"><span class="trap-x">✗</span> <span dir="ltr">${esc(it.wrong)}</span></div>
          <div class="trap-right"><span class="trap-check">✓</span> <span dir="ltr">${esc(it.right)}</span></div>
          ${why}
        </div>`;
    });
    traps = `
      <div class="traps-intro"><b>⚠️ نکات گرامری این موضوع</b> — اشتباه‌هایی که ممکن است بگویی. فرم درست را به خاطر بسپار.</div>
      ${items}`;
  }

  document.getElementById("detail").innerHTML = `
    <div class="back-bar fade-in">
      <button class="back-btn" onclick="showDashboard()">→ فهرست</button>
      <span class="detail-label">موضوع ${idx + 1} از ۳</span>
    </div>
    <div class="fade-in">
      <div class="q-header">
        <div class="q-num">${q.emoji}</div>
        <div class="q-texts">
          <div class="q-fr" dir="ltr">${esc(q.fr)}</div>
          <div class="q-fa">${esc(q.fa)}</div>
        </div>
      </div>
      <div class="types-legend">
        💡 پنج نسخه‌ی جواب. <b>نوع ۴ ⭐</b> نسخه‌ی نهایی امتحان است. پایین‌تر: ساختار پاراگراف‌بندی، تمرین، و نکات گرامری.
      </div>
      <div class="answers-wrap">${answers}</div>
      ${struct}
      ${practice}
      ${traps}
      ${navButtons(idx)}
    </div>`;
  window.scrollTo(0, 0);
}

function navButtons(idx) {
  const prev = idx > 0 ? `<button class="back-btn" style="background:var(--navy-soft)" onclick="showQuestion('${Q_KEYS[idx-1]}')">→ موضوع قبلی</button>` : "<span></span>";
  const next = idx < Q_KEYS.length - 1 ? `<button class="back-btn" style="background:var(--navy-soft)" onclick="showQuestion('${Q_KEYS[idx+1]}')">موضوع بعدی ←</button>` : "<span></span>";
  return `<div style="display:flex; justify-content:space-between; margin-top:26px; gap:10px;">${prev}${next}</div>`;
}

function switchToDetail() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("homeLink").style.display = "inline-block";
  document.getElementById("detail").style.display = "block";
}

document.addEventListener("DOMContentLoaded", showDashboard);
