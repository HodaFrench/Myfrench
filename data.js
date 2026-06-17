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
  { id: "podcast",      label: "معرفی پادکست",       icon: "♪", color: "#5a6f9e" },
  { id: "innerfrench",  label: "InnerFrench",       icon: "▶", color: "#2e7bb5" },
  { id: "prive",        label: "شاگردان خصوصی",     icon: "🔒", color: "#7a5ba8" },
  { id: "astuces",      label: "نکته‌های طلایی", icon: "✦", color: "#c4502d" },
  { id: "adjectifs",    label: "صفت‌ها",         icon: "◆", color: "#7a5ba8" },
  { id: "quiz",         label: "کوییز",          icon: "?", color: "#2e8b6b" },
  { id: "reactions",    label: "چطور واکنش بدم؟", icon: "❝", color: "#d17b3f" },
  { id: "prononciation", label: "تمرین تلفظ",     icon: "🗣", color: "#3f8a9c" },
  { id: "editoa1",      label: "Édito A1 · واژگان", icon: "✎", color: "#5a8f4a" },
  { id: "miniarticle",  label: "مینی‌آرتیکل",      icon: "✑", color: "#b0506f" },
  // نمونه برای آینده — کافیست کامنت را برداری:
  // { id: "video", label: "ویدیو", icon: "🎬", color: "#5b6fc0" },
  // { id: "exam",  label: "آزمون", icon: "📝", color: "#2c5f8a" },
];

// ───────────────────────────────────────────────────────────
//  زیرشاخه‌ها — فعلاً فقط برای TCF
//  ساختار: TCF ← بخش (section) ← تکلیف (task)
//  برای افزودن محتوا به زیرشاخه، در همان محتوا این دو فیلد را بده:
//    section: "expression-orale",  task: "tache-3"
// ───────────────────────────────────────────────────────────
const SECTIONS = {
  tcf: [
    { id: "expression-orale",  label: "Expression Orale", labelFa: "بیان شفاهی",
      tasks: [
        { id: "tache-3", label: "Tâche 3", labelFa: "تکلیف ۳",
          // ۱۰ موضوع استاندارد TCF — هر محتوا با فیلد sujet به یکی وصل می‌شود
          sujets: [
            { id: "etudes-travail",    label: "Études, travail et réussite",            labelFa: "تحصیل، کار و موفقیت" },
            { id: "immigration",       label: "Immigration et vie à l'étranger",        labelFa: "مهاجرت و زندگی در خارج" },
            { id: "technologie",       label: "Technologie, Internet et réseaux sociaux", labelFa: "تکنولوژی، اینترنت و شبکه‌های اجتماعی" },
            { id: "medias",            label: "Médias et information",                   labelFa: "رسانه و اطلاعات" },
            { id: "education",         label: "Éducation et enfance",                    labelFa: "آموزش و تربیت کودک" },
            { id: "famille",           label: "Famille et mode de vie",                  labelFa: "خانواده و سبک زندگی" },
            { id: "sante",             label: "Santé, sport et alimentation",           labelFa: "سلامتی، ورزش و تغذیه" },
            { id: "environnement",     label: "Environnement et consommation",          labelFa: "محیط زیست و مصرف" },
            { id: "voyage",            label: "Voyage et tourisme",                     labelFa: "سفر و گردشگری" },
            { id: "societe",           label: "Société et valeurs",                     labelFa: "جامعه و ارزش‌ها" },
          ]
        },
      ]
    },
  ],
};

// محتواها — هنوز خالی است؛ با هم پر می‌کنیم
//
// دو نوع محتوا می‌توان اضافه کرد:
//
// ۱) محتوای معمولی (فایل HTML داخل سایت):
//   { file: "GR_001.html", title: "...", titleFr: "...", category: "grammar",
//     level: "B1", premium: false, tags: ["..."] }
//
//   • تصویر: اگر چیزی ندهی، خودکار یک تصویر زیبا ساخته می‌شود.
//   • برای عکس واقعی: فایل عکس را در مخزن آپلود کن و این خط را اضافه کن:
//       img: "mon-image.jpg"
//
// ۲) محتوای واژگان (دسته‌ی vocab) — علاوه بر موارد بالا می‌تواند داشته باشد:
//       theme: "دنیای کار",                    ← تمِ فایل (یک عبارت)
//       keywords: ["دورکاری", "فناوری"]         ← کلمات کلیدی (۱ تا ۳ تا)
//   این دو زیر کارت محتوا روی صفحه‌ی اصلی نمایش داده می‌شوند.
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
    file: "VOCAB_teletravail_intermediaire.html",
    title: "واژگان دورکاری و فناوری — متوسط",
    titleFr: "Télétravail & Technologie",
    category: "vocab",
    level: "متوسط (B1–B2)",
    premium: false,
    tags: ["دورکاری", "فناوری", "سطح متوسط"],
    theme: "دنیای کار و فناوری",
    keywords: ["دورکاری", "فناوری", "ارتباطات"],
    summary: "واژگان ضروری دورکاری و فناوری در سطح متوسط — با تعریف، مترادف و مثال. نقطه‌ی شروع خوبی برای ساختن دایره‌ی واژگان این موضوع.",
  },
  {
    file: "VOCAB_teletravail_avance.html",
    title: "واژگان دورکاری و فناوری — پیشرفته",
    titleFr: "Télétravail & Technologie — B2",
    category: "vocab",
    level: "پیشرفته (B2+)",
    premium: false,
    tags: ["دورکاری", "فناوری", "سطح پیشرفته"],
    theme: "دنیای کار و فناوری",
    keywords: ["دورکاری", "فناوری", "اصطلاحات تخصصی"],
    summary: "واژگان پیشرفته‌تر و دقیق‌تر دورکاری و فناوری — برای کسانی که می‌خواهند بیان غنی‌تر و حرفه‌ای‌تری در آزمون داشته باشند.",
  },
  {
    file: "VOCAB_bienetre_intermediaire.html",
    title: "واژگان رفاه در محیط کار — متوسط",
    titleFr: "Le bien-être au travail",
    category: "vocab",
    level: "متوسط (B1–B2)",
    premium: false,
    tags: ["رفاه", "محیط کار", "سطح متوسط"],
    theme: "رفاه و سلامت در محیط کار",
    keywords: ["رفاه شغلی", "تعادل کار و زندگی", "انگیزه"],
    summary: "واژگان ضروری مربوط به رفاه و سلامت در محیط کار، در سطح متوسط — با تعریف و مثال.",
  },
  {
    file: "VOCAB_bienetre_avance.html",
    title: "واژگان رفاه در محیط کار — پیشرفته",
    titleFr: "Le bien-être au travail — B2",
    category: "vocab",
    level: "پیشرفته (B2+)",
    premium: false,
    tags: ["رفاه", "محیط کار", "سطح پیشرفته"],
    theme: "رفاه و سلامت در محیط کار",
    keywords: ["رفاه شغلی", "فرسودگی شغلی", "اصطلاحات تخصصی"],
    summary: "واژگان پیشرفته‌تر رفاه در محیط کار — برای بیان دقیق‌تر و حرفه‌ای‌تر دربارهٔ این موضوع در آزمون.",
  },
  {
    file: "VOCAB_environnement_intermediaire.html",
    title: "واژگان محیط‌زیست و انرژی — متوسط",
    titleFr: "Environnement & énergies",
    category: "vocab",
    level: "متوسط (B1–B2)",
    premium: false,
    tags: ["محیط‌زیست", "انرژی", "سطح متوسط"],
    theme: "محیط‌زیست و انرژی",
    keywords: ["محیط‌زیست", "انرژی‌های تجدیدپذیر", "آلودگی"],
    summary: "واژگان ضروری محیط‌زیست و انرژی در سطح متوسط — با تعریف و مثال. موضوعی کلیدی برای آزمون و مکالمه.",
  },
  {
    file: "VOCAB_environnement_avance.html",
    title: "واژگان محیط‌زیست و انرژی — پیشرفته",
    titleFr: "Environnement & énergies — B2",
    category: "vocab",
    level: "پیشرفته (B2+)",
    premium: false,
    tags: ["محیط‌زیست", "انرژی", "سطح پیشرفته"],
    theme: "محیط‌زیست و انرژی",
    keywords: ["توسعه‌ی پایدار", "گذار انرژی", "اصطلاحات تخصصی"],
    summary: "واژگان پیشرفته‌تر محیط‌زیست و انرژی — برای بیان دقیق و حرفه‌ای درباره‌ی چالش‌های زیست‌محیطی در آزمون.",
  },
  {
    file: "VOCAB_zerodechet_avance.html",
    title: "واژگان زباله‌ی صفر و بازیافت — پیشرفته",
    titleFr: "Zéro déchet & recyclage",
    category: "vocab",
    level: "پیشرفته (B2→B2+)",
    premium: false,
    tags: ["زباله‌ی صفر", "بازیافت", "سطح پیشرفته"],
    theme: "زباله‌ی صفر و بازیافت",
    keywords: ["بازیافت", "کاهش زباله", "مصرف مسئولانه"],
    summary: "واژگان تخصصی زباله‌ی صفر و بازیافت در سطح B2+ — با تعریف، ترجمه و مثال‌های نوع آزمون. موضوعی پرتکرار در بحث‌های محیط‌زیستی TCF.",
  },
  {
    file: "VOCAB_espace_avance.html",
    title: "واژگان فضا و فتح فضا — پیشرفته",
    titleFr: "L'espace & la conquête spatiale",
    category: "vocab",
    level: "پیشرفته (B2–C1)",
    premium: false,
    tags: ["فضا", "علم", "سطح پیشرفته"],
    theme: "فضا و کاوش فضایی",
    keywords: ["فضا", "موشک", "سیاره", "کاوش"],
    summary: "واژگان موضوع فضا و فتح فضا در سطح پیشرفته — با تعریف، مترادف و مثال. عالی برای موضوعات علمی TCF.",
  },
  {
    file: "VOCAB_jeux_olympiques_avance.html",
    title: "واژگان المپیک و ورزش — پیشرفته",
    titleFr: "Les Jeux olympiques & le sport",
    category: "vocab",
    level: "پیشرفته (B2–C1)",
    premium: false,
    tags: ["ورزش", "المپیک", "سطح پیشرفته"],
    theme: "ورزش و رقابت",
    keywords: ["المپیک", "ورزش", "مسابقه", "ورزشکار"],
    summary: "واژگان موضوع المپیک و ورزش در سطح پیشرفته — با تعریف، مترادف و مثال. مناسب موضوعات ورزش و رویدادهای جهانی TCF.",
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
  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000385439014",
    title: "InnerFrench — مطالعات جنسیت",
    titleFr: "InnerFrench — Les études de genre",
    category: "podcast",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='pgen' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#8a5ba8'/><stop offset='1' stop-color='#5a3b78'/></linearGradient></defs><rect width='400' height='150' fill='url(#pgen)'/><circle cx='330' cy='40' r='56' fill='#ffffff' opacity='0.06'/><circle cx='64' cy='118' r='42' fill='#ffffff' opacity='0.05'/><g opacity='0.9' stroke='#fffdf8' stroke-width='5' fill='none'><circle cx='168' cy='70' r='20'/><path d='M168 90 L168 116 M156 104 L180 104'/><circle cx='236' cy='62' r='20'/><path d='M250 48 L268 30 M256 30 L268 30 L268 42'/></g></svg>",
    descFr: "Pourquoi pense-t-on souvent que les hommes sont meilleurs en maths ? Les garçons sont-ils vraiment plus violents que les filles ? Dans cet épisode, Hugo explore les « études de genre ». L'idée principale est simple : beaucoup de différences entre les hommes et les femmes ne sont pas biologiques, mais sociales. Avec des exemples tirés de livres, de films et d'expériences, il montre comment notre éducation construit, petit à petit, notre identité.",
    descFa: "چرا اغلب فکر می‌کنیم مردها در ریاضی بهترند؟ آیا پسرها واقعاً از دخترها خشن‌ترند؟ در این قسمت، هوگو سراغ «مطالعات جنسیت» می‌رود. ایده‌ی اصلی ساده است: بسیاری از تفاوت‌های میان زن و مرد، نه زیستی، بلکه اجتماعی‌اند. او با مثال‌هایی از کتاب‌ها، فیلم‌ها و آزمایش‌ها نشان می‌دهد که چطور تربیت ما، کم‌کم، هویتمان را می‌سازد. 💭",
    tags: ["InnerFrench", "متوسط", "جامعه"],
  },
  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000385007054",
    title: "InnerFrench — ربات‌های احساساتی",
    titleFr: "InnerFrench — Les robots émotionnels",
    category: "podcast",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='probo' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#3f9c8a'/><stop offset='1' stop-color='#246b5a'/></linearGradient></defs><rect width='400' height='150' fill='url(#probo)'/><circle cx='328' cy='38' r='54' fill='#ffffff' opacity='0.06'/><circle cx='60' cy='120' r='40' fill='#ffffff' opacity='0.05'/><g opacity='0.92'><rect x='176' y='52' width='48' height='42' rx='8' fill='#fffdf8'/><circle cx='190' cy='70' r='5' fill='#3f9c8a'/><circle cx='210' cy='70' r='5' fill='#3f9c8a'/><path d='M190 84 a10 6 0 0 0 20 0' stroke='#3f9c8a' stroke-width='3' fill='none'/><rect x='196' y='40' width='8' height='12' fill='#c4a572'/><circle cx='200' cy='38' r='4' fill='#c4a572'/></g><g stroke='#fffdf8' stroke-width='3' fill='none' opacity='0.55'><path d='M150 60 a14 14 0 0 0 0 28'/><path d='M250 60 a14 14 0 0 1 0 28'/></g></svg>",
    descFr: "Des robots qui comprennent nos émotions ? Cela ressemble à un film de science-fiction, mais ils existent déjà ! Dans cet épisode, Hugo parle de ces machines « émotionnelles » qui vivent déjà dans certaines familles et entreprises. Peut-on vraiment comprendre les sentiments humains avec des algorithmes ? Et faut-il avoir peur de partager notre vie avec eux ? Une réflexion fascinante sur la technologie et l'humain.",
    descFa: "ربات‌هایی که احساسات ما را می‌فهمند؟ شبیه فیلم‌های علمی-تخیلی است، اما همین حالا وجود دارند! در این قسمت، هوگو درباره‌ی این ماشین‌های «احساساتی» حرف می‌زند که همین الان در برخی خانه‌ها و شرکت‌ها زندگی می‌کنند. آیا واقعاً می‌شود احساسات انسانی را با الگوریتم فهمید؟ و آیا باید از شریک‌شدن زندگی‌مان با آن‌ها بترسیم؟ 🤖",
    tags: ["InnerFrench", "متوسط", "فناوری"],
  },
  {
    link: "https://podcasts.apple.com/us/podcast/easy-french-learn-french-through-authentic-conversations/id1624981488?l=fr-FR&i=1000773141482",
    title: "Easy French — موفقیت در زندگی یا یک زندگی موفق؟",
    titleFr: "Easy French — Réussir dans la vie ou réussir sa vie ?",
    category: "podcast",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='psucc' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#c4502d'/><stop offset='1' stop-color='#8a3320'/></linearGradient></defs><rect width='400' height='150' fill='url(#psucc)'/><circle cx='330' cy='40' r='54' fill='#ffffff' opacity='0.06'/><circle cx='62' cy='118' r='40' fill='#ffffff' opacity='0.05'/><g opacity='0.9'><path d='M180 96 L180 70 L196 70 L196 96 Z' fill='#fffdf8'/><path d='M204 96 L204 54 L220 54 L220 96 Z' fill='#c4a572'/><path d='M156 96 L156 82 L172 82 L172 96 Z' fill='#fffdf8' opacity='0.7'/><path d='M150 60 L240 60' stroke='#fffdf8' stroke-width='2' opacity='0.4' stroke-dasharray='4 4'/></g></svg>",
    descFr: "« Réussir dans la vie » et « réussir sa vie », est-ce vraiment la même chose ? 🤔 Dans cet épisode, les hôtes parlent sans filtre de la pression sociale, du piège de l'argent et du train de vie, et du poids de nos choix. Une conversation sincère qui pose plus de questions qu'elle ne donne de réponses — mais qui donne vraiment envie de réfléchir à nos propres priorités.",
    descFa: "«موفق‌شدن در زندگی» و «یک زندگیِ موفق داشتن»، آیا واقعاً یک چیزند؟ 🤔 در این قسمت، مجری‌ها بی‌پرده درباره‌ی فشار اجتماعی، دامِ پول و سبک زندگی، و سنگینیِ انتخاب‌هایمان حرف می‌زنند. گفت‌وگویی صمیمانه که بیشتر از آنکه جواب بدهد، سؤال می‌سازد — اما واقعاً آدم را به فکر کردن درباره‌ی اولویت‌های خودش می‌اندازد. ✨",
    tags: ["Easy French", "متوسط", "زندگی"],
  },
  {
    link: "https://podcasts.apple.com/us/podcast/easy-french-learn-french-through-authentic-conversations/id1624981488?l=fr-FR&i=1000772072275",
    title: "Easy French — نظرهای غیرعامه‌پسند",
    titleFr: "Easy French — Nos opinions impopulaires",
    category: "podcast",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='popi' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#d4923f'/><stop offset='1' stop-color='#a8661f'/></linearGradient></defs><rect width='400' height='150' fill='url(#popi)'/><circle cx='328' cy='40' r='54' fill='#ffffff' opacity='0.07'/><circle cx='62' cy='118' r='40' fill='#ffffff' opacity='0.05'/><g opacity='0.92'><path d='M168 56 h44 a6 6 0 0 1 6 6 v22 a6 6 0 0 1 -6 6 h-28 l-12 12 v-12 h-4 a6 6 0 0 1 -6 -6 v-22 a6 6 0 0 1 6 -6 Z' fill='#fffdf8'/><path d='M226 70 h30 a5 5 0 0 1 5 5 v16 a5 5 0 0 1 -5 5 h-3 v9 l-9 -9 h-18 a5 5 0 0 1 -5 -5 v-2' fill='#c4a572' opacity='0.85'/></g></svg>",
    descFr: "Peut-on ne pas aimer les sushis, les frites ou même les concerts ? 😱 Dans cet épisode, les hôtes partagent leurs opinions les plus impopulaires. Entre goûts surprenants, petites controverses et débats passionnés, ils dévoilent tout ce qu'ils adorent... ou détestent. Un épisode léger et amusant, parfait pour apprendre le vocabulaire des goûts et des opinions !",
    descFa: "می‌شود کسی سوشی، سیب‌زمینی سرخ‌کرده یا حتی کنسرت دوست نداشته باشد؟ 😱 در این قسمت، مجری‌ها نظرهای غیرعامه‌پسندشان را به اشتراک می‌گذارند. میان سلیقه‌های عجیب، جدل‌های کوچک و بحث‌های پرشور، هرچه را دوست دارند... یا متنفرند فاش می‌کنند. قسمتی سبک و بامزه، عالی برای یادگیری واژگانِ سلیقه‌ها و نظرها! 🤭",
    tags: ["Easy French", "متوسط", "سلیقه‌ها"],
  },

  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000747027839",
    title: "InnerFrench — بحران رستوران‌ها",
    titleFr: "InnerFrench — La crise des restaurants",
    category: "podcast",
    theme: "غذا، فرهنگ و جامعه",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='pgc0653f' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#c0653f'/><stop offset='1' stop-color='#8a3f24'/></linearGradient></defs><rect width='400' height='150' fill='url(#pgc0653f)'/><circle cx='330' cy='34' r='58' fill='#ffffff' opacity='0.06'/><circle cx='58' cy='120' r='44' fill='#ffffff' opacity='0.05'/><g opacity='0.9'><rect x='184' y='48' width='32' height='52' rx='16' fill='#fffdf8'/><path d='M170 90 a30 30 0 0 0 60 0' stroke='#fffdf8' stroke-width='4' fill='none' opacity='0.75'/><rect x='197' y='118' width='6' height='16' rx='3' fill='#fffdf8' opacity='0.7'/></g><g stroke='#c4a572' stroke-width='3' fill='none' stroke-linecap='round' opacity='0.6'><path d='M250 44 a16 16 0 0 1 24 0'/><path d='M120 56 a16 16 0 0 1 24 0'/></g></svg>",
    descFr: "La France est connue comme le pays des restaurants. Pourtant, aujourd'hui, les gens y vont moins et le secteur va mal. Hugo et Ingrid essaient de comprendre pourquoi. D'abord, avec l'aide d'un historien, ils racontent comment le restaurant est né en France au 18ᵉ siècle — et d'où vient vraiment le mot « restaurant ». Ensuite, ils expliquent les raisons de la crise : les prix qui montent, la qualité qui baisse, et surtout le mode de vie qui change (le télétravail, les applications de livraison...).",
    descFa: "فرانسه به‌عنوان «سرزمین رستوران‌ها» شناخته می‌شود. اما این روزها مردم کمتر به رستوران می‌روند و این صنعت روزهای سختی را می‌گذراند. هوگو و اینگرید می‌خواهند بفهمند چرا. اول، با کمک یک تاریخ‌دان، برایمان تعریف می‌کنند که چطور رستوران در قرن هجدهم در فرانسه به‌وجود آمد — و اصلاً خودِ کلمه‌ی « restaurant » از کجا آمده! بعد، دلیل‌های این بحران را توضیح می‌دهند: بالا رفتن قیمت‌ها، پایین آمدن کیفیت، و مهم‌تر از همه تغییر سبک زندگی (دورکاری، اپلیکیشن‌های تحویل غذا...).",
    tags: ["InnerFrench", "متوسط", "غذا و جامعه"],
  },
  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000686725143",
    title: "InnerFrench — فرانسوی‌ها و کار",
    titleFr: "InnerFrench — Les Français et le travail",
    category: "podcast",
    theme: "کار و سبک زندگی",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='pg41618a' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#41618a'/><stop offset='1' stop-color='#1e3a5f'/></linearGradient></defs><rect width='400' height='150' fill='url(#pg41618a)'/><circle cx='330' cy='34' r='58' fill='#ffffff' opacity='0.06'/><circle cx='58' cy='120' r='44' fill='#ffffff' opacity='0.05'/><g opacity='0.9'><rect x='184' y='48' width='32' height='52' rx='16' fill='#fffdf8'/><path d='M170 90 a30 30 0 0 0 60 0' stroke='#fffdf8' stroke-width='4' fill='none' opacity='0.75'/><rect x='197' y='118' width='6' height='16' rx='3' fill='#fffdf8' opacity='0.7'/></g><g stroke='#c4a572' stroke-width='3' fill='none' stroke-linecap='round' opacity='0.6'><path d='M250 44 a16 16 0 0 1 24 0'/><path d='M120 56 a16 16 0 0 1 24 0'/></g></svg>",
    descFr: "Vus de l'étranger, les Français ont la réputation de ne pas aimer le travail : semaine de 35 heures, longues vacances, retraite confortable, pauses déjeuner interminables et grèves fréquentes... Mais en même temps, on dit qu'ils sont parmi les plus productifs au monde, et qu'ils ont trouvé un bon équilibre entre travail et vie personnelle. Dans cet épisode, Hugo sépare le vrai du faux pour comprendre la vraie relation des Français avec le travail.",
    descFa: "از بیرون که به فرانسوی‌ها نگاه کنی، معروف‌اند به اینکه از کار خوششان نمی‌آید: هفته‌ی کاری ۳۵ ساعته، تعطیلات طولانی، بازنشستگی راحت، وقت‌های ناهارِ کِش‌دار و اعتصاب‌های پی‌درپی... اما از طرف دیگر می‌گویند آن‌ها جزو پُربازده‌ترین کارگران دنیا هستند و تعادل خوبی بین کار و زندگی شخصی پیدا کرده‌اند. در این قسمت، هوگو درست را از غلط جدا می‌کند تا بفهمیم رابطه‌ی واقعی فرانسوی‌ها با کار چطور است.",
    tags: ["InnerFrench", "متوسط", "کار"],
  },
  {
    link: "https://podcasts.apple.com/us/podcast/innerfrench/id1231472946?l=fr-FR&i=1000586086877",
    title: "InnerFrench — دورکاری",
    titleFr: "InnerFrench — Le télétravail",
    category: "podcast",
    theme: "کار و فناوری",
    cover: "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><defs><linearGradient id='pg2e8b6b' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#2e8b6b'/><stop offset='1' stop-color='#1a5a44'/></linearGradient></defs><rect width='400' height='150' fill='url(#pg2e8b6b)'/><circle cx='330' cy='34' r='58' fill='#ffffff' opacity='0.06'/><circle cx='58' cy='120' r='44' fill='#ffffff' opacity='0.05'/><g opacity='0.9'><rect x='184' y='48' width='32' height='52' rx='16' fill='#fffdf8'/><path d='M170 90 a30 30 0 0 0 60 0' stroke='#fffdf8' stroke-width='4' fill='none' opacity='0.75'/><rect x='197' y='118' width='6' height='16' rx='3' fill='#fffdf8' opacity='0.7'/></g><g stroke='#c4a572' stroke-width='3' fill='none' stroke-linecap='round' opacity='0.6'><path d='M250 44 a16 16 0 0 1 24 0'/><path d='M120 56 a16 16 0 0 1 24 0'/></g></svg>",
    descFr: "Avec les nouvelles technologies, de plus en plus de gens se sont mis au télétravail. En France, comme ailleurs, c'est surtout la pandémie de Covid qui a accéléré cette tendance. Dans cet épisode, Hugo et Ingrid partagent leur propre expérience pour présenter les avantages et les inconvénients du télétravail — un sujet qu'ils connaissent bien, car chez InnerFrench, tout le monde travaille 100 % à distance ! Ils parlent des effets de cette nouvelle façon de travailler pour les salariés, les entreprises et la société.",
    descFa: "با آمدن فناوری‌های جدید، آدم‌های بیشتری به سراغ دورکاری رفتند. در فرانسه، مثل خیلی جاهای دیگر، این پاندمی کرونا بود که این روند را سرعت بخشید. در این قسمت، هوگو و اینگرید از تجربه‌ی خودشان می‌گویند تا مزایا و معایب دورکاری را نشان دهند — موضوعی که خوب می‌شناسندش، چون در InnerFrench همه صددرصد دورکار هستند! آن‌ها درباره‌ی تأثیر این شیوه‌ی تازه‌ی کار بر کارمندان، شرکت‌ها و کل جامعه صحبت می‌کنند.",
    tags: ["InnerFrench", "متوسط", "دورکاری"],
  },

  {
    file: "GRAM_cedille_commencer.html",
    title: "قانون تلفظ ç (سدیج)",
    titleFr: "La cédille — ç",
    category: "grammar",
    level: "پایه",
    premium: false,
    tags: ["تلفظ", "commencer", "نکته‌ی طلایی"],
    summary: "چرا می‌نویسیم « nous commençons » و نه « commencons »؟ یک قانون کوچک تلفظ که با فعل commencer یاد می‌گیری.",
  },
  {
    file: "GRAM_verbes_pronominaux.html",
    title: "تمرین افعال انعکاسی",
    titleFr: "Les verbes pronominaux",
    category: "grammar",
    level: "متوسط (B1)",
    premium: false,
    tags: ["افعال انعکاسی", "تمرین", "روتین روزمره"],
    summary: "۳۵ جمله‌ی تمرینی برای صرف افعال انعکاسی (pronominaux) در زمان حال — با ترجمه‌ی فارسی هر جمله و پاسخ قابل‌نمایش با یک کلیک.",
  },
  {
    file: "GRAM_chiffre_nombre_numero.html",
    title: "تفاوت رقم، عدد و شماره",
    titleFr: "chiffre / nombre / numéro",
    category: "grammar",
    level: "متوسط",
    premium: false,
    tags: ["واژگان", "صوتی", "اشتباه رایج"],
    summary: "تفاوت سه واژه‌ی نزدیک chiffre (رقم)، nombre (عدد) و numéro (شماره) — با توضیح صوتی هدی، تعریف هر کدام و نمونه‌های واقعی.",
  },
  {
    file: "GRAM_modaux_pronoms.html",
    title: "افعال وجهی و ضمایر مفعولی",
    titleFr: "Auxiliaires modaux & pronoms compléments",
    category: "grammar",
    level: "متوسط (B1)",
    premium: false,
    tags: ["pouvoir/vouloir/devoir", "ضمیر مفعولی", "تمرین"],
    summary: "جایگاه ضمیر مفعولی (le, la, lui, leur…) با افعال وجهی pouvoir/vouloir/devoir — با توضیح روان، مثال‌های تازه و ۵ تمرین تعاملی با پاسخ.",
  },
  {
    file: "GRAM_conjonctions.html",
    title: "حروف ربط وابسته‌ساز",
    titleFr: "Conjonctions de subordination",
    category: "grammar",
    level: "پیشرفته (B2)",
    premium: false,
    tags: ["حروف ربط", "subjonctif", "تمرین"],
    summary: "همه‌ی حروف ربط مهم (زمان، علت، هدف، تضاد، شرط) دسته‌بندی‌شده — با مثال، ترجمه‌ی فارسی، اینکه هر کدام indicatif یا subjonctif می‌خواهد، و ۶ تمرین تعاملی.",
  },
  {
    file: "GRAM_conditionnel_present.html",
    title: "وجه شرطی حال",
    titleFr: "Le conditionnel présent",
    category: "grammar",
    groupe: "conditionnel",
    level: "متوسط (B1)",
    premium: false,
    tags: ["conditionnel", "ادب", "قاعده‌ی si", "تمرین"],
    summary: "وجه شرطی حال: تشکیل (ریشه‌ی futur + پایانه‌ی imparfait)، ۵ کاربرد (ادب، آرزو، شرط، نصیحت، خبر تأییدنشده)، قاعده‌ی طلایی «si» و ۶ تمرین تعاملی با پاسخ.",
  },
  {
    file: "GRAM_conditionnel_exercices.html",
    title: "تمرین جامع شرطی حال",
    titleFr: "Exercices — Conditionnel présent",
    category: "grammar",
    groupe: "conditionnel",
    level: "متوسط (B1)",
    premium: false,
    tags: ["conditionnel", "تمرین", "صرف"],
    summary: "تمرین جامع conditionnel présent در سه بخش: صرف افعال بی‌قاعده، تشخیص آینده از شرطی، و کاربرد در موقعیت — همه تعاملی با پاسخ و توضیح.",
  },
  {
    file: "GRAM_apres_que.html",
    title: "après que: اخباری یا التزامی؟",
    titleFr: "« Après que » : indicatif ou subjonctif ?",
    category: "grammar",
    groupe: "subjonctif",
    level: "پیشرفته (B2)",
    premium: false,
    tags: ["après que", "subjonctif", "indicatif", "تمرین"],
    summary: "چرا «après que» با indicatif می‌آید نه subjonctif (برخلاف avant que)؟ توضیح منطق، اشتباه پرتکرار، ترفند «après + مصدر گذشته» و ۵ تمرین تعاملی.",
  },
  {
    file: "TCF_EO_T3_expatriation.html",
    title: "زندگی در کشوری دیگر",
    titleFr: "S'habituer à vivre à l'étranger",
    category: "tcf",
    section: "expression-orale",
    task: "tache-3",
    sujet: "immigration",
    level: "B2",
    premium: false,
    tags: ["اکسپتریشن", "مهاجرت", "نمونه‌ی کامل"],
    summary: "یک پاسخ کامل و تحلیل‌شده برای تکلیف ۳ — با ساختارها و متصل‌کننده‌های رنگی، نکات واژگانی و ترجمه‌ی فارسی هر پاراگراف.",
  },
  {
    file: "TCF_EO_T3_autorite_enfant.html",
    title: "اقتدار در تربیت کودک",
    titleFr: "L'autorité dans l'éducation",
    category: "tcf",
    section: "expression-orale",
    task: "tache-3",
    sujet: "education",
    level: "B2",
    premium: false,
    tags: ["تربیت", "کودک", "نمونه‌ی کامل"],
    summary: "آیا برای تربیت درست کودک به اقتدار نیاز است؟ یک پاسخ کامل با متصل‌کننده‌های هایلایت‌شده، واژگان سوژه و ترجمه‌ی فارسی هر پاراگراف.",
  },
  {
    file: "TCF_EO_T3_relations_distance.html",
    title: "روابط از راه دور",
    titleFr: "Les relations à distance",
    category: "tcf",
    section: "expression-orale",
    task: "tache-3",
    sujet: "technologie",
    level: "B2",
    premium: false,
    tags: ["اینترنت", "روابط", "نمونه‌ی کامل"],
    summary: "آیا روابط از راه دور به‌لطف اینترنت می‌توانند به اندازه‌ی روابط حضوری مستحکم باشند؟ پاسخی کامل با متصل‌کننده‌ها، واژگان سوژه و ترجمه‌ی فارسی.",
  },
  {
    file: "TCF_EO_T3_travail_etranger.html",
    title: "کار کردن در کشوری دیگر",
    titleFr: "Travailler dans un autre pays",
    category: "tcf",
    section: "expression-orale",
    task: "tache-3",
    sujet: "etudes-travail",
    level: "B2",
    premium: false,
    tags: ["کار", "خارج", "نمونه‌ی کامل"],
    summary: "آیا کار کردن در کشوری دیگر آسان است؟ یک پاسخ کامل با متصل‌کننده‌های هایلایت‌شده، واژگان سوژه و ترجمه‌ی فارسی هر پاراگراف.",
  },
  {
    file: "TCF_EO_T3_travail_canada.html",
    title: "پیدا کردن کار در کانادا",
    titleFr: "Trouver un travail au Canada",
    category: "tcf",
    section: "expression-orale",
    task: "tache-3",
    sujet: "etudes-travail",
    level: "B2",
    premium: false,
    tags: ["کانادا", "کار", "مهاجرت"],
    summary: "آیا پیدا کردن کار در کانادا آسان است؟ پاسخی کامل و کاربردی برای متقاضیان مهاجرت — با متصل‌کننده‌ها، واژگان سوژه و ترجمه‌ی فارسی هر پاراگراف.",
  },
];

