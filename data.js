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
  { id: "astuces",      label: "نکته‌های طلایی", icon: "✦", color: "#c4502d" },
  { id: "adjectifs",    label: "صفت‌ها",         icon: "◆", color: "#7a5ba8" },
  { id: "quiz",         label: "کوییز",          icon: "?", color: "#2e8b6b" },
  { id: "reactions",    label: "چطور واکنش بدم؟", icon: "❝", color: "#d17b3f" },
  { id: "prononciation", label: "تمرین تلفظ",     icon: "🗣", color: "#3f8a9c" },
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
];
