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
      "Bonjour et bienvenue dans ce premier épisode. Merci d'être avec moi aujourd'hui, je suis très content que vous écoutiez ce podcast. Pour commencer, je vais vous présenter l'idée de ce podcast. C'est tout simplement pour les gens qui apprennent le français et qui ne ⟦trouvent|پیدا می‌کنند⟧ pas de choses intéressantes à écouter.",
      "Il y a plusieurs ⟦profils|نیمرخ‌ها / انواع⟧ de personnes qui apprennent le français. Pour les ⟦débutants|مبتدی‌ها⟧, il y a plein d'exercices sur internet. Et pour les personnes qui ont déjà un niveau ⟦avancé|پیشرفته⟧, elles peuvent lire et écouter tous les médias français. Mais entre les deux, il y a les personnes de niveau ⟦intermédiaire|متوسط⟧ qui ne peuvent pas encore comprendre les médias français traditionnels, parce que c'est un peu trop ⟦compliqué|پیچیده⟧.",
      "Ce que je veux faire avec ce podcast, c'est vous aider à apprendre le français, pas avec de la grammaire mais en écoutant des choses intéressantes. Je vais vous parler de ⟦politique|سیاست⟧, de ⟦société|جامعه⟧, de culture, de la France mais aussi de tous les autres pays.",
      "Je vais me ⟦présenter|معرفی کردن⟧, comme c'est le premier podcast. Je m'appelle Hugo, je suis professeur en Pologne, à Varsovie, ⟦depuis|از / به‌مدتِ⟧ plusieurs années. La première fois qu'on écoute, c'est normal de ne pas tout comprendre. Il faut écouter deux fois, trois fois. Et plus vous écouterez, plus vous comprendrez.",
      "Aujourd'hui, on va parler des langues. Pour commencer, il faut faire la ⟦distinction|تمایز⟧ entre la langue ⟦maternelle|مادری⟧ et une langue ⟦étrangère|خارجی⟧. La langue maternelle, on n'en a qu'une : c'est la langue qu'on apprend quand on est enfant. Les langues étrangères, ce sont les autres langues qu'on apprend en général à l'école.",
      "Quand on parle de la ⟦théorie|نظریه⟧ de l'apprentissage des langues, il y a une personne très importante : le professeur Stephen Krashen. Dans les années 80, il a ⟦publié|منتشر کرد⟧ plusieurs livres qui ont beaucoup ⟦influencé|تأثیر گذاشت⟧ la façon dont on enseigne les langues. Grâce à cette théorie, vous allez pouvoir ⟦progresser|پیشرفت کردن⟧ plus rapidement.",
      "Pour comprendre la théorie de Krashen, il y a cinq ⟦hypothèses|فرضیه‌ها⟧. La première hypothèse est centrale. Krashen dit qu'il faut faire la différence entre ⟦acquisition|فراگیری⟧ et ⟦apprentissage|یادگیری⟧. Acquérir une langue, c'est quand vous êtes enfant et que naturellement, ⟦inconsciemment|ناخودآگاه⟧, vous commencez à utiliser une langue pour parler à vos parents. Pour Krashen, c'est la seule façon ⟦efficace|مؤثر⟧.",
      "L'apprentissage, au contraire, c'est quelque chose de ⟦conscient|آگاهانه⟧. Quand vous êtes à l'école, vous apprenez les ⟦règles|قواعد⟧ de grammaire. Mais Krashen pense que quand on apprend une langue de cette façon, on ne peut pas l'utiliser pour ⟦communiquer|ارتباط برقرار کردن⟧. Pour résumer : il faut apprendre une langue de façon plus naturelle, comme les enfants.",
      "Personnellement, je ne suis pas complètement d'accord. Je pense qu'il faut connaître les règles de grammaire, mais ce n'est pas la ⟦priorité|اولویت⟧. D'abord, il faut essayer de communiquer, même si vous faites des ⟦fautes|اشتباه‌ها⟧. L'important, c'est de ⟦transmettre|انتقال دادن⟧ un message.",
      "La deuxième hypothèse, c'est l'hypothèse du ⟦contrôleur|بازرس / کنترل‌گر⟧. Quand on parle une langue étrangère, il y a un contrôleur dans notre tête qui ⟦vérifie|بررسی می‌کند⟧ si on respecte les règles. Si vous êtes ⟦extraverti|برون‌گرا⟧, le contrôleur est faible : vous parlez sans peur. Mais si vous êtes ⟦introverti|درون‌گرا⟧, le contrôleur est très présent : vous réfléchissez trop avant de parler. Pour résumer : il faut ⟦limiter|محدود کردن⟧ l'influence du contrôleur.",
      "Il ne faut pas avoir peur de faire des erreurs, c'est normal. Même les personnes les plus ⟦talentueuses|بااستعداد⟧ font des erreurs. La troisième hypothèse, c'est l'⟦ordre naturel|ترتیب طبیعی⟧ d'acquisition : chaque langue a son propre ordre. Par exemple en français, les ⟦articles|حروف تعریف⟧ sont difficiles à ⟦maîtriser|تسلط یافتن بر⟧ et ça prend très longtemps.",
      "La quatrième hypothèse, c'est l'hypothèse de l'input. Elle dit qu'on apprend une langue quand on essaye de comprendre des ⟦contenus|محتواها⟧. Mais attention : si c'est trop facile, vous n'allez rien apprendre. Il faut essayer de comprendre des choses un peu trop difficiles pour vous, d'un niveau un peu ⟦supérieur|بالاتر⟧ au vôtre. À ce moment-là, votre ⟦cerveau|مغز⟧ va faire un effort et utiliser le ⟦contexte|بافت / زمینه⟧.",
      "Krashen dit aussi que comprendre est plus important que s'exprimer. Mais moi, je ne suis pas d'accord : utiliser une langue pour communiquer permet aussi de faire des progrès. La cinquième hypothèse, c'est le ⟦filtre affectif|فیلتر عاطفی⟧. Quand vous ⟦ressentez|احساس می‌کنید⟧ des émotions positives, c'est plus facile d'apprendre. Si vous êtes ⟦motivé|باانگیزه⟧ et en ⟦confiance|اعتماد⟧, vous êtes dans un meilleur état d'esprit.",
      "Par contre, si vous êtes ⟦stressé|مضطرب⟧ ou ⟦triste|غمگین⟧, votre filtre va ⟦bloquer|مسدود کردن⟧ le message. C'est pour ça que l'⟦ambiance|فضا / جو⟧ est très importante. Si vous apprenez avec un professeur, c'est important d'avoir une bonne relation et de vous sentir en confiance.",
      "La conclusion de cette théorie, c'est qu'il n'est pas très important d'avoir une grande connaissance de la grammaire pour utiliser une langue. C'est un peu ⟦contre-intuitif|خلافِ شهود⟧. Pour acquérir une langue, il faut l'utiliser pour comprendre des messages. Tous les jours, essayez de comprendre quelque chose en français : un article, une vidéo, un email, ⟦n'importe quoi|هر چیزی⟧.",
      "Ne faites pas confiance à une méthode ⟦centrée sur|متمرکز بر⟧ la grammaire. La grammaire peut vous aider à comprendre une ⟦structure|ساختار⟧, mais ça ne doit pas être la base de votre apprentissage. Le plus important, c'est de trouver des choses qui vous ⟦intéressent|برایتان جالب‌اند⟧, des choses que vous aurez envie de lire et d'écouter.",
      "Contrairement à Krashen, moi je pense qu'il faut aussi utiliser la langue pour s'exprimer. Ça permet trois choses : d'abord, ⟦identifier|شناسایی کردن⟧ les problèmes ; ensuite, ⟦vérifier|بررسی کردن⟧ ce que vous avez appris ; et enfin, prendre ⟦confiance en vous|اعتمادبه‌نفس⟧. Quand vous voyez que vous êtes capable de vous exprimer, c'est très ⟦gratifiant|رضایت‌بخش⟧ et ça vous encourage à continuer.",
      "Voilà, c'est la fin de ce podcast. Merci à tous de m'avoir écouté. La semaine prochaine, nous parlerons des robots : comment vivre avec eux et est-ce qu'ils peuvent nous ⟦remplacer|جایگزین کردن⟧ ? En attendant, je vous invite à essayer de comprendre un maximum de choses et à faire un peu de français tous les jours. Passez une bonne semaine et à bientôt !",
    ],
  },
];