// ═══════════════════════════════════════════════════════════
//  بانک نکته‌ها — «می‌دونستی که...؟»
//  هر بار یکی تصادفی روی صفحه‌ی اول نشان داده می‌شود.
//  برای افزودن نکته‌ی جدید، فقط یک بلوک اضافه کن.
//  type: "saviez" (می‌دونستی که) یا "rappel" (یادت باشه که)
// ═══════════════════════════════════════════════════════════
const TIPS = [
  // نکته‌ها را هدی می‌فرستد و اینجا اضافه می‌شوند.
  // ساختار هر نکته:
  //   { type: "saviez", fr: "...", fa: "...", cat: "grammar" }
  //   type: "saviez" (می‌دونستی که) یا "rappel" (یادت باشه که)
];

// ═══════════════════════════════════════════════════════════
//  نکته‌های طلایی — «نکته‌های هدی»
//  نکته‌های کوتاه و کاربردی که در یک بخش جدا و ماندگار نمایش داده می‌شوند.
//  هر نکته:
//    titre   : عنوان کوتاه نکته
//    correct : شکل درست (با ✅)
//    faux    : شکل غلط (با ❌) — اختیاری
//    note    : توضیح فارسی
//    exemple : یک مثال فرانسه
//    exempleFa : ترجمه‌ی مثال
// ═══════════════════════════════════════════════════════════
const ASTUCES = [
  {
    titre: "سؤال پرسیدن هیچ‌وقت با demander نمی‌آید!",
    correct: "poser une question",
    faux: "demander une question",
    note: "برای «سؤال پرسیدن» همیشه از فعل <b>poser</b> استفاده کن، نه demander. فعل demander به‌معنای «درخواست کردن / خواستن» است، نه «سؤال پرسیدن».",
    exemple: "L'élève pose une question au professeur.",
    exempleFa: "دانش‌آموز از معلم یک سؤال می‌پرسد.",
  },
];

// ═══════════════════════════════════════════════════════════
//  صفت‌ها — کارت کامل هر صفت
//  هر صفت:
//    mot       : صفت (مذکر / مؤنث)
//    emoji     : ایموجی‌های نماینده‌ی حس صفت
//    traductions : آرایه‌ای از ترجمه‌های فارسی
//    synonymes : آرایه‌ای از { fr, fa }
//    combinaisons : آرایه‌ای از { fr, fa, icon }  (ترکیبات پرتکرار)
//    phrase    : { fr, fa }  (یک جمله‌ی نمونه)
// ═══════════════════════════════════════════════════════════
const ADJECTIFS = [
  {
    mot: "déstabilisant / déstabilisante",
    emoji: "😵‍💫⚠️",
    traductions: [
      "گیج‌کننده و آشفته‌کننده",
      "برهم‌زننده‌ی تعادل ذهنی",
      "سردرگم‌کننده",
      "مختل‌کننده‌ی آرامش",
    ],
    synonymes: [
      { fr: "perturbant", fa: "آشفته‌کننده" },
      { fr: "troublant", fa: "نگران‌کننده / برهم‌زننده" },
      { fr: "déroutant", fa: "گیج‌کننده" },
      { fr: "inquiétant", fa: "نگران‌کننده" },
      { fr: "déconcertant", fa: "سردرگم‌کننده" },
    ],
    combinaisons: [
      { fr: "une situation déstabilisante", fa: "وضعیت آشفته‌کننده", icon: "⚠️" },
      { fr: "une expérience déstabilisante", fa: "تجربه‌ی گیج‌کننده", icon: "🌍" },
      { fr: "un changement déstabilisant", fa: "تغییرِ برهم‌زننده‌ی تعادل", icon: "🔄" },
      { fr: "une nouvelle déstabilisante", fa: "خبر شوک‌آور", icon: "📰" },
      { fr: "un événement déstabilisant", fa: "رویداد آشفته‌کننده", icon: "💥" },
      { fr: "une période déstabilisante", fa: "دوره‌ای پر از بی‌ثباتی", icon: "⏳" },
      { fr: "une remarque déstabilisante", fa: "اظهارنظر گیج‌کننده", icon: "💬" },
      { fr: "une révélation déstabilisante", fa: "افشاگری شوک‌آور", icon: "🔍" },
      { fr: "un contexte déstabilisant", fa: "شرایط ناپایدار و آشفته", icon: "🌐" },
      { fr: "une décision déstabilisante", fa: "تصمیمی که تعادل را برهم می‌زند", icon: "⚖️" },
    ],
    phrase: {
      fr: "Le déménagement dans un nouveau pays peut être une expérience déstabilisante au début, mais il permet souvent de développer une grande capacité d'adaptation.",
      fa: "مهاجرت به یک کشور جدید در ابتدا می‌تواند تجربه‌ای گیج‌کننده و برهم‌زننده‌ی تعادل باشد، اما اغلب باعث تقویت توانایی سازگاری می‌شود.",
    },
  },
  {
    mot: "spacieux / spacieuse",
    emoji: "🏡✨",
    traductions: [
      "جادار و راحت",
      "وسیع و دلباز",
      "دارای فضای باز",
      "بزرگ و راحت (comfortable)",
      "دارای فضای کافی",
    ],
    synonymes: [
      { fr: "vaste", fa: "وسیع" },
      { fr: "grand", fa: "بزرگ" },
      { fr: "aéré", fa: "دلباز" },
      { fr: "confortable", fa: "راحت" },
    ],
    combinaisons: [
      { fr: "un appartement spacieux", fa: "آپارتمان جادار", icon: "🏢" },
      { fr: "une maison spacieuse", fa: "خانه‌ی دلباز", icon: "🏡" },
      { fr: "une chambre spacieuse", fa: "اتاق بزرگ و راحت", icon: "🛏️" },
      { fr: "un salon spacieux", fa: "پذیرایی جادار", icon: "🛋️" },
      { fr: "un espace spacieux", fa: "فضای وسیع", icon: "🌿" },
      { fr: "des bureaux spacieux", fa: "دفاتر جادار", icon: "💼" },
      { fr: "une cuisine spacieuse", fa: "آشپزخانه‌ی بزرگ", icon: "🍽️" },
      { fr: "un intérieur spacieux", fa: "فضای داخلی دلباز", icon: "✨" },
      { fr: "une terrasse spacieuse", fa: "تراس بزرگ", icon: "☀️" },
      { fr: "un environnement spacieux", fa: "محیط باز و وسیع", icon: "🌳" },
    ],
    phrase: {
      fr: "De nombreuses familles préfèrent vivre dans un logement spacieux afin de bénéficier d'un meilleur confort au quotidien.",
      fa: "بسیاری از خانواده‌ها ترجیح می‌دهند در خانه‌ای جادار زندگی کنند تا از راحتی بیشتری در زندگی روزمره بهره‌مند شوند.",
    },
  },
  {
    mot: "pertinent / pertinente",
    emoji: "🎯🧠",
    traductions: [
      "بجا و مرتبط",
      "هوشمندانه و سنجیده",
      "دقیق و منطقی",
      "مناسب و کارآمد",
    ],
    synonymes: [
      { fr: "approprié", fa: "مناسب" },
      { fr: "judicieux", fa: "سنجیده و هوشمندانه" },
      { fr: "cohérent", fa: "منسجم" },
      { fr: "utile", fa: "مفید" },
      { fr: "significatif", fa: "معنادار" },
    ],
    combinaisons: [
      { fr: "une remarque pertinente", fa: "نکته‌ی بجا و هوشمندانه", icon: "💬" },
      { fr: "une analyse pertinente", fa: "تحلیل دقیق و مرتبط", icon: "📊" },
      { fr: "une solution pertinente", fa: "راه‌حل مناسب", icon: "🧩" },
      { fr: "un argument pertinent", fa: "استدلال قوی و مرتبط", icon: "⚖️" },
      { fr: "une question pertinente", fa: "سؤال بجا", icon: "❓" },
      { fr: "des informations pertinentes", fa: "اطلاعات مرتبط و مفید", icon: "📚" },
      { fr: "un commentaire pertinent", fa: "نظر هوشمندانه", icon: "🗣️" },
      { fr: "une approche pertinente", fa: "رویکرد مناسب و منطقی", icon: "🧠" },
      { fr: "une réponse pertinente", fa: "پاسخ دقیق و مرتبط", icon: "✅" },
      { fr: "un exemple pertinent", fa: "مثال کاملاً بجا", icon: "✨" },
    ],
    phrase: {
      fr: "Face aux défis environnementaux actuels, il est essentiel de proposer des solutions pertinentes et durables adaptées aux besoins de la société.",
      fa: "در مواجهه با چالش‌های محیط‌زیستی امروز، ضروری است راه‌حل‌های مناسب و پایداری متناسب با نیازهای جامعه ارائه شود.",
    },
  },
  {
    mot: "animé / animée",
    emoji: "🎉🌆",
    traductions: [
      "پرجنب‌وجوش",
      "زنده و فعال",
      "شلوغ و پرتحرک",
      "پرانرژی و پویا",
      "دارای فضای زنده و اجتماعی",
    ],
    synonymes: [
      { fr: "vivant", fa: "زنده و فعال" },
      { fr: "dynamique", fa: "پویا" },
      { fr: "bruyant", fa: "پرصدا (بسته به متن)" },
      { fr: "festif", fa: "جشن‌گونه" },
    ],
    combinaisons: [
      { fr: "une ville animée", fa: "شهر پرجنب‌وجوش", icon: "🌆" },
      { fr: "une rue animée", fa: "خیابان شلوغ و زنده", icon: "🚶‍♀️" },
      { fr: "une soirée animée", fa: "شب پرانرژی", icon: "🎉" },
      { fr: "une discussion animée", fa: "بحث داغ و پرحرارت", icon: "💬" },
      { fr: "une ambiance animée", fa: "فضای شلوغ و زنده", icon: "🎶" },
      { fr: "un quartier animé", fa: "محله‌ی پرجنب‌وجوش", icon: "🏙️" },
      { fr: "un débat animé", fa: "بحث پرتنش و فعال", icon: "🗣️" },
      { fr: "une vie animée", fa: "زندگی پرتحرک", icon: "🌿" },
      { fr: "un marché animé", fa: "بازار شلوغ", icon: "🛍️" },
      { fr: "une réunion animée", fa: "جلسه‌ی پربحث و فعال", icon: "👥" },
    ],
    phrase: {
      fr: "Les grandes villes offrent souvent une vie animée avec de nombreuses activités culturelles et sociales.",
      fa: "شهرهای بزرگ اغلب زندگی پرجنب‌وجوشی با فعالیت‌های فرهنگی و اجتماعی فراوان ارائه می‌دهند.",
    },
  },
  {
    mot: "chargé / chargée",
    emoji: "⚡📚",
    traductions: [
      "پرفشار و شلوغ",
      "سنگین و فشرده",
      "پر از مسئولیت یا احساس",
      "مملو و اشباع‌شده",
      "دارای حجم زیاد",
    ],
    synonymes: [
      { fr: "rempli", fa: "پُر" },
      { fr: "intense", fa: "شدید" },
      { fr: "dense", fa: "فشرده" },
      { fr: "surchargé", fa: "بیش‌ازحد پُر" },
    ],
    combinaisons: [
      { fr: "un emploi du temps chargé", fa: "برنامه‌ی بسیار شلوغ", icon: "📅" },
      { fr: "une journée chargée", fa: "روز پرفشار", icon: "⏳" },
      { fr: "un programme chargé", fa: "برنامه‌ی فشرده", icon: "📚" },
      { fr: "une atmosphère chargée", fa: "فضای سنگین / پرتنش", icon: "⚠️" },
      { fr: "des responsabilités chargées", fa: "مسئولیت‌های سنگین", icon: "💼" },
      { fr: "un trafic chargé", fa: "ترافیک سنگین", icon: "🚗" },
      { fr: "une émotion chargée", fa: "احساسات شدید و سنگین", icon: "❤️" },
      { fr: "une période chargée", fa: "دوره‌ی پرفشار", icon: "📈" },
      { fr: "une discussion chargée d'émotion", fa: "گفت‌وگوی احساسی و سنگین", icon: "💬" },
    ],
    phrase: {
      fr: "De nombreuses personnes ont aujourd'hui un emploi du temps chargé, ce qui réduit considérablement leur temps de repos.",
      fa: "امروزه بسیاری از افراد برنامه‌ای بسیار شلوغ دارند که زمان استراحت آن‌ها را به‌طور قابل‌توجهی کاهش می‌دهد.",
    },
  },
  {
    mot: "écoresponsable",
    emoji: "🌿♻️",
    traductions: [
      "سازگار با محیط‌زیست",
      "مسئولیت‌پذیر در برابر طبیعت",
      "حامی محیط‌زیست",
      "دارای رویکرد زیست‌محیطی",
    ],
    synonymes: [
      { fr: "durable", fa: "پایدار" },
      { fr: "vert", fa: "سبز / زیست‌محیطی" },
      { fr: "responsable", fa: "مسئولیت‌پذیر" },
    ],
    combinaisons: [
      { fr: "une consommation écoresponsable", fa: "مصرف مسئولانه در برابر طبیعت", icon: "🛒" },
      { fr: "un comportement écoresponsable", fa: "رفتار دوستدار محیط‌زیست", icon: "🌱" },
      { fr: "un mode de vie écoresponsable", fa: "سبک زندگی پایدار", icon: "🌿" },
      { fr: "des produits écoresponsables", fa: "محصولات سازگار با محیط‌زیست", icon: "📦" },
      { fr: "une entreprise écoresponsable", fa: "شرکت مسئولیت‌پذیر زیست‌محیطی", icon: "🏢" },
      { fr: "un tourisme écoresponsable", fa: "گردشگری پایدار", icon: "✈️" },
      { fr: "des gestes écoresponsables", fa: "رفتارهای کوچک سبز", icon: "🤝" },
      { fr: "un emballage écoresponsable", fa: "بسته‌بندی سازگار با محیط‌زیست", icon: "📦" },
      { fr: "une innovation écoresponsable", fa: "نوآوری سبز", icon: "💡" },
      { fr: "une politique écoresponsable", fa: "سیاست زیست‌محیطی مسئولانه", icon: "🏛️" },
    ],
    phrase: {
      fr: "Adopter un mode de vie écoresponsable permet de réduire l'impact environnemental et de préserver les ressources naturelles.",
      fa: "اتخاذ یک سبک زندگی مسئولیت‌پذیر زیست‌محیطی کمک می‌کند اثرات محیط‌زیستی کاهش یابد و منابع طبیعی حفظ شوند.",
    },
  },
  {
    mot: "excessif / excessive",
    emoji: "⚠️📊",
    traductions: [
      "بیش‌ازحد و افراطی",
      "غیرمتعادل",
      "فراتر از حد معمول",
      "شدید و کنترل‌نشده",
      "زیاده‌روی‌شده",
    ],
    synonymes: [
      { fr: "démesuré", fa: "خارج از اندازه / افراطی" },
      { fr: "abusif", fa: "سوءاستفاده‌آمیز / بیش‌ازحد" },
      { fr: "exagéré", fa: "اغراق‌آمیز" },
      { fr: "immodéré", fa: "غیرمتعادل" },
      { fr: "trop élevé", fa: "خیلی زیاد" },
    ],
    combinaisons: [
      { fr: "une consommation excessive", fa: "مصرف بیش‌ازحد", icon: "🍔" },
      { fr: "une charge excessive", fa: "فشار/بار بیش‌ازحد", icon: "⚖️" },
      { fr: "un stress excessif", fa: "استرس زیاد", icon: "😰" },
      { fr: "une vitesse excessive", fa: "سرعت غیرمجاز و زیاد", icon: "🚗" },
      { fr: "une utilisation excessive", fa: "استفاده‌ی بیش‌ازحد", icon: "📱" },
      { fr: "des dépenses excessives", fa: "هزینه‌های افراطی", icon: "💸" },
      { fr: "une pollution excessive", fa: "آلودگی بیش‌ازحد", icon: "🌫️" },
      { fr: "une fatigue excessive", fa: "خستگی شدید", icon: "💤" },
      { fr: "des attentes excessives", fa: "انتظارات غیرواقعی", icon: "🎯" },
      { fr: "une exposition excessive", fa: "قرار گرفتن بیش‌ازحد", icon: "☀️" },
    ],
    phrase: {
      fr: "L'utilisation excessive des écrans peut avoir des effets négatifs sur la concentration et la qualité du sommeil.",
      fa: "استفاده بیش‌ازحد از صفحه‌نمایش‌ها می‌تواند اثرات منفی بر تمرکز و کیفیت خواب داشته باشد.",
    },
  },
];

