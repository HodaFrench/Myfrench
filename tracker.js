// ═══════════════════════════════════════════════════════════
// Français avec Hoda — سیستم ردیابی مرکزی (Supabase)
// نسخه ۲ — با ویجت خودکار نکته/سؤال
// ═══════════════════════════════════════════════════════════

const HODA_SB_URL = 'https://ifjsnasoxnalhttzhlpd.supabase.co';
const HODA_SB_KEY = 'sb_publishable_3aBoJ8PEPsrnOpgR_vOG4A_NDfJd6cK';
const HODA_ADMIN_EMAIL = 'hodakhedmati3753@gmail.com';

let hodaSb = null;
if (typeof supabase !== 'undefined') {
  hodaSb = supabase.createClient(HODA_SB_URL, HODA_SB_KEY);
}

let HODA_USER = null;
let HODA_SESSION_START = Date.now();

function hodaPrefix() {
  const path = location.pathname;
  const parts = path.split('/').filter(p => p && !p.endsWith('.html'));
  return parts.length > 0 ? '../'.repeat(parts.length) : '';
}

async function hodaGuard() {
  if (!hodaSb) return null;
  const { data: { session } } = await hodaSb.auth.getSession();
  if (!session) {
    window.location.href = hodaPrefix() + 'auth.html';
    return null;
  }
  HODA_USER = session.user;
  return HODA_USER;
}

function hodaIsAdmin() {
  return HODA_USER && HODA_USER.email &&
         HODA_USER.email.toLowerCase() === HODA_ADMIN_EMAIL;
}

async function hodaLogVisit(pageTitle) {
  if (!hodaSb || !HODA_USER) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const title = pageTitle || document.title.split('|')[0].trim();
  try {
    await hodaSb.from('visits').insert({
      user_id: HODA_USER.id, email: HODA_USER.email, page, title
    });
  } catch (e) {}
  HODA_SESSION_START = Date.now();
}

function hodaTrackStudyTime() {
  const save = () => {
    if (!hodaSb || !HODA_USER) return;
    const seconds = Math.round((Date.now() - HODA_SESSION_START) / 1000);
    if (seconds < 3 || seconds > 7200) return;
    const today = new Date().toISOString().split('T')[0];
    const payload = JSON.stringify({
      p_user_id: HODA_USER.id, p_email: HODA_USER.email,
      p_date: today, p_seconds: seconds
    });
    try {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon(
        `${HODA_SB_URL}/rest/v1/rpc/add_study_time?apikey=${HODA_SB_KEY}`, blob
      );
    } catch (e) {}
  };
  window.addEventListener('beforeunload', save);
  window.addEventListener('pagehide', save);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') save();
  });
}

async function hodaMarkDone(pageKey, pageTitle) {
  if (!hodaSb || !HODA_USER) return false;
  const key = pageKey || location.pathname.split('/').pop();
  const title = pageTitle || document.title.split('|')[0].trim();
  try {
    await hodaSb.from('progress').upsert({
      user_id: HODA_USER.id, email: HODA_USER.email,
      page_key: key, title, done_at: new Date().toISOString()
    }, { onConflict: 'user_id,page_key' });
    return true;
  } catch (e) { return false; }
}

async function hodaIsDone(pageKey) {
  if (!hodaSb || !HODA_USER) return false;
  const key = pageKey || location.pathname.split('/').pop();
  try {
    const { data } = await hodaSb.from('progress')
      .select('page_key').eq('user_id', HODA_USER.id)
      .eq('page_key', key).maybeSingle();
    return !!data;
  } catch (e) { return false; }
}

async function hodaSaveNote(noteText) {
  if (!hodaSb || !HODA_USER) return false;
  const page = location.pathname.split('/').pop();
  try {
    await hodaSb.from('notes').insert({
      user_id: HODA_USER.id, email: HODA_USER.email, page, note: noteText
    });
    return true;
  } catch (e) { return false; }
}

async function hodaSaveQuestion(questionText) {
  if (!hodaSb || !HODA_USER) return false;
  const page = location.pathname.split('/').pop();
  try {
    await hodaSb.from('questions').insert({
      user_id: HODA_USER.id, email: HODA_USER.email, page, question: questionText
    });
    return true;
  } catch (e) { return false; }
}

async function hodaLogout() {
  if (!hodaSb) { location.href = hodaPrefix() + 'auth.html'; return; }
  await hodaSb.auth.signOut();
  location.href = hodaPrefix() + 'auth.html';
}

