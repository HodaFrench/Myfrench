// ═══════════════════════════════════════════════════════════
// Français avec Hoda — سیستم ردیابی مرکزی (Supabase)
// این فایل در همه صفحات لود می‌شود و فعالیت کاربر را ذخیره می‌کند
// ═══════════════════════════════════════════════════════════

const HODA_SB_URL = 'https://ifjsnasoxnalhttzhlpd.supabase.co';
const HODA_SB_KEY = 'sb_publishable_3aBoJ8PEPsrnOpgR_vOG4A_NDfJd6cK';
const HODA_ADMIN_EMAIL = 'hodakhedmati3753@gmail.com';

// ساخت کلاینت (نیازمند لود شدن supabase-js قبل از این فایل)
let hodaSb = null;
if (typeof supabase !== 'undefined') {
  hodaSb = supabase.createClient(HODA_SB_URL, HODA_SB_KEY);
}

// ───── وضعیت کاربر فعلی ─────
let HODA_USER = null;       // آبجکت کاربر
let HODA_SESSION_START = Date.now();  // شروع این جلسه مطالعه

// ───── محافظت صفحه: اگر وارد نشده، به auth بفرست ─────
async function hodaGuard() {
  if (!hodaSb) return null;
  const { data: { session } } = await hodaSb.auth.getSession();
  if (!session) {
    // مسیر نسبی به auth.html (بسته به عمق پوشه)
    const depth = (location.pathname.match(/\//g) || []).length - 1;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    window.location.href = prefix + 'auth.html';
    return null;
  }
  HODA_USER = session.user;
  return HODA_USER;
}

// ───── آیا کاربر ادمین است؟ ─────
function hodaIsAdmin() {
  return HODA_USER && HODA_USER.email && 
         HODA_USER.email.toLowerCase() === HODA_ADMIN_EMAIL;
}

// ───── ثبت بازدید صفحه + شروع تایمر مطالعه ─────
async function hodaLogVisit(pageTitle) {
  if (!hodaSb || !HODA_USER) return;
  const page = location.pathname.split('/').pop() || 'index.html';
  const title = pageTitle || document.title.split('|')[0].trim();
  
  // ثبت در جدول visits
  try {
    await hodaSb.from('visits').insert({
      user_id: HODA_USER.id,
      email: HODA_USER.email,
      page: page,
      title: title
    });
  } catch (e) { console.warn('visit log failed', e); }
  
  HODA_SESSION_START = Date.now();
}

// ───── ثبت زمان مطالعه هنگام خروج از صفحه ─────
function hodaTrackStudyTime() {
  window.addEventListener('beforeunload', () => {
    if (!hodaSb || !HODA_USER) return;
    const seconds = Math.round((Date.now() - HODA_SESSION_START) / 1000);
    if (seconds < 3) return; // کمتر از ۳ ثانیه ثبت نشود
    const today = new Date().toISOString().split('T')[0];
    // استفاده از sendBeacon برای ثبت مطمئن هنگام بستن صفحه
    const payload = JSON.stringify({
      user_id: HODA_USER.id,
      email: HODA_USER.email,
      date: today,
      seconds: seconds
    });
    const url = `${HODA_SB_URL}/rest/v1/rpc/add_study_time`;
    const blob = new Blob([payload], { type: 'application/json' });
    try {
      navigator.sendBeacon(url + `?apikey=${HODA_SB_KEY}`, blob);
    } catch (e) {}
  });
}

// ───── علامت‌گذاری «خوانده شد» ─────
async function hodaMarkDone(pageKey, pageTitle) {
  if (!hodaSb || !HODA_USER) return false;
  const key = pageKey || location.pathname.split('/').pop();
  const title = pageTitle || document.title.split('|')[0].trim();
  try {
    await hodaSb.from('progress').upsert({
      user_id: HODA_USER.id,
      email: HODA_USER.email,
      page_key: key,
      title: title,
      done_at: new Date().toISOString()
    }, { onConflict: 'user_id,page_key' });
    return true;
  } catch (e) { console.warn('mark done failed', e); return false; }
}

// ───── بررسی اینکه صفحه قبلاً خوانده شده ─────
async function hodaIsDone(pageKey) {
  if (!hodaSb || !HODA_USER) return false;
  const key = pageKey || location.pathname.split('/').pop();
  try {
    const { data } = await hodaSb.from('progress')
      .select('page_key')
      .eq('user_id', HODA_USER.id)
      .eq('page_key', key)
      .maybeSingle();
    return !!data;
  } catch (e) { return false; }
}

// ───── ذخیره یادداشت / نکته ─────
async function hodaSaveNote(noteText, pageContext) {
  if (!hodaSb || !HODA_USER) return false;
  const page = pageContext || location.pathname.split('/').pop();
  try {
    await hodaSb.from('notes').insert({
      user_id: HODA_USER.id,
      email: HODA_USER.email,
      page: page,
      note: noteText
    });
    return true;
  } catch (e) { console.warn('save note failed', e); return false; }
}

// ───── ذخیره سؤال ─────
async function hodaSaveQuestion(questionText, pageContext) {
  if (!hodaSb || !HODA_USER) return false;
  const page = pageContext || location.pathname.split('/').pop();
  try {
    await hodaSb.from('questions').insert({
      user_id: HODA_USER.id,
      email: HODA_USER.email,
      page: page,
      question: questionText
    });
    return true;
  } catch (e) { console.warn('save question failed', e); return false; }
}

// ───── خروج از حساب ─────
async function hodaLogout() {
  if (!hodaSb) return;
  await hodaSb.auth.signOut();
  const depth = (location.pathname.match(/\//g) || []).length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : '';
  window.location.href = prefix + 'auth.html';
}
