// ═══════════════════════════════════════════════════════════
//  بانک محتوای کتابخانه — Hoda KHEDMATI
//  برای افزودن محتوای جدید: فقط یک بلوک به LESSONS اضافه کن.
//  صفحه‌ی اصلی، دسته‌بندی و جستجو خودکار ساخته می‌شوند.
// ═══════════════════════════════════════════════════════════

// دسته‌ها — برای افزودن دسته‌ی جدید فقط یک خط اینجا اضافه کن
const CATEGORIES = [
  { id: "tcf",          label: "آمادگی TCF",   icon: "❖", color: "#1a4f7a" },
  { id: "grammar",      label: "گرامر",        icon: "§", color: "#22618f" },
  { id: "conversation", label: "مکالمه",       icon: "❝", color: "#2e7bb5" },
  { id: "vocab",        label: "واژگان",       icon: "A", color: "#4a90c2" },
  { id: "podcast",      label: "پادکست",       icon: "♪", color: "#5a6f9e" },
  // نمونه برای آینده — کافیست کامنت را برداری:
  // { id: "video", label: "ویدیو", icon: "🎬", color: "#5b6fc0" },
  // { id: "exam",  label: "آزمون", icon: "📝", color: "#2c5f8a" },
];

// محتواها — هنوز خالی است؛ با هم پر می‌کنیم
//
// دو نوع محتوا می‌توان اضافه کرد:
//
// ۱) محتوای معمولی (فایل HTML داخل سایت):
//   { file: "GR_001.html", title: "...", titleFr: "...", category: "grammar",
//     level: "B1", premium: false, tags: ["..."] }
//
// ۲) پادکست (لینک خارجی مثل Spotify/YouTube + توضیح دوزبانه):
//   { link: "https://open.spotify.com/...", title: "...", titleFr: "...",
//     category: "podcast",
//     descFa: "این پادکست درباره‌ی ... است",
//     descFr: "Ce podcast parle de ...",
//     tags: ["..."] }
//
const LESSONS = [
  {
    file: "VOCAB_teletravail_technologie.html",
    title: "واژگان دورکاری و فناوری",
    titleFr: "Télétravail & Technologie",
    category: "vocab",
    level: "متوسط (B2)",
    premium: false,
    tags: ["دورکاری", "فناوری", "با مثال"],
    summary: "تمام واژگان دورکاری و فناوری، دسته‌بندی‌شده در ۷ بخش — با تعریف، مترادف و سه مثال در سطح آزمون برای هر واژه.",
  },
  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000751533361",
    title: "InnerFrench — شغل‌های «کسل‌کننده»",
    titleFr: "InnerFrench — Le « job chiant »",
    category: "podcast",
    cover: "<svg viewBox=\'0 0 400 150\' xmlns=\'http://www.w3.org/2000/svg\'><defs><linearGradient id=\'pg\' x1=\'0\' y1=\'0\' x2=\'1\' y2=\'1\'><stop offset=\'0\' stop-color=\'#2e7bb5\'/><stop offset=\'1\' stop-color=\'#1a4f7a\'/></linearGradient></defs><rect width=\'400\' height=\'150\' fill=\'url(#pg)\'/><circle cx=\'330\' cy=\'34\' r=\'58\' fill=\'#ffffff\' opacity=\'0.06\'/><circle cx=\'58\' cy=\'120\' r=\'44\' fill=\'#ffffff\' opacity=\'0.05\'/><g opacity=\'0.92\'><rect x=\'150\' y=\'94\' width=\'100\' height=\'7\' rx=\'3\' fill=\'#c4a572\'/><rect x=\'168\' y=\'58\' width=\'64\' height=\'40\' rx=\'5\' fill=\'#fffdf8\'/><rect x=\'174\' y=\'64\' width=\'52\' height=\'28\' rx=\'2\' fill=\'#2e7bb5\'/><circle cx=\'200\' cy=\'46\' r=\'11\' fill=\'#c4a572\'/></g><g stroke=\'#fffdf8\' stroke-width=\'3\' fill=\'none\' stroke-linecap=\'round\' opacity=\'0.5\'><path d=\'M250 40 a18 18 0 0 1 28 0\'/><path d=\'M256 48 a10 10 0 0 1 16 0\'/></g><g opacity=\'0.85\'><rect x=\'96\' y=\'86\' width=\'20\' height=\'16\' rx=\'3\' fill=\'#c4a572\'/><path d=\'M116 89 a6 6 0 0 1 0 10\' stroke=\'#c4a572\' stroke-width=\'3\' fill=\'none\'/></g></svg>",
    descFr: "Comptable, plombier, électricien... Ces métiers « ennuyeux » deviennent soudain à la mode ! Pourquoi ? Hugo et Ingrid remontent le temps : des Millennials qui cherchaient du sens dans leur travail, jusqu'à la Génération Z après le Covid. Aujourd'hui, beaucoup rêvent d'un « job chiant » — un travail simple qui laisse du temps pour tout le reste. Et si c'était ça, le vrai secret du bonheur ?",
    descFa: "حسابدار، لوله‌کش، برق‌کار... شغل‌هایی که زمانی «خسته‌کننده» به نظر می‌رسیدند، حالا ناگهان خواستنی شده‌اند! چرا؟ هوگو و اینگرید کمی به عقب برمی‌گردند: از نسلی که دنبال «معنا» در کارش بود، تا نسل Z بعد از کرونا. امروز خیلی‌ها آرزوی یک «شغل کسل‌کننده» را دارند — کاری ساده که برایشان وقت آزاد بگذارد. نکند راز واقعی خوشبختی همین باشد؟",
    tags: ["InnerFrench", "متوسط", "کار"],
  },
];