// ═══════════ ویجت نکته/سؤال ═══════════
function hodaInitWidget() {
  if (document.getElementById('hoda-fab')) return;
  const style = document.createElement('style');
  style.textContent = `
    #hoda-fab{position:fixed;bottom:78px;left:16px;z-index:9997;
      width:50px;height:50px;border-radius:50%;background:#7a5ba8;color:#fff;
      border:none;font-size:22px;cursor:pointer;box-shadow:0 4px 14px rgba(122,91,168,.4);
      display:flex;align-items:center;justify-content:center;transition:transform .2s}
    #hoda-fab:hover{transform:scale(1.1)}
    #hoda-modal{position:fixed;inset:0;z-index:9998;background:rgba(30,40,60,.5);
      backdrop-filter:blur(4px);display:none;align-items:flex-end;justify-content:center}
    #hoda-modal.open{display:flex}
    .hoda-sheet{background:#fcfbfd;border-radius:20px 20px 0 0;width:100%;max-width:480px;
      padding:20px 20px 28px;box-shadow:0 -6px 30px rgba(0,0,0,.2);
      font-family:'Estedad',sans-serif;direction:rtl;animation:hodaUp .25s ease}
    @keyframes hodaUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
    .hoda-sheet h3{font-size:16px;color:#1e3a5f;margin:0 0 4px;font-weight:700}
    .hoda-sheet .sub{font-size:12px;color:#8a8275;margin-bottom:14px}
    .hoda-tabs{display:flex;gap:8px;margin-bottom:12px}
    .hoda-tab{flex:1;padding:9px;border:1.5px solid #e2e1e3;background:#fff;border-radius:10px;
      font-family:'Estedad',sans-serif;font-size:13px;font-weight:700;cursor:pointer;color:#8a8275}
    .hoda-tab.on{background:#7a5ba8;color:#fff;border-color:#7a5ba8}
    .hoda-sheet textarea{width:100%;min-height:90px;border:1.5px solid #e2e1e3;border-radius:12px;
      padding:12px;font-family:'Estedad',sans-serif;font-size:14px;resize:vertical;direction:rtl;outline:none}
    .hoda-sheet textarea:focus{border-color:#7a5ba8}
    .hoda-actions{display:flex;gap:10px;margin-top:12px}
    .hoda-btn-save{flex:1;padding:12px;background:#2e8b6b;color:#fff;border:none;border-radius:12px;
      font-family:'Estedad',sans-serif;font-size:14px;font-weight:700;cursor:pointer}
    .hoda-btn-cancel{padding:12px 18px;background:#f0eef2;color:#8a8275;border:none;border-radius:12px;
      font-family:'Estedad',sans-serif;font-size:14px;font-weight:700;cursor:pointer}
    .hoda-toast{position:fixed;bottom:140px;left:50%;transform:translateX(-50%);z-index:9999;
      background:#2e8b6b;color:#fff;padding:10px 22px;border-radius:24px;font-family:'Estedad',sans-serif;
      font-size:13px;font-weight:700;box-shadow:0 4px 14px rgba(0,0,0,.2);opacity:0;transition:opacity .3s;pointer-events:none}
    .hoda-toast.show{opacity:1}
  `;
  document.head.appendChild(style);

  const fab = document.createElement('button');
  fab.id = 'hoda-fab';
  fab.innerHTML = '✏️';
  fab.title = 'ثبت نکته یا سؤال';
  fab.onclick = hodaOpenSheet;
  document.body.appendChild(fab);

  const modal = document.createElement('div');
  modal.id = 'hoda-modal';
  modal.innerHTML = `
    <div class="hoda-sheet" onclick="event.stopPropagation()">
      <h3>📝 یادداشت و سؤال</h3>
      <div class="sub">نکته یا سؤالت درباره این درس را ثبت کن — مدرس آن را می‌بیند</div>
      <div class="hoda-tabs">
        <button class="hoda-tab on" id="hoda-tab-note" onclick="hodaSwitch('note')">📝 نکته</button>
        <button class="hoda-tab" id="hoda-tab-q" onclick="hodaSwitch('q')">❓ سؤال</button>
      </div>
      <textarea id="hoda-text" placeholder="اینجا بنویس..."></textarea>
      <div class="hoda-actions">
        <button class="hoda-btn-save" onclick="hodaSubmit()">💾 ذخیره</button>
        <button class="hoda-btn-cancel" onclick="hodaCloseSheet()">انصراف</button>
      </div>
    </div>`;
  modal.onclick = hodaCloseSheet;
  document.body.appendChild(modal);

  const toast = document.createElement('div');
  toast.id = 'hoda-toast';
  toast.className = 'hoda-toast';
  document.body.appendChild(toast);
}

let HODA_MODE = 'note';
function hodaOpenSheet() {
  document.getElementById('hoda-modal').classList.add('open');
  document.getElementById('hoda-text').focus();
}
function hodaCloseSheet() {
  document.getElementById('hoda-modal').classList.remove('open');
  document.getElementById('hoda-text').value = '';
}
function hodaSwitch(mode) {
  HODA_MODE = mode;
  document.getElementById('hoda-tab-note').classList.toggle('on', mode === 'note');
  document.getElementById('hoda-tab-q').classList.toggle('on', mode === 'q');
  document.getElementById('hoda-text').placeholder = mode === 'note'
    ? 'نکته‌ای که می‌خوای یادت بمونه...'
    : 'سؤالت درباره این درس...';
}
function hodaToast(msg) {
  const t = document.getElementById('hoda-toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}
async function hodaSubmit() {
  const text = document.getElementById('hoda-text').value.trim();
  if (!text) { hodaToast('چیزی بنویس!'); return; }
  let ok = false;
  if (HODA_MODE === 'note') ok = await hodaSaveNote(text);
  else ok = await hodaSaveQuestion(text);
  if (ok) {
    hodaCloseSheet();
    hodaToast(HODA_MODE === 'note' ? '✅ نکته ذخیره شد' : '✅ سؤال ثبت شد');
  } else {
    hodaToast('خطا — دوباره تلاش کن');
  }
}

// ═══════════ راه‌اندازی خودکار ═══════════
async function hodaAutoInit(opts) {
  opts = opts || {};
  const user = await hodaGuard();
  if (!user) return;
  await hodaLogVisit();
  hodaTrackStudyTime();
  if (opts.widget !== false) hodaInitWidget();
}