// ═══════════════════════════════════════════════════════════
//  کوییزهای کوتاه — «کوییز»
//  هر کوییز:
//    question : متن سؤال (می‌تواند جای خالی با ___ داشته باشد)
//    options  : آرایه‌ای از گزینه‌ها
//    correct  : ایندکس گزینه‌ی درست (از ۰)
//    note     : توضیح کوتاه بعد از پاسخ (اختیاری)
// ═══════════════════════════════════════════════════════════
const QUIZ = [
  {
    question: "Ça dépend ___ la situation.",
    options: ["sur", "à", "de", "pour"],
    correct: 2,
    note: "فعل « dépendre » همیشه با حرف اضافه‌ی <b>de</b> می‌آید: « ça dépend de… » (بستگی دارد به…).",
  },
  {
    question: "Il faut faire des efforts ___ (تا حد ممکن).",
    options: ["autant que possible", "autant de possible"],
    correct: 0,
    note: "عبارت درست « <b>autant que possible</b> » است به‌معنای «تا حد ممکن / تا جای ممکن».",
  },
  {
    question: "Les parents ___ les enseignants sont préoccupés par l'usage des écrans.",
    options: ["ainsi que", "autant que", "autant de"],
    correct: 0,
    note: "« <b>ainsi que</b> » یعنی «و همچنین / به‌همراهِ». اینجا والدین و معلمان را به هم وصل می‌کند.",
  },
  {
    question: "Cette entreprise produit ___ déchets qu'avant.",
    options: ["ainsi que", "autant que", "autant de"],
    correct: 2,
    note: "پیش از یک اسم (déchets) از « <b>autant de</b> » استفاده می‌کنیم: «به همان اندازه زباله». ساختار: autant de + اسم.",
  },
  {
    question: "Je viendrai ___ il fasse beau.",
    options: ["parce qu'", "puisqu'", "pourvu qu'", "dès qu'"],
    correct: 2,
    note: "« <b>pourvu que</b> » (به‌شرطِ اینکه) با subjonctif می‌آید: « pourvu qu'il fasse beau ».",
  },
  {
    question: "Je doute qu'elle ___ la vérité avant aujourd'hui.",
    options: ["sache", "savait", "ait su", "saurait"],
    correct: 2,
    note: "« douter que » + subjonctif. چون عمل پیش از «امروز» کامل شده، subjonctif passé به‌کار می‌رود: « <b>ait su</b> ».",
  },
  {
    question: "Il faut que tu ___ ce travail avant ce soir.",
    options: ["finisses", "aies fini", "finissais", "finiras"],
    correct: 1,
    note: "چون کار باید پیش از «امشب» تمام شده باشد، subjonctif passé درست است: « <b>aies fini</b> ».",
  },
  {
    question: "Je cherche un appartement qui ___ deux chambres. (مطمئن نیستم وجود داشته باشد)",
    options: ["a", "ait", "aura", "avait"],
    correct: 1,
    note: "چون وجود آپارتمان قطعی نیست، بعد از « qui » از subjonctif استفاده می‌کنیم: « <b>ait</b> ».",
  },
  {
    question: "J'habite dans un appartement qui ___ deux chambres. (واقعاً وجود دارد)",
    options: ["a", "ait", "aura", "ayant"],
    correct: 0,
    note: "چون آپارتمان واقعاً وجود دارد و واقعیت است، indicatif درست است: « <b>a</b> ».",
  },
  {
    question: "C'est la seule personne qui ___ me comprendre.",
    options: ["peut", "puisse", "pourra", "pouvait"],
    correct: 1,
    note: "بعد از صفت‌های مطلق مثل « le seul / la seule » از subjonctif استفاده می‌شود: « <b>puisse</b> ».",
  },
  {
    question: "C'est le plus beau pays que je ___.",
    options: ["connais", "connaisse", "connaîtrai", "ai connu"],
    correct: 1,
    note: "بعد از صفت عالی (le plus beau) از subjonctif استفاده می‌شود: « <b>connaisse</b> ».",
  },
];

// ═══════════════════════════════════════════════════════════
//  چطور واکنش بدم؟ — عبارت‌های واکنشی در موقعیت‌های مختلف
//  هر موضوع:
//    titre   : عنوان موقعیت (مثل Accepter)
//    titreFa : ترجمه‌ی عنوان
//    emoji   : ایموجی موضوع
//    couleur : رنگ کارت
//    expressions : آرایه‌ای از { fr, fa, ex, exFa, emoji }
//        fr=عبارت، fa=ترجمه، ex=مثال، exFa=ترجمه‌ی مثال، emoji=ایموجی
// ═══════════════════════════════════════════════════════════
const REACTIONS = [
  {
    titre: "Accepter",
    titreFa: "پذیرفتن / قبول کردن",
    emoji: "🙆‍♀️✅",
    couleur: "#6c63c4",
    expressions: [
      { fr: "D'accord / C'est d'accord", fa: "باشه / قبوله", emoji: "👍",
        ex: "— On se voit à 8h ? — D'accord, à ce soir !", exFa: "— ساعت ۸ همدیگر را ببینیم؟ — باشه، تا شب!" },
      { fr: "Comme tu veux", fa: "هرجور تو بخوای", emoji: "🤷‍♀️",
        ex: "— On commande une pizza ou des sushis ? — Comme tu veux, j'aime les deux !", exFa: "— پیتزا سفارش بدیم یا سوشی؟ — هرجور تو بخوای، هردو را دوست دارم!" },
      { fr: "Pourquoi pas ?", fa: "چرا که نه؟", emoji: "😏",
        ex: "— Et si on allait au cinéma ce soir ? — Pourquoi pas !", exFa: "— نظرت چیه امشب بریم سینما؟ — چرا که نه!" },
      { fr: "Avec plaisir !", fa: "با کمال میل!", emoji: "😊",
        ex: "— Tu veux dîner chez nous ? — Avec plaisir, merci !", exFa: "— می‌خواهی شام خانه‌ی ما باشی؟ — با کمال میل، ممنون!" },
      { fr: "Volontiers !", fa: "با کمال میل! / حتماً!", emoji: "🙌",
        ex: "— Un peu plus de café ? — Volontiers !", exFa: "— کمی قهوه‌ی بیشتر؟ — با کمال میل!" },
      { fr: "C'est une bonne idée", fa: "فکر خوبیه", emoji: "💡",
        ex: "— On pourrait faire une pause ? — C'est une bonne idée, je suis fatigué.", exFa: "— می‌توانیم یک استراحت کنیم؟ — فکر خوبیه، خسته‌ام." },
      { fr: "Super ! / C'est super !", fa: "عالیه! / محشره!", emoji: "🤩",
        ex: "— J'ai réservé une table pour ce soir. — Super ! J'ai hâte !", exFa: "— برای امشب یک میز رزرو کردم. — عالیه! بی‌صبرانه منتظرم!" },
      { fr: "Parfait ! / C'est parfait !", fa: "بی‌نقصه! / عالیه!", emoji: "👌",
        ex: "— Je passe te chercher à midi. — Parfait, je serai prêt !", exFa: "— ظهر میام دنبالت. — عالیه، آماده خواهم بود!" },
      { fr: "Génial ! / C'est génial", fa: "فوق‌العاده‌ست! / محشره!", emoji: "🎉",
        ex: "— On part en weekend à la mer ! — Génial, j'adore la plage !", exFa: "— آخر هفته می‌رویم کنار دریا! — فوق‌العاده‌ست، عاشق ساحلم!" },
      { fr: "Je veux bien", fa: "باشه، دوست دارم / مایلم", emoji: "🙂",
        ex: "— Tu veux que je t'aide ? — Je veux bien, merci beaucoup !", exFa: "— می‌خواهی کمکت کنم؟ — باشه، خیلی ممنون!" },
      { fr: "J'accepte", fa: "قبول می‌کنم", emoji: "🤝",
        ex: "— Nous vous proposons ce poste. — J'accepte avec joie !", exFa: "— این شغل را به شما پیشنهاد می‌دهیم. — با خوشحالی قبول می‌کنم!" },
    ],
  },
  {
    titre: "Hésiter",
    titreFa: "تردید کردن / دودل بودن",
    emoji: "🤔💭",
    couleur: "#4a90b8",
    expressions: [
      { fr: "Je ne sais pas", fa: "نمی‌دانم", emoji: "🤷",
        ex: "— Tu viens à la fête ce soir ? — Je ne sais pas, je verrai.", exFa: "— امشب به مهمانی می‌آیی؟ — نمی‌دانم، می‌بینم چه می‌شود." },
      { fr: "Je dois réfléchir", fa: "باید فکر کنم", emoji: "🧠",
        ex: "— Tu acceptes ce nouveau travail ? — Je dois réfléchir avant de décider.", exFa: "— این کار جدید را قبول می‌کنی؟ — باید قبل از تصمیم فکر کنم." },
      { fr: "Laisse-moi réfléchir", fa: "بگذار فکر کنم", emoji: "⏳",
        ex: "— Alors, c'est oui ou c'est non ? — Laisse-moi réfléchir un instant.", exFa: "— خب، بله است یا نه؟ — یک لحظه بگذار فکر کنم." },
      { fr: "Je ne suis pas sûr(e)", fa: "مطمئن نیستم", emoji: "😕",
        ex: "— Ce restaurant est bien ? — Je ne suis pas sûre, je n'y suis jamais allée.", exFa: "— این رستوران خوب است؟ — مطمئن نیستم، هیچ‌وقت آنجا نرفته‌ام." },
      { fr: "Je ne suis pas certain(e)", fa: "یقین ندارم", emoji: "🫤",
        ex: "— Le train part à 9h ? — Je ne suis pas certain, vérifions l'horaire.", exFa: "— قطار ساعت ۹ حرکت می‌کند؟ — یقین ندارم، بیا برنامه را چک کنیم." },
    ],
  },
  {
    titre: "Refuser",
    titreFa: "رد کردن / نه گفتن",
    emoji: "🙅‍♀️❌",
    couleur: "#c0563f",
    expressions: [
      { fr: "Non, merci", fa: "نه، ممنون", emoji: "🙏",
        ex: "— Tu veux encore du gâteau ? — Non, merci, j'ai assez mangé.", exFa: "— باز هم کیک می‌خواهی؟ — نه ممنون، به‌اندازه‌ی کافی خوردم." },
      { fr: "Je n'ai pas envie", fa: "حسش را ندارم / دلم نمی‌خواهد", emoji: "😑",
        ex: "— On sort ce soir ? — Je n'ai pas envie, je suis fatigué.", exFa: "— امشب بیرون برویم؟ — حسش را ندارم، خسته‌ام." },
      { fr: "Désolé, je ne suis pas libre", fa: "ببخشید، وقت ندارم", emoji: "📅",
        ex: "— Tu peux venir demain ? — Désolé, je ne suis pas libre demain.", exFa: "— می‌توانی فردا بیایی؟ — ببخشید، فردا وقت ندارم." },
      { fr: "Non, ça ne me dit rien", fa: "نه، اصلاً حسش نیست / جذبم نمی‌کند", emoji: "😐",
        ex: "— On regarde un film d'horreur ? — Non, ça ne me dit rien.", exFa: "— یک فیلم ترسناک ببینیم؟ — نه، اصلاً حسش نیست." },
      { fr: "Je ne peux pas", fa: "نمی‌توانم", emoji: "🚫",
        ex: "— Tu m'aides à déménager samedi ? — Je ne peux pas, je travaille.", exFa: "— شنبه به جابه‌جایی‌ام کمک می‌کنی؟ — نمی‌توانم، سرِ کارم." },
      { fr: "Je regrette mais… Quel dommage !", fa: "متأسفم ولی… چه حیف!", emoji: "😔",
        ex: "— Tu viens à mon mariage ? — Je regrette, mais je serai à l'étranger. Quel dommage !", exFa: "— به عروسی‌ام می‌آیی؟ — متأسفم، ولی خارج از کشور خواهم بود. چه حیف!" },
      { fr: "Je suis désolé(e), mais…", fa: "متأسفم، ولی…", emoji: "🙇",
        ex: "— Tu peux me prêter ta voiture ? — Je suis désolé, mais j'en ai besoin aujourd'hui.", exFa: "— می‌توانی ماشینت را قرض بدهی؟ — متأسفم، ولی امروز خودم لازمش دارم." },
      { fr: "C'est gentil mais…", fa: "لطف داری ولی…", emoji: "🙂",
        ex: "— Je t'invite au restaurant ! — C'est gentil, mais je préfère rester à la maison.", exFa: "— تو را به رستوران دعوت می‌کنم! — لطف داری، ولی ترجیح می‌دهم خانه بمانم." },
      { fr: "C'est hors de question !", fa: "اصلاً امکان ندارد! / محال است!", emoji: "🙅",
        ex: "— Tu peux travailler ce dimanche ? — C'est hors de question, c'est mon jour de repos !", exFa: "— می‌توانی این یکشنبه کار کنی؟ — اصلاً امکان ندارد، روز استراحتم است!" },
      { fr: "Malheureusement, ce n'est pas possible", fa: "متأسفانه، ممکن نیست", emoji: "😞",
        ex: "— On peut avancer la réunion ? — Malheureusement, ce n'est pas possible aujourd'hui.", exFa: "— می‌توانیم جلسه را جلو بیندازیم؟ — متأسفانه، امروز ممکن نیست." },
      { fr: "Une autre fois, peut-être", fa: "شاید یک وقت دیگر", emoji: "🔜",
        ex: "— Tu viens prendre un café ? — Une autre fois, peut-être, là je suis pressé.", exFa: "— می‌آیی یک قهوه بخوریم؟ — شاید یک وقت دیگر، الان عجله دارم." },
      { fr: "Sûrement pas !", fa: "به‌هیچ‌وجه! / قطعاً نه!", emoji: "🛑",
        ex: "— Tu prêterais de l'argent à Paul ? — Sûrement pas, il ne rembourse jamais !", exFa: "— به پل پول قرض می‌دهی؟ — به‌هیچ‌وجه، او هیچ‌وقت پس نمی‌دهد!" },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  تمرین تلفظ — ویدیوهای هدی
//  هر تمرین:
//    jour    : شماره/عنوان روز
//    titre   : موضوع تمرین (صداها)
//    video   : مسیر فایل ویدیو
//    texteFr : متن فرانسه (آرایه‌ای از جملات)
//    texteFa : ترجمه‌ی فارسی (آرایه‌ای، هم‌ترتیب با جملات)
//    focus   : صداهایی که تمرین می‌شوند
// ═══════════════════════════════════════════════════════════
const PRONONCIATION = [
  {
    jour: "روز اول",
    titre: "تمرین صداهای س، ز، ش و ژ",
    focus: ["s", "z", "ch", "j"],
    video: "videos/PRON_jour1_sifflantes.mp4",
    texteFr: [
      "Julie cherche son chat sous le soleil chaud de juillet.",
      "Chaque jour, ce joli chat joue joyeusement avec une jupe jaune.",
    ],
    texteFa: [
      "ژولی زیر آفتاب گرم ماه جولای دنبال گربه‌اش می‌گردد.",
      "هر روز، این گربه‌ی ملوس با یک دامن زرد با شادی بازی می‌کند.",
    ],
  },
  {
    jour: "روز دوم",
    titre: "تمرین صدای ر",
    focus: ["r"],
    video: "videos/PRON_jour2_r.mp4",
    texteFr: [
      "Rire régulièrement rend réellement la respiration relaxante et répéter cette phrase rapidement révèle votre rigueur en rhétorique ; mais râler rageusement ruine radicalement le rire.",
    ],
    texteFa: [
      "خندیدن مداوم واقعاً نفس‌کشیدن را آرام می‌کند، و تکرار سریع این جمله جدیتتان را در فن بیان نشان می‌دهد؛ ولی غر زدن با عصبانیت، خنده را کلاً نابود می‌کند!",
    ],
  },
  {
    jour: "روز سوم",
    titre: "تمرین صداهای نزل (تودماغی)",
    focus: ["an", "en", "on", "in"],
    video: "videos/PRON_jour3_nasales.mp4",
    texteFr: [
      "Pendant le printemps, Valentin entend un vent violent venant du Mont-Blanc.",
      "Il plante des pommes, pourtant il pense aux pentes pendantes.",
    ],
    texteFa: [
      "در فصل بهار، والنتین صدای یک باد تند را شنید که از طرف مون‌بلان می‌آمد.",
      "او داشت سیب می‌کاشت، ولی با این حال فکرش پیش آن دامنه‌های شیب‌دار بود.",
    ],
  },
  {
    jour: "روز چهارم",
    titre: "تمرین صدای س",
    focus: ["s"],
    video: "videos/PRON_jour4_s.mp4",
    texteFr: [
      "Salut salut monsieur Sans Souci, combien sont ces six cent six saucissons-ci ?",
      "Ces six cent six saucissons-ci sont six sous.",
      "Six sous, ces six cent six saucissons-ci ! Si ces six cent six saucissons-ci sont six sous, ces six cent six saucissons-ci sont trop chers.",
    ],
    texteFa: [
      "سلام سلام آقای بی‌دغدغه! قیمت این ششصد و شش تا سوسیس چند است؟",
      "این ششصد و شش تا سوسیس می‌شوند شش سو (واحد پول قدیمی فرانسوی).",
      "چی؟ شش سو برای این ششصد و شش تا سوسیس؟! اگر واقعاً قیمت این ششصد و شش تا سوسیس شش سو باشد، پس خیلی گران است!",
    ],
  },
  {
    jour: "روز پنجم",
    titre: "صدای on (تودماغی) و حرف r",
    focus: ["on", "r"],
    video: "videos/PRON_jour5_on_r.mp4",
    texteFr: [
      "Simon ronfle comme un lion,",
      "son ronron roule dans le salon.",
      "Il rêve qu'il est un dragon,",
      "mais il a peur d'un papillon !",
    ],
    texteFa: [
      "سیمون مثل یک شیر خر و پف می‌کند،",
      "خرخرش توی اتاق پیچیده.",
      "خواب می‌بیند که یک اژدهاست،",
      "ولی از یک پروانه می‌ترسد!",
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  Édito A1 — مرور واژگان هر درس با ۳ مثال
//  هر درس:
//    lecon  : عنوان/شماره‌ی درس
//    titre  : موضوع درس
//    mots   : آرایه‌ای از واژگان، هر کدام:
//        mot    : واژه‌ی فرانسه
//        fa     : ترجمه‌ی فارسی
//        genre  : (اختیاری) le/la/un/une
//        exemples : آرایه‌ای از ۳ مثال، هر کدام {fr, fa}
// ═══════════════════════════════════════════════════════════
const EDITOA1 = [
  {
    lecon: "Leçon 1",
    titre: "سرگرمی‌ها (Les loisirs)",
    mots: [
      // ---- Les loisirs ----
      { mot: "l'art", fa: "هنر", genre: "(m.)", exemples: [
        { fr: "J'aime l'art moderne.", fa: "هنر مدرن را دوست دارم." },
        { fr: "L'art est ma passion.", fa: "هنر علاقه‌ی من است." },
        { fr: "Tu aimes l'art ?", fa: "تو هنر را دوست داری؟" },
      ]},
      { mot: "le cinéma", fa: "سینما", exemples: [
        { fr: "Je vais au cinéma ce soir.", fa: "امشب به سینما می‌روم." },
        { fr: "Tu aimes le cinéma ?", fa: "تو سینما را دوست داری؟" },
        { fr: "Le cinéma français est célèbre.", fa: "سینمای فرانسه معروف است." },
      ]},
      { mot: "les langues", fa: "زبان‌ها", genre: "(f.)", exemples: [
        { fr: "J'aime les langues étrangères.", fa: "زبان‌های خارجی را دوست دارم." },
        { fr: "Les langues sont importantes.", fa: "زبان‌ها مهم هستند." },
        { fr: "Elle parle trois langues.", fa: "او سه زبان صحبت می‌کند." },
      ]},
      { mot: "la musique", fa: "موسیقی", exemples: [
        { fr: "J'écoute de la musique.", fa: "به موسیقی گوش می‌دهم." },
        { fr: "La musique, c'est ma vie !", fa: "موسیقی، زندگی من است!" },
        { fr: "Tu aimes la musique pop ?", fa: "موسیقی پاپ را دوست داری؟" },
      ]},
      { mot: "le sport", fa: "ورزش", exemples: [
        { fr: "Je fais du sport le matin.", fa: "صبح‌ها ورزش می‌کنم." },
        { fr: "Tu aimes le sport ?", fa: "ورزش را دوست داری؟" },
        { fr: "Le sport, c'est bon pour la santé.", fa: "ورزش برای سلامتی خوب است." },
      ]},
    ],
  },
  {
    lecon: "Leçon 2",
    titre: "هویت و کشورها (L'identité)",
    mots: [
      { mot: "le nom", fa: "نام خانوادگی", exemples: [
        { fr: "Quel est votre nom ?", fa: "نام خانوادگی شما چیست؟" },
        { fr: "Mon nom est Karimi.", fa: "نام خانوادگی من کریمی است." },
        { fr: "Écrivez votre nom ici.", fa: "نام خانوادگی‌تان را اینجا بنویسید." },
      ]},
      { mot: "le prénom", fa: "نام (کوچک)", exemples: [
        { fr: "Mon prénom est Hoda.", fa: "نام من هدی است." },
        { fr: "Quel est ton prénom ?", fa: "نام تو چیست؟" },
        { fr: "C'est un joli prénom.", fa: "این نام قشنگی است." },
      ]},
      { mot: "la date de naissance", fa: "تاریخ تولد", exemples: [
        { fr: "Quelle est ta date de naissance ?", fa: "تاریخ تولدت چیست؟" },
        { fr: "Ma date de naissance est le 5 mai.", fa: "تاریخ تولد من پنجم مه است." },
        { fr: "Écris ta date de naissance.", fa: "تاریخ تولدت را بنویس." },
      ]},
      { mot: "le lieu de naissance", fa: "محل تولد", exemples: [
        { fr: "Mon lieu de naissance est Téhéran.", fa: "محل تولد من تهران است." },
        { fr: "Quel est votre lieu de naissance ?", fa: "محل تولد شما کجاست؟" },
        { fr: "Paris est son lieu de naissance.", fa: "پاریس محل تولد اوست." },
      ]},
      // ---- Les coordonnées ----
      { mot: "l'adresse mail", fa: "آدرس ایمیل", genre: "(f.)", exemples: [
        { fr: "Quelle est ton adresse mail ?", fa: "آدرس ایمیلت چیست؟" },
        { fr: "Voici mon adresse mail.", fa: "این آدرس ایمیل من است." },
        { fr: "J'ai une nouvelle adresse mail.", fa: "یک آدرس ایمیل جدید دارم." },
      ]},
      { mot: "le numéro de téléphone", fa: "شماره تلفن", exemples: [
        { fr: "Quel est ton numéro de téléphone ?", fa: "شماره تلفنت چیست؟" },
        { fr: "Je note ton numéro de téléphone.", fa: "شماره تلفنت را یادداشت می‌کنم." },
        { fr: "Voici mon numéro de téléphone.", fa: "این شماره تلفن من است." },
      ]},
      // ---- Pays et nationalités (نمونه‌ی پرکاربرد) ----
      { mot: "la France — français(e)", fa: "فرانسه — فرانسوی", exemples: [
        { fr: "J'habite en France.", fa: "در فرانسه زندگی می‌کنم." },
        { fr: "Elle est française.", fa: "او فرانسوی است (مؤنث)." },
        { fr: "Il parle français.", fa: "او فرانسوی صحبت می‌کند." },
      ]},
      { mot: "l'Iran — iranien(ne)", fa: "ایران — ایرانی", exemples: [
        { fr: "Je viens d'Iran.", fa: "من اهل ایران هستم." },
        { fr: "Elle est iranienne.", fa: "او ایرانی است (مؤنث)." },
        { fr: "Mon ami est iranien.", fa: "دوست من ایرانی است." },
      ]},
      { mot: "le Canada — canadien(ne)", fa: "کانادا — کانادایی", exemples: [
        { fr: "Je voudrais aller au Canada.", fa: "دلم می‌خواهد به کانادا بروم." },
        { fr: "Il est canadien.", fa: "او کانادایی است." },
        { fr: "Le Canada est un grand pays.", fa: "کانادا کشور بزرگی است." },
      ]},
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  مینی‌آرتیکل — متن کوتاه با واژگان کلیکی
//  هر آرتیکل:
//    titre   : عنوان فرانسه
//    emoji   : ایموجی
//    niveau  : سطح (B1, B2...)
//    paras   : آرایه‌ای از پاراگراف‌ها (رشته)
//             واژه‌ی دشوار را به‌صورت ⟦mot|معنی فارسی⟧ بنویس
//             تا روی سایت قابل کلیک شود و معنی‌اش ظاهر شود.
//    morale  : (اختیاری) جمع‌بندی/نتیجه {fr, fa}
// ═══════════════════════════════════════════════════════════
const MINIARTICLES = [
  {
    titre: "Qu'est-ce qui fait durer l'amour ?",
    emoji: "❤️",
    niveau: "B1",
    cat: "general",
    paras: [
      "Aujourd'hui, les jeunes sont ⟦entourés|احاطه‌شده⟧ de messages sur l'amour romantique : dans les films, sur les réseaux sociaux et à travers les ⟦influenceurs|اینفلوئنسرها⟧. Ces messages montrent souvent l'amour comme quelque chose de facile et de parfait. Cela crée des ⟦attentes|انتظارات⟧ ⟦irréalistes|غیرواقعی⟧ sur les relations.",
      "Pourtant, un amour ⟦sain|سالم⟧ ⟦repose sur|متکی است بر⟧ la ⟦confiance|اعتماد⟧, le ⟦respect|احترام⟧, une communication honnête et la capacité à gérer les ⟦désaccords|اختلاف‌نظرها⟧ avec ⟦bienveillance|مهربانی⟧. Apprendre ces ⟦compétences|مهارت‌ها⟧ tôt peut aider les jeunes à construire des relations plus ⟦solides|محکم⟧ à l'avenir.",
      "Éduquer les jeunes à l'amour ne concerne pas seulement les relations amoureuses. Il s'agit aussi de les aider à comprendre leur ⟦valeur|ارزش⟧ personnelle, à développer leur ⟦empathie|همدلی⟧ et à apprendre l'importance de ⟦fixer des limites|تعیین مرز⟧ ⟦saines|سالم⟧.",
    ],
    morale: {
      fr: "La plus grande leçon n'est pas « Trouve quelqu'un qui te complète », mais « Deviens une personne qui sait aimer et être aimée de façon saine. »",
      fa: "بزرگ‌ترین درس این نیست که «کسی را پیدا کن که تو را کامل کند»، بلکه این است که «خودت کسی شو که بلد است سالم دوست بدارد و دوست داشته شود.»",
    },
  },
  {
    titre: "Faut-il éviter de prendre le petit-déjeuner ?",
    emoji: "🍳",
    niveau: "B1",
    cat: "general",
    paras: [
      "Pendant longtemps, le petit-déjeuner a été ⟦considéré comme|تلقی شده به‌عنوان⟧ « le repas le plus important de la journée ». Mais est-ce que tout le monde ⟦devrait|باید⟧ vraiment en prendre ?",
      "La réponse est plus ⟦nuancée|ظریف / دقیق⟧ qu'un simple oui ou non. ⟦Sauter|رد کردن / حذف کردن⟧ le petit-déjeuner peut ⟦convenir à|مناسب بودن برای⟧ certaines personnes, mais ce n'est pas ⟦automatiquement|به‌طور خودکار⟧ plus sain. Ce qui compte le plus, c'est votre ⟦alimentation|تغذیه⟧ globale et la qualité des aliments que vous ⟦consommez|مصرف می‌کنید⟧.",
      "Les recherches ⟦suggèrent|نشان می‌دهند⟧ que les personnes qui prennent un petit-déjeuner ⟦nutritif|مغذی⟧ ont souvent une meilleure ⟦concentration|تمرکز⟧, un niveau d'énergie plus ⟦stable|پایدار⟧ et une ⟦humeur|خلق‌وخو⟧ plus positive. À l'inverse, le sauter peut provoquer une ⟦faim|گرسنگی⟧ plus intense plus tard, ce qui augmente le risque de ⟦trop manger|پرخوری⟧.",
      "La vraie question n'est donc pas « Dois-je prendre un petit-déjeuner ? », mais plutôt « Quel type de petit-déjeuner ⟦soutient|پشتیبانی می‌کند⟧ le mieux mes objectifs ? » Un repas riche en ⟦protéines|پروتئین⟧, en ⟦fibres|فیبر⟧ et en bonnes graisses est bien plus ⟦bénéfique|مفید⟧ que des céréales sucrées ou des ⟦viennoiseries|شیرینی‌های صبحانه⟧.",
    ],
    morale: {
      fr: "Les habitudes saines ne se construisent pas en suivant les tendances, mais en comprenant ce qui aide votre corps et votre cerveau à fonctionner au mieux.",
      fa: "عادت‌های سالم با دنبال‌کردن مدها ساخته نمی‌شوند، بلکه با فهمیدن اینکه چه چیزی به بدن و مغز شما کمک می‌کند بهتر کار کنند.",
    },
  },
  {
    titre: "Le secret pour passer le meilleur été de votre vie",
    emoji: "☀️",
    niveau: "B1",
    cat: "general",
    paras: [
      "Beaucoup de personnes pensent qu'un été réussi ⟦nécessite|نیاز دارد به⟧ des voyages ⟦coûteux|پرهزینه⟧ ou des projets ⟦extraordinaires|خارق‌العاده⟧. Pourtant, les plus beaux ⟦souvenirs|خاطرات⟧ ⟦naissent|متولد می‌شوند⟧ souvent des moments les plus simples.",
      "Une promenade au ⟦coucher du soleil|غروب آفتاب⟧, un pique-nique entre amis, la lecture d'un livre dans un parc ou la ⟦découverte|کشف⟧ d'un nouveau ⟦quartier|محله⟧ de votre ville peuvent rendre l'été vraiment spécial. Les psychologues expliquent que vivre de nouvelles ⟦expériences|تجربه‌ها⟧ aide à créer des souvenirs plus ⟦marquants|ماندگار⟧.",
      "En même temps, passer du temps de qualité avec les personnes que l'on aime et ⟦s'accorder|به خود اختصاص دادن⟧ des moments de repos peut avoir un impact plus important sur le ⟦bonheur|خوشبختی⟧ que le fait d'être ⟦constamment|دائماً⟧ ⟦occupé|مشغول⟧.",
    ],
    morale: {
      fr: "Le secret d'un été inoubliable n'est pas d'en faire plus, mais d'être davantage présent dans l'instant. Essayez quelque chose de nouveau et profitez des petits moments : ce sont souvent eux qui deviennent les souvenirs les plus durables.",
      fa: "راز یک تابستان فراموش‌نشدنی این نیست که کارهای بیشتری بکنی، بلکه این است که بیشتر در لحظه حاضر باشی. چیز تازه‌ای را امتحان کن و از لحظه‌های کوچک لذت ببر؛ اغلب همین‌ها ماندگارترین خاطرات می‌شوند.",
    },
  },
  {
    titre: "La lumière du matin : l'antidépresseur que nous négligeons",
    emoji: "☀️",
    niveau: "B2",
    cat: "general",
    paras: [
      "Beaucoup d'entre nous commencent leur journée en regardant leur téléphone, alors que notre cerveau attend en réalité quelque chose de bien plus important : la lumière du soleil du matin.",
      "Selon les psychologues, ⟦s'exposer à|قرار گرفتن در معرض⟧ la lumière naturelle peu après le ⟦réveil|بیدار شدن⟧ aide à ⟦réguler|تنظیم کردن⟧ notre ⟦horloge biologique|ساعت زیستی⟧, améliore la qualité du ⟦sommeil|خواب⟧ et ⟦favorise|تقویت می‌کند⟧ une meilleure humeur. La lumière matinale ⟦signale|علامت می‌دهد⟧ au cerveau de réduire la production de ⟦mélatonine|ملاتونین⟧ et d'augmenter l'état d'⟦éveil|بیداری⟧.",
      "Le problème, c'est que notre mode de vie moderne nous garde souvent à l'intérieur. Nous passons des heures sous un ⟦éclairage|نورپردازی⟧ ⟦artificiel|مصنوعی⟧ qui ne peut pas remplacer tous les ⟦bienfaits|فواید⟧ de la lumière naturelle. Avec le temps, cela peut ⟦entraîner|منجر شدن به⟧ des ⟦troubles du sommeil|اختلالات خواب⟧, une baisse d'énergie et même des ⟦symptômes|نشانه‌ها⟧ dépressifs.",
      "La bonne nouvelle, c'est que la solution est ⟦étonnamment|به‌طرز شگفت‌انگیزی⟧ simple. Passer seulement 10 à 15 minutes à l'extérieur le matin peut avoir un effet ⟦significatif|چشمگیر⟧ sur le ⟦bien-être|سلامت / تندرستی⟧ mental et physique.",
    ],
    morale: {
      fr: "Parfois, l'un des meilleurs remèdes pour améliorer son humeur n'est ni un médicament ni une astuce de productivité : c'est simplement la lumière du soleil. Votre cerveau a plus besoin de la lumière du matin que votre téléphone n'a besoin de votre attention.",
      fa: "گاهی یکی از بهترین درمان‌ها برای بهتر شدن خلق‌وخو، نه دارو است نه ترفند بهره‌وری: فقط نور خورشید است. مغز شما بیشتر به نور صبحگاهی نیاز دارد تا تلفنتان به توجه شما.",
    },
  },
  {
    titre: "« Sois heureux. » — mais est-ce le vrai but ?",
    emoji: "🌍",
    niveau: "B2",
    cat: "general",
    paras: [
      "La société moderne ⟦considère|در نظر می‌گیرد⟧ souvent le ⟦bonheur|خوشبختی⟧ comme le ⟦but ultime|هدف نهایی⟧ de la vie. Pourtant, toutes les cultures ne voient pas la vie de cette manière.",
      "Une récente étude ⟦interculturelle|بین‌فرهنگی⟧ a montré que, dans de nombreux pays ⟦occidentaux|غربی⟧, les gens recherchent un « bonheur ⟦maximal|حداکثری⟧ », ⟦tandis que|در حالی که⟧ au Japon ou au Bhoutan, on préfère souvent une vie ⟦émotionnelle|عاطفی⟧ plus ⟦équilibrée|متعادل⟧. Pour eux, une belle vie ⟦repose aussi sur|متکی است بر⟧ l'⟦harmonie|هماهنگی⟧, le sens, les relations humaines et la ⟦paix intérieure|آرامش درونی⟧.",
      "Les psychologues expliquent même que la recherche constante d'un bonheur extrême peut devenir ⟦épuisante|خسته‌کننده⟧. Parfois, la vie la plus saine n'est pas la plus heureuse, mais la plus ⟦porteuse de sens|معنادار⟧.",
    ],
    morale: {
      fr: "Peut-être que le bonheur n'a jamais été une destination permanente. Peut-être qu'il est simplement le résultat d'une vie vécue avec équilibre, connexion et raison d'être. Toutes les belles vies ne paraissent pas infiniment heureuses de l'extérieur — et c'est tout à fait normal.",
      fa: "شاید خوشبختی هیچ‌وقت یک مقصد همیشگی نبوده است. شاید فقط نتیجه‌ی زندگی‌ای است که با تعادل، ارتباط و هدف زیسته شده. همه‌ی زندگی‌های زیبا از بیرون بی‌نهایت شاد به نظر نمی‌رسند — و این کاملاً طبیعی است.",
    },
  },
  {
    titre: "Pourquoi les matins sont-ils si difficiles ?",
    emoji: "🌅",
    niveau: "B1",
    cat: "general",
    paras: [
      "Pour beaucoup de gens, le matin est le moment le plus ⟦difficile|سخت⟧ de la journée. On se sent ⟦fatigué|خسته⟧, de mauvaise ⟦humeur|خلق‌وخو⟧, et l'idée de sortir du lit ⟦semble|به نظر می‌رسد⟧ presque impossible. Mais pourquoi ?",
      "Pendant la nuit, notre corps se ⟦repose|استراحت می‌کند⟧ et notre cerveau a besoin de temps pour se ⟦réveiller|بیدار شدن⟧ complètement. De plus, beaucoup de personnes regardent leur téléphone juste après le réveil, ce qui ⟦fatigue|خسته می‌کند⟧ l'esprit dès les premières minutes.",
      "Voici une petite ⟦astuce|ترفند⟧ : au lieu de prendre ton téléphone, ouvre la ⟦fenêtre|پنجره⟧ et laisse entrer la lumière du jour. Bois un grand ⟦verre|لیوان⟧ d'eau et ⟦étire-toi|کش‌وقوس برو⟧ quelques minutes. Ces gestes simples ⟦envoient|می‌فرستند⟧ un signal à ton corps : la journée commence !",
    ],
    morale: {
      fr: "Un bon matin ne dépend pas de la chance, mais de quelques petites habitudes. Change ta routine du matin, et tu changeras toute ta journée.",
      fa: "یک صبح خوب به شانس بستگی ندارد، بلکه به چند عادت کوچک. روتین صبحت را عوض کن، تا کل روزت عوض شود.",
    },
  },
  {
    titre: "La magie d'une courte promenade après le repas",
    emoji: "🚶",
    niveau: "B1",
    cat: "general",
    paras: [
      "Après un bon repas, on a souvent ⟦envie de|تمایل به⟧ s'asseoir sur le canapé et de ne rien faire. Pourtant, une courte promenade peut faire des ⟦merveilles|معجزه⟧ pour notre corps et notre esprit.",
      "Les ⟦chercheurs|پژوهشگران⟧ expliquent que marcher dix ou quinze minutes après le repas aide à mieux ⟦digérer|هضم کردن⟧ et à ⟦stabiliser|تثبیت کردن⟧ le taux de sucre dans le sang. C'est particulièrement utile après un repas ⟦copieux|سنگین / مفصل⟧.",
      "Mais les ⟦bienfaits|فواید⟧ ne sont pas seulement physiques. Une petite marche permet aussi de se ⟦détendre|آرام شدن⟧, de prendre l'air et de ⟦libérer|آزاد کردن⟧ l'esprit. C'est un moment simple pour ⟦ralentir|آهسته شدن⟧ et apprécier le ⟦calme|آرامش⟧.",
    ],
    morale: {
      fr: "Pas besoin d'un grand effort pour prendre soin de soi. Parfois, quelques pas suffisent pour se sentir mieux.",
      fa: "برای مراقبت از خودت به تلاش بزرگی نیاز نیست. گاهی چند قدم کافی است تا حالت بهتر شود.",
    },
  },
  {
    titre: "Le manque de sommeil n'est pas qu'une simple fatigue",
    emoji: "😴",
    niveau: "B2",
    cat: "general",
    paras: [
      "Quand on ne dort pas assez, on pense souvent que le seul ⟦problème|مشکل⟧ est la fatigue. Mais le manque de ⟦sommeil|خواب⟧ a des effets beaucoup plus ⟦profonds|عمیق⟧ sur notre corps et notre esprit.",
      "Dormir trop peu ⟦affecte|تأثیر می‌گذارد بر⟧ la mémoire, la concentration et même l'⟦humeur|خلق‌وخو⟧. Une personne fatiguée devient plus facilement ⟦irritable|زودرنج⟧, plus ⟦stressée⟧ et a du mal à prendre de bonnes ⟦décisions|تصمیم‌ها⟧. Le manque de sommeil peut aussi ⟦affaiblir|تضعیف کردن⟧ le système immunitaire.",
      "Les ⟦spécialistes|متخصصان⟧ ⟦recommandent|توصیه می‌کنند⟧ entre sept et huit heures de sommeil par nuit. Mais ce n'est pas seulement une question de ⟦durée|مدت⟧ : la ⟦qualité|کیفیت⟧ du sommeil compte tout autant. Une chambre calme et sombre, sans écran, aide à mieux dormir.",
    ],
    morale: {
      fr: "Le sommeil n'est pas une perte de temps, c'est un investissement pour ta santé. Bien dormir, c'est déjà prendre soin de soi.",
      fa: "خواب اتلاف وقت نیست، بلکه سرمایه‌گذاری برای سلامتی توست. خوب خوابیدن، یعنی همین حالا از خودت مراقبت کردن.",
    },
  },
  {
    titre: "L'art de dire « non » sans culpabiliser",
    emoji: "🙅",
    niveau: "B1",
    cat: "general",
    paras: [
      "Dire « non » est souvent plus ⟦difficile|سخت⟧ qu'il n'y paraît. Beaucoup de personnes ⟦acceptent|می‌پذیرند⟧ des choses qu'elles ne veulent pas faire, simplement pour ne pas ⟦décevoir|ناامید کردن⟧ les autres. Résultat : elles se sentent ⟦fatiguées|خسته⟧ et ⟦frustrées|سرخورده⟧.",
      "Pourtant, dire « non » n'est pas ⟦égoïste|خودخواهانه⟧. C'est une façon de ⟦respecter|احترام گذاشتن⟧ son temps, son énergie et ses ⟦besoins|نیازها⟧. Quand on dit oui à tout, on finit par dire non à soi-même.",
      "On peut refuser avec ⟦gentillesse|مهربانی⟧ et ⟦honnêteté|صداقت⟧. Par exemple : « Merci de penser à moi, mais je ne peux pas cette fois. » Pas besoin de longues ⟦excuses|بهانه‌ها⟧ : une réponse simple et claire ⟦suffit|کافی است⟧.",
    ],
    morale: {
      fr: "Dire « non » aux autres, c'est parfois dire « oui » à soi-même. Poser des limites, c'est un acte de respect envers soi.",
      fa: "گاهی «نه» گفتن به دیگران، یعنی «بله» گفتن به خودت. مرز گذاشتن، نوعی احترام به خویشتن است.",
    },
  },
  {
    titre: "Pourquoi sommes-nous plus à l'aise avec certaines personnes ?",
    emoji: "🤝",
    niveau: "B2",
    cat: "general",
    paras: [
      "Avez-vous remarqué qu'avec certaines personnes, tout ⟦semble|به نظر می‌رسد⟧ facile ? On se sent ⟦à l'aise|راحت⟧, on rit, le temps passe vite. Avec d'autres, au contraire, on se sent ⟦épuisé|خسته⟧ après quelques minutes.",
      "Les psychologues parlent d'⟦énergie sociale|انرژی اجتماعی⟧. Chaque personne a une quantité ⟦limitée|محدود⟧ d'énergie pour les interactions. Certaines relations nous ⟦rechargent|دوباره شارژ می‌کنند⟧, tandis que d'autres nous ⟦vident|خالی می‌کنند⟧.",
      "Cela ne ⟦signifie|به این معنا نیست⟧ pas que les personnes « fatigantes » sont mauvaises. Parfois, il s'agit simplement d'une différence de ⟦rythme|ریتم⟧ ou de ⟦caractère|شخصیت⟧. L'important est de ⟦reconnaître|تشخیص دادن⟧ ce dont on a besoin et de ⟦s'entourer|خود را احاطه کردن⟧ de personnes qui nous font du bien.",
    ],
    morale: {
      fr: "Choisis bien les personnes avec qui tu passes ton temps. Les bonnes relations ne te fatiguent pas : elles te donnent de l'énergie.",
      fa: "آدم‌هایی را که با آن‌ها وقت می‌گذرانی خوب انتخاب کن. روابط خوب خسته‌ات نمی‌کنند: به تو انرژی می‌دهند.",
    },
  },
  {
    titre: "L'écoute véritable, une compétence rare",
    emoji: "👂",
    niveau: "B1",
    cat: "general",
    paras: [
      "Écouter ⟦semble|به نظر می‌رسد⟧ simple, mais écouter ⟦vraiment|واقعاً⟧ est beaucoup plus rare qu'on ne le pense. Souvent, pendant que l'autre parle, on prépare déjà notre ⟦réponse|پاسخ⟧ dans notre tête, sans vraiment l'écouter.",
      "L'écoute ⟦véritable|واقعی⟧ demande de la ⟦patience|صبر⟧ et de l'⟦attention|توجه⟧. Cela signifie ⟦poser|کنار گذاشتن⟧ son téléphone, regarder la personne et ⟦accueillir|پذیرفتن⟧ ses mots sans juger. C'est un ⟦cadeau|هدیه⟧ qu'on offre à l'autre.",
      "Quand on se sent vraiment ⟦écouté|شنیده‌شده⟧, on se sent ⟦compris|درک‌شده⟧ et ⟦respecté|محترم‌شمرده‌شده⟧. C'est l'une des bases d'une bonne relation, que ce soit en ⟦amitié|دوستی⟧, en ⟦famille|خانواده⟧ ou au travail.",
    ],
    morale: {
      fr: "Écouter, ce n'est pas attendre son tour de parler. C'est offrir toute son attention à l'autre, sans rien demander en retour.",
      fa: "گوش‌دادن یعنی منتظر نوبت حرف‌زدنت نباشی. یعنی تمام توجهت را به دیگری بدهی، بی‌آنکه چیزی در عوض بخواهی.",
    },
  },
  {
    titre: "Les erreurs, nos vrais professeurs",
    emoji: "🎓",
    niveau: "B1",
    cat: "general",
    paras: [
      "Personne n'aime se ⟦tromper|اشتباه کردن⟧. Une erreur peut nous faire sentir ⟦honteux|شرمنده⟧ ou ⟦déçus|ناامید⟧. Pourtant, les erreurs sont souvent nos meilleurs ⟦professeurs|معلم‌ها⟧.",
      "Quand on fait une erreur, on ⟦apprend|یاد می‌گیریم⟧ quelque chose de nouveau. On comprend ce qui ne ⟦marche|کار می‌کند⟧ pas et comment ⟦s'améliorer|بهتر شدن⟧. Sans erreurs, il n'y a pas de ⟦progrès|پیشرفت⟧. Même les grands artistes et scientifiques ont ⟦échoué|شکست خورده‌اند⟧ de nombreuses fois avant de ⟦réussir|موفق شدن⟧.",
      "Le ⟦secret|راز⟧, c'est de ne pas avoir ⟦peur|ترس⟧ de se tromper. Au lieu de te ⟦punir|تنبیه کردن⟧ pour une erreur, demande-toi : « Qu'est-ce que je peux apprendre de ça ? » Cette simple question ⟦transforme|تبدیل می‌کند⟧ un échec en ⟦leçon|درس⟧.",
    ],
    morale: {
      fr: "Ne crains pas l'erreur, crains de ne rien apprendre. Chaque faute est une chance de devenir un peu meilleur.",
      fa: "از اشتباه نترس، از یاد نگرفتن بترس. هر خطا فرصتی است برای کمی بهتر شدن.",
    },
  },
  {
    titre: "Pourquoi se comparer aux autres nous épuise",
    emoji: "🪞",
    niveau: "B2",
    cat: "general",
    paras: [
      "Aujourd'hui, il est très facile de se ⟦comparer|مقایسه کردن⟧ aux autres. Sur les réseaux sociaux, on voit des gens qui ⟦semblent|به نظر می‌رسند⟧ plus heureux, plus beaux ou plus ⟦performants|موفق⟧ que nous. Et souvent, cela nous rend ⟦tristes|غمگین⟧.",
      "Le ⟦problème|مشکل⟧, c'est qu'on compare notre vie réelle à une ⟦image|تصویر⟧ parfaite et souvent fausse. Les gens ne montrent que leurs meilleurs moments, jamais leurs ⟦doutes|تردیدها⟧ ni leurs ⟦difficultés|دشواری‌ها⟧.",
      "Se comparer en ⟦permanence|دائماً⟧ nous ⟦épuise|خسته می‌کند⟧ et nous ⟦empêche|مانع می‌شود⟧ d'apprécier ce que nous avons. Chaque personne a son propre ⟦chemin|مسیر⟧ et son propre ⟦rythme|ریتم⟧. Le seul ⟦vrai|واقعی⟧ point de comparaison, c'est la personne que tu étais hier.",
    ],
    morale: {
      fr: "Ne compare pas ton début au milieu de quelqu'un d'autre. Le seul concurrent qui compte, c'est toi-même.",
      fa: "آغاز خودت را با میانه‌ی راه دیگران مقایسه نکن. تنها رقیبی که مهم است، خودِ تو هستی.",
    },
  },
  {
    titre: "Le pouvoir des petits débuts",
    emoji: "🌱",
    niveau: "B1",
    cat: "general",
    paras: [
      "On pense souvent qu'il faut un grand ⟦effort|تلاش⟧ ou un moment parfait pour commencer quelque chose. Alors on ⟦attend|منتظر می‌مانیم⟧... et on ne ⟦commence|شروع می‌کنیم⟧ jamais. Mais la ⟦vérité|حقیقت⟧, c'est que les grandes choses commencent toujours petit.",
      "Lire une seule ⟦page|صفحه⟧ par jour, marcher dix minutes, écrire trois ⟦lignes|خط⟧ : ces petits gestes ⟦semblent|به نظر می‌رسند⟧ ⟦insignifiants|بی‌اهمیت⟧. Pourtant, ⟦répétés|تکرارشده⟧ chaque jour, ils ⟦produisent|تولید می‌کنند⟧ de grands résultats.",
      "Le ⟦secret|راز⟧ n'est pas la ⟦motivation|انگیزه⟧, mais la ⟦régularité|نظم / مداومت⟧. Un petit pas chaque jour vaut mieux qu'un grand pas une seule fois. Commence petit, mais commence ⟦aujourd'hui|امروز⟧.",
    ],
    morale: {
      fr: "Tu n'as pas besoin d'être grand pour commencer, mais tu dois commencer pour devenir grand. Le plus petit pas te rapproche déjà du but.",
      fa: "برای شروع‌کردن لازم نیست بزرگ باشی، اما باید شروع کنی تا بزرگ شوی. کوچک‌ترین قدم، همین حالا تو را به هدف نزدیک‌تر می‌کند.",
    },
  },
  {
    titre: "Pourquoi sommes-nous toujours pressés ?",
    emoji: "⏳",
    niveau: "B2",
    cat: "general",
    paras: [
      "Dans la vie moderne, tout le monde ⟦semble|به نظر می‌رسد⟧ ⟦pressé|عجول⟧. On marche vite, on mange vite, on répond vite. On a toujours l'⟦impression|احساس⟧ de manquer de temps. Mais pourquoi cette ⟦course|دوندگی⟧ permanente ?",
      "La technologie nous a ⟦habitués|عادت داده⟧ à tout obtenir ⟦immédiatement|فوراً⟧. Un message, une réponse, une livraison : tout doit aller vite. Résultat : on perd la ⟦capacité|توانایی⟧ d'attendre et d'⟦apprécier|قدر دانستن⟧ le moment présent.",
      "Pourtant, aller vite ne ⟦signifie|به معنای⟧ pas vivre mieux. Quand on est toujours pressé, on ⟦oublie|فراموش می‌کنیم⟧ de ⟦profiter|لذت بردن⟧ des petites choses. Ralentir, ce n'est pas perdre du temps : c'est ⟦retrouver|دوباره یافتن⟧ le ⟦goût|طعم⟧ de la vie.",
    ],
    morale: {
      fr: "La vie n'est pas une course. Parfois, ralentir est la meilleure façon d'avancer.",
      fa: "زندگی یک مسابقه نیست. گاهی آهسته‌شدن، بهترین راه برای پیش‌رفتن است.",
    },
  },
  {
    titre: "La solitude à l'ère des réseaux sociaux",
    emoji: "📱",
    niveau: "B2",
    cat: "general",
    paras: [
      "Nous sommes plus ⟦connectés|متصل⟧ que jamais. Avec un téléphone, on peut parler à des gens du monde entier en quelques ⟦secondes|ثانیه⟧. Et pourtant, beaucoup de personnes se sentent plus ⟦seules|تنها⟧ qu'avant. Comment est-ce possible ?",
      "Sur les réseaux sociaux, on a des ⟦centaines|صدها⟧ d'« amis », mais peu de ⟦véritables|واقعی⟧ relations. On ⟦échange|تبادل می‌کنیم⟧ des messages, des photos, des « j'aime », mais ces contacts ⟦restent|باقی می‌مانند⟧ souvent ⟦superficiels|سطحی⟧.",
      "Le vrai lien humain ⟦demande|نیاز دارد⟧ du temps, de la ⟦présence|حضور⟧ et de vraies ⟦conversations|گفت‌وگوها⟧. Un appel, un café, un vrai moment ⟦partagé|به‌اشتراک‌گذاشته⟧ valent mieux que cent messages. La technologie est utile, mais elle ne ⟦remplace|جایگزین⟧ pas la chaleur humaine.",
    ],
    morale: {
      fr: "Être connecté n'est pas la même chose qu'être proche. Cherche moins de contacts, mais de vraies connexions.",
      fa: "متصل‌بودن با نزدیک‌بودن یکی نیست. دنبال ارتباط‌های کمتر، اما واقعی‌تر باش.",
    },
  },
  {
    titre: "Acheter moins, être plus heureux ?",
    emoji: "🛍️",
    niveau: "B1",
    cat: "general",
    paras: [
      "La ⟦publicité|تبلیغات⟧ nous répète chaque jour la même chose : pour être heureux, il faut ⟦acheter|خریدن⟧ plus. Un nouveau téléphone, de nouveaux ⟦vêtements|لباس‌ها⟧, de nouveaux objets. Mais est-ce que posséder plus nous rend vraiment plus heureux ?",
      "Les ⟦recherches|پژوهش‌ها⟧ montrent le contraire. Après l'⟦achat|خرید⟧, le ⟦plaisir|لذت⟧ disparaît vite, et on veut déjà autre chose. C'est un ⟦cercle|چرخه⟧ sans fin. Acheter trop peut même créer du ⟦stress|استرس⟧ et du ⟦désordre|بی‌نظمی⟧ dans notre vie.",
      "De plus en plus de personnes ⟦choisissent|انتخاب می‌کنند⟧ de vivre avec moins. Garder seulement ce qui est ⟦utile|مفید⟧ ou ce qu'on ⟦aime|دوست داریم⟧ vraiment apporte un sentiment de ⟦liberté|آزادی⟧ et de ⟦légèreté|سبکی⟧.",
    ],
    morale: {
      fr: "Le bonheur ne se trouve pas dans ce qu'on possède, mais dans ce qu'on apprécie. Avoir moins, c'est parfois vivre mieux.",
      fa: "خوشبختی در آنچه داریم نیست، در آن چیزی است که قدرش را می‌دانیم. کمتر داشتن، گاهی یعنی بهتر زیستن.",
    },
  },
  {
    titre: "Faire des études permet-il de réussir sa carrière ?",
    emoji: "🎓",
    niveau: "B1",
    cat: "tcf",
    paras: [
      "De nos jours, beaucoup de gens pensent que faire de longues ⟦études|تحصیلات⟧ est la clé pour ⟦réussir|موفق شدن⟧ sa carrière professionnelle. Cette idée est très ⟦répandue|رایج⟧, mais est-elle toujours vraie ? À mon avis, les études aident beaucoup, mais elles ne ⟦suffisent|کافی بودن⟧ pas à elles seules.",
      "D'un côté, il est vrai que les études ⟦apportent|به ارمغان می‌آورند⟧ des connaissances et des ⟦compétences|مهارت‌ها⟧ importantes. Un ⟦diplôme|مدرک⟧ ouvre souvent des portes et ⟦facilite|آسان می‌کند⟧ l'accès à de bons emplois. Par exemple, pour devenir médecin ou ingénieur, les études sont ⟦indispensables|ضروری⟧.",
      "D'un autre côté, le diplôme ne fait pas tout. De nombreuses ⟦qualités|ویژگی‌ها⟧ personnelles, comme la ⟦motivation|انگیزه⟧, la ⟦persévérance|پشتکار⟧ et la capacité à travailler en ⟦équipe|تیم⟧, sont aussi essentielles. D'ailleurs, certains ⟦entrepreneurs|کارآفرینان⟧ célèbres ont réussi sans diplôme.",
      "En conclusion, je pense que les études ⟦constituent|تشکیل می‌دهند⟧ un atout important, mais elles ne ⟦garantissent|تضمین می‌کنند⟧ pas le succès. La réussite dépend aussi de l'effort personnel et des ⟦opportunités|فرصت‌ها⟧ que l'on sait ⟦saisir|قاپیدن / استفاده کردن از⟧.",
    ],
    morale: {
      fr: "Les études sont une base solide, mais c'est la volonté et le travail qui construisent une vraie réussite.",
      fa: "تحصیلات یک پایه‌ی محکم است، اما این اراده و تلاش است که موفقیت واقعی را می‌سازد.",
    },
  },
  {
    titre: "Vivre à l'étranger : plus d'avantages ou d'inconvénients ?",
    emoji: "🌍",
    niveau: "B1",
    cat: "tcf",
    paras: [
      "Aujourd'hui, de plus en plus de personnes ⟦choisissent|انتخاب می‌کنند⟧ de vivre à l'⟦étranger|خارج از کشور⟧, que ce soit pour le travail, les études ou simplement par envie de ⟦changement|تغییر⟧. Mais cette expérience ⟦présente|دارد / ارائه می‌دهد⟧ à la fois des avantages et des inconvénients.",
      "Parmi les avantages, vivre à l'étranger permet de ⟦découvrir|کشف کردن⟧ une nouvelle culture, d'apprendre une langue et de ⟦s'ouvrir|باز شدن⟧ l'esprit. C'est aussi une excellente occasion de ⟦développer|توسعه دادن⟧ son ⟦autonomie|استقلال⟧ et sa ⟦confiance en soi|اعتمادبه‌نفس⟧.",
      "Cependant, il y a aussi des ⟦difficultés|دشواری‌ها⟧. Loin de sa famille et de ses amis, on peut ⟦ressentir|احساس کردن⟧ de la ⟦solitude|تنهایی⟧. De plus, la ⟦barrière|مانع⟧ de la langue et les différences culturelles ⟦rendent|می‌کنند⟧ parfois l'⟦adaptation|سازگاری⟧ difficile.",
      "En conclusion, je pense que vivre à l'étranger ⟦présente|دارد⟧ plus d'avantages que d'inconvénients, à condition d'être bien ⟦préparé|آماده⟧. Cette expérience est ⟦enrichissante|غنی‌کننده⟧ et permet de grandir, malgré les ⟦défis|چالش‌ها⟧.",
    ],
    morale: {
      fr: "Vivre à l'étranger n'est pas toujours facile, mais c'est une aventure qui transforme et fait grandir.",
      fa: "زندگی در خارج همیشه آسان نیست، اما تجربه‌ای است که آدم را دگرگون می‌کند و رشد می‌دهد.",
    },
  },
  {
    titre: "Apprendre la langue du pays est-il essentiel pour s'intégrer ?",
    emoji: "🗣️",
    niveau: "B2",
    cat: "tcf",
    paras: [
      "⟪Lorsqu'on s'installe|«وقتی که» — مترادف رسمی‌ترِ quand، مناسب نوشتار آزمونی⟫ dans un nouveau pays, ⟪la question se pose|«مسئله مطرح می‌شود» — کالوکیشن رایج برای شروع بحث⟫. ⟪Faut-il absolument maîtriser|«آیا حتماً باید مسلط شد» — ساختار پرسشی il faut + مصدر⟫ la langue locale pour s'⟦intégrer|ادغام شدن در جامعه⟧ ? ⟪Pour ma part|«از نظر من / به‌سهم خودم» — عبارت کلیدی برای بیان نظر شخصی در آزمون⟫, je suis convaincu que c'est un élément ⟦fondamental|بنیادی / اساسی⟧.",
      "Tout d'abord, la langue est le principal outil de communication. Sans elle, il est difficile d'⟦accomplir les tâches du quotidien|انجام کارهای روزمره (کالوکیشن)⟧, comme faire ses courses, consulter un médecin ou chercher un emploi. La langue permet aussi de ⟦tisser des liens|پیوند برقرار کردن — کالوکیشن مهم (به‌جای faire des amis)⟧ avec les habitants.",
      "De plus, parler la langue du pays est ⟦une marque de respect|نشانه‌ی احترام (کالوکیشن)⟧ envers la culture qui nous ⟦accueille|میزبانی می‌کند / می‌پذیرد⟧. ⟪Cela facilite non seulement... mais aussi|«نه‌تنها... بلکه» — ساختار تأکیدی دو بخشی، عالی برای آزمون⟫ : l'intégration sociale et professionnelle. Une personne qui maîtrise la langue ⟦inspire confiance|اعتماد برمی‌انگیزد — کالوکیشن⟧.",
      "Cependant, l'intégration ne ⟦repose pas uniquement sur|تنها متکی بر... نیست (کالوکیشن + ساختار نفی)⟧ la langue. Le respect des ⟦coutumes|آداب‌ورسوم⟧ et ⟦l'ouverture d'esprit|گشاده‌نظری (کالوکیشن ثابت)⟧ comptent aussi. En conclusion, apprendre la langue est essentiel, ⟪car|«زیرا» — حرف ربط علت، رسمی‌تر از parce que⟫ elle est la clé qui ouvre la porte de la société.",
    ],
    morale: {
      fr: "La langue n'est pas seulement un outil : c'est un pont entre les cultures et la première clé de l'intégration.",
      fa: "زبان فقط یک ابزار نیست: پلی است میان فرهنگ‌ها و نخستین کلید ادغام در جامعه.",
    },
  },
  {
    titre: "Quel rôle joue la télévision dans l'éducation des enfants ?",
    emoji: "📺",
    niveau: "B1",
    cat: "tcf",
    paras: [
      "La ⟦télévision|تلویزیون⟧ occupe une place importante dans la vie de nombreuses familles. Certains la ⟦considèrent|در نظر می‌گیرند⟧ comme un outil ⟦éducatif|آموزشی⟧, tandis que d'autres la voient comme une mauvaise ⟦influence|تأثیر⟧. Quel est donc son véritable rôle dans l'éducation des enfants ?",
      "D'un côté, la télévision peut être ⟦bénéfique|مفید⟧. Les ⟦documentaires|مستندها⟧ et les émissions éducatives ⟦permettent|اجازه می‌دهند⟧ aux enfants de découvrir le monde, d'⟦enrichir|غنی کردن⟧ leur vocabulaire et de ⟦stimuler|تحریک کردن⟧ leur curiosité.",
      "D'un autre côté, un usage ⟦excessif|بیش‌ازحد⟧ peut être ⟦nuisible|مضر⟧. Trop de télévision peut ⟦réduire|کاهش دادن⟧ le temps consacré à la lecture, au sport ou aux ⟦échanges|تبادل‌ها⟧ familiaux. De plus, certains programmes ne sont pas ⟦adaptés|مناسب⟧ aux jeunes.",
      "En conclusion, je pense que la télévision peut jouer un rôle positif, à condition d'être bien ⟦encadrée|نظارت‌شده⟧. Le rôle des parents est ⟦crucial|بسیار مهم⟧ : ils doivent ⟦choisir|انتخاب کردن⟧ les programmes et ⟦limiter|محدود کردن⟧ le temps d'écran.",
    ],
    morale: {
      fr: "La télévision n'est ni bonne ni mauvaise en soi : tout dépend de la manière dont on l'utilise.",
      fa: "تلویزیون نه ذاتاً خوب است نه بد: همه‌چیز به نحوه‌ی استفاده از آن بستگی دارد.",
    },
  },
  {
    titre: "Internet favorise-t-il l'isolement des individus ?",
    emoji: "🌐",
    niveau: "B2",
    cat: "tcf",
    paras: [
      "Internet a ⟦profondément|عمیقاً⟧ transformé notre façon de communiquer. Si certains ⟦affirment|ادعا می‌کنند⟧ qu'il nous ⟦rapproche|نزدیک می‌کند⟧, d'autres ⟦estiment|معتقدند⟧ au contraire qu'il ⟦favorise|تقویت می‌کند⟧ l'⟦isolement|انزوا⟧. Qu'en est-il vraiment ?",
      "Il est vrai qu'Internet peut ⟦éloigner|دور کردن⟧ les gens. Certaines personnes passent des heures devant leur écran et ⟦négligent|غفلت می‌کنند از⟧ les relations réelles. Les ⟦échanges|تبادل‌ها⟧ virtuels ⟦remplacent|جایگزین می‌کنند⟧ parfois les vraies ⟦rencontres|دیدارها⟧, ce qui peut créer un sentiment de ⟦solitude|تنهایی⟧.",
      "Cependant, Internet permet aussi de ⟦maintenir|حفظ کردن⟧ le contact avec des proches ⟦éloignés|دور⟧ et de ⟦rencontrer|ملاقات کردن⟧ des personnes qui partagent les mêmes ⟦centres d'intérêt|علایق⟧. Pour les personnes ⟦timides|خجالتی⟧ ou isolées, il peut même être un véritable ⟦lien|پیوند⟧ social.",
      "En conclusion, je pense qu'Internet n'est pas ⟦responsable|مسئول⟧ de l'isolement en lui-même. Tout dépend de l'usage que l'on en fait. Utilisé avec ⟦modération|اعتدال⟧, il reste un formidable outil de communication.",
    ],
    morale: {
      fr: "Internet rapproche ceux qui sont loin, mais peut éloigner ceux qui sont proches. L'équilibre est la clé.",
      fa: "اینترنت دورها را نزدیک می‌کند، اما می‌تواند نزدیکان را دور کند. تعادل، کلید ماجراست.",
    },
  },
]; 

// ═══════════════════════════════════════════════════════════
//  InnerFrench — پادکست با متن کامل و واژگان کلیکی
//  هر قسمت:
//    num    : شماره‌ی قسمت
//    titre  : عنوان فرانسه
//    titreFa: عنوان فارسی
//    theme  : موضوع
//    audio  : لینک مستقیم mp3 (از سرور InnerFrench)
//    source : لینک صفحه‌ی اصلی (برای ذکر منبع)
//    intro  : معرفی کوتاه فارسی
//    paras  : پاراگراف‌های متن. واژه‌ی دشوار (A2+) به‌صورت ⟦mot|معنی⟧
// ═══════════════════════════════════════════════════════════
const INNERFRENCH = [
  {
    num: 1,
    titre: "Apprendre le français naturellement",
    titreFa: "یادگیری طبیعی زبان فرانسه",
    theme: "یادگیری زبان · نظریه‌ی Krashen",
    audio: "",
    source: "https://innerfrench.com/01-learn-french-naturally/",
    intro: "در این قسمت اول، هوگو خودش را معرفی می‌کند و درباره‌ی نظریه‌ی معروف استیون کراشن صحبت می‌کند: چطور یک زبان را به‌طور طبیعی یاد بگیریم؟ پنج فرضیه‌ی کلیدی که نگاه تو به یادگیری زبان را عوض می‌کند.",
    paras: [
      { fr: "Bonjour et bienvenue dans ce premier épisode. Merci d'être avec moi aujourd'hui, je suis très content que vous écoutiez ce podcast. Pour commencer, je vais vous présenter l'idée de ce podcast. C'est tout simplement pour les gens qui apprennent le français et qui ne ⟦trouvent|پیدا می‌کنند⟧ pas de choses intéressantes à écouter.", fa: "سلام و به اولین قسمت این پادکست خوش آمدید. ممنون که امروز با من هستید، خیلی خوشحالم که به این پادکست گوش می‌دهید. برای شروع، ایده‌ی این پادکست را برایتان توضیح می‌دهم. این پادکست برای کسانی است که فرانسه یاد می‌گیرند و چیز جالبی برای گوش‌دادن پیدا نمی‌کنند." },
      { fr: "Il y a plusieurs ⟦profils|نیمرخ‌ها / انواع⟧ de personnes qui apprennent le français. Pour les ⟦débutants|مبتدی‌ها⟧, il y a plein d'exercices sur internet. Et pour les personnes qui ont déjà un niveau ⟦avancé|پیشرفته⟧, elles peuvent lire et écouter tous les médias français. Mais entre les deux, il y a les personnes de niveau ⟦intermédiaire|متوسط⟧ qui ne peuvent pas encore comprendre les médias français traditionnels, parce que c'est un peu trop ⟦compliqué|پیچیده⟧.", fa: "آدم‌هایی که فرانسه یاد می‌گیرند انواع مختلفی دارند. برای مبتدی‌ها، کلی تمرین در اینترنت هست. و کسانی که سطحشان پیشرفته است، می‌توانند همه‌ی رسانه‌های فرانسوی را بخوانند و گوش کنند. اما بینِ این دو، کسانی هستند با سطح متوسط که هنوز نمی‌توانند رسانه‌های سنتی فرانسوی را بفهمند، چون کمی زیادی پیچیده است." },
      { fr: "Ce que je veux faire avec ce podcast, c'est vous aider à apprendre le français, pas avec de la grammaire mais en écoutant des choses intéressantes. Je vais vous parler de ⟦politique|سیاست⟧, de ⟦société|جامعه⟧, de culture, de la France mais aussi de tous les autres pays.", fa: "کاری که می‌خواهم با این پادکست بکنم، این است که به شما کمک کنم فرانسه یاد بگیرید — نه با گرامر، بلکه با گوش‌دادن به چیزهای جالب. درباره‌ی سیاست، جامعه، فرهنگ، فرانسه و همچنین همه‌ی کشورهای دیگر با شما حرف می‌زنم." },
      { fr: "Je vais me ⟦présenter|معرفی کردن⟧, comme c'est le premier podcast. Je m'appelle Hugo, je suis professeur en Pologne, à Varsovie, ⟦depuis|از / به‌مدتِ⟧ plusieurs années. La première fois qu'on écoute, c'est normal de ne pas tout comprendre. Il faut écouter deux fois, trois fois. Et plus vous écouterez, plus vous comprendrez.", fa: "خودم را معرفی می‌کنم، چون این اولین پادکست است. اسم من هوگوست، چند سالی است که در لهستان، در ورشو، معلم هستم. اولین باری که گوش می‌دهید، طبیعی است که همه‌چیز را نفهمید. باید دو بار، سه بار گوش بدهید. و هرچه بیشتر گوش بدهید، بیشتر می‌فهمید." },
      { fr: "Aujourd'hui, on va parler des langues. Pour commencer, il faut faire la ⟦distinction|تمایز⟧ entre la langue ⟦maternelle|مادری⟧ et une langue ⟦étrangère|خارجی⟧. La langue maternelle, on n'en a qu'une : c'est la langue qu'on apprend quand on est enfant. Les langues étrangères, ce sont les autres langues qu'on apprend en général à l'école.", fa: "امروز درباره‌ی زبان‌ها حرف می‌زنیم. برای شروع، باید بین زبان مادری و زبان خارجی تفاوت قائل شویم. زبان مادری فقط یکی است: زبانی که در کودکی یاد می‌گیریم. زبان‌های خارجی، زبان‌های دیگری هستند که معمولاً در مدرسه یاد می‌گیریم." },
      { fr: "Quand on parle de la ⟦théorie|نظریه⟧ de l'apprentissage des langues, il y a une personne très importante : le professeur Stephen Krashen. Dans les années 80, il a ⟦publié|منتشر کرد⟧ plusieurs livres qui ont beaucoup ⟦influencé|تأثیر گذاشت⟧ la façon dont on enseigne les langues. Grâce à cette théorie, vous allez pouvoir ⟦progresser|پیشرفت کردن⟧ plus rapidement.", fa: "وقتی درباره‌ی نظریه‌ی یادگیری زبان حرف می‌زنیم، یک نفر خیلی مهم است: پروفسور استیون کراشن. در دهه‌ی ۸۰، او چند کتاب منتشر کرد که خیلی بر شیوه‌ی آموزش زبان‌ها تأثیر گذاشت. به لطف این نظریه، شما می‌توانید سریع‌تر پیشرفت کنید." },
      { fr: "Pour comprendre la théorie de Krashen, il y a cinq ⟦hypothèses|فرضیه‌ها⟧. La première hypothèse est centrale. Krashen dit qu'il faut faire la différence entre ⟦acquisition|فراگیری⟧ et ⟦apprentissage|یادگیری⟧. Acquérir une langue, c'est quand vous êtes enfant et que naturellement, ⟦inconsciemment|ناخودآگاه⟧, vous commencez à utiliser une langue pour parler à vos parents. Pour Krashen, c'est la seule façon ⟦efficace|مؤثر⟧.", fa: "برای فهمیدن نظریه‌ی کراشن، پنج فرضیه وجود دارد. فرضیه‌ی اول، فرضیه‌ای مرکزی است. کراشن می‌گوید باید بین «فراگیری» و «یادگیری» تفاوت قائل شویم. فراگیریِ یک زبان یعنی وقتی کودک هستید و به‌طور طبیعی و ناخودآگاه شروع می‌کنید به استفاده از زبان تا با والدینتان حرف بزنید. برای کراشن، این تنها راه مؤثر است." },
      { fr: "L'apprentissage, au contraire, c'est quelque chose de ⟦conscient|آگاهانه⟧. Quand vous êtes à l'école, vous apprenez les ⟦règles|قواعد⟧ de grammaire. Mais Krashen pense que quand on apprend une langue de cette façon, on ne peut pas l'utiliser pour ⟦communiquer|ارتباط برقرار کردن⟧. Pour résumer : il faut apprendre une langue de façon plus naturelle, comme les enfants.", fa: "یادگیری، برعکس، چیزی آگاهانه است. وقتی در مدرسه هستید، قواعد گرامر را یاد می‌گیرید. اما کراشن معتقد است وقتی زبان را این‌طور یاد می‌گیریم، نمی‌توانیم از آن برای ارتباط استفاده کنیم. خلاصه: باید زبان را به‌شکلی طبیعی‌تر یاد بگیریم، مثل بچه‌ها." },
      { fr: "Personnellement, je ne suis pas complètement d'accord. Je pense qu'il faut connaître les règles de grammaire, mais ce n'est pas la ⟦priorité|اولویت⟧. D'abord, il faut essayer de communiquer, même si vous faites des ⟦fautes|اشتباه‌ها⟧. L'important, c'est de ⟦transmettre|انتقال دادن⟧ un message.", fa: "شخصاً کاملاً موافق نیستم. فکر می‌کنم باید قواعد گرامر را بلد بود، اما این اولویت نیست. اول باید سعی کنیم ارتباط برقرار کنیم، حتی اگر اشتباه کنیم. مهم این است که پیامی را منتقل کنیم." },
      { fr: "La deuxième hypothèse, c'est l'hypothèse du ⟦contrôleur|بازرس / کنترل‌گر⟧. Quand on parle une langue étrangère, il y a un contrôleur dans notre tête qui ⟦vérifie|بررسی می‌کند⟧ si on respecte les règles. Si vous êtes ⟦extraverti|برون‌گرا⟧, le contrôleur est faible : vous parlez sans peur. Mais si vous êtes ⟦introverti|درون‌گرا⟧, le contrôleur est très présent : vous réfléchissez trop avant de parler. Pour résumer : il faut ⟦limiter|محدود کردن⟧ l'influence du contrôleur.", fa: "فرضیه‌ی دوم، فرضیه‌ی «کنترل‌گر» است. وقتی زبان خارجی حرف می‌زنیم، یک کنترل‌گر در ذهنمان هست که بررسی می‌کند آیا قواعد را رعایت می‌کنیم. اگر برون‌گرا باشید، کنترل‌گر ضعیف است: بدون ترس حرف می‌زنید. اما اگر درون‌گرا باشید، کنترل‌گر خیلی حاضر است: زیادی فکر می‌کنید پیش از حرف‌زدن. خلاصه: باید تأثیر کنترل‌گر را محدود کنیم." },
      { fr: "Il ne faut pas avoir peur de faire des erreurs, c'est normal. Même les personnes les plus ⟦talentueuses|بااستعداد⟧ font des erreurs. La troisième hypothèse, c'est l'⟦ordre naturel|ترتیب طبیعی⟧ d'acquisition : chaque langue a son propre ordre. Par exemple en français, les ⟦articles|حروف تعریف⟧ sont difficiles à ⟦maîtriser|تسلط یافتن بر⟧ et ça prend très longtemps.", fa: "نباید از اشتباه‌کردن ترسید، طبیعی است. حتی بااستعدادترین آدم‌ها هم اشتباه می‌کنند. فرضیه‌ی سوم، «ترتیب طبیعیِ» فراگیری است: هر زبان ترتیب خاص خودش را دارد. مثلاً در فرانسه، حروف تعریف سخت‌اند و تسلط بر آن‌ها خیلی طول می‌کشد." },
      { fr: "La quatrième hypothèse, c'est l'hypothèse de l'input. Elle dit qu'on apprend une langue quand on essaye de comprendre des ⟦contenus|محتواها⟧. Mais attention : si c'est trop facile, vous n'allez rien apprendre. Il faut essayer de comprendre des choses un peu trop difficiles pour vous, d'un niveau un peu ⟦supérieur|بالاتر⟧ au vôtre. À ce moment-là, votre ⟦cerveau|مغز⟧ va faire un effort et utiliser le ⟦contexte|بافت / زمینه⟧.", fa: "فرضیه‌ی چهارم، فرضیه‌ی «ورودی» (input) است. می‌گوید زبان را وقتی یاد می‌گیریم که سعی کنیم محتواها را بفهمیم. اما حواست باشد: اگر خیلی آسان باشد، چیزی یاد نمی‌گیری. باید سعی کنی چیزهایی را بفهمی که کمی زیادی سخت‌اند، کمی بالاتر از سطح تو. آن‌وقت مغزت تلاش می‌کند و از بافت کمک می‌گیرد." },
      { fr: "Krashen dit aussi que comprendre est plus important que s'exprimer. Mais moi, je ne suis pas d'accord : utiliser une langue pour communiquer permet aussi de faire des progrès. La cinquième hypothèse, c'est le ⟦filtre affectif|فیلتر عاطفی⟧. Quand vous ⟦ressentez|احساس می‌کنید⟧ des émotions positives, c'est plus facile d'apprendre. Si vous êtes ⟦motivé|باانگیزه⟧ et en ⟦confiance|اعتماد⟧, vous êtes dans un meilleur état d'esprit.", fa: "کراشن همچنین می‌گوید فهمیدن از بیان‌کردن مهم‌تر است. اما من موافق نیستم: استفاده از زبان برای ارتباط هم باعث پیشرفت می‌شود. فرضیه‌ی پنجم، «فیلتر عاطفی» است. وقتی احساسات مثبت دارید، یادگیری آسان‌تر است. اگر باانگیزه و بااعتمادبه‌نفس باشید، در حال‌وهوای بهتری هستید." },
      { fr: "Par contre, si vous êtes ⟦stressé|مضطرب⟧ ou ⟦triste|غمگین⟧, votre filtre va ⟦bloquer|مسدود کردن⟧ le message. C'est pour ça que l'⟦ambiance|فضا / جو⟧ est très importante. Si vous apprenez avec un professeur, c'est important d'avoir une bonne relation et de vous sentir en confiance.", fa: "برعکس، اگر مضطرب یا غمگین باشید، فیلترتان پیام را مسدود می‌کند. برای همین فضا خیلی مهم است. اگر با یک معلم یاد می‌گیرید، مهم است که رابطه‌ی خوبی داشته باشید و احساس امنیت کنید." },
      { fr: "La conclusion de cette théorie, c'est qu'il n'est pas très important d'avoir une grande connaissance de la grammaire pour utiliser une langue. C'est un peu ⟦contre-intuitif|خلافِ شهود⟧. Pour acquérir une langue, il faut l'utiliser pour comprendre des messages. Tous les jours, essayez de comprendre quelque chose en français : un article, une vidéo, un email, ⟦n'importe quoi|هر چیزی⟧.", fa: "نتیجه‌ی این نظریه این است که برای استفاده از یک زبان، داشتنِ دانش گسترده‌ی گرامری خیلی مهم نیست. کمی خلاف شهود است. برای فراگیری یک زبان، باید از آن برای فهمیدن پیام‌ها استفاده کنیم. هر روز سعی کنید چیزی به فرانسه بفهمید: یک مقاله، یک ویدیو، یک ایمیل، هر چیزی." },
      { fr: "Ne faites pas confiance à une méthode ⟦centrée sur|متمرکز بر⟧ la grammaire. La grammaire peut vous aider à comprendre une ⟦structure|ساختار⟧, mais ça ne doit pas être la base de votre apprentissage. Le plus important, c'est de trouver des choses qui vous ⟦intéressent|برایتان جالب‌اند⟧, des choses que vous aurez envie de lire et d'écouter.", fa: "به روشی که متمرکز بر گرامر است اعتماد نکنید. گرامر می‌تواند به فهمیدن یک ساختار کمک کند، اما نباید پایه‌ی یادگیری شما باشد. مهم‌ترین چیز این است که چیزهایی پیدا کنید که برایتان جالب‌اند، چیزهایی که دلتان بخواهد بخوانید و گوش بدهید." },
      { fr: "Contrairement à Krashen, moi je pense qu'il faut aussi utiliser la langue pour s'exprimer. Ça permet trois choses : d'abord, ⟦identifier|شناسایی کردن⟧ les problèmes ; ensuite, ⟦vérifier|بررسی کردن⟧ ce que vous avez appris ; et enfin, prendre ⟦confiance en vous|اعتمادبه‌نفس⟧. Quand vous voyez que vous êtes capable de vous exprimer, c'est très ⟦gratifiant|رضایت‌بخش⟧ et ça vous encourage à continuer.", fa: "برخلاف کراشن، من فکر می‌کنم باید از زبان برای بیان خود هم استفاده کرد. این سه فایده دارد: اول، شناسایی مشکلات؛ بعد، بررسی آنچه یاد گرفته‌اید؛ و در آخر، به‌دست‌آوردن اعتمادبه‌نفس. وقتی می‌بینید که می‌توانید خود را بیان کنید، خیلی رضایت‌بخش است و تشویقتان می‌کند ادامه بدهید." },
      { fr: "Voilà, c'est la fin de ce podcast. Merci à tous de m'avoir écouté. La semaine prochaine, nous parlerons des robots : comment vivre avec eux et est-ce qu'ils peuvent nous ⟦remplacer|جایگزین کردن⟧ ? En attendant, je vous invite à essayer de comprendre un maximum de choses et à faire un peu de français tous les jours. Passez une bonne semaine et à bientôt !", fa: "خب، این پایان این پادکست بود. از همه‌ی شما ممنون که گوش دادید. هفته‌ی بعد درباره‌ی ربات‌ها حرف می‌زنیم: چطور با آن‌ها زندگی کنیم و آیا می‌توانند جای ما را بگیرند؟ تا آن موقع، دعوتتان می‌کنم سعی کنید حداکثر چیزها را بفهمید و هر روز کمی فرانسه کار کنید. هفته‌ی خوبی داشته باشید و به‌زودی می‌بینمتان!" },
    ],
  },
  {
    num: 2,
    titre: "Vivre avec les robots",
    titreFa: "زندگی با ربات‌ها",
    theme: "فناوری · جامعه · ربات‌های احساساتی",
    audio: "",
    source: "https://innerfrench.com/02-vivre-avec-robots/",
    intro: "در این قسمت، هوگو درباره‌ی ربات‌ها حرف می‌زند: ربات‌های احساساتی مثل Pepper که احساسات ما را می‌فهمند، ربات‌های کمکی مثل Roméo و Nao، و در پایان، خطر سلاح‌های خودمختار. آیا ربات‌ها می‌توانند جای ما را بگیرند؟",
    paras: [
      { fr: "Bonjour à tous et bienvenue dans ce deuxième épisode du Cottongue podcast. Je suis très content de vous ⟦retrouver|دوباره دیدن⟧ pour ce deuxième podcast, j'espère que vous allez bien, j'espère que vous êtes en ⟦forme|سرحال⟧.", fa: "سلام به همه و به دومین قسمت این پادکست خوش آمدید. خیلی خوشحالم که دوباره برای این پادکست دوم می‌بینمتان، امیدوارم حالتان خوب باشد، امیدوارم سرحال باشید." },
      { fr: "Alors, dans le podcast précédent nous avons parlé des langues et de la théorie du professeur américain Stephen Krashen. Je vous ai donné quelques ⟦conseils|توصیه‌ها⟧ pour être capable d'utiliser une langue. Vous vous ⟦rappelez|به یاد می‌آورید⟧ de mes conseils ? Mon principal conseil, c'était de chercher des choses intéressantes à lire, à regarder, ou à écouter en français. Je vous ai conseillé d'oublier la grammaire et de vous ⟦concentrer|تمرکز کردن⟧ sur la ⟦compréhension|درک / فهم⟧. Si chaque jour, vous essayez de comprendre quelque chose en français : un texte, une vidéo, ou les ⟦paroles|متن آهنگ⟧ d'une chanson, vous allez faire d'⟦énormes|عظیم⟧ progrès. Et le plus important pour rester ⟦motivé|باانگیزه⟧, c'est de trouver des choses qui vous intéressent, des choses que vous avez ⟦envie de|تمایل به⟧ comprendre.", fa: "خب، در قسمت قبلی درباره‌ی زبان‌ها و نظریه‌ی پروفسور آمریکایی استیون کراشن حرف زدیم. چند توصیه به شما دادم تا بتوانید از یک زبان استفاده کنید. توصیه‌هایم را به یاد می‌آورید؟ توصیه‌ی اصلی‌ام این بود که دنبال چیزهای جالب برای خواندن، دیدن یا گوش‌دادن به فرانسه بگردید. توصیه کردم گرامر را فراموش کنید و روی درک تمرکز کنید. اگر هر روز سعی کنید چیزی به فرانسه بفهمید: یک متن، یک ویدیو، یا متن یک آهنگ، پیشرفت عظیمی خواهید کرد. و مهم‌ترین چیز برای باانگیزه ماندن، این است که چیزهایی پیدا کنید که برایتان جالب‌اند، چیزهایی که دلتان بخواهد بفهمید." },
      { fr: "Justement, aujourd'hui, je vous propose d'écouter un podcast en français sur un sujet que je trouve ⟦passionnant|هیجان‌انگیز / شیفته‌کننده⟧. Ce sujet, c'est les robots. Alors, pourquoi les robots me ⟦passionnent|شیفته می‌کنند⟧ ? Parce qu'ils commencent à vivre avec nous, à nous ⟦entourer|احاطه کردن⟧. « Nous entourer », ça veut dire qu'ils sont présents autour de nous : au travail, quand on fait les courses, un peu partout en fait. Mais vous ne les avez pas ⟦remarqués|متوجه شدن⟧ ? Vous n'avez pas remarqué les robots qui sont partout autour de nous ? C'est peut-être parce que, quand je vous dis le mot « robot », vous pensez aux robots des films de science-fiction. Mais un robot, ça ne ressemble pas ⟦forcément|لزوماً⟧ à ça. Un robot ça peut être simplement un ⟦bras|بازو⟧ mécanique comme les bras que l'on trouve dans les ⟦usines|کارخانه‌ها⟧. Vous savez, les usines, ce sont les endroits où on ⟦fabrique|تولید می‌کنند⟧ des produits en très, très grande ⟦quantité|مقدار⟧. Par exemple, une usine de voitures, une usine de téléphones portables. Dans ces usines, les robots ont ⟦remplacé|جایگزین کرده‌اند⟧ les hommes, et les robots qu'on trouve dans ces usines, ils ne ressemblent pas vraiment aux robots qu'on voit dans les films de science-fiction.", fa: "دقیقاً، امروز پیشنهاد می‌کنم به یک پادکست فرانسوی درباره‌ی موضوعی گوش بدهید که به نظرم شیفته‌کننده است. این موضوع، ربات‌هاست. خب، چرا ربات‌ها مرا شیفته می‌کنند؟ چون دارند با ما زندگی می‌کنند، ما را احاطه می‌کنند. «احاطه‌کردن ما» یعنی آن‌ها دور و برمان حاضرند: سر کار، وقتی خرید می‌کنیم، تقریباً همه‌جا. اما متوجهشان نشده‌اید؟ متوجه ربات‌هایی که همه‌جا دور و برمان هستند نشده‌اید؟ شاید برای این است که وقتی کلمه‌ی «ربات» را می‌گویم، به ربات‌های فیلم‌های علمی-تخیلی فکر می‌کنید. اما یک ربات لزوماً شبیه آن نیست. یک ربات می‌تواند فقط یک بازوی مکانیکی باشد، مثل بازوهایی که در کارخانه‌ها هست. می‌دانید، کارخانه‌ها جاهایی هستند که محصولات را در مقدار خیلی زیاد تولید می‌کنند. مثلاً یک کارخانه‌ی خودرو، یک کارخانه‌ی تلفن همراه. در این کارخانه‌ها، ربات‌ها جای انسان‌ها را گرفته‌اند، و ربات‌هایی که در این کارخانه‌ها هستند، واقعاً شبیه ربات‌های فیلم‌های علمی-تخیلی نیستند." },
      { fr: "Alors qu'est-ce que c'est, exactement, un robot ? Un robot, c'est un ⟦automate|ماشین خودکار⟧. C'est une machine qui est ⟦programmée|برنامه‌ریزی‌شده⟧ pour ⟦effectuer|انجام دادن⟧ les ⟦tâches|وظایف⟧ à la place des hommes, pour remplacer les hommes. Je vous ai parlé des usines, eh bien dans les usines, dans les usines ⟦automobiles|خودروسازی⟧, par exemple, qui ⟦produisent|تولید می‌کنند⟧ des voitures, les robots ont presque complètement remplacé les hommes. Sur la ⟦chaîne de production|خط تولید⟧, on trouve ⟦essentiellement|عمدتاً⟧ des robots. Ça, ça n'est pas vraiment nouveau. La nouveauté, l'⟦innovation|نوآوری⟧, c'est que maintenant, les robots peuvent ⟦échanger|تبادل کردن⟧ avec nous. On peut discuter avec eux, avec les robots. Ils peuvent nous ⟦rendre des services|خدمت کردن⟧, ils peuvent nous analyser, nous comprendre.", fa: "خب دقیقاً یک ربات چیست؟ یک ربات، یک ماشین خودکار است. ماشینی که برنامه‌ریزی شده تا وظایف را به‌جای انسان‌ها انجام دهد، تا جای انسان‌ها را بگیرد. درباره‌ی کارخانه‌ها برایتان گفتم، خب در کارخانه‌ها، مثلاً در کارخانه‌های خودروسازی که خودرو تولید می‌کنند، ربات‌ها تقریباً به‌طور کامل جای انسان‌ها را گرفته‌اند. روی خط تولید، عمدتاً ربات می‌بینیم. این واقعاً چیز تازه‌ای نیست. تازگی، نوآوری، این است که حالا ربات‌ها می‌توانند با ما تبادل کنند. می‌شود با آن‌ها گفت‌وگو کرد. می‌توانند به ما خدمت کنند، می‌توانند ما را تحلیل کنند، ما را بفهمند." },
      { fr: "Comment est-ce qu'on va ⟦cohabiter|هم‌زیستی کردن⟧ avec les robots ? Comment allons-nous ⟦partager|به اشتراک گذاشتن⟧ notre vie avec eux ? Est-ce que les robots peuvent tous nous remplacer ? Est-ce qu'on peut imaginer un monde dans quelques années, un ⟦futur|آینده⟧, dans lequel il n'y aura que des robots ? Ça, ça fait penser à un ⟦scénario|سناریو⟧ d'un film de science-fiction, à un scénario ⟦catastrophe|فاجعه⟧. Mais aujourd'hui on va essayer d'⟦apporter|آوردن / ارائه دادن⟧ des réponses un peu plus ⟦sérieuses|جدی⟧, peut-être, pour voir comment nous vivons avec les robots. On va essayer de répondre à toutes ces questions ensemble. Vous êtes prêts ? Alors, c'est parti !", fa: "چطور می‌خواهیم با ربات‌ها هم‌زیستی کنیم؟ چطور قرار است زندگی‌مان را با آن‌ها شریک شویم؟ آیا ربات‌ها می‌توانند جای همه‌ی ما را بگیرند؟ آیا می‌توانیم دنیایی را تا چند سال دیگر تصور کنیم، آینده‌ای که در آن فقط ربات باشد؟ این آدم را به یاد سناریوی یک فیلم علمی-تخیلی می‌اندازد، یک سناریوی فاجعه‌بار. اما امروز سعی می‌کنیم پاسخ‌هایی کمی جدی‌تر ارائه دهیم، شاید، تا ببینیم چطور با ربات‌ها زندگی می‌کنیم. سعی می‌کنیم با هم به همه‌ی این سؤال‌ها پاسخ دهیم. آماده‌اید؟ خب، بزن بریم!" },
      { fr: "Imaginez que vous êtes à la maison, vous êtes chez vous. Votre journée de travail est ⟦terminée|تمام‌شده⟧, et vous êtes un peu fatigué, vous êtes un peu de ⟦mauvaise humeur|بدخلق⟧. Vous avez passé une journée assez ⟦désagréable|ناخوشایند⟧. Peut-être que votre ⟦chef|رئیس⟧ n'a pas été sympa avec vous, peut-être que vous avez eu une ⟦réunion|جلسه⟧ qui était vraiment très, très ⟦ennuyeuse|کسل‌کننده⟧. Bref, votre journée de travail est terminée, vous êtes chez vous et vous êtes plutôt de mauvaise humeur. Et là, il y a Pepper, votre robot ⟦domestique|خانگی⟧, qui vient vous voir. Pepper s'⟦approche|نزدیک می‌شود⟧ de vous et il vous demande si vous allez bien. Alors vous répondez à Pepper : « Écoute Pepper, je ne vais pas très bien, aujourd'hui. J'ai passé une mauvaise journée. » Et là, Pepper, il commence à vous poser des questions pour savoir ce qui ne va pas exactement. Un peu comme un vrai humain. Un peu comme un ami qui serait avec vous et qui vous ⟦poserait|می‌پرسید⟧ des questions pour essayer de vous ⟦remonter le moral|روحیه دادن⟧. « Remonter le moral à quelqu'un », ça veut dire « essayer de lui ⟦redonner|دوباره دادن⟧ de l'énergie pour qu'il soit de bonne humeur. » Par exemple, si vous êtes triste, vous pouvez regarder un film, une ⟦comédie|کمدی⟧, pour vous remonter le moral, pour vous redonner de l'énergie et pour aller mieux. Alors vous êtes chez vous, et votre robot Pepper essaye de vous remonter le moral. Par exemple, il vous propose de regarder un film ou de jouer à un jeu avec lui, il vous montre des vidéos ⟦drôles|خنده‌دار⟧ sur YouTube. Et grâce à ça, grâce à Pepper, après quelques minutes, vous vous sentez déjà mieux, vous allez beaucoup mieux.", fa: "تصور کنید خانه هستید، در خانه‌ی خودتان. روز کاری‌تان تمام شده، و کمی خسته‌اید، کمی بدخلقید. روز نسبتاً ناخوشایندی را گذرانده‌اید. شاید رئیستان با شما مهربان نبوده، شاید جلسه‌ای داشته‌اید که واقعاً خیلی کسل‌کننده بوده. خلاصه، روز کاری‌تان تمام شده، خانه‌اید و نسبتاً بدخلقید. و آنجا، پِپِر هست، ربات خانگی‌تان، که می‌آید سراغتان. پپر به شما نزدیک می‌شود و می‌پرسد حالتان خوب است. پس به پپر جواب می‌دهید: «ببین پپر، امروز حالم خیلی خوب نیست. روز بدی داشتم.» و آنجا، پپر شروع می‌کند به پرسیدن سؤال تا بفهمد دقیقاً چه مشکلی هست. کمی مثل یک انسان واقعی. کمی مثل دوستی که کنارتان باشد و سؤال بپرسد تا سعی کند روحیه‌تان را بالا ببرد. «روحیه دادن به کسی» یعنی «سعی کنی دوباره به او انرژی بدهی تا سرحال شود.» مثلاً اگر غمگین باشید، می‌توانید یک فیلم، یک کمدی ببینید تا روحیه بگیرید، دوباره انرژی بگیرید و حالتان بهتر شود. پس خانه‌اید، و ربات پپرتان سعی می‌کند روحیه‌تان را بالا ببرد. مثلاً پیشنهاد می‌کند فیلمی ببینید یا با او بازی کنید، ویدیوهای خنده‌دار یوتیوب نشانتان می‌دهد. و به لطف این، به لطف پپر، بعد از چند دقیقه، همان‌موقع حالتان بهتر می‌شود، خیلی بهتر می‌شوید." },
      { fr: "Est-ce que c'est difficile à croire pour vous, ce scénario ? Est-ce que c'est difficile à imaginer ? Est-ce que vous avez l'⟦impression|احساس⟧ d'être dans un film de science-fiction ? Eh bien, ⟦pourtant|با این حال⟧, Pepper existe vraiment. Pepper est un robot qui est ⟦produit|تولیدشده⟧ par une entreprise ⟦franco-japonaise|فرانسوی-ژاپنی⟧ qui s'appelle Softbank Robotics. Pepper, il est présent dans certaines banques au Japon pour aider les clients, pour ⟦divertir|سرگرم کردن⟧ les clients, pour leur poser des questions et pour essayer de leur proposer des solutions. Les robots Pepper, ils sont ⟦également|همچنین⟧ présents dans certaines ⟦gares|ایستگاه‌های قطار⟧ en France pour aider les ⟦voyageurs|مسافران⟧ qui, eux aussi, ont des questions.", fa: "آیا این سناریو برایتان باورکردنی سخت است؟ تصورکردنش سخت است؟ احساس می‌کنید در یک فیلم علمی-تخیلی هستید؟ خب، با این حال، پپر واقعاً وجود دارد. پپر رباتی است که یک شرکت فرانسوی-ژاپنی به نام سافت‌بانک رباتیکس تولیدش می‌کند. پپر در برخی بانک‌های ژاپن حاضر است تا به مشتری‌ها کمک کند، آن‌ها را سرگرم کند، از آن‌ها سؤال بپرسد و سعی کند راه‌حل پیشنهاد دهد. ربات‌های پپر همچنین در برخی ایستگاه‌های قطار فرانسه حاضرند تا به مسافرانی که آن‌ها هم سؤال دارند کمک کنند." },
      { fr: "Ces robots, ils font partie d'une nouvelle ⟦catégorie|دسته⟧ de robots, d'un nouveau type de robots. On les appelle « les robots ⟦émotionnels|احساساتی⟧ ». Alors comment ces robots émotionnels fonctionnent-ils ? Les robots émotionnels, ils sont capables de ⟦reconnaître|تشخیص دادن⟧ les principales émotions humaines, d'analyser, de comprendre les émotions humaines, et en fonction de ça, ils ⟦adaptent|تطبیق می‌دهند⟧ leur ⟦comportement|رفتار⟧ pour échanger avec leur utilisateur, avec leur ⟦interlocuteur|طرف صحبت⟧, c'est-à-dire avec la personne qui leur parle.", fa: "این ربات‌ها بخشی از یک دسته‌ی جدید ربات‌ها هستند، یک نوع جدید از ربات‌ها. به آن‌ها «ربات‌های احساساتی» می‌گویند. خب این ربات‌های احساساتی چطور کار می‌کنند؟ ربات‌های احساساتی می‌توانند احساسات اصلی انسانی را تشخیص دهند، تحلیل کنند، احساسات انسانی را بفهمند، و بر اساس آن، رفتارشان را تطبیق می‌دهند تا با کاربرشان، با طرف صحبتشان، یعنی با کسی که با آن‌ها حرف می‌زند، تبادل کنند." },
      { fr: "C'est peut-être un peu difficile d'imaginer qu'un robot est capable de comprendre vos émotions, de comprendre vos ⟦sentiments|احساسات⟧. À votre avis, comment ces robots font-ils pour ⟦identifier|شناسایی کردن⟧ vos émotions ? En fait, ils ont plusieurs ⟦capteurs|حسگرها⟧. Des capteurs, ce sont des choses qui permettent aux robots d'⟦enregistrer|ثبت کردن⟧ des informations. Par exemple, ils ont un capteur ⟦visuel|دیداری⟧ qui leur permet de voir, comme les humains. Ils ont des capteurs ⟦auditifs|شنیداری⟧ qui leur permettent d'écouter, un peu comme s'ils avaient des oreilles. Ils peuvent écouter vos réponses et analyser cette information. Ils peuvent utiliser leurs capteurs visuels, leurs yeux, pour analyser les ⟦expressions|حالات⟧ de votre ⟦visage|چهره⟧, pour voir si vous ⟦souriez|لبخند می‌زنید⟧, si vous êtes en train de rire. Et ils peuvent aussi analyser votre ⟦voix|صدا⟧. Si vous êtes triste, on peut l'entendre dans votre voix. Vous n'avez pas exactement la même voix, vous ne parlez pas exactement de la même façon quand vous êtes triste et quand vous êtes content. Pepper, il peut utiliser toutes ces informations pour comprendre vos émotions, pour identifier vos émotions.", fa: "شاید کمی تصورکردنش سخت باشد که یک ربات بتواند احساساتتان را بفهمد، عواطفتان را درک کند. به نظر شما، این ربات‌ها چطور احساساتتان را شناسایی می‌کنند؟ در واقع، چند حسگر دارند. حسگرها چیزهایی هستند که به ربات‌ها اجازه می‌دهند اطلاعات را ثبت کنند. مثلاً یک حسگر دیداری دارند که می‌گذارد ببینند، مثل انسان‌ها. حسگرهای شنیداری دارند که می‌گذارد بشنوند، انگار که گوش داشته باشند. می‌توانند پاسخ‌هایتان را بشنوند و این اطلاعات را تحلیل کنند. می‌توانند از حسگرهای دیداری‌شان، چشم‌هایشان، استفاده کنند تا حالات چهره‌تان را تحلیل کنند، تا ببینند لبخند می‌زنید، در حال خندیدنید. و می‌توانند صدایتان را هم تحلیل کنند. اگر غمگین باشید، می‌شود آن را در صدایتان شنید. وقتی غمگینید و وقتی خوشحالید صدایتان دقیقاً یکی نیست، دقیقاً یک‌جور حرف نمی‌زنید. پپر می‌تواند از همه‌ی این اطلاعات استفاده کند تا احساساتتان را بفهمد، تا احساساتتان را شناسایی کند." },
      { fr: "En plus, Pepper, il veut essayer de mieux vous connaître, un peu comme un ami. Ça veut dire qu'il va vous poser des questions et il va se rappeler, se ⟦souvenir|به یاد آوردن⟧ de vos réponses. Par exemple, si vous dites à Pepper : « Moi, Pepper, je n'aime pas jouer aux ⟦échecs|شطرنج⟧ ». Eh bien Pepper, il ne va jamais vous proposer de jouer aux échecs. Ou alors si vous dites à Pepper : « Écoute, Pepper, moi je n'aime pas regarder des films qui sont des films d'⟦horreur|ترسناک⟧ », eh bien Pepper ne va jamais vous proposer de regarder des films d'horreur. Ça veut dire que Pepper, il apprend à vous connaître et il ⟦évolue|تکامل می‌یابد⟧ avec vous, petit à petit. Pepper ⟦mémorise|به خاطر می‌سپارد⟧ vos ⟦traits de personnalité|ویژگی‌های شخصیتی⟧, vos ⟦préférences|ترجیحات⟧, et il s'adapte à vos ⟦goûts|سلیقه‌ها⟧ et à vos ⟦habitudes|عادت‌ها⟧. Donc Pepper, finalement, c'est un ⟦compagnon|همراه⟧. C'est quelque chose qui vous ⟦tient compagnie|همراهی می‌کند⟧.", fa: "علاوه بر این، پپر می‌خواهد سعی کند بهتر بشناسدتان، کمی مثل یک دوست. یعنی از شما سؤال می‌پرسد و پاسخ‌هایتان را به یاد می‌سپارد. مثلاً اگر به پپر بگویید: «من، پپر، شطرنج‌بازی دوست ندارم.» خب پپر هیچ‌وقت پیشنهاد نمی‌دهد شطرنج بازی کنید. یا اگر به پپر بگویید: «ببین پپر، من فیلم‌های ترسناک دیدن دوست ندارم»، خب پپر هیچ‌وقت پیشنهاد نمی‌دهد فیلم ترسناک ببینید. یعنی پپر کم‌کم یاد می‌گیرد بشناسدتان و همراه شما تکامل می‌یابد. پپر ویژگی‌های شخصیتی، ترجیحاتتان را به خاطر می‌سپارد، و با سلیقه‌ها و عادت‌هایتان سازگار می‌شود. پس پپر در نهایت یک همراه است. چیزی که همراهی‌تان می‌کند." },
      { fr: "Alors, si vous voulez acheter un Pepper, il va falloir faire des ⟦économies|پس‌انداز⟧ parce que Pepper n'est pas ⟦donné|ارزان⟧. Quand on dit que quelque chose « n'est pas donné », ça veut dire que c'est plutôt cher, que c'est assez cher. Par exemple, on peut dire qu'une voiture n'est pas donnée, ça veut dire que cette voiture est chère, qu'elle ⟦coûte|قیمت دارد⟧ beaucoup d'argent. Combien coûte Pepper ? Eh bien Pepper, il coûte ⟦environ|حدوداً⟧ 1500€. 1500€ plus 200€ d'⟦abonnement|اشتراک⟧ qu'il faut payer chaque mois. Cet abonnement, il sert à ⟦entretenir|نگهداری کردن⟧, à maintenir, à ⟦réparer|تعمیر کردن⟧ le robot. Vous avez une personne qui peut venir réparer votre Pepper si votre Pepper ⟦tombe en panne|خراب می‌شود⟧.", fa: "خب، اگر بخواهید یک پپر بخرید، باید پس‌انداز کنید چون پپر ارزان نیست. وقتی می‌گوییم چیزی «ارزان نیست»، یعنی نسبتاً گران است، نسبتاً پرهزینه است. مثلاً می‌شود گفت یک خودرو ارزان نیست، یعنی آن خودرو گران است، پول زیادی می‌ارزد. پپر چقدر قیمت دارد؟ خب پپر حدوداً ۱۵۰۰ یورو قیمت دارد. ۱۵۰۰ یورو به‌علاوه‌ی ۲۰۰ یورو اشتراک که باید هر ماه پرداخت شود. این اشتراک برای نگهداری، حفظ و تعمیر ربات است. کسی هست که می‌تواند بیاید پپرتان را تعمیر کند اگر پپرتان خراب شود." },
      { fr: "À votre avis, est-ce que c'est possible pour un robot de comprendre les émotions humaines ? On peut penser que les émotions humaines, les sentiments humains, ce sont des choses qui sont très, très ⟦complexes|پیچیده⟧. Il y a des ⟦philosophes|فیلسوفان⟧ qui essaient de comprendre les émotions humaines depuis des ⟦siècles|قرن‌ها⟧ et des siècles. Et pourtant, on a l'impression que certaines émotions sont toujours un ⟦mystère|راز⟧. Alors, si les philosophes n'arrivent pas à comprendre nos émotions, comment est-ce qu'un robot serait capable de le faire ? Pour beaucoup de personnes, c'est très difficile à imaginer. Ils pensent que c'est ⟦impossible|غیرممکن⟧. Ils pensent que les émotions humaines sont trop complexes pour pouvoir être comprises par un robot.", fa: "به نظر شما، آیا ممکن است یک ربات احساسات انسانی را بفهمد؟ می‌شود فکر کرد که احساسات انسانی، عواطف انسانی، چیزهای خیلی پیچیده‌ای هستند. فیلسوفانی هستند که قرن‌ها و قرن‌هاست سعی می‌کنند احساسات انسانی را بفهمند. و با این حال، احساس می‌کنیم بعضی عواطف هنوز یک راز هستند. خب، اگر فیلسوف‌ها نمی‌توانند احساساتمان را بفهمند، چطور یک ربات می‌تواند این کار را بکند؟ برای خیلی‌ها تصورش خیلی سخت است. فکر می‌کنند غیرممکن است. فکر می‌کنند احساسات انسانی زیادی پیچیده‌اند که یک ربات بتواند بفهمدشان." },
      { fr: "Mais moi, je pense que oui, je pense que c'est complètement possible. Il existe un nombre ⟦limité|محدود⟧ d'émotions : la ⟦joie|شادی⟧, la ⟦tristesse|غم⟧, la ⟦peur|ترس⟧, etc., etc. Ces émotions, elles ne sont pas ⟦infinies|بی‌نهایت⟧. Il n'existe pas des milliards et des milliards d'émotions. On pourrait faire une liste de ces émotions. Et certaines émotions qui sont un peu plus complexes, elles sont simplement un ⟦mélange|آمیزه⟧ des émotions de base, des émotions ⟦basiques|پایه⟧. Si on pense à la ⟦nostalgie|دلتنگی / نوستالژی⟧, la nostalgie c'est quand vous pensez à une période passée de votre vie et vous ⟦regrettez|حسرت می‌خورید⟧ un peu cette période. Par exemple, vous êtes nostalgique des années où vous étiez enfant, où vous pouviez faire tout ce que vous vouliez, où vous n'étiez pas ⟦obligé|مجبور⟧ de faire le ménage, de vous occuper de la maison, de travailler. Peut-être que vous êtes nostalgique de cette période. Eh bien la nostalgie, c'est simplement un mélange de ⟦regret|حسرت⟧ et de tristesse. Donc cette émotion, elle n'est pas si complexe. Et il n'existe pas un nombre ⟦illimité|نامحدود⟧ d'émotions.", fa: "اما من فکر می‌کنم بله، فکر می‌کنم کاملاً ممکن است. تعداد محدودی احساس وجود دارد: شادی، غم، ترس، و غیره. این احساسات بی‌نهایت نیستند. میلیاردها میلیارد احساس وجود ندارد. می‌شود فهرستی از این احساسات تهیه کرد. و بعضی احساسات که کمی پیچیده‌ترند، فقط آمیزه‌ای از احساسات پایه هستند. اگر به نوستالژی فکر کنیم، نوستالژی یعنی وقتی به دوره‌ای گذشته از زندگی‌تان فکر می‌کنید و کمی حسرت آن دوره را می‌خورید. مثلاً دلتنگ سال‌هایی هستید که کودک بودید، که می‌توانستید هر کاری بخواهید بکنید، که مجبور نبودید خانه را تمیز کنید، به خانه برسید، کار کنید. شاید دلتنگ آن دوره باشید. خب نوستالژی فقط آمیزه‌ای از حسرت و غم است. پس این احساس آن‌قدرها هم پیچیده نیست. و تعداد نامحدودی احساس وجود ندارد." },
      { fr: "En plus, pour chaque émotion, on peut ⟦attribuer|نسبت دادن⟧ un nombre de ⟦paramètres|پارامترها⟧. Quand on ⟦pleure|گریه می‌کنیم⟧, quand on ⟦verse des larmes|اشک می‌ریزیم⟧, généralement, ça veut dire qu'on est triste. Mais ça peut aussi vouloir dire qu'on est très, très heureux, et qu'on trouve que quelque chose est extrêmement drôle. Il existe une ⟦expression|اصطلاح⟧ en français qui dit « pleurer de rire. » Pleurer de rire, c'est quand vous regardez un film tellement drôle que vous en pleurez, vous pleurez de rire.", fa: "علاوه بر این، به هر احساس می‌شود تعدادی پارامتر نسبت داد. وقتی گریه می‌کنیم، وقتی اشک می‌ریزیم، معمولاً یعنی غمگینیم. اما می‌تواند یعنی خیلی خیلی خوشحالیم هم باشد، و چیزی را به‌شدت خنده‌دار می‌بینیم. در فرانسه اصطلاحی هست که می‌گوید «از خنده گریه‌کردن.» از خنده گریه‌کردن یعنی وقتی فیلمی آن‌قدر خنده‌دار می‌بینید که گریه‌تان می‌گیرد، از خنده گریه می‌کنید." },
      { fr: "Donc on peut ⟦associer|مرتبط کردن⟧ des paramètres à chaque émotion et ensuite les robots peuvent analyser ces différents paramètres pour comprendre vos émotions. Bref, à mon avis, dans le futur, les robots pourront très, très bien nous comprendre, ils pourront très bien comprendre les hommes, et ils pourront comprendre les hommes peut-être même mieux que les hommes ne se comprennent eux-mêmes.", fa: "پس می‌شود به هر احساس پارامترهایی مرتبط کرد و بعد ربات‌ها می‌توانند این پارامترهای مختلف را تحلیل کنند تا احساساتتان را بفهمند. خلاصه، به نظر من، در آینده، ربات‌ها خیلی خیلی خوب می‌توانند ما را بفهمند، خیلی خوب می‌توانند انسان‌ها را بفهمند، و شاید حتی بهتر از خود انسان‌ها که خودشان را می‌فهمند، انسان‌ها را بفهمند." },
      { fr: "En plus du robot Pepper, l'entreprise Softbank Robotics produit d'autres types de robots qui ont d'autres ⟦fonctions|کارکردها⟧. Je vais vous parler un peu de ces autres robots. Un autre robot de l'entreprise Softbank Robotics, c'est un robot qui s'appelle Roméo. Roméo, c'est un robot ⟦humanoïde|انسان‌نما⟧, ça veut dire qu'il ressemble à l'humain, à l'homme. Il a une tête, un corps, deux bras, deux jambes et il ⟦mesure|اندازه‌اش است⟧ 140 cm, il fait 140 cm. La fonction de Roméo, le ⟦but|هدف⟧ de Roméo, c'est d'aider les personnes ⟦âgées|سالمند⟧ ou les personnes ⟦handicapées|معلول⟧. Comment Roméo peut aider les personnes âgées ou les personnes handicapées ? Il peut les aider à ouvrir une porte, à monter un ⟦escalier|پله⟧, ou à ⟦attraper|گرفتن⟧ des objets sur une table. Roméo peut aider ces personnes dans leur vie ⟦quotidienne|روزمره⟧ à faire des choses qui, pour elles, sont assez difficiles parce qu'elles ne peuvent pas se ⟦déplacer|جابه‌جا شدن⟧ facilement par exemple. Mais Roméo, lui, il peut se déplacer facilement et il peut aller chercher des objets et apporter des objets.", fa: "علاوه بر ربات پپر، شرکت سافت‌بانک رباتیکس انواع دیگری از ربات‌ها را تولید می‌کند که کارکردهای دیگری دارند. کمی درباره‌ی این ربات‌های دیگر برایتان می‌گویم. یکی دیگر از ربات‌های شرکت سافت‌بانک رباتیکس، رباتی است به نام رومئو. رومئو یک ربات انسان‌نماست، یعنی شبیه انسان است. یک سر، یک بدن، دو بازو، دو پا دارد و اندازه‌اش ۱۴۰ سانتی‌متر است. کارکرد رومئو، هدف رومئو، کمک به سالمندان یا معلولان است. رومئو چطور می‌تواند به سالمندان یا معلولان کمک کند؟ می‌تواند به آن‌ها کمک کند دری را باز کنند، از پله‌ای بالا بروند، یا اشیایی را روی میز بگیرند. رومئو می‌تواند در زندگی روزمره به این افراد کمک کند کارهایی را انجام دهند که برایشان نسبتاً سخت است چون مثلاً نمی‌توانند راحت جابه‌جا شوند. اما رومئو می‌تواند راحت جابه‌جا شود و می‌تواند برود اشیا را بیاورد." },
      { fr: "Vous pensez que c'est une bonne idée pour aider les personnes âgées ou les personnes handicapées ? D'un côté, ça peut être une bonne idée parce que, dans beaucoup de pays, il n'y a pas assez de personnes pour aider les personnes âgées ou les personnes handicapées. Donc ce robot, ça peut être une vraie aide pour ces personnes dans leur vie quotidienne. Mais, d'un autre côté, on peut penser qu'avec ces robots, nous allons peut-être ⟦abandonner|رها کردن⟧ les personnes âgées et les personnes handicapées parce qu'on pensera : « OK, ces personnes ont des robots pour s'occuper d'elles donc elles n'ont pas besoin d'hommes, d'humains, pour s'occuper d'elles. » Et ça, peut-être que ça va ⟦renforcer|تقویت کردن⟧ leur ⟦solitude|تنهایی⟧, peut-être que ces personnes vont se sentir seules.", fa: "فکر می‌کنید برای کمک به سالمندان یا معلولان ایده‌ی خوبی است؟ از یک طرف، می‌تواند ایده‌ی خوبی باشد چون در خیلی از کشورها آدم کافی برای کمک به سالمندان یا معلولان نیست. پس این ربات می‌تواند کمک واقعی برای این افراد در زندگی روزمره‌شان باشد. اما از طرف دیگر، می‌شود فکر کرد که با این ربات‌ها، شاید سالمندان و معلولان را رها کنیم چون فکر می‌کنیم: «خب، این افراد ربات دارند که مراقبشان باشد پس به انسان نیازی ندارند که مراقبشان باشد.» و این، شاید تنهایی‌شان را تقویت کند، شاید این افراد احساس تنهایی کنند." },
      { fr: "Le troisième robot de l'entreprise Softbank Robotics, il s'appelle Nao. Alors Nao, il est plus petit que les autres robots de cette entreprise parce qu'il mesure 58 cm. Et, Nao, il est utilisé pour l'⟦éducation|آموزش⟧. Nao est capable de ⟦bouger|حرکت کردن⟧, de ⟦sentir|حس کردن⟧, d'entendre, de parler, de voir, et, bien sûr, de se ⟦connecter|متصل شدن⟧ à Internet. Il est utilisé par exemple dans des écoles où il y a des élèves ⟦autistes|اوتیسمی⟧. L'⟦autisme|اوتیسم⟧, c'est un ⟦trouble|اختلال⟧ du comportement qui ⟦modifie|تغییر می‌دهد⟧ les interactions sociales, la communication. Généralement, les personnes autistes ont des problèmes à s'exprimer, à communiquer, et elles ont des problèmes avec leurs interactions sociales quotidiennes. Eh bien Nao, il ⟦encourage|تشویق می‌کند⟧ les enfants autistes à s'exprimer. Nao est très ⟦patient|صبور⟧ et il peut écouter, encourager, les enfants autistes à s'exprimer, à parler avec lui.", fa: "سومین ربات شرکت سافت‌بانک رباتیکس، نائو نام دارد. خب نائو از بقیه‌ی ربات‌های این شرکت کوچک‌تر است چون اندازه‌اش ۵۸ سانتی‌متر است. و نائو برای آموزش استفاده می‌شود. نائو می‌تواند حرکت کند، حس کند، بشنود، حرف بزند، ببیند، و البته به اینترنت متصل شود. مثلاً در مدرسه‌هایی استفاده می‌شود که دانش‌آموزان اوتیسمی دارند. اوتیسم یک اختلال رفتاری است که تعاملات اجتماعی و ارتباط را تغییر می‌دهد. معمولاً افراد اوتیسمی در بیان خود، در ارتباط برقرارکردن مشکل دارند، و در تعاملات اجتماعی روزمره‌شان مشکل دارند. خب نائو کودکان اوتیسمی را تشویق می‌کند که خودشان را بیان کنند. نائو خیلی صبور است و می‌تواند گوش بدهد، کودکان اوتیسمی را تشویق کند که خودشان را بیان کنند، با او حرف بزنند." },
      { fr: "Est-ce que vous pouvez imaginer des robots qui, dans le futur, ⟦remplaceront|جایگزین خواهند کرد⟧ les professeurs, des robots qui prendront la place des professeurs ? Il y aurait plusieurs ⟦avantages|مزایا⟧ à cette situation. Par exemple, les robots ne sont jamais ⟦malades|بیمار⟧, ils ne sont jamais fatigués, pas comme les professeurs. La ⟦qualité|کیفیت⟧ des cours serait toujours la même. Les robots professeurs peuvent travailler 24 heures sur 24 et ils ne font jamais d'⟦erreurs|اشتباه⟧. En plus, il n'y a pas besoin de les payer. Il faut juste les acheter mais ensuite, ils n'ont pas de ⟦salaire|حقوق⟧. Donc les robots professeurs seraient moins chers que les professeurs humains. Mais, quels sont les ⟦inconvénients|معایب⟧, à votre avis ? Peut-être que ces robots, ces robots professeurs, ne seront pas capables de répondre à toutes les questions. Et également, ils ne pourront pas ⟦créer|ایجاد کردن⟧ de relations avec les étudiants. Et pour les étudiants, c'est important d'avoir un ⟦lien|پیوند⟧ avec leur professeur, de sentir que leur professeur les connait, qu'ils peuvent lui parler ⟦librement|آزادانه⟧, qu'ils peuvent échanger avec lui. Mais on ne sait pas, peut-être que dans le futur, dans les universités, il y aura des robots professeurs.", fa: "آیا می‌توانید ربات‌هایی را تصور کنید که در آینده جای معلم‌ها را بگیرند، ربات‌هایی که جای معلم‌ها را خواهند گرفت؟ این وضعیت چند مزیت دارد. مثلاً ربات‌ها هیچ‌وقت بیمار نمی‌شوند، هیچ‌وقت خسته نمی‌شوند، برخلاف معلم‌ها. کیفیت درس‌ها همیشه یکسان خواهد بود. ربات‌های معلم می‌توانند ۲۴ ساعته کار کنند و هیچ‌وقت اشتباه نمی‌کنند. علاوه بر این، نیازی نیست به آن‌ها حقوق داد. فقط باید خریدشان، اما بعد حقوقی ندارند. پس ربات‌های معلم از معلم‌های انسانی ارزان‌تر خواهند بود. اما معایبش به نظر شما چیست؟ شاید این ربات‌ها، این ربات‌های معلم، نتوانند به همه‌ی سؤال‌ها پاسخ دهند. و همچنین نمی‌توانند با دانشجوها رابطه ایجاد کنند. و برای دانشجوها مهم است که با معلمشان پیوند داشته باشند، حس کنند معلمشان می‌شناسدشان، که می‌توانند آزادانه با او حرف بزنند، که می‌توانند با او تبادل کنند. اما نمی‌دانیم، شاید در آینده، در دانشگاه‌ها، ربات‌های معلم باشند." },
      { fr: "Pour finir ce podcast, je vais vous parler d'un dernier type de robot qui, à mon avis, est extrêmement ⟦dangereux|خطرناک⟧. Ces robots, ce sont les ⟦armes autonomes|سلاح‌های خودمختار⟧. Qu'est-ce que c'est qu'une arme autonome ? C'est un robot qui est utilisé dans une ⟦armée|ارتش⟧ et qui est comme un ⟦soldat|سرباز⟧, comme un ⟦militaire|نظامی⟧. On utilise ces robots pour faire la ⟦guerre|جنگ⟧. Par exemple, en Afghanistan et en Irak, on utilise des ⟦drones|پهپادها⟧. Ces drones, ils peuvent déjà ⟦voler|پرواز کردن⟧ tout seul. Ils n'ont pas besoin d'être ⟦contrôlés|کنترل‌شده⟧ par des hommes. On peut leur indiquer un point, leur dire de se rendre à un certain point, et les robots vont voler tout seuls jusqu'à ce point, ils sont ⟦autonomes|خودمختار⟧. Dans quelques années, ils seront capables de ⟦tuer|کشتن⟧ des ⟦cibles|اهداف⟧ humaines, de tuer des humains, des hommes, seuls, sans ⟦intervention|دخالت⟧, sans être contrôlés.", fa: "برای پایان این پادکست، درباره‌ی آخرین نوع ربات حرف می‌زنم که به نظر من به‌شدت خطرناک است. این ربات‌ها، سلاح‌های خودمختار هستند. سلاح خودمختار چیست؟ رباتی است که در یک ارتش استفاده می‌شود و مثل یک سرباز، مثل یک نظامی است. از این ربات‌ها برای جنگیدن استفاده می‌کنند. مثلاً در افغانستان و عراق از پهپادها استفاده می‌کنند. این پهپادها همین حالا هم می‌توانند خودشان پرواز کنند. نیازی نیست انسان‌ها کنترلشان کنند. می‌شود به آن‌ها یک نقطه نشان داد، به آن‌ها گفت به نقطه‌ای مشخص بروند، و ربات‌ها خودشان تا آن نقطه پرواز می‌کنند، خودمختارند. تا چند سال دیگر، می‌توانند اهداف انسانی را بکشند، انسان‌ها را، تنها، بدون دخالت، بدون اینکه کنترل شوند." },
      { fr: "Ça, évidemment, ça pose des problèmes ⟦éthiques|اخلاقی⟧ parce que, dans quelques années, les robots pourront tuer des hommes, comme dans les films de science-fiction catastrophes. Et les robots, ils n'⟦éprouvent|احساس می‌کنند⟧ pas de sentiments, ils n'ont pas d'⟦empathie|همدلی⟧. Autrement dit, les robots peuvent tuer des soldats ou des ⟦civils|غیرنظامیان⟧ sans ⟦distinction|تمایز⟧. Pour un robot, c'est pareil. Parce que les robots n'ont pas d'empathie, ils ne ⟦partagent|به اشتراک می‌گذارند⟧ pas les émotions humaines. Si on dit à un robot de tuer une personne, ce robot va tuer cette personne et il ne va pas ⟦réfléchir|فکر کردن⟧ à son action. Donc ça, c'est un vrai problème ⟦moral|اخلاقی⟧, un vrai problème éthique.", fa: "این، بدیهی است، مشکلات اخلاقی ایجاد می‌کند چون تا چند سال دیگر، ربات‌ها می‌توانند انسان‌ها را بکشند، مثل فیلم‌های علمی-تخیلی فاجعه‌بار. و ربات‌ها احساسی ندارند، همدلی ندارند. به عبارت دیگر، ربات‌ها می‌توانند سربازان یا غیرنظامیان را بدون تمایز بکشند. برای یک ربات فرقی نمی‌کند. چون ربات‌ها همدلی ندارند، احساسات انسانی را به اشتراک نمی‌گذارند. اگر به رباتی بگویند کسی را بکشد، آن ربات آن شخص را می‌کشد و به عملش فکر نمی‌کند. پس این یک مشکل اخلاقی واقعی است، یک مشکل اخلاقی جدی." },
      { fr: "D'ailleurs, il y a beaucoup d'⟦associations|انجمن‌ها⟧ de ⟦scientifiques|دانشمندان⟧, par exemple une association avec le ⟦physicien|فیزیک‌دان⟧ britannique très célèbre Stephen Hawking, qui demandent l'⟦interdiction|ممنوعیت⟧ des armes autonomes. Ils veulent que ces robots soient ⟦interdits|ممنوع⟧. Il y a d'autres types d'armes qui sont déjà interdites, comme les armes ⟦chimiques|شیمیایی⟧. Eh bien, ces associations de scientifiques, elles veulent qu'il n'y ait pas d'armes autonomes. Et moi, je suis d'accord avec ces scientifiques. Je pense que ces armes autonomes, ces robots autonomes, ils représentent une ⟦menace|تهدید⟧ comme l'arme ⟦nucléaire|هسته‌ای⟧, par exemple, ils sont tout aussi dangereux.", fa: "ضمناً، انجمن‌های زیادی از دانشمندان هستند، مثلاً انجمنی با فیزیک‌دان بریتانیایی بسیار معروف استیون هاوکینگ، که خواستار ممنوعیت سلاح‌های خودمختارند. می‌خواهند این ربات‌ها ممنوع شوند. انواع دیگری از سلاح‌ها هستند که همین حالا ممنوع‌اند، مثل سلاح‌های شیمیایی. خب، این انجمن‌های دانشمندان می‌خواهند سلاح خودمختار وجود نداشته باشد. و من با این دانشمندان موافقم. فکر می‌کنم این سلاح‌های خودمختار، این ربات‌های خودمختار، تهدیدی مثل سلاح هسته‌ای هستند، مثلاً، به همان اندازه خطرناک‌اند." },
      { fr: "Pour conclure ce podcast, on peut dire que la vie avec les robots ⟦dépend|بستگی دارد⟧ de la façon dont les entreprises, les entreprises qui produisent ces robots, vont les ⟦programmer|برنامه‌ریزی کردن⟧. Si les entreprises produisent des robots pour nous aider dans notre vie quotidienne, ça peut être une très bonne idée, ça peut être une vraie aide, par exemple pour les personnes handicapées, pour les personnes âgées, de la même façon que les robots ont été une grande aide dans la production ⟦industrielle|صنعتی⟧. Mais les robots peuvent aussi être très dangereux si on les utilise pour faire la guerre, par exemple. Donc ça, ça devrait être interdit, c'est une mauvaise ⟦direction|مسیر⟧, c'est une mauvaise ⟦utilisation|استفاده⟧ des robots.", fa: "برای جمع‌بندی این پادکست، می‌شود گفت زندگی با ربات‌ها به شیوه‌ای بستگی دارد که شرکت‌ها، شرکت‌هایی که این ربات‌ها را تولید می‌کنند، آن‌ها را برنامه‌ریزی می‌کنند. اگر شرکت‌ها ربات‌هایی تولید کنند که در زندگی روزمره به ما کمک کنند، می‌تواند ایده‌ی خیلی خوبی باشد، می‌تواند کمک واقعی باشد، مثلاً برای معلولان، برای سالمندان، به همان شکلی که ربات‌ها در تولید صنعتی کمک بزرگی بوده‌اند. اما ربات‌ها می‌توانند خیلی خطرناک هم باشند اگر مثلاً برای جنگیدن استفاده شوند. پس این باید ممنوع شود، مسیر بدی است، استفاده‌ی بدی از ربات‌هاست." },
      { fr: "Voilà, c'est la fin de ce podcast. Merci à tous de l'avoir écouté. J'espère que ça vous a intéressé, j'espère que vous avez passé un bon moment. Si vous voulez, vous pouvez retrouver la transcription de ce podcast sur mon site internet cottongue.com avec toutes les informations et tout le vocabulaire. Comme d'habitude, je vous ⟦encourage|تشویق می‌کنم⟧ à écouter ce podcast plusieurs fois pour essayer de comprendre un maximum de choses, et je vous ⟦promets|قول می‌دهم⟧ que, si vous continuez de faire ça, vous allez progresser ⟦énormément|به‌شدت⟧, vous allez comprendre de plus en plus de choses, et vous allez apprendre à vous exprimer en français naturellement.", fa: "خب، این پایان این پادکست است. از همه‌ی شما ممنون که گوشش دادید. امیدوارم برایتان جالب بوده باشد، امیدوارم لحظه‌ی خوبی گذرانده باشید. اگر بخواهید، می‌توانید متن این پادکست را در سایتم cottongue.com با همه‌ی اطلاعات و همه‌ی واژگان پیدا کنید. مثل همیشه، تشویقتان می‌کنم این پادکست را چند بار گوش بدهید تا سعی کنید حداکثر چیزها را بفهمید، و قول می‌دهم که اگر این کار را ادامه بدهید، به‌شدت پیشرفت خواهید کرد، بیشتر و بیشتر چیزها را خواهید فهمید، و یاد می‌گیرید خودتان را به‌طور طبیعی به فرانسه بیان کنید." },
      { fr: "Dans le prochain épisode, nous parlerons du ⟦bonheur|خوشبختی⟧ et des pays dans lesquels les gens sont les plus heureux. Merci à tous, merci d'avoir écouté ce podcast et on se retrouve la semaine prochaine avec un nouvel épisode. À bientôt, salut !", fa: "در قسمت بعدی، درباره‌ی خوشبختی و کشورهایی که مردمشان شادترین‌اند حرف می‌زنیم. از همه ممنون، ممنون که این پادکست را گوش دادید و هفته‌ی بعد با یک قسمت جدید می‌بینمتان. به‌زودی، خداحافظ!" },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  شاگردان خصوصی — محتوای اختصاصی هر شاگرد (با رمز)
//  هر شاگرد:
//    nom    : نام شاگرد
//    emoji  : ایموجی
//    note   : یادداشت/توضیح کوتاه
//    items  : آرایه‌ای از محتواها {titre, desc, link?}
// ═══════════════════════════════════════════════════════════
const PRIVE_PASSWORD = "X12X";
const PRIVE = [
  {
    nom: "علیرضا",
    emoji: "👤",
    note: "محتوای اختصاصی و تمرین‌های ویژه‌ی علیرضا.",
    items: [
      // وقتی محتوایی برای علیرضا داشتی، اینجا اضافه می‌شود
      // مثال: { titre: "تمرین هفته ۱", desc: "توضیح کوتاه", link: "FICHIER.html" },
    ],
  },
];
