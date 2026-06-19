// ═══════════════════════════════════════════════════════════
//  بانک محتوای کتابخانه — Hoda KHEDMATI
//  برای افزودن محتوای جدید: فقط یک بلوک به LESSONS اضافه کن.
//  صفحه‌ی اصلی، دسته‌بندی و جستجو خودکار ساخته می‌شوند.
// ═══════════════════════════════════════════════════════════

// دسته‌ها — برای افزودن دسته‌ی جدید فقط یک خط اینجا اضافه کن
const CATEGORIES = [
  { id: "culture", label: "فرهنگ فرانسه", icon: "🥐", color: "#8a2040" },
  { id: "article", label: "آرتیکل", icon: "📰", color: "#5a3b88" },
  { id: "roulette", label: "گردونه‌ی موضوع", icon: "🎡", color: "#7a5ba8", link: "ROULETTE.html" },
  { id: "phrases", label: "جملات کاربردی", icon: "💬", color: "#c77d3a", link: "PHRASES_utiles.html" },
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
    file: "LECON_mind_maps_temps.html",
    title: "🗺️ Mind Maps — زمان‌های فرانسه",
    titleFr: "Mind Maps des temps français A1 → C1",
    category: "grammar", level: "A1–C1",
    tags: ["mind map","زمان","présent","passé","futur","conditionnel","subjonctif"],
    summary: "همهٔ ۶ زمان اصلی با مثال‌های A1 تا C1: Présent / PC / Imparfait / Futur / Conditionnel / Subjonctif — هر کدام با فرمول، سیگنال‌ها، ۵ سطح مثال با ترجمه و نکتهٔ کلیدی.",
  },
  {
    file: "VOCAB_cuisine.html",
    title: "واژگان: ابزار آشپزخانه",
    titleFr: "Les ustensiles de cuisine",
    category: "vocab", level: "A1–B1",
    tags: ["واژگان","آشپزخانه","ustensiles","cuisine"],
    summary: "۵۰+ ابزار آشپزخانه در ۶ دسته: ظرف‌ها / قابلمه و تابه / قاشق و چنگال / ابزار آماده‌سازی / قنادی / برقی. هر کدام با مثال روزمره.",
  },
  {
    file: "CULTURE_desserts_francais.html",
    title: "🍰 دسرهای فرانسوی",
    titleFr: "Les desserts français dans le monde",
    category: "culture", level: "B1–B2",
    tags: ["فرهنگ","dessert","crème brûlée","mille-feuille","éclair"],
    summary: "دسرهای مشهور فرانسوی با هایلایت دوزبانه: crème brûlée، tarte Tatin، mille-feuille، éclair. چرا مشهورند؟ + جهانی‌شدن (ژاپن، کره، کانادا...)",
  },

  {
    file: "CULTURE_macaron.html",
    title: "🍬 Le Macaron — تاریخ و هنر",
    titleFr: "Le macaron : histoire, science et maisons légendaires",
    category: "culture", level: "B1–B2",
    tags: ["فرهنگ","macaron","Ladurée","Pierre Hermé","pâtisserie"],
    summary: "پانصد سال تاریخ ماکارون: از کاترین دو مدیچی تا Pierre Hermé. Ladurée vs Hermé. علم ماکارون. دوزبانه با هایلایت‌های کلیکی.",
  },

  {
    file: "CULTURE_art_de_vivre.html",
    title: "L'Art de Vivre — هنر زندگی فرانسوی",
    titleFr: "L'art de vivre à la française",
    category: "culture", level: "B1–B2",
    tags: ["فرهنگ","art de vivre","gastronomie","mode","café"],
    summary: "هنر زندگی فرانسوی: سفره و غذا، مد پاریسی، فرهنگ کافه، جشن‌های ملی. با واژگان، نقل‌قول‌ها و حقایق جذاب.",
  },

  {
    file: "LECON_mind_maps_temps.html",
    title: "Mind Maps — زمان‌های فرانسه",
    titleFr: "Mind Maps des temps français",
    category: "grammar", level: "A1–B2",
    tags: ["درسنامه","زمان","mind map","présent","passé","futur"],
    summary: "۶ زمان اصلی فرانسه در یک نگاه: Présent / Passé composé / Imparfait / Futur / Conditionnel / Subjonctif — هر کدام با فرمول، سیگنال‌ها، مثال و جدول مقایسه.",
  },
  {
    file: "LECON_h_aspire_muet.html",
    title: "درسنامه: H aspiré یا H muet؟",
    titleFr: "Le H aspiré et le H muet",
    category: "grammar", level: "A2–B2",
    tags: ["درسنامه","h aspiré","h muet","élision","liaison"],
    summary: "تفاوت H muet (l'homme → الیزیون) و H aspiré (le hibou → بدون الیزیون) + جدول ۲۵ کلمه + ترفندهای حفظ + آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_aimer_adorer.html",
    title: "درسنامه: aimer, adorer, détester",
    titleFr: "Aimer, adorer, détester + infinitif ou nom",
    category: "grammar", level: "A1–B1",
    tags: ["درسنامه","aimer","adorer","détester","préférer"],
    summary: "ساختار دقیق این افعال احساسی: + le/la/les یا + مصدر (بدون حرف اضافه)، درجه‌بندی شدت، préférer A à B، préférer que + subjonctif. آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_verbes_prepositions.html",
    title: "درسنامه: فعل‌ها + à یا de",
    titleFr: "Verbes avec les prépositions à et de",
    category: "grammar", level: "A2–B2",
    tags: ["درسنامه","verbes","prépositions","à","de"],
    summary: "۳۰+ فعل با à یا de — دسته‌بندی مفهومی، مثال کامل برای هر کدام، فعل + اسم (parler à vs parler de)، jouer à vs jouer de. آزمون ۸ سؤالی.",
  },
  {
    file: "VOCAB_routine.html",
    title: "واژگان: روتین روزانه",
    titleFr: "La Routine Quotidienne",
    category: "vocab", level: "A2",
    tags: ["واژگان","روتین","se lever","quotidien"],
    summary: "۵۰+ واژهٔ روتین روزانه: صبح (انعکاسی‌ها) + روز + شب + فعل‌های کلیدی (avoir l'habitude de...) + مکالمهٔ نمونه + متن توصیفی کامل.",
  },
  {
    file: "PAGE_examens_tcf.html",
    title: "راهنمای کامل امتحانات TCF / TEF / DELF",
    titleFr: "Guide des examens de français",
    category: "tcf", level: "tous niveaux",
    tags: ["TCF","TEF","DELF","DALF","امتحان","مهاجرت کانادا"],
    summary: "مقایسهٔ TCF vs TEF vs DELF · ساختار TCF Canada (۴ مهارت) · سطوح A1-C2 · نمره‌دهی · استراتژی روز امتحان · منابع رایگان",
  },

  {
    file: "LECON_conditionnel.html",
    title: "درسنامه: Conditionnel Présent",
    titleFr: "Le conditionnel présent",
    category: "grammar", level: "B1–B2",
    tags: ["درسنامه", "conditionnel", "si"],
    summary: "ساخت (Futur+پسوندهای Imparfait) + صرف ۸ فعل بی‌قاعده + ۵ کاربرد (Si / درخواست مؤدبانه / توصیه / خبر غیرمستقیم / آرزو) + ۷۰ تمرین تعاملی در ۵ گروه.",
  },

  {
    file: "LECON_heure.html",
    title: "درسنامه: گفتن ساعت",
    titleFr: "Dire l'heure",
    category: "grammar", level: "A1–B1",
    tags: ["درسنامه", "ساعت", "heure", "temps"],
    summary: "ساعت روزمره (et quart / et demie / moins) و رسمی (0-23) + پرسیدن ساعت + برنامه‌ریزی + ساعت تعاملی بصری + آزمون ۵ سؤالی.",
  },

  {
    file: "LECON_quand_quant.html",
    title: "درسنامه: QUAND یا QUANT؟",
    titleFr: "Quand ou quant ?",
    category: "grammar", level: "A2–B2",
    tags: ["درسنامه", "homophone", "quand quant"],
    summary: "QUAND (وقتی/کِی) در مقابل QUANT À (در موردِ). با ۲۰+ مثال، تله‌های رایج و آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_adverbes.html",
    title: "درسنامه: ۱۰۰ قید پرکاربرد",
    titleFr: "Les 100 adverbes les plus utilisés",
    category: "grammar", level: "A1–B2",
    tags: ["درسنامه", "قید", "adverbe", "ment"],
    summary: "ساخت با -ment + قیدهای زمان/مکان/کمیت/حالت با مثال کامل. کلمات نشانهٔ B2 (considérablement...). آزمون ۵ سؤالی.",
  },
  {
    file: "ARTICLE_voleurs_energie_nozbe.html",
    title: "دزدان انرژی — Nozbe",
    titleFr: "Les voleurs d'énergie les plus fréquents",
    category: "article", level: "B1–B2",
    tags: ["آرتیکل", "روانشناسی", "بهره‌وری"],
    summary: "مقاله‌ای از Nozbe: ۵ دزد انرژی رایج (آدم‌های منفی، تعلل، کار بی‌وقفه، بی‌نظمی، چیزهای غیرقابل کنترل). واژگان و ساختارهای B2.",
  },

  {
    file: "LECON_etre_aller.html",
    title: "درسنامه: J'ai été یا Je suis allé؟",
    titleFr: "J'ai été ou je suis allé ?",
    category: "grammar",
    level: "A2–B1",
    tags: ["درسنامه", "passé composé", "être aller"],
    summary: "تفاوت دقیق j'ai été (بودم/تجربه) و je suis allé (رفتم — حرکت مشخص) با جدول مقایسه، نکات توافق و آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_possessifs.html",
    title: "درسنامه: صفت‌های ملکی",
    titleFr: "Les adjectifs possessifs",
    category: "grammar",
    level: "A1–B1",
    tags: ["درسنامه", "صفت ملکی", "mon ma mes"],
    summary: "جدول کامل صفت‌های ملکی + تله‌های رایج: mon amie (نه ma)، leur/leurs، و جنسیت اسم نه مالک. آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_a_ou_de.html",
    title: "درسنامه: À یا DE بعد از صفت و اسم؟",
    titleFr: "À ou DE en français ?",
    category: "grammar",
    level: "B1–B2",
    tags: ["درسنامه", "حروف اضافه", "à de"],
    summary: "صفت‌های همیشه + à (prêt à، habitué à) و همیشه + de (content de، capable de) + اسم‌ها + à/de. آزمون ۵ سؤالی.",
  },

  {
    file: "LECON_etre_aller.html",
    title: "درسنامه: J'ai été یا Je suis allé؟",
    titleFr: "J'ai été ou je suis allé ?",
    category: "grammar",
    level: "A2–B1",
    tags: ["درسنامه", "passé composé", "être aller"],
    summary: "تفاوت دقیق j'ai été (بودم/تجربه) و je suis allé (رفتم — حرکت مشخص) با جدول مقایسه، نکات توافق و آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_possessifs.html",
    title: "درسنامه: صفت‌های ملکی",
    titleFr: "Les adjectifs possessifs",
    category: "grammar",
    level: "A1–B1",
    tags: ["درسنامه", "صفت ملکی", "mon ma mes"],
    summary: "جدول کامل صفت‌های ملکی + تله‌های رایج: mon amie (نه ma)، leur/leurs، و جنسیت اسم نه مالک. آزمون ۵ سؤالی.",
  },
  {
    file: "LECON_a_ou_de.html",
    title: "درسنامه: À یا DE بعد از صفت و اسم؟",
    titleFr: "À ou DE en français ?",
    category: "grammar",
    level: "B1–B2",
    tags: ["درسنامه", "حروف اضافه", "à de"],
    summary: "صفت‌های همیشه + à (prêt à، habitué à) و همیشه + de (content de، capable de) + اسم‌ها + à/de. آزمون ۵ سؤالی.",
  },

  {
    file: "LECON_prepositions.html",
    title: "درسنامه: حروف اضافه‌ی فرانسه",
    titleFr: "Les prépositions françaises",
    category: "grammar",
    level: "A2–B2",
    tags: ["درسنامه", "حروف اضافه"],
    summary: "حروف اضافهٔ پرکاربرد: à/de/en/dans/sur + فعل‌ها + حروف اضافه + اصطلاحات ثابت. با جدول، مثال و آزمون تعاملی.",
  },
  {
    file: "LECON_prepositions_exercices.html",
    title: "درسنامه: تمرین حروف اضافه",
    titleFr: "Exercices sur les prépositions",
    category: "grammar",
    level: "A2–B1",
    tags: ["درسنامه", "تمرین", "حروف اضافه"],
    summary: "تمرین حروف اضافه در موقعیت‌های واقعی: سفر، زندگی روزمره، اصطلاحات ثابت grâce à/à cause de. با آزمون.",
  },
  {
    file: "LECON_articles.html",
    title: "درسنامه: آرتیکل‌ها در فرانسه",
    titleFr: "Les articles en français",
    category: "grammar",
    level: "A1–B1",
    tags: ["درسنامه", "آرتیکل", "le la les"],
    summary: "سه نوع آرتیکل: défini (le/la)، indéfini (un/une)، partitif (du/de la). انقباض au/du + نفی → de. با آزمون.",
  },
  {
    file: "LECON_sentir.html",
    title: "درسنامه: SENTIR یا SE SENTIR؟",
    titleFr: "Sentir vs Se sentir",
    category: "grammar",
    level: "A2–B1",
    tags: ["درسنامه", "فعل انعکاسی", "sentir"],
    summary: "تفاوت sentir (بوی دادن / حس کردن از بیرون) و se sentir (احساس کردن درباره‌ی خودت). sentir bon vs se sentir bien. با آزمون.",
  },
  {
    file: "LECON_certain_quelque.html",
    title: "درسنامه: CERTAIN یا QUELQUE؟",
    titleFr: "Certain ou quelque ?",
    category: "grammar",
    level: "B1–B2",
    tags: ["درسنامه", "واژگان", "certain quelque"],
    summary: "تفاوت دقیق certain (بعضی‌های مشخص) و quelques (چند تا). ترکیب‌های ثابت: quelque chose، quelque part. با آزمون.",
  },

  {
    file: "ARTICLE_voleurs_energie.html",
    title: "۱۰ دزد انرژی در زندگی",
    titleFr: "10 voleurs de votre énergie",
    category: "article",
    level: "B1–B2",
    premium: false,
    tags: ["آرتیکل", "روانشناسی", "تحلیل"],
    summary: "مقاله‌ای از psychologue.net با تحلیل کامل واژگان، ساختارها و کلوکیشن‌ها — همراه با ترجمه‌ی فارسی روان زیر هر پاراگراف.",
  },
  {
    file: "ARTICLE_tri_dechets.html",
    title: "تفکیک زباله: چرا مهم‌تر از آن چیزی است که فکر می‌کنیم؟",
    titleFr: "Trier ses déchets : pourquoi est-ce si important ?",
    category: "article",
    level: "B1–B2",
    premium: false,
    tags: ["آرتیکل", "تحلیل"],
    summary: "تفکیک زباله — داده‌های واقعی از CITEO: صرفه‌جویی CO₂، اقتصاد چرخشی، بازیافت شیشه و آلومینیم. با تحلیل واژگان و ساختارهای B2.",
  },
  {
    file: "ARTICLE_especes_menacees.html",
    title: "۵ کاری که می‌توانید برای حفظ گونه‌های در خطر انقراض انجام دهید",
    titleFr: "5 choses que vous pouvez faire pour préserver les espèces menacées",
    category: "article",
    level: "B1–B2",
    premium: false,
    tags: ["آرتیکل", "تحلیل"],
    summary: "۵ اقدام عملی برای حفظ گونه‌های در معرض خطر: کاهش ردپای کربن، مصرف مسئولانه، حمایت از انجمن‌ها، آگاه‌سازی، پرهیز از مواد مضر. تحلیل واژگان و ساختارهای B1.",
  },
  {
    file: "ARTICLE_surtourisme.html",
    title: "سورتوریسم: چه تأثیری بر شهرها و محیط زیست دارد؟",
    titleFr: "Le surtourisme : quel impact sur les villes et sur l'environnement ?",
    category: "article",
    level: "B1–B2",
    premium: false,
    tags: ["آرتیکل", "تحلیل"],
    summary: "سورتوریسم: تأثیر گردشگری انبوه بر شهرها (فشار مسکن، اجاره‌بها) و محیط زیست (CO₂، اکوسیستم). واژگان پیشرفته‌ی B2 با تحلیل.",
  },
  {
    file: "ARTICLE_ville_campagne.html",
    title: "زندگی در شهر یا روستا: مزایا و معایب",
    titleFr: "Vivre en ville ou à la campagne : avantages et inconvénients",
    category: "article",
    level: "B1–B2",
    premium: false,
    tags: ["آرتیکل", "تحلیل"],
    summary: "شهر یا روستا؟ مقایسه‌ی کامل: امکانات شهر vs آرامش روستا + مدل ترکیبی جدید. واژگان مقایسه‌ای B1-B2 با تحلیل.",
  },

  {
    file: "LECON_consequence.html",
    title: "درسنامه: بیان نتیجه",
    titleFr: "Exprimer la conséquence",
    category: "grammar",
    level: "B1–B2",
    premium: false,
    tags: ["درسنامه", "نتیجه", "حروف ربط"],
    summary: "درسنامه‌ی کامل بیان نتیجه در فرانسه — از donc و du coup تا par conséquent و ساختارهای si...que. با فهرست تیترها، مثال و آزمون.",
  },
  {
    file: "LECON_adjectifs_adverbes.html",
    title: "درسنامه: صفت یا قید؟",
    titleFr: "Adjectifs et adverbes",
    category: "grammar",
    level: "A2–B1",
    premium: false,
    tags: ["درسنامه", "صفت", "قید"],
    summary: "درسنامه‌ی کامل تفاوت صفت و قید — RAPIDE/VITE، BON/BIEN، MEILLEUR/MIEUX، جای صفت، ساخت قید با -ment. با فهرست تیترها و آزمون.",
  },
  {
    file: "LECON_genre.html",
    title: "درسنامه: جنسیت اسم‌ها (مذکر/مؤنث)",
    titleFr: "Le genre en français",
    category: "grammar",
    level: "A1–B1",
    premium: false,
    tags: ["درسنامه", "جنسیت", "مذکر مؤنث"],
    summary: "درسنامه‌ی کامل جنسیت اسم‌ها — نشانه‌های مذکر و مؤنث، تبدیل، و اسم‌های فریبنده. با قانون‌های کاربردی، فهرست تیترها و آزمون.",
  },
  {
    file: "LECON_concession.html",
    title: "درسنامه: تضاد و امتیاز",
    titleFr: "Concession et opposition",
    category: "grammar",
    level: "B1–B2",
    premium: false,
    tags: ["درسنامه", "تضاد", "subjonctif"],
    summary: "درسنامه‌ی کامل بیان تضاد و امتیاز — mais، pourtant، bien que (+subjonctif)، malgré، en revanche. با فهرست تیترها و آزمون.",
  },
  {
    file: "LECON_questions.html",
    title: "درسنامه: سؤال پرسیدن",
    titleFr: "Poser des questions",
    category: "grammar",
    level: "A1–B1",
    premium: false,
    tags: ["درسنامه", "سؤال", "est-ce que"],
    summary: "درسنامه‌ی کامل سؤال پرسیدن — سه سطح (محاوره/معمولی/رسمی)، کلمات پرسشی، quel و qui/que، و اشتباه‌های رایج. با فهرست تیترها و آزمون.",
  },

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
    file: "VOCAB_drogues_avance.html",
    title: "واژگان مواد مخدر، قانون و جامعه — پیشرفته",
    titleFr: "Drogues, loi & société",
    category: "vocab",
    level: "پیشرفته (B2–C1)",
    premium: false,
    tags: ["جامعه", "قانون", "سطح پیشرفته"],
    theme: "جامعه و قانون",
    keywords: ["مواد مخدر", "قانون", "جامعه", "سلامت"],
    summary: "واژگان موضوع مواد مخدر، قانون و جامعه در سطح پیشرفته — با تعریف، مترادف و مثال. مناسب موضوعات بحث‌برانگیز TCF.",
  },
  {
    file: "QUIZ_adjectifs_b2.html",
    title: "۵۰ صفت استدلالی B2 — کارت‌های آزمون",
    titleFr: "50 Adjectifs Argumentatifs B2",
    category: "vocab",
    level: "پیشرفته (B2)",
    premium: false,
    tags: ["صفت", "استدلال", "آزمون TCF"],
    theme: "نگارش و گفتار استدلالی",
    keywords: ["صفت", "استدلال", "B2", "آزمون"],
    summary: "۵۰ صفت کلیدی برای نگارش و گفتار استدلالی در سطح B2 — به‌صورت کارت با مثال. ابزار عالی برای تکلیف‌های TCF Canada.",
  },
  {
    file: "QUIZ_adverbes_b2.html",
    title: "۵۰ قید B2 — کارت‌های آزمون",
    titleFr: "50 Adverbes B2",
    category: "vocab",
    level: "پیشرفته (B2)",
    premium: false,
    tags: ["قید", "استدلال", "آزمون TCF"],
    theme: "نگارش و گفتار استدلالی",
    keywords: ["قید", "B2", "آزمون", "نگارش"],
    summary: "۵۰ قید کلیدی برای غنی‌کردن جملات در سطح B2 — به‌صورت کارت با مثال. مناسب تقویت بیان در TCF Canada.",
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
    titre: "Se rendre compte — یکی از پرکاربردترین افعال دوضمیره",
    sens: "«se rendre compte (de)» یعنی «متوجه شدن / پی بردن / به خود آمدن». یک فعل دوضمیره است و ضمیرش هیچ‌وقت حذف نمی‌شود.",
    correct: "Je me rends compte de mon erreur.",
    faux: "Je rends compte de mon erreur.",
    note: "این فعل <b>دوضمیره</b> است: همیشه با ضمیر انعکاسی (me, te, se, nous, vous) می‌آید. نکته‌ی مهم: <b>se rendre compte DE</b> + اسم، یا <b>se rendre compte QUE</b> + جمله. در محاوره، «Tu te rends compte ?!» یعنی «باورت می‌شه؟! / فکرشو بکن!» برای بیان تعجب یا ناباوری.",
    conjugaison: [
      { p: "je", form: "me rends compte" },
      { p: "tu", form: "te rends compte" },
      { p: "il/elle", form: "se rend compte" },
      { p: "nous", form: "nous rendons compte" },
      { p: "vous", form: "vous rendez compte" },
      { p: "ils/elles", form: "se rendent compte" },
    ],
    exemples: [
      { fr: "Je me rends compte de mon erreur.", fa: "متوجه اشتباهم می‌شوم." },
      { fr: "Tu te rends compte de ce qu'il a osé faire ?!", fa: "باورت می‌شه چه جرئتی کرد؟!" },
      { fr: "Maintenant que tu te rends compte de ton erreur, tu dois t'excuser.", fa: "حالا که به اشتباهت پی بردی، باید عذرخواهی کنی." },
      { fr: "Rends-toi compte ! (امری)", fa: "فکرشو بکن! / تصور کن!" },
    ],
    passe: {
      intro: "در زمان گذشته (passé composé)، این فعل با <b>être</b> صرف می‌شود (چون دوضمیره است). نکته‌ی ظریف: چون مفعول مستقیم نیست (compte ثابت است)، اسم مفعول (participe) <b>توافق نمی‌کند</b> و همیشه «rendu compte» می‌ماند.",
      ex: { fr: "Je me suis rendu compte que mes parents allaient divorcer.", fa: "متوجه شدم که والدینم می‌خواهند طلاق بگیرند." },
    },
    quiz: [
      { q: "Je ___ compte de mon erreur. (présent)", options: ["me rends", "rends", "me rendre"], correct: 0, note: "حال: «je me rends compte» — ضمیر me اجباری است." },
      { q: "Hier, elle ___ compte de la situation. (passé)", options: ["s'est rendu", "a rendu", "se rend"], correct: 0, note: "گذشته: با être صرف می‌شود → «elle s'est rendu compte». توجه: rendu توافق نمی‌کند." },
      { q: "Vous ___ compte de ce problème ? (présent)", options: ["vous rendez", "rendez", "vous rendre"], correct: 0, note: "حال، دوم‌شخص جمع: «vous vous rendez compte»." },
      { q: "Nous ___ compte trop tard. (passé composé)", options: ["nous sommes rendu", "avons rendu", "nous rendons"], correct: 0, note: "گذشته با être: «nous nous sommes rendu compte»." },
      { q: "Tu ___ compte de ton erreur. (présent)", options: ["te rends", "rends", "tes rends"], correct: 0, note: "حال، دوم‌شخص مفرد: «tu te rends compte»." },
    ],
    source: "بر اساس Lawless French + منابع گرامری معتبر",
  },
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
const ECHAUFFEMENT = [
  {
    fr: "Une bête noire se baigne dans une baignoire noire",
    fa: "یک جانورِ سیاه در یک وانِ سیاه آب‌تنی می‌کند",
    focus: ["b / bê", "noire / baignoire"],
    note: "تمرین صدای «بِ» و قافیه‌ی noire/baignoire. مواظب باش b و gn را قاطی نکنی!"
  },
  {
    fr: "Il fait noir ce soir sur le trottoir, bonsoir",
    fa: "امشب پیاده‌رو تاریک است، شب‌بخیر",
    focus: ["oir (وار)", "soir / trottoir"],
    note: "همه‌ی کلمه‌ها به صدای «وار» ختم می‌شوند — مثل یک آهنگ!"
  },
  {
    fr: "Son chat Sasha chante sa chanson sans son",
    fa: "گربه‌اش ساشا، ترانه‌اش را بی‌صدا می‌خواند",
    focus: ["s / ch", "son / sans / chanson"],
    note: "سخت‌ترین! تمرین تفاوت «س» و «ش». آرام شروع کن."
  },
];

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
    titre: "Le silence qui parle",
    emoji: "🤫",
    niveau: "B1",
    cat: "general",
    paras: [
      "Dans notre société ⟦moderne|مدرن⟧, le silence est devenu une ⟦denrée rare|کالای کمیاب⟧. Partout, des sons nous ⟦envahissent|به ما هجوم می‌آورند⟧ : la musique dans les magasins, les notifications sur nos téléphones, les voix à la télévision. On a l'impression que le silence est quelque chose à ⟦éviter|پرهیز کردن⟧, presque une chose ⟦gênante|ناراحت‌کننده⟧.",
      "Pourtant, les ⟦psychologues|روانشناسان⟧ et les ⟦neuroscientifiques|عصب‌شناسان⟧ nous disent le contraire. Le silence n'est pas un ⟦vide|خلاء / خلوت⟧ — c'est un espace ⟦précieux|ارزشمند⟧ pour notre cerveau. ⟪Quand on se tait, le cerveau ne s'arrête pas de travailler|«se taire» = ساکت شدن (فعل انعکاسی) — contraire de parler⟫. Au contraire, il commence à ⟦intégrer|یکپارچه کردن / جذب کردن⟧ les informations reçues, à ⟦consolider|تثبیت کردن⟧ les souvenirs et à ⟦résoudre|حل کردن⟧ des problèmes.",
      "Il y a aussi une dimension ⟦sociale|اجتماعی⟧ très intéressante dans le silence. Dans certaines cultures, comme au Japon ou dans les pays nordiques, le silence entre deux personnes est vu comme un signe de ⟦confiance|اعتماد⟧ et de ⟦complicité|همدلی / رفاقت⟧. On n'a pas besoin de remplir chaque moment par des mots. En France, au contraire, les silences dans une conversation peuvent parfois ⟦mettre mal à l'aise|ناراحت کردن⟧. On dit d'ailleurs qu'un ⟦ange passe|فرشته‌ای عبور می‌کند — اصطلاح فرانسوی برای سکوت ناخوشایند⟧ quand un silence ⟦s'installe|برقرار می‌شود⟧ brusquement.",
      "Dans le monde professionnel, la capacité à ⟦supporter|تحمل کردن⟧ le silence est souvent un signe de ⟦maturité|بلوغ / پختگی⟧. Lors d'une négociation, ⟪la personne qui parle en premier rompt souvent son avantage|«rompre» = شکستن / از دست دادن — اصطلاح مذاکره⟫. Savoir attendre, savoir laisser un silence ⟦s'étirer|کشیده شدن⟧, c'est un pouvoir. Les grands ⟦orateurs|سخنرانان⟧ savent aussi utiliser les silences pour donner plus de ⟦poids|وزن / تأثیر⟧ à leurs mots.",
      "Sur le plan ⟦médical|پزشکی⟧, des études montrent que l'exposition prolongée au bruit peut provoquer ⟦de l'hypertension|فشار خون بالا⟧, des problèmes de ⟦sommeil|خواب⟧ et même des ⟦troubles de la concentration|اختلال تمرکز⟧. À l'inverse, quelques minutes de silence par jour peuvent ⟦réduire|کاهش دادن⟧ le ⟦cortisol|کورتیزول — هورمون استرس⟧, l'hormone du stress. Certains ⟦thérapeutes|درمانگران⟧ recommandent même de ⟦pratiquer|تمرین کردن⟧ le « bain de silence » — s'asseoir sans stimulation pendant 15 à 20 minutes.",
      "Et toi, ⟦as-tu peur|می‌ترسی⟧ du silence ? Est-ce que tu ⟦allumes|روشن می‌کنی⟧ immédiatement la télévision ou la musique quand tu rentres chez toi ? Si oui, ⟪essaie pendant une semaine de t'offrir 10 minutes de silence quotidien|«s'offrir» = به خود هدیه دادن — ساختار زیبا⟫. Tu pourrais être ⟦surpris|شگفت‌زده⟧ de ce que tu découvres en toi-même.",
    ],
    morale: { fr: "Le silence n'est pas l'absence de bruit, c'est la présence de soi.", fa: "سکوت غیبتِ صدا نیست، حضورِ خودت است." }
  },
  {
    titre: "Apprendre à dire non",
    emoji: "🙅",
    niveau: "B1",
    cat: "general",
    paras: [
      "⟦Refuser|رد کردن / نه گفتن⟧ une demande, ⟦décliner|رد کردن (رسمی‌تر)⟧ une invitation, dire non à quelqu'un que l'on aime — pour beaucoup d'entre nous, c'est une des choses les plus difficiles dans la vie sociale. On a peur de ⟦blesser|آسیب رساندن به / آزردن⟧ l'autre, de paraître ⟦égoïste|خودخواه⟧, de ⟦rompre|شکستن (رابطه)⟧ une relation. Alors on dit oui, même quand on veut dire non.",
      "Mais cette ⟦incapacité|ناتوانی⟧ à dire non a un prix ⟦élevé|بالا / سنگین⟧. Quand on ⟦accepte|قبول می‌کند⟧ des choses que l'on ne veut pas faire, on accumule du ⟦ressentiment|کینه / دلخوری⟧. On finit par en vouloir à l'autre, non pas parce qu'il a fait quelque chose de mal, mais parce qu'on n'a pas ⟦osé|جرأت کرده⟧ lui dire non. ⟪C'est une forme de violence passive envers soi-même|«envers soi-même» = نسبت به خودت — عبارت مهم⟫.",
      "Les ⟦psychologues|روانشناسان⟧ parlent souvent de la notion de ⟦limites|حدود / مرزها⟧ — en anglais, on dit « boundaries ». Avoir des limites claires, c'est savoir ce qu'on accepte et ce qu'on n'accepte pas. Ce n'est pas de l'⟦égoïsme|خودخواهی⟧, c'est du ⟦respect de soi|احترام به خود⟧. Et paradoxalement, les personnes qui savent dire non ⟦inspirent|الهام می‌بخشند / الهام‌بخشند⟧ souvent plus le respect que celles qui ⟦cèdent|تسلیم می‌شوند⟧ à toutes les demandes.",
      "Apprendre à dire non, c'est aussi une question de ⟦formulation|فرمول‌بندی / نحوه‌ی بیان⟧. Il y a une grande différence entre « Non, je ne veux pas » (direct et parfois brutal) et « Je ne peux pas m'engager là-dessus pour l'instant » (⟦honnête|صادقانه⟧ mais ⟦nuancé|ظریف / باملاحظه⟧). On peut aussi proposer une ⟦alternative|گزینهٔ جایگزین⟧ : « Je ne peux pas cette semaine, mais la semaine prochaine, ça ⟦me conviendrait|برایم مناسب است — conditionnel مؤدبانه⟫. »",
      "Dans les cultures méditerranéennes et orientales, dont la France est une ⟦héritière|وارث / میراث‌بر⟧ partielle, le non direct peut être perçu comme ⟦impoli|بی‌ادبانه⟧. C'est pourquoi les Français ont souvent des façons indirectes de refuser : « C'est compliqué », « Je vais voir », « Peut-être ». Ces ⟦formules|فرمول‌ها / عبارات⟧ permettent de ne pas dire non frontalement tout en faisant comprendre que la réponse est ⟦négative|منفی⟧.",
      "En fin de compte, dire non est un ⟦acte d'amour|اقدام محبت⟧ — envers soi-même, mais aussi envers l'autre. ⟪Quand on dit un oui qui cache un non|اصطلاح مجازی: وقتی بله‌ای که نه را پنهان می‌کند⟫, on ⟦trompe|فریب می‌دهیم⟧ la relation. Le non honnête est plus ⟦sain|سالم⟧ que le oui ⟦forcé|اجباری⟧. Apprendre à dire non avec ⟦douceur|ملایمت⟧ mais avec ⟦fermeté|قاطعیت⟧, c'est une compétence qui ⟦s'apprend|یاد گرفته می‌شود⟧ et qui change profondément la qualité de nos relations.",
    ],
    morale: { fr: "Dire non à l'autre, c'est souvent dire oui à soi-même.", fa: "نه گفتن به دیگری، اغلب یعنی بله گفتن به خودت." }
  },
  {
    titre: "Le pouvoir des habitudes",
    emoji: "🔄",
    niveau: "B2",
    cat: "general",
    paras: [
      "On ⟦estime|تخمین می‌زند⟧ que près de 45 % de nos actions quotidiennes sont des ⟦habitudes|عادت‌ها⟧ — des comportements ⟦automatiques|خودکار⟧ que nous ⟦exécutons|اجرا می‌کنیم⟧ sans vraiment y penser. Se brosser les dents, prendre son café le matin, vérifier son téléphone en se réveillant : tout cela se fait ⟦mécaniquement|مکانیکی / بدون فکر⟧. La question est : est-ce une bonne chose ou une mauvaise chose ?",
      "Le cerveau humain est un organe ⟦extraordinairement|به‌طور فوق‌العاده⟧ efficace. Pour ⟦économiser|صرفه‌جویی کردن⟧ de l'énergie, il ⟦automatise|خودکار می‌کند⟧ les tâches ⟦répétitives|تکراری⟧. Ce processus, qu'on appelle la ⟦«boucle de l'habitude»|حلقهٔ عادت⟧, fonctionne en trois étapes : un ⟦déclencheur|محرک / عامل⟧, une ⟦routine|روتین⟧, et une ⟦récompense|پاداش⟧. Par exemple : tu vois ton téléphone (déclencheur) → tu le prends et vérifies les notifications (routine) → tu ressens une ⟦légère satisfaction|رضایت اندک⟧ (récompense).",
      "⟪Ce qui rend les habitudes si puissantes, c'est aussi ce qui les rend si difficiles à changer|ساختار c'est... que... — تأکید با relative⟫. Quand une habitude est ⟦ancrée|ریشه‌دوانده / رسوخ کرده⟧ dans notre cerveau, le circuit ⟦neuronal|عصبی⟧ correspondant devient très ⟦solide|محکم⟧. Les ⟦neuroscientifiques|عصب‌شناسان⟧ disent que les vieilles habitudes ne disparaissent jamais vraiment — elles restent ⟦en sommeil|در خواب / غیرفعال⟧, prêtes à ⟦se réactiver|دوباره فعال شدن⟧ au moindre ⟦stimulus|محرک⟧.",
      "Comment alors créer de nouvelles habitudes et ⟦se débarrasser|خلاص شدن از⟧ des mauvaises ? Les recherches montrent qu'il ne faut pas essayer de ⟦supprimer|حذف کردن⟧ une habitude, mais la ⟦remplacer|جایگزین کردن⟧. Garder le même déclencheur et la même récompense, mais changer la routine. Si tu as l'habitude de manger du sucre quand tu es ⟦stressé|تحت استرس⟧ (déclencheur : stress → routine : manger du chocolat → récompense : soulagement), essaie de ⟦substituer|جایگزین کردن⟧ le chocolat par une promenade courte.",
      "⟦Par ailleurs|علاوه بر این⟧, la recherche sur les habitudes a mis en lumière un concept important : les « ⟦habitudes clés|عادت‌های کلیدی⟧ » (keystone habits en anglais). Ce sont des habitudes qui ⟦entraînent|به‌دنبال خود می‌کشانند⟧ d'autres habitudes positives. Par exemple, les personnes qui commencent à faire de l'exercice régulièrement ⟦tendent à|تمایل دارند به⟧ mieux manger, à mieux dormir, et même à être plus ⟦productives|مولد / کارآمد⟧ au travail. Une seule habitude peut ⟦déclencher|راه‌اندازی کردن⟧ tout un ⟦effet domino|اثر دومینو⟧.",
      "Pour ⟦modifier|تغییر دادن⟧ une habitude, il est aussi crucial de comprendre son ⟦environnement|محیط⟧. Notre ⟦entourage|محیط اطراف / اطرافیان⟧ et notre espace physique ⟦influencent|تأثیر می‌گذارند⟧ énormément nos comportements. Si tu veux lire plus, ⟦place|قرار بده⟧ un livre sur ta table de nuit. Si tu veux moins utiliser ton téléphone le soir, ⟦charge-le|شارجش کن⟧ dans une autre pièce. Modifier l'environnement est souvent plus ⟦efficace|مؤثر⟧ que ⟦faire appel à|توسل جستن به⟧ sa seule ⟦volonté|اراده⟧.",
      "En ⟦définitive|در نهایت / به طور قطع⟧, nous ne sommes pas les ⟦esclaves|بردگان⟧ de nos habitudes — nous en sommes les ⟦créateurs|سازندگان⟧. Prendre conscience de ses automatismes, comprendre leur ⟦mécanique|مکانیزم⟧, et agir intentionnellement pour les ⟦façonner|شکل دادن⟧ : c'est là que réside notre ⟦liberté|آزادی⟧. ⟪Comme le disait Aristote : «Nous sommes ce que nous faisons de manière répétée.|نقل قول مشهور ارسطو⟫ L'excellence n'est donc pas un acte, mais une ⟦habitude|عادت⟧. »",
    ],
    morale: { fr: "Nos habitudes définissent qui nous sommes, mais nous pouvons toujours en choisir de nouvelles.", fa: "عادت‌هایمان تعریف می‌کنند که چه کسی هستیم، اما می‌توانیم همیشه عادت‌های جدیدی انتخاب کنیم." }
  },
  {
    titre: "Vivre loin de sa famille",
    emoji: "✈️",
    niveau: "B1",
    cat: "general",
    paras: [
      "Pour des millions de personnes dans le monde, vivre ⟦loin de ses proches|دور از نزدیکان⟧ est une réalité quotidienne. Que ce soit pour des raisons professionnelles, ⟦académiques|دانشگاهی⟧ ou ⟦économiques|اقتصادی⟧, des gens ⟦quittent|ترک می‌کنند⟧ leur pays, leur ville, leur ⟦village natal|زادگاه⟧ pour construire une vie ailleurs. Ce choix — car c'est souvent un choix — vient avec ses joies et ses ⟦douleurs|دردها⟧.",
      "Le sentiment le plus ⟦universel|جهانی⟧ dans cette situation est la ⟦nostalgie|نوستالژی / دلتنگی⟧. Ce mot vient du grec : «nostos» (retour) et «algos» (douleur). La nostalgie, c'est littéralement la douleur du retour ⟦impossible|غیرممکن⟧ ou ⟦différé|به‌تأخیر افتاده⟧. Elle se manifeste dans les petites choses : l'odeur d'un plat qu'on ne trouve pas ici, une chanson qui ⟦ramène|بازمی‌گرداند⟧ des souvenirs, une fête de famille à laquelle on ⟦ne peut pas assister|نمی‌توان شرکت کرد⟧.",
      "Mais vivre loin de sa famille n'est pas uniquement une source de souffrance. ⟪Pour beaucoup, c'est aussi une opportunité de découvrir qui l'on est vraiment|که واقعاً چه کسی هستیم — relative avec «qui»⟫, en dehors du ⟦regard|نگاه / دیدگاه⟧ familial. Loin de ses parents, on prend des décisions seul, on ⟦fait face|مواجه می‌شود⟧ aux problèmes sans filet de ⟦sécurité|ایمنی⟧, on ⟦développe|توسعه می‌دهد⟧ une ⟦résilience|تاب‌آوری⟧ et une ⟦confiance en soi|اعتماد به نفس⟧ qu'on n'aurait peut-être jamais ⟦acquises|کسب کرده⟧ autrement.",
      "La ⟦technologie|فناوری⟧ a profondément changé l'expérience de la distance. Les ⟦appels vidéo|تماس تصویری⟧, les messages instantanés, les photos partagées en temps réel : tout cela ⟦réduit|کاهش می‌دهد⟧ le ⟦fossé|شکاف / فاصله⟧ géographique. ⟪Pourtant, aucune technologie ne peut remplacer la chaleur d'une étreinte|«étreinte» = آغوش گرفتن⟫ ou le simple fait de ⟦partager|مشارکت کردن / به اشتراک گذاشتن⟧ un repas. La présence physique reste ⟦irremplaçable|جایگزین‌ناپذیر⟧.",
      "Les ⟦psychologues|روانشناسان⟧ recommandent plusieurs stratégies pour ⟦maintenir|حفظ کردن⟧ des liens ⟦forts|قوی⟧ malgré la distance. La première est la ⟦régularité|منظم بودن / نظم⟧ : pas besoin de longues conversations, mais un contact ⟦régulier|منظم⟧, même court, ⟦nourrit|تغذیه می‌کند / تقویت می‌کند⟧ la relation. La deuxième est le ⟦rituel|آیین / رسم⟧ partagé : regarder le même film le même soir, jouer ensemble en ligne, cuisiner la même recette en même temps. Ces petits ⟦rituels|آیین‌ها⟧ créent un sentiment de ⟦proximité|نزدیکی⟧ malgré les kilomètres.",
      "Il y a aussi la question du ⟦retour|بازگشت⟧. Beaucoup de personnes qui ont quitté leur pays témoignent d'une expérience ⟦paradoxale|متناقض / پارادوکسیکال⟧ : après plusieurs années à l'étranger, quand elles rentrent, elles se sentent ⟦étrangères|بیگانه⟧ dans leur propre pays. Elles ont changé, leur ⟦environnement|محیط⟧ a changé. On appelle ça le ⟦«choc du retour»|شوک بازگشت⟧ ou «reverse culture shock». Ce n'est pas une anomalie — c'est la preuve que l'expérience de l'étranger a vraiment ⟦transformé|تغییر داده⟧ la personne.",
      "En fin de compte, vivre loin de sa famille apprend une chose ⟦essentielle|ضروری / اساسی⟧ : l'amour ne dépend pas de la ⟦proximité géographique|نزدیکی جغرافیایی⟧. ⟪Les liens les plus forts sont ceux qui résistent au temps et à la distance|روابطی که در برابر زمان و فاصله مقاوم‌اند⟫. Et parfois, c'est justement l'absence qui ⟦révèle|آشکار می‌کند⟧ à quel point les personnes nous sont ⟦chères|عزیز⟧.",
    ],
    morale: { fr: "La distance mesure l'amour : ce qui résiste à l'absence était vraiment là.", fa: "فاصله عشق را می‌سنجد: آنچه در برابر دوری مقاوم می‌ماند، واقعی بود." }
  },

  {
    titre: "Ma routine du matin",
    emoji: "☀️",
    niveau: "A1",
    cat: "general",
    court: true,
    paras: [
      "Le matin, je ⟦me réveille|بیدار می‌شوم⟧ à sept heures. Je ⟪prends mon petit-déjeuner|صبحانه می‌خورم — prendre با وعده‌ی غذایی⟫ et je bois un café.",
      "Ensuite, je ⟦m'habille|لباس می‌پوشم⟧ et je pars au travail. J'aime bien mes matins ⟦tranquilles|آرام⟧."
    ],
    morale: { fr: "Une bonne journée commence par un bon matin.", fa: "یک روز خوب با یک صبح خوب شروع می‌شود." }
  },
  {
    titre: "J'aime le week-end",
    emoji: "🎉",
    niveau: "A1",
    cat: "general",
    court: true,
    paras: [
      "Le week-end, je ne ⟦travaille|کار می‌کنم⟧ pas. Je ⟦me repose|استراحت می‌کنم⟧ et je vois mes amis.",
      "Parfois, je ⟪vais au cinéma|به سینما می‌روم — aller à⟫ ou je ⟦me promène|قدم می‌زنم⟧ dans le parc. C'est ⟦agréable|دلپذیر⟧ !"
    ],
    morale: { fr: "Le repos est aussi important que le travail.", fa: "استراحت به‌اندازه‌ی کار مهم است." }
  },
  {
    titre: "Mon plat préféré",
    emoji: "🍝",
    niveau: "A2",
    cat: "general",
    court: true,
    paras: [
      "Mon plat préféré, ⟦c'est|این است⟧ les pâtes. C'est simple, ⟦rapide|سریع⟧ et délicieux.",
      "Je les prépare avec de la ⟦sauce tomate|سس گوجه⟧ et du fromage. Quand j'ai des invités, j'⟪en fais toujours|همیشه درست می‌کنم — en جایگزین پاستا⟫."
    ],
    morale: { fr: "Les plaisirs simples sont souvent les meilleurs.", fa: "لذت‌های ساده اغلب بهترین‌اند." }
  },
  {
    titre: "Pourquoi j'apprends le français",
    emoji: "🇫🇷",
    niveau: "A2",
    cat: "general",
    court: true,
    paras: [
      "J'apprends le français ⟦parce que|چون⟧ j'aime cette langue. Elle est ⟦belle|زیبا⟧ et musicale.",
      "Je veux ⟪pouvoir voyager|بتوانم سفر کنم — pouvoir + مصدر⟫ en France et parler avec les gens. Chaque jour, je ⟦progresse|پیشرفت می‌کنم⟧ un peu."
    ],
    morale: { fr: "Chaque petit pas compte dans l'apprentissage.", fa: "در یادگیری، هر قدم کوچک ارزش دارد." }
  },

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
  },,
  {
    titre: "Pourquoi la musique nous donne-t-elle des frissons ?",
    emoji: "🎵",
    niveau: "B1",
    cat: "general",
    paras: ["Vous écoutez votre chanson préférée et soudain, vous avez ⟦la chair de poule|مورمور شدن / سیخ شدن موها (اصطلاح)⟧. Ce phénomène ⟦étrange|عجیب⟧ touche presque tout le monde. Mais pourquoi la musique ⟪nous fait-elle|faire + مصدر = «باعث شدن». ساختار سببی⟫ cet effet ?", "Les scientifiques expliquent que la musique ⟦active|فعال می‌کند⟧ la même zone du cerveau que le plaisir. Quand une mélodie nous ⟦émeut|به هیجان می‌آورد (émouvoir)⟧, notre corps ⟦libère|آزاد می‌کند⟧ de la dopamine, l'hormone du bonheur.", "⟪Ce qui est fascinant|«آنچه شگفت‌انگیز است» — ce qui در نقش فاعل⟫, c'est que ce frisson ⟦dépend de|dépendre DE = «بستگی داشتن به»⟧ nos souvenirs. Une chanson liée à un beau moment ⟦nous touche|ما را متأثر می‌کند⟧ plus profondément."],
    morale: { fr: "La musique n'est pas seulement du son : c'est une émotion partagée.", fa: "موسیقی فقط صدا نیست؛ یک احساس مشترک است." },
  },
  {
    titre: "Le silence est-il devenu un luxe ?",
    emoji: "🤫",
    niveau: "B2",
    cat: "general",
    paras: ["Dans nos villes modernes, le bruit est ⟦partout|همه‌جا⟧ : voitures, notifications, conversations. Le vrai silence ⟪est devenu|devenir (گذشته با être) = «شده است»⟫ presque ⟦introuvable|نایاب / غیرقابل‌یافتن⟧.", "⟦Des études|مطالعاتی⟧ montrent que le silence ⟪permet au cerveau de|permettre À qqn DE = «به کسی اجازه دادن که». à + de⟫ se reposer et de ⟦se régénérer|بازسازی شدن (فعل دوضمیره)⟧. Quelques minutes de calme par jour ⟦réduisent|کاهش می‌دهند⟧ le stress.", "⟪Au lieu de|«به‌جای اینکه» + مصدر⟫ remplir chaque instant de bruit, ⟦il vaut mieux|بهتر است (il vaut mieux + مصدر)⟧ apprendre à ⟦apprécier|قدر دانستن⟧ le silence. C'est ⟦un cadeau|یک هدیه⟧ que l'on peut s'offrir gratuitement."],
    morale: { fr: "Dans un monde bruyant, savoir se taire est une forme de sagesse.", fa: "در دنیایی پرهیاهو، سکوت‌کردن نوعی خرد است." },
  },
  {
    titre: "Pourquoi rêvons-nous la nuit ?",
    emoji: "💤",
    niveau: "B1",
    cat: "general",
    paras: ["Chaque nuit, notre cerveau ⟦crée|می‌سازد⟧ des histoires ⟦étonnantes|شگفت‌انگیز⟧. Parfois on ⟦s'en souvient|se souvenir (en = de ce rêve) — فعل دوضمیره با de⟧, parfois non. Mais ⟪à quoi servent|servir À = «به چه کاری می‌آید». پرسش با à⟫ les rêves ?", "Selon les chercheurs, rêver ⟦aide à|aider À + مصدر = «کمک کردن به»⟧ ranger nos souvenirs et à ⟦gérer|مدیریت کردن⟧ nos émotions. Le rêve serait une sorte de ⟦« nettoyage »|پاک‌سازی⟧ mental pendant le sommeil.", "Certaines personnes arrivent même à ⟦contrôler|کنترل کردن⟧ leurs rêves : on appelle ça le ⟦« rêve lucide »|رؤیای شفاف / آگاهانه⟧. ⟪Quoi qu'il en soit|«به هر حال» — اصطلاح با subjonctif⟫, le monde des rêves reste un grand mystère."],
    morale: { fr: "Nos rêves en disent parfois plus long que nos pensées éveillées.", fa: "گاهی رؤیاهایمان بیش از افکار بیدارمان حرف دارند." },
  },
  {
    titre: "Faut-il vraiment suivre ses passions ?",
    emoji: "🔥",
    niveau: "B2",
    cat: "general",
    paras: ["« Suis ta passion ! » : on entend ce conseil ⟦partout|همه‌جا⟧. Mais ⟪est-ce toujours|«آیا همیشه» — وارونگی پرسشی⟫ une bonne idée ? Certains experts ⟦remettent en question|زیر سؤال بردن (اصطلاح)⟧ ce principe.", "Le problème, c'est que la passion seule ne ⟦suffit pas|کافی نیست (suffire)⟧. ⟪Sans|«بدون» + اسم⟫ travail et discipline, même la plus grande passion ⟦s'éteint|خاموش می‌شود (s'éteindre)⟧. La compétence ⟦naît|زاده می‌شود (naître)⟧ de l'effort, pas seulement du désir.", "⟪Plutôt que de|«به‌جای اینکه» + مصدر⟫ chercher LA passion parfaite, mieux vaut ⟦cultiver|پروراندن⟧ ce qu'on fait déjà. La passion ⟦peut naître|می‌تواند زاده شود⟧ de la maîtrise, et non l'inverse."],
    morale: { fr: "La passion ne se trouve pas toujours : souvent, elle se construit.", fa: "اشتیاق همیشه پیدا نمی‌شود؛ اغلب ساخته می‌شود." },
  },
  {
    titre: "Les animaux ont-ils des émotions ?",
    emoji: "🐘",
    niveau: "B1",
    cat: "general",
    paras: ["Un chien qui ⟦remue la queue|دم تکان می‌دهد⟧, un chat qui ⟦ronronne|خرخر می‌کند⟧... Les animaux semblent ⟦ressentir|حس کردن⟧ des émotions. Mais ⟪est-ce vraiment|آیا واقعاً⟫ le cas ?", "Les recherches récentes ⟦prouvent|اثبات می‌کنند⟧ que beaucoup d'animaux ⟦éprouvent|تجربه می‌کنند / حس می‌کنند⟧ de la joie, de la peur, et même de l'⟦empathie|همدلی⟧. Les éléphants, par exemple, ⟦pleurent|گریه می‌کنند⟧ leurs morts.", "⟪Plus on étudie les animaux, plus on découvre|«هرچه بیشتر... بیشتر». ساختار plus... plus⟫ qu'ils nous ⟦ressemblent|شبیه ما هستند (ressembler à)⟧. Cela nous ⟪invite à|inviter À = «دعوت کردن به». با à⟫ les respecter davantage."],
    morale: { fr: "Reconnaître les émotions des animaux, c'est mieux comprendre le vivant.", fa: "شناختن احساسات حیوانات، یعنی بهتر فهمیدنِ حیات." },
  },
  {
    titre: "Pourquoi le temps passe-t-il plus vite en vieillissant ?",
    emoji: "⏳",
    niveau: "B2",
    cat: "general",
    paras: ["Enfant, un été ⟦semblait|به نظر می‌رسید⟧ durer une éternité. Adulte, les années ⟦filent|به‌سرعت می‌گذرند (filer)⟧. Pourquoi avons-nous cette ⟦impression|احساس / برداشت⟧ ?", "Une explication : pour un enfant de 5 ans, une année ⟦représente|نمایندگی می‌کند / معادل است⟧ 20 % de sa vie. Pour un adulte de 50 ans, ⟦ce n'est qu'|تنها ... است (ne... que = فقط)⟧une toute petite ⟦fraction|کسر / بخش کوچک⟧. Le cerveau ⟦perçoit|درک می‌کند (percevoir)⟧ donc le temps différemment.", "L'autre raison : la ⟦routine|روزمرگی⟧. Quand tout ⟦se ressemble|شبیه هم است⟫, le cerveau ne ⟦retient|نگه می‌دارد / به‌خاطر می‌سپارد (retenir)⟧ rien. ⟪Pour que le temps ralentisse|pour que + subjonctif (ralentisse) = «تا اینکه زمان کند شود»⟫, il faut ⟦vivre de nouvelles expériences|تجربه‌های تازه داشتن⟧."],
    morale: { fr: "La nouveauté étire le temps ; la routine le fait disparaître.", fa: "تازگی زمان را کش می‌دهد؛ روزمرگی آن را محو می‌کند." },
  },
  {
    titre: "Le bonheur d'apprendre à tout âge",
    emoji: "📚",
    niveau: "B1",
    cat: "general",
    paras: ["On pense souvent qu'apprendre est ⟦réservé|مخصوص / محفوظ⟧ aux jeunes. ⟦Pourtant|با این حال⟧, le cerveau reste capable d'apprendre ⟪tout au long de|«در سراسرِ» — اصطلاح⟫ la vie.", "Apprendre une langue, un instrument ou un nouveau métier ⟦stimule|تحریک می‌کند⟧ le cerveau et ⟦retarde|به تأخیر می‌اندازد⟧ son ⟦vieillissement|پیری⟧. ⟪Il n'est jamais trop tard pour|«هیچ‌وقت برای... دیر نیست»⟫ commencer.", "⟦Le plus important|مهم‌ترین چیز⟧, c'est la ⟦curiosité|کنجکاوی⟧. Une personne curieuse ⟦continue de|continuer DE/À + مصدر = «ادامه دادن به»⟧ grandir, ⟪quel que soit|«هر چه باشد / صرف‌نظر از» + اسم. با subjonctif⟫ son âge."],
    morale: { fr: "On ne devient pas vieux quand on cesse d'apprendre — mais l'inverse.", fa: "با ترک یادگیری پیر می‌شویم، نه برعکس." },
  },
  {
    titre: "Pourquoi rougit-on quand on est gêné ?",
    emoji: "😳",
    niveau: "B1",
    cat: "general",
    paras: ["Un compliment, une erreur en public... et soudain, nos ⟦joues|گونه‌ها⟧ ⟦deviennent|می‌شوند⟧ rouges. ⟦Rougir|سرخ شدن⟧ est une réaction ⟦que l'on ne peut pas|که نمی‌توان⟧ contrôler. Pourquoi ?", "Quand on est ⟦gêné|خجالت‌زده⟧, le corps ⟦libère|آزاد می‌کند⟧ de l'adrénaline. Les petits ⟦vaisseaux|رگ‌ها⟧ du visage ⟦se dilatent|گشاد می‌شوند (فعل دوضمیره)⟧, et le sang ⟦afflue|هجوم می‌آورد / جاری می‌شود⟧ : c'est ce qui nous fait rougir.", "⟦Curieusement|به‌طور عجیب⟧, l'être humain est le seul animal qui rougit. Charles Darwin ⟦l'appelait|آن را می‌نامید⟧ ⟦« la plus humaine des expressions »|انسانی‌ترین حالت⟧. Rougir montre qu'on ⟪tient à|tenir À = «اهمیت دادن به». با à⟫ l'opinion des autres."],
    morale: { fr: "Rougir, c'est le signe d'une âme sensible et honnête.", fa: "سرخ‌شدن، نشانه‌ی روحی حساس و صادق است." },
  },
  {
    titre: "Faut-il toujours dire la vérité ?",
    emoji: "🎭",
    niveau: "B2",
    cat: "general",
    paras: ["Depuis l'enfance, on nous apprend qu'il ⟦ne faut pas|نباید⟧ mentir. Mais ⟦dans la vie réelle|در زندگی واقعی⟧, est-ce ⟦si simple|آن‌قدر ساده⟧ ? Parfois, un petit mensonge ⟦évite|جلوگیری می‌کند از⟧ de blesser quelqu'un.", "On parle alors de ⟦« mensonge blanc »|دروغ مصلحتی⟧ : ces petits mensonges ⟪destinés à|destiné À = «به‌منظورِ». با à⟫ protéger les autres. Dire à un ami que son plat est délicieux, ⟦même si|حتی اگر⟧ ce n'est pas tout à fait vrai.", "⟪Cela dit|«با این حال» — عبارت ربط⟫, le mensonge ⟦répété|تکرارشده⟧ ⟦détruit|نابود می‌کند⟧ la confiance. ⟦Tout est question de|همه‌چیز مسئله‌ی ... است⟧ mesure : la vérité avec ⟦bienveillance|مهربانی / حسن‌نیت⟧, voilà l'équilibre."],
    morale: { fr: "La vérité est précieuse, mais la bonté l'est tout autant.", fa: "حقیقت ارزشمند است، اما مهربانی هم به همان اندازه." },
  },
  {
    titre: "Le pouvoir surprenant de la gratitude",
    emoji: "🙏",
    niveau: "B1",
    cat: "general",
    paras: ["Dire « merci » ⟦paraît|به نظر می‌رسد (paraître)⟧ banal. ⟦Pourtant|با این حال⟧, la ⟦gratitude|سپاسگزاری⟧ a un effet ⟦puissant|قدرتمند⟧ sur notre bien-être. ⟪Plus on remercie, plus on se sent bien|«هرچه بیشتر... بهتر». ساختار plus... plus⟫.", "Des chercheurs ont demandé à des gens d'⟦écrire|نوشتن⟧ chaque soir trois choses ⟪dont ils étaient reconnaissants|être reconnaissant DE = «سپاسگزار بودن از». dont = de qqch⟫. Après quelques semaines, ces personnes étaient plus ⟦heureuses|خوشحال‌تر⟧ et moins ⟦stressées|مضطرب⟧.", "La gratitude nous ⟪aide à|aider À + مصدر⟫ ⟦apprécier|قدر دانستن⟧ ce que l'on a, ⟦au lieu de|به‌جای اینکه⟧ toujours désirer plus. C'est ⟦une habitude|یک عادت⟧ simple qui change la vie."],
    morale: { fr: "Le bonheur ne vient pas d'avoir plus, mais d'apprécier ce qu'on a.", fa: "خوشبختی از داشتنِ بیشتر نمی‌آید، بلکه از قدردانیِ آنچه داریم." },
  }
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
    source: "https://innerfrench.com/01-learn-french-naturally/",
    audio: "https://mcdn.podbean.com/mf/web/9wt5br/01_LCP001_-_Apprendre_le_francais.mp3",
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
    source: "https://innerfrench.com/02-vivre-avec-robots/",
    audio: "https://mcdn.podbean.com/mf/web/2g2xr3/02_LCP002_-_Emotional_robots.mp3",
    intro: "در این قسمت، هوگو درباره‌ی ربات‌ها حرف می‌زند: ربات‌های احساساتی مثل Pepper که احساسات ما را می‌فهمند، ربات‌های کمکی مثل Roméo و Nao، و در پایان، خطر سلاح‌های خودمختار. آیا ربات‌ها می‌توانند جای ما را بگیرند؟",
    paras: [
      { fr: "Bonjour à tous et bienvenue dans ce deuxième épisode du Cottongue podcast. Je suis très content de vous ⟦retrouver|دوباره دیدن⟧ pour ce deuxième podcast, j'espère que vous allez bien, j'espère que vous êtes en ⟦forme|سرحال⟧.", fa: "سلام به همه و به دومین قسمت این پادکست خوش آمدید. خیلی خوشحالم که دوباره برای این پادکست دوم می‌بینمتان، امیدوارم حالتان خوب باشد، امیدوارم سرحال باشید." },
      { fr: "Alors, dans le podcast précédent nous avons parlé des langues et de la théorie du professeur américain Stephen Krashen. Je vous ai donné quelques ⟦conseils|توصیه‌ها / نصیحت‌ها⟧ pour ⟪être capable de|«قادر بودن به» — همیشه با حرف اضافه‌ی de + مصدر می‌آید⟫ utiliser une langue. ⟪Vous vous rappelez|فعل دوضمیره (se rappeler = به یاد آوردن). ضمیر «vous» دوم اجباری است و حذف نمی‌شود. نکته: se rappeler بدون de می‌آید (se rappeler qqch)، اما se souvenir DE qqch⟫ de mes conseils ? Mon principal conseil, c'était de chercher des choses intéressantes à lire, à regarder, ou à écouter en français. Je vous ai ⟪conseillé d'|conseiller à qqn DE faire — «به کسی توصیه کردن که کاری کند»⟫oublier la grammaire et de vous ⟦concentrer (sur)|تمرکز کردن (روی) — se concentrer SUR qqch⟧ sur la ⟦compréhension|درک / فهم⟧. Si chaque jour, vous essayez de comprendre quelque chose en français : un texte, une vidéo, ou les ⟦paroles|متن آهنگ (همیشه جمع و مؤنث)⟧ d'une chanson, vous allez faire d'⟦énormes progrès|پیشرفت عظیم — کالوکیشن faire des progrès⟧. Et le plus important pour ⟦rester motivé|باانگیزه ماندن — rester + صفت⟧, c'est de trouver des choses qui vous ⟦intéressent|برایتان جالب‌اند⟧, des choses que vous avez ⟪envie de|avoir envie de + مصدر = «دلت بخواهد کاری کنی». حرف اضافه‌ی de اجباری است⟫ comprendre.", fa: "خب، در قسمت قبلی درباره‌ی زبان‌ها و نظریه‌ی پروفسور آمریکایی استیون کراشن حرف زدیم. چند توصیه به شما دادم تا بتوانید از یک زبان استفاده کنید. توصیه‌هایم را به یاد می‌آورید؟ توصیه‌ی اصلی‌ام این بود که دنبال چیزهای جالب برای خواندن، دیدن یا گوش‌دادن به فرانسه بگردید. توصیه کردم گرامر را فراموش کنید و روی درک تمرکز کنید. اگر هر روز سعی کنید چیزی به فرانسه بفهمید: یک متن، یک ویدیو، یا متن یک آهنگ، پیشرفت عظیمی خواهید کرد. و مهم‌ترین چیز برای باانگیزه ماندن، این است که چیزهایی پیدا کنید که برایتان جالب‌اند، چیزهایی که دلتان بخواهد بفهمید." },
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
  {
    num: 3,
    titre: "Les pays les plus heureux",
    titreFa: "خوشبخت‌ترین کشورها",
    theme: "فلسفه · جامعه · خوشبختی · World Happiness Report",
    source: "https://innerfrench.com/03-pays-les-plus-heureux/",
    audio: "https://mcdn.podbean.com/mf/web/yzm7sk/03_LCP003_-_World_s_Happiest_Countries.mp3",
    intro: "در این قسمت، هوگو درباره‌ی خوشبختی حرف می‌زند: از فلسفه‌ی یونان باستان (ارسطو و «هدف نهایی») تا گزارش جهانی شادی و شش معیارش (ثروت، امید به زندگی، حمایت اجتماعی، اعتماد، آزادی، سخاوت). و در پایان: آیا «دیکتاتوری خوشبختی» وجود دارد؟",
    paras: [
      { fr: "Bonjour à tous et bienvenue ! C'est le troisième épisode du Cottongue Podcast. J'espère que tout va bien chez vous et que vous ⟦profitez de|profiter DE qqch = «لذت بردن از» — حرف اضافه‌ی de اجباری⟧ du printemps !", fa: "سلام به همه و خوش آمدید! این سومین قسمت پادکست است. امیدوارم همه‌چیز نزدتان خوب باشد و از بهار لذت ببرید!" },
      { fr: "Si vous n'avez pas écouté les épisodes précédents, je vais vous expliquer pourquoi je fais ce podcast. Je m'appelle Hugo et je suis professeur de français en Pologne, à Varsovie. Comme j'habite en Pologne ⟦depuis|depuis = «از / به‌مدتِ» + با زمان حال می‌آید (j'habite، نه j'ai habité)⟧ 3 ans, j'apprends le polonais. Et pour apprendre une langue étrangère, je trouve que les podcasts sont un très bon ⟦outil|ابزار⟧, une très bonne méthode. Mais le problème avec ces podcasts, c'est qu'ils sont souvent ⟦ennuyeux|کسل‌کننده⟧. Ils ne parlent pas de sujets intéressants. On pense que, parce que les personnes qui écoutent ne comprennent pas tout, on ne peut pas leur parler de sujets ⟦originaux|بدیع / خاص (جمعِ original)⟧. Eh bien, moi, je vais vous parler de choses que je trouve intéressantes et j'espère que ⟦ça vous plaira|plaire à qqn = «خوش آمدن به کسی». ça vous plaira = «خوشتان خواهد آمد»⟧.", fa: "اگر قسمت‌های قبلی را گوش نداده‌اید، برایتان توضیح می‌دهم چرا این پادکست را می‌سازم. اسم من هوگوست و معلم زبان فرانسه در لهستان، در ورشو هستم. چون ۳ سال است در لهستان زندگی می‌کنم، لهستانی یاد می‌گیرم. و برای یادگیری زبان خارجی، به نظرم پادکست‌ها ابزار خیلی خوبی هستند، روش خیلی خوبی. اما مشکل این پادکست‌ها این است که اغلب کسل‌کننده‌اند. درباره‌ی موضوعات جالب حرف نمی‌زنند. فکر می‌کنند چون کسانی که گوش می‌دهند همه‌چیز را نمی‌فهمند، نمی‌شود با آن‌ها درباره‌ی موضوعات خاص حرف زد. خب، من می‌خواهم درباره‌ی چیزهایی حرف بزنم که به نظرم جالب‌اند و امیدوارم خوشتان بیاید." },
      { fr: "Dans ce podcast, nous n'allons pas faire de grammaire. Si vous voulez faire de la grammaire, il y a plein de sites internet et de livres pour ça. Ici, il faut juste écouter et essayer de comprendre ce que je vous raconte. Je vous ⟪conseille d'écouter|conseiller à qqn DE faire = «به کسی توصیه کردن که کاری کند». ساختار: conseiller à... de...⟫ ce podcast plusieurs fois pour pouvoir comprendre de plus en plus de choses. Au départ, c'est normal de ne pas tout comprendre. Il faut plusieurs écoutes pour comprendre tout ce que je dis.", fa: "در این پادکست، گرامر کار نمی‌کنیم. اگر می‌خواهید گرامر کار کنید، کلی سایت و کتاب برایش هست. اینجا فقط باید گوش بدهید و سعی کنید آنچه را تعریف می‌کنم بفهمید. توصیه می‌کنم این پادکست را چند بار گوش بدهید تا بتوانید بیشتر و بیشتر بفهمید. در ابتدا، طبیعی است که همه‌چیز را نفهمید. چند بار گوش‌دادن لازم است تا همه‌ی آنچه می‌گویم را بفهمید." },
      { fr: "Ici, à Varsovie, aujourd'hui, c'est un ⟦jour férié|روز تعطیل رسمی (اصطلاح)⟧. Un jour férié, c'est un jour où on ne travaille pas, pour ⟦célébrer|جشن گرفتن⟧ un événement national. Par exemple, aujourd'hui, en Pologne, on célèbre la Constitution du 3 mai 1791. La Constitution polonaise, c'est la plus vieille Constitution d'Europe et la deuxième plus vieille Constitution du monde. Donc aujourd'hui, c'est une ⟦fête nationale|جشن ملی⟧ en Pologne, un jour férié ⟪pendant lequel|«که در طول آن» — ضمیر موصولی مرکب (préposition + lequel)⟫ personne ne travaille.", fa: "اینجا، در ورشو، امروز روز تعطیل رسمی است. روز تعطیل رسمی روزی است که کار نمی‌کنیم، برای جشن‌گرفتن یک رویداد ملی. مثلاً امروز، در لهستان، قانون اساسی ۳ مه ۱۷۹۱ را جشن می‌گیریم. قانون اساسی لهستان، قدیمی‌ترین قانون اساسی اروپا و دومین قانون اساسی قدیمی جهان است. پس امروز، در لهستان جشن ملی است، روز تعطیلی که در طول آن هیچ‌کس کار نمی‌کند." },
      { fr: "Mais moi je travaille, car j'ai décidé d'enregistrer un nouveau podcast pour vous. Et dans ce podcast, je ne vais pas vous parler de la Constitution polonaise, ⟦rassurez-vous|خیالتان راحت باشد (se rassurer)⟧ ! Aujourd'hui, je veux vous parler du bonheur. Mais, d'abord, il faut essayer de ⟦définir|تعریف کردن⟧ le bonheur, d'expliquer ce que c'est.", fa: "اما من کار می‌کنم، چون تصمیم گرفتم یک پادکست تازه برایتان ضبط کنم. و در این پادکست، درباره‌ی قانون اساسی لهستان حرف نمی‌زنم، خیالتان راحت! امروز می‌خواهم درباره‌ی خوشبختی حرف بزنم. اما، اول، باید سعی کنیم خوشبختی را تعریف کنیم، توضیح دهیم که چیست." },
      { fr: "Le bonheur, c'est un ⟦sentiment|احساس⟧ que l'on ⟦ressent|ressentir = «حس کردن» (فعل بی‌قاعده، مثل sentir)⟧ quand on est complètement ⟦satisfait|راضی / خشنود⟧. On dit aussi qu'on est heureux, qu'on se sent bien. Par exemple, imaginez que c'est l'été. Vous êtes en vacances dans le sud de la France, il fait très chaud. Vous êtes dans une magnifique piscine avec vos amis, vous n'avez aucun problème. Vous passez de super vacances, les meilleures vacances de votre vie. Tout se passe bien, vous êtes heureux d'être là, à ce moment précis. ⟦« La vie est belle »|«زندگی زیباست» (اصطلاح رایج)⟧, comme on dit en français. Eh bien, à ce moment-là, on peut dire que vous ressentez du bonheur.", fa: "خوشبختی احساسی است که وقتی کاملاً راضی هستیم حسش می‌کنیم. می‌گوییم خوشحالیم، حالمان خوب است. مثلاً تصور کنید تابستان است. در جنوب فرانسه تعطیلاتید، هوا خیلی گرم است. در یک استخر زیبا با دوستانتانید، هیچ مشکلی ندارید. بهترین تعطیلات عمرتان را می‌گذرانید. همه‌چیز خوب پیش می‌رود، از بودن در آنجا، در همان لحظه‌ی دقیق، خوشحالید. «زندگی زیباست»، همان‌طور که در فرانسه می‌گویند. خب، در آن لحظه، می‌شود گفت خوشبختی را حس می‌کنید." },
      { fr: "Quand on pense au bonheur de cette façon-là, ça a l'air très simple. Mais en fait, c'est un peu plus compliqué que ça. Par exemple, il y a des ⟦centaines|صدها⟧ d'articles dans des magazines pour trouver le bonheur. On propose aux lecteurs des ⟦recettes|دستورها / نسخه‌ها (استعاره: مثل دستور آشپزی)⟧ pour être heureux. On leur propose les ⟦ingrédients|مواد لازم / اجزا⟧ du bonheur. Il existe même des spécialistes du bonheur et également une étude mondiale qui s'appelle le World Happiness Report, pour comparer les niveaux de bonheur dans différents pays, pour ⟦classer|رتبه‌بندی کردن⟧ les pays.", fa: "وقتی این‌طور به خوشبختی فکر می‌کنیم، خیلی ساده به نظر می‌رسد. اما در واقع، کمی پیچیده‌تر از این است. مثلاً صدها مقاله در مجله‌ها برای یافتن خوشبختی هست. به خواننده‌ها نسخه‌هایی برای خوشبخت‌بودن پیشنهاد می‌دهند. اجزای خوشبختی را به آن‌ها پیشنهاد می‌دهند. حتی متخصصان خوشبختی هم هستند و همچنین یک مطالعه‌ی جهانی به نام World Happiness Report، برای مقایسه‌ی سطح خوشبختی در کشورهای مختلف، برای رتبه‌بندی کشورها." },
      { fr: "D'abord, nous allons parler un petit peu de philosophie. Les philosophes grecs ⟪se sont beaucoup intéressés à|s'intéresser À qqch = «علاقه‌مند شدن به». فعل دوضمیره + حرف اضافه‌ی à⟫ l'idée de bonheur. Les philosophes, ce sont les personnes qui ⟪se posent des questions|se poser des questions = «از خود سؤال پرسیدن» (فعل دوضمیره)⟫ et qui écrivent sur des idées un peu ⟦abstraites|انتزاعی⟧ : la morale, la ⟦vertu|فضیلت⟧, le bien, le mal, le désir. Vous connaissez sûrement Socrate, Platon et Aristote. Ce sont trois des plus célèbres philosophes de l'Antiquité grecque. Malheureusement, dès l'Antiquité grecque, les philosophes n'étaient pas d'accord sur la définition de « bonheur ».", fa: "اول، کمی درباره‌ی فلسفه حرف می‌زنیم. فیلسوفان یونانی خیلی به ایده‌ی خوشبختی علاقه‌مند شدند. فیلسوفان کسانی هستند که از خود سؤال می‌پرسند و درباره‌ی ایده‌های کمی انتزاعی می‌نویسند: اخلاق، فضیلت، خیر، شر، میل. حتماً سقراط، افلاطون و ارسطو را می‌شناسید. این‌ها سه تن از مشهورترین فیلسوفان دوران باستان یونان‌اند. متأسفانه، از همان دوران باستان یونان، فیلسوفان بر سر تعریف «خوشبختی» توافق نداشتند." },
      { fr: "Par contre, ils étaient d'accord sur un point : le bonheur est le ⟦but ultime|هدف نهایی (کالوکیشن)⟧ de l'homme. Ça veut dire que l'homme fait tout pour le trouver. La cause de toutes ses actions, c'est cette ⟦recherche|جست‌وجو⟧ du bonheur. Par exemple, on travaille pour gagner de l'argent, et cet argent doit nous ⟦rendre heureux|rendre + صفت = «کسی را ... کردن». rendre heureux = «خوشحال کردن»⟧. Avec cet argent, on peut acheter des choses qui vont nous rendre heureux. Quand vous cherchez quelqu'un pour ⟦partager|شریک شدن / قسمت کردن⟧ votre vie, c'est parce que vous pensez que vous serez plus heureux avec cette personne. Le bonheur, c'est le but ultime de l'homme.", fa: "در عوض، بر سر یک نکته توافق داشتند: خوشبختی هدف نهایی انسان است. یعنی انسان همه کار می‌کند تا آن را بیابد. علت همه‌ی کارهایش همین جست‌وجوی خوشبختی است. مثلاً کار می‌کنیم تا پول دربیاوریم، و این پول باید ما را خوشحال کند. با این پول می‌توانیم چیزهایی بخریم که خوشحالمان کند. وقتی دنبال کسی می‌گردید تا زندگی‌تان را با او شریک شوید، به این دلیل است که فکر می‌کنید با آن شخص خوشحال‌تر خواهید بود. خوشبختی هدف نهایی انسان است." },
      { fr: "Mais derrière le bonheur, il y a aussi l'idée de plaisir. Car le plaisir vient de la satisfaction d'une envie ou d'un besoin. Par exemple, le plaisir de manger un plat délicieux. Mais attention, parfois le plaisir peut ⟪nuire au|nuire À qqch = «آسیب رساندن به». همیشه با à می‌آید⟫ bonheur. ⟦« Nuire »|آسیب رساندن، ضرر زدن⟧, c'est un verbe qui veut dire « être mauvais », « faire du mal à quelqu'un ou à quelque chose ». On dit que la cigarette ⟦nuit à la santé|به سلامتی آسیب می‌زند (اصطلاح روی پاکت سیگار!)⟧, que fumer est mauvais pour la santé.", fa: "اما پشت خوشبختی، ایده‌ی لذت هم هست. چون لذت از ارضای یک میل یا نیاز می‌آید. مثلاً لذتِ خوردن یک غذای خوشمزه. اما حواست باشد، گاهی لذت می‌تواند به خوشبختی آسیب بزند. «Nuire» فعلی است که یعنی «بد بودن»، «به کسی یا چیزی آسیب رساندن». می‌گویند سیگار به سلامتی آسیب می‌زند، که سیگار کشیدن برای سلامتی بد است." },
      { fr: "Pourquoi le plaisir peut-il nuire au bonheur ? Parce qu'il est souvent ⟦éphémère|زودگذر⟧, temporaire. Vous savez bien, quand on fait la fête et qu'on boit de l'alcool, on passe un bon moment, on est un peu ⟦euphorique|سرخوش⟧. Mais le ⟦lendemain|روز بعد⟧, on se sent mal. On a mal à la tête. En français, ça s'appelle ⟦« avoir la gueule de bois »|«خماری داشتن» — اصطلاح بسیار رایج فرانسوی⟧. C'est quand vous avez bu trop d'alcool le jour précédent et que vous vous sentez mal. Le soir, vous éprouvez du plaisir. Mais le lendemain, vous ⟦regrettez|پشیمان می‌شوید / حسرت می‌خورید⟧ un peu vos actions. Donc oui, le plaisir, parfois, nuit au bonheur.", fa: "چرا لذت می‌تواند به خوشبختی آسیب بزند؟ چون اغلب زودگذر است، موقتی. خوب می‌دانید، وقتی جشن می‌گیریم و الکل می‌نوشیم، لحظه‌ی خوبی می‌گذرانیم، کمی سرخوشیم. اما روز بعد، حالمان بد است. سرمان درد می‌کند. در فرانسه به این می‌گویند «خماری داشتن». این وقتی است که روز قبل زیادی الکل نوشیده‌اید و حالتان بد است. شب، لذت می‌برید. اما روز بعد، کمی از کارهایتان پشیمان می‌شوید. پس بله، لذت گاهی به خوشبختی آسیب می‌زند." },
      { fr: "Ça nous amène à une troisième idée liée au bonheur : l'idée de ⟦stabilité|ثبات / پایداری⟧. Le bonheur, ça n'est pas être heureux pour 5 minutes. Le bonheur, c'est un ⟦état|حالت / وضعیت⟧ stable, ⟦durable|پایدار / بادوام⟧. C'est ça qui ⟦différencie|تمایز می‌دهد⟧ le bonheur et le plaisir. On peut dire que le bonheur, c'est un plaisir stable, constant. On dit en français ⟦« être comblé »|«کاملاً ارضا/سیراب بودن» — اصطلاح⟧. C'est quand tous vos désirs sont réalisés. Vous ne voulez rien d'autre. Le philosophe Aristote pensait que c'est seulement à la fin de sa vie qu'un homme sait s'il a vraiment trouvé le bonheur, quand il ⟦regarde en arrière|به گذشته نگاه می‌کند (اصطلاح)⟧.", fa: "این ما را به ایده‌ی سومِ مرتبط با خوشبختی می‌رساند: ایده‌ی ثبات. خوشبختی، خوشحال‌بودن برای ۵ دقیقه نیست. خوشبختی یک حالت پایدار و بادوام است. همین است که خوشبختی و لذت را از هم متمایز می‌کند. می‌شود گفت خوشبختی یک لذتِ پایدار و ثابت است. در فرانسه می‌گویند «être comblé» (کاملاً سیراب بودن). این وقتی است که همه‌ی آرزوهایتان برآورده شده. چیز دیگری نمی‌خواهید. ارسطوی فیلسوف معتقد بود فقط در پایان زندگی است که انسان می‌فهمد آیا واقعاً خوشبختی را یافته، وقتی به گذشته نگاه می‌کند." },
      { fr: "Maintenant, je vais vous parler du World Happiness Report. C'est un ⟦rapport|گزارش⟧ annuel qui est ⟦publié|منتشرشده⟧ par les Nations Unies et qui existe ⟦depuis|depuis = «از» (نقطه‌ی شروع در گذشته تا حال)⟧ 2012. Cette année, en 2017, ils ont donc publié leur 5e rapport. Alors, à votre avis, comment les ⟦chercheurs|پژوهشگران⟧ peuvent-ils ⟦mesurer|اندازه‌گیری کردن⟧ le niveau de bonheur d'un pays ? C'est un peu bizarre, non, de mesurer le niveau de bonheur des ⟦habitants|ساکنان⟧ ?", fa: "حالا درباره‌ی World Happiness Report برایتان می‌گویم. این یک گزارش سالانه است که سازمان ملل منتشرش می‌کند و از سال ۲۰۱۲ وجود دارد. امسال، در ۲۰۱۷، پنجمین گزارششان را منتشر کردند. خب، به نظر شما، پژوهشگران چطور می‌توانند سطح خوشبختی یک کشور را اندازه بگیرند؟ کمی عجیب است، نه، که سطح خوشبختی ساکنان را اندازه بگیریم؟" },
      { fr: "Pour faire ça, les chercheurs ont choisi différents ⟦critères|معیارها⟧, différents ⟦paramètres|پارامترها⟧ : des ⟦indicateurs|شاخص‌ها⟧ objectifs et des critères ⟦subjectifs|ذهنی / شخصی⟧. Pour les critères subjectifs, ils ont ⟦interrogé|پرسش کردن از / نظرسنجی⟧, ils ont posé des questions à 1 000 personnes dans 150 pays différents. Avec les réponses de ces habitants, les chercheurs ont pu ⟦évaluer|ارزیابی کردن⟧ leur niveau de bonheur.", fa: "برای این کار، پژوهشگران معیارها و پارامترهای مختلفی انتخاب کردند: شاخص‌های عینی و معیارهای ذهنی. برای معیارهای ذهنی، از ۱۰۰۰ نفر در ۱۵۰ کشور مختلف نظرسنجی کردند، سؤال پرسیدند. با پاسخ‌های این ساکنان، پژوهشگران توانستند سطح خوشبختی‌شان را ارزیابی کنند." },
      { fr: "Le premier critère, c'est le ⟦Produit Intérieur Brut|تولید ناخالص داخلی (GDP)⟧ par habitant. Généralement, on dit le PIB. Le PIB, c'est la ⟦richesse|ثروت⟧ d'un pays, la richesse que produit un pays chaque année. Et le PIB par habitant, c'est cette richesse ⟦divisée par|تقسیم بر⟧ le nombre d'habitants. Logiquement, les petits pays riches, comme le Luxembourg, la Suisse ou la Norvège ont un très grand ⟦avantage|مزیت⟧ ici. Ça veut aussi dire qu'on ⟪associe le bonheur à|associer X À Y = «X را با Y مرتبط دانستن». حرف اضافه‌ی à⟫ la richesse. Pourtant, en français, on a un ⟦proverbe|ضرب‌المثل⟧ qui dit ⟦« l'argent ne fait pas le bonheur »|«پول خوشبختی نمی‌آورد» (ضرب‌المثل)⟧. Mais parfois, on ajoute « mais il y contribue ». Ça veut dire que l'argent n'est pas ⟦suffisant|کافی⟧ pour être heureux, mais il peut aider.", fa: "اولین معیار، تولید ناخالص داخلی سرانه است. معمولاً می‌گویند PIB. تولید ناخالص داخلی، ثروت یک کشور است، ثروتی که کشور هر سال تولید می‌کند. و سرانه‌اش، این ثروت تقسیم بر تعداد ساکنان است. منطقاً، کشورهای کوچکِ ثروتمند، مثل لوکزامبورگ، سوئیس یا نروژ، اینجا مزیت بزرگی دارند. این یعنی خوشبختی را با ثروت مرتبط می‌دانیم. با این حال، در فرانسه ضرب‌المثلی هست که می‌گوید «پول خوشبختی نمی‌آورد». اما گاهی اضافه می‌کنند «ولی به آن کمک می‌کند». یعنی پول برای خوشبختی کافی نیست، اما می‌تواند کمک کند." },
      { fr: "Le deuxième critère, c'est l'⟦espérance de vie|امید به زندگی (اصطلاح ثابت)⟧. C'est la durée de vie moyenne d'une population. En France, l'espérance de vie, c'est 82 ans. Si un pays a une espérance de vie ⟦élevée|بالا⟧, il a sûrement un bon ⟦système de santé|نظام سلامت⟧ pour ⟦soigner|درمان کردن⟧ les personnes malades. Grâce à ces ⟦infrastructures|زیرساخت‌ها⟧, les habitants sont en bonne santé. Et logiquement c'est plus facile d'être heureux quand on est ⟦en bonne santé|سالم (اصطلاح)⟧. Les trois pays qui ont l'espérance de vie la plus élevée, ce sont le Japon, la Suisse et Singapour.", fa: "دومین معیار، امید به زندگی است. این میانگین طول عمر یک جمعیت است. در فرانسه، امید به زندگی ۸۲ سال است. اگر کشوری امید به زندگی بالایی داشته باشد، حتماً نظام سلامت خوبی برای درمان بیماران دارد. به لطف این زیرساخت‌ها، ساکنان سالم‌اند. و منطقاً وقتی سالم باشیم خوشبخت‌بودن آسان‌تر است. سه کشوری که بالاترین امید به زندگی را دارند، ژاپن، سوئیس و سنگاپورند." },
      { fr: "Le troisième critère, c'est l'⟦assistance sociale|حمایت اجتماعی⟧. Ça veut dire que vous avez quelqu'un ⟪sur qui compter|compter SUR qqn = «روی کسی حساب کردن». ضمیر موصولی qui با حرف اضافه⟫ quand vous avez un problème : vos parents, votre ⟦compagnon|همدم / شریک زندگی⟧, vos amis. On se sent plus ⟦en sécurité|در امنیت⟧ quand on sait qu'il y a des personnes pour nous aider. En français, on dit ⟦« se serrer les coudes »|«دستِ هم را گرفتن / همدلی کردن» — اصطلاح⟧. Ça signifie ⟦s'entraider|به هم کمک کردن (فعل دوضمیره)⟧, être ⟦solidaire|همبسته⟧. Les pays les mieux classés, ce sont l'Islande, l'Irlande et le Danemark. La France est 46e. Ça veut dire que les Français ⟦devraient|باید (شرطی، نرم‌تر از doivent)⟧ faire des efforts pour s'entraider davantage.", fa: "سومین معیار، حمایت اجتماعی است. یعنی کسی را داری که وقتی مشکل داری رویش حساب کنی: والدین، همدمت، دوستانت. وقتی بدانیم کسانی هستند که کمکمان کنند، احساس امنیت بیشتری می‌کنیم. در فرانسه می‌گویند «se serrer les coudes» (دستِ هم را گرفتن). یعنی به هم کمک کردن، همبسته بودن. کشورهای با بهترین رتبه، ایسلند، ایرلند و دانمارک‌اند. فرانسه ۴۶ است. یعنی فرانسوی‌ها باید تلاش کنند که بیشتر به هم کمک کنند." },
      { fr: "Ensuite, il y a l'indicateur de ⟦confiance|اعتماد⟧, le 4e critère. En français, on dit ⟪avoir confiance en|«اعتماد داشتن به» — این یکی با en می‌آید⟫ quelqu'un ou ⟪faire confiance à|«اعتماد کردن به» — این یکی با à می‌آید. دقت کن: avoir confiance EN ولی faire confiance À⟫ quelqu'un. « Faire confiance à quelqu'un », c'est penser que cette personne est ⟦honnête|صادق⟧ et qu'elle ne va pas vous ⟦tromper|فریب دادن⟧. Dans le rapport, ils demandent aux habitants s'ils font confiance à leur gouvernement. Les habitants ont confiance en ces institutions quand il n'y a pas de ⟦corruption|فساد⟧. C'est difficile de se sentir bien dans un pays quand on ne peut pas faire confiance au système.", fa: "بعد، شاخص اعتماد است، معیار چهارم. در فرانسه می‌گویند «avoir confiance en quelqu'un» یا «faire confiance à quelqu'un». «اعتماد کردن به کسی» یعنی فکر کنی آن شخص صادق است و فریبت نمی‌دهد. در گزارش، از ساکنان می‌پرسند آیا به دولتشان اعتماد دارند. ساکنان وقتی به این نهادها اعتماد دارند که فسادی نباشد. سخت است در کشوری احساس خوبی داشته باشی وقتی نمی‌توانی به سیستم اعتماد کنی." },
      { fr: "La ⟦liberté|آزادی⟧ est le 5e indicateur. La liberté, ici, ça signifie la possibilité de prendre ses propres ⟦décisions|تصمیم‌ها⟧, de faire ses propres choix, quand personne ne vous ⟪oblige à|obliger qqn À faire = «کسی را مجبور کردن به». با à⟫ prendre des décisions contre votre ⟦volonté|اراده / خواست⟧. Si vous voulez ⟦changer de|changer DE qqch = «عوض کردن». changer de travail = «شغل عوض کردن»⟧ travail, vous pouvez le faire. Si vous voulez ⟦déménager|نقل‌مکان کردن⟧, vous pouvez le faire. Le contraire de cette liberté, c'est quand vous êtes ⟦en prison|در زندان⟧. Je ne pense pas qu'il existe des gens qui ⟪soient|subjonctif بعد از je ne pense pas que (شک/نفی)⟫ contents d'être en prison.", fa: "آزادی پنجمین شاخص است. آزادی، اینجا، یعنی امکانِ گرفتن تصمیم‌های خود، انتخاب‌های خود، وقتی کسی تو را مجبور به تصمیم‌های خلاف خواستت نمی‌کند. اگر بخواهی شغلت را عوض کنی، می‌توانی. اگر بخواهی نقل‌مکان کنی، می‌توانی. نقطه‌ی مقابل این آزادی، وقتی است که در زندانی. فکر نمی‌کنم کسانی باشند که از زندانی‌بودن خوشحال باشند." },
      { fr: "Le 6e et dernier critère, c'est le plus intéressant à mon avis, c'est le critère de la ⟦générosité|سخاوت⟧. Cette générosité, elle est ⟦mesurée|سنجیده‌شده⟧ par les ⟦dons|بخشش‌ها / اهداها⟧ et les donations. Autrement dit, quand on donne de l'argent à une ⟦association|انجمن / مؤسسه⟧ qui ⟪s'occupe d'|s'occuper DE = «رسیدگی کردن به / مراقبت از» (فعل دوضمیره + de)⟫ aider les personnes handicapées. D'après le classement, les pays les plus généreux sont la Birmanie, l'Indonésie et Malte. Je pense qu'être généreux, ⟦penser aux autres|فکر کردن به دیگران (penser À)⟧, est une chose qui nous rend heureux parce qu'on ⟦se sent utile|احساس مفید بودن می‌کنیم⟧.", fa: "ششمین و آخرین معیار، به نظر من جالب‌ترین، معیار سخاوت است. این سخاوت با بخشش‌ها و اهداها سنجیده می‌شود. به عبارت دیگر، وقتی به مؤسسه‌ای که به معلولان کمک می‌کند پول می‌دهیم. طبق رتبه‌بندی، سخاوتمندترین کشورها برمه، اندونزی و مالت‌اند. فکر می‌کنم سخاوتمند بودن، فکر کردن به دیگران، چیزی است که خوشحالمان می‌کند چون احساس مفید بودن می‌کنیم." },
      { fr: "Avec tous ces critères, quels sont les pays où les gens sont les plus heureux ? Quand on calcule la ⟦moyenne|میانگین⟧ des différents indicateurs, ce sont surtout les pays ⟦scandinaves|اسکاندیناوی⟧ qui ⟦arrivent en tête|«در صدر قرار می‌گیرند» — اصطلاح⟧. « Arriver en tête », ça signifie « être le ou les premiers d'un classement ». La Norvège est 1re, le Danemark 2e, l'Islande 3e, ensuite il y a la Suisse 4e et la Finlande 5e.", fa: "با همه‌ی این معیارها، کشورهایی که مردمشان شادترین‌اند کدام‌اند؟ وقتی میانگین شاخص‌های مختلف را حساب می‌کنیم، عمدتاً کشورهای اسکاندیناوی در صدر قرار می‌گیرند. «Arriver en tête» یعنی «اول یا اولین‌های یک رتبه‌بندی بودن». نروژ اول، دانمارک دوم، ایسلند سوم، بعد سوئیس چهارم و فنلاند پنجم." },
      { fr: "Voilà, maintenant nous avons vu que le bonheur est un état durable dans lequel tous nos désirs sont ⟦comblés|برآورده‌شده⟧. Mais, pour ⟦arriver à|رسیدن به⟧ cet état, il y a des conditions ⟦extérieures|بیرونی⟧ qui ne ⟪dépendent pas de|dépendre DE = «بستگی داشتن به». با de⟫ nous. Cependant, dans les pays occidentaux, le bonheur est devenu une ⟦obsession|وسواس / دلمشغولی⟧, une obsession ⟦égoïste|خودخواهانه⟧, narcissique. Certains journalistes parlent même de la ⟦« dictature du bonheur »|«دیکتاتوری خوشبختی»⟧.", fa: "خب، حالا دیدیم که خوشبختی حالتی پایدار است که در آن همه‌ی آرزوهایمان برآورده شده. اما، برای رسیدن به این حالت، شرایط بیرونی‌ای هست که به ما بستگی ندارد. با این حال، در کشورهای غربی، خوشبختی به یک وسواس تبدیل شده، وسواسی خودخواهانه و نارسیسیستی. بعضی روزنامه‌نگاران حتی از «دیکتاتوری خوشبختی» حرف می‌زنند." },
      { fr: "Qu'est-ce que ça signifie ? Cette recherche du bonheur est comme une sorte de ⟦tyrannie|استبداد⟧. Elle ⟪impose aux gens de|imposer à qqn DE faire = «به کسی تحمیل کردن که». à + de⟫ vivre d'une certaine façon. Dans les médias, on nous donne des ordres : faites du sport, mangez équilibré, achetez cette voiture. C'est un peu ⟦stressant|استرس‌زا⟧ tout ça, non ? Après tout, chacun a une vision différente du bonheur. Peut-être que les choses qui me rendent heureux ne ⟪plaisent pas à|plaire À qqn = «خوش آمدن به کسی»⟫ mon voisin. J'adore faire du vélo le dimanche. Mais il y a aussi des gens qui préfèrent la méditation ou le cinéma. ⟦Ça dépend des goûts|«بستگی به سلیقه دارد» (اصطلاح)⟧ !", fa: "این یعنی چه؟ این جست‌وجوی خوشبختی مثل نوعی استبداد است. به مردم تحمیل می‌کند که جور خاصی زندگی کنند. در رسانه‌ها به ما دستور می‌دهند: ورزش کنید، متعادل بخورید، این خودرو را بخرید. این همه کمی استرس‌زاست، نه؟ بالاخره، هر کس نگاه متفاوتی به خوشبختی دارد. شاید چیزهایی که خوشحالم می‌کنند به مذاق همسایه‌ام خوش نیایند. من عاشق دوچرخه‌سواری یکشنبه‌ها هستم. اما کسانی هم هستند که مدیتیشن یا سینما را ترجیح می‌دهند. بستگی به سلیقه دارد!" },
      { fr: "Alors, comment des « experts du bonheur » peuvent-ils nous aider ? Le plus important, à mon avis, c'est d'⟦apprendre à se connaître|«یاد گرفتن که خود را بشناسی». apprendre À + مصدر⟧. ⟦« Connais-toi toi-même »|«خودت را بشناس» — جمله‌ی معروف فلسفی⟧ disaient les philosophes grecs. Il faut apprendre à apprécier ses différences, sa ⟦singularité|یگانگی / فردیت⟧, pour savoir ce qui nous rend heureux.", fa: "خب، «متخصصان خوشبختی» چطور می‌توانند کمکمان کنند؟ مهم‌ترین چیز، به نظر من، یاد گرفتن شناختِ خود است. «خودت را بشناس» فیلسوفان یونانی می‌گفتند. باید یاد بگیریم تفاوت‌هایمان، یگانگی‌مان را قدر بدانیم، تا بفهمیم چه چیزی خوشحالمان می‌کند." },
      { fr: "Si vous essayez d'⟦imiter|تقلید کردن⟧ les autres, de copier leur recette du bonheur, cela va créer de la ⟦frustration|سرخوردگی⟧, de la ⟦jalousie|حسادت⟧. Il n'existe pas d'ingrédients ⟦universels|جهان‌شمول⟧ qui créent le bonheur. Au contraire, il faut trouver sa propre recette. Prenez du temps pour vous, pour ⟦vous poser des questions|از خود سؤال بپرسید (se poser des questions)⟧. Et surtout, ⟪ouvrez-vous aux|s'ouvrir À = «خود را به روی... گشودن» (فعل دوضمیره + à)⟫ autres. Le bonheur ne doit pas être un plaisir égoïste, c'est une chose que l'on doit essayer de ⟦partager|به اشتراک گذاشتن⟧ le plus possible. C'est une ⟦richesse|ثروت⟧ qui peut grandir en la partageant, contrairement aux autres richesses.", fa: "اگر سعی کنید از دیگران تقلید کنید، نسخه‌ی خوشبختی‌شان را کپی کنید، این سرخوردگی و حسادت ایجاد می‌کند. اجزای جهان‌شمولی که خوشبختی بسازند وجود ندارد. برعکس، باید نسخه‌ی خودت را پیدا کنی. برای خودت وقت بگذار، تا از خودت سؤال بپرسی. و مهم‌تر از همه، خودت را به روی دیگران بگشا. خوشبختی نباید لذتی خودخواهانه باشد، چیزی است که باید سعی کنیم تا حد ممکن به اشتراکش بگذاریم. ثروتی است که با به‌اشتراک‌گذاشتن می‌تواند رشد کند، برخلاف ثروت‌های دیگر." },
      { fr: "Nous arrivons à la fin de ce podcast. J'espère que ce sujet du bonheur vous a ⟦intéressés|برایتان جالب بوده⟧. Comme d'habitude, je vous encourage à écouter ce podcast plusieurs fois. Plus vous l'écouterez, plus vous comprendrez de choses. La semaine prochaine, nous parlerons de la ⟦théorie du genre|نظریه‌ی جنسیت⟧. En attendant, essayez de faire un peu de français tous les jours. À bientôt, salut !", fa: "به پایان این پادکست می‌رسیم. امیدوارم این موضوع خوشبختی برایتان جالب بوده باشد. مثل همیشه، تشویقتان می‌کنم این پادکست را چند بار گوش بدهید. هرچه بیشتر گوش بدهید، بیشتر می‌فهمید. هفته‌ی بعد، درباره‌ی نظریه‌ی جنسیت حرف می‌زنیم. تا آن موقع، سعی کنید هر روز کمی فرانسه کار کنید. به‌زودی، خداحافظ!" },
    ],
  },
  {
    num: 4,
    titre: "La théorie du genre",
    titreFa: "نظریه‌ی جنسیت",
    theme: "جامعه · فمینیسم · روان‌شناسی",
    audio: "https://mcdn.podbean.com/mf/web/4am9wt/04_LCP004_-_Gender_studies.mp3",
    source: "https://innerfrench.com/04-theorie-genre/",
    intro: "در این قسمت، هوگو درباره‌ی نظریه‌ی جنسیت (gender studies) حرف می‌زند: تفاوت میان جنسیت زیستی و برساخت اجتماعی هویت جنسی. با مثال‌هایی از کتاب‌ها، فیلم «پسرها و گیوم سر میز!»، اسباب‌بازی‌ها و یک آزمایش روان‌شناسی جالب، می‌بینیم چطور تربیت و جامعه روی این فرایند تأثیر می‌گذارند. (موضوع جامعه‌شناختی — همان‌طور که در پادکست مطرح شده.)",
    paras: [
      { fr: "Bonjour à tous et bienvenue dans ce quatrième épisode du Cottongue Podcast ! Comme vous le savez déjà si vous avez écouté les épisodes précédents, le Cottongue Podcast est là pour vous aider à apprendre le français. Mais, ⟪contrairement aux|contrairement À = «برخلافِ». با à می‌آید⟫ podcasts de langues classiques, ici nous ne faisons pas de grammaire. Si vous voulez faire de la grammaire, malheureusement ça n'est pas le bon endroit !", fa: "سلام به همه و به این قسمت چهارم خوش آمدید! همان‌طور که می‌دانید اگر قسمت‌های قبلی را گوش داده باشید، این پادکست اینجاست تا به شما در یادگیری فرانسه کمک کند. اما، برخلاف پادکست‌های زبان معمولی، اینجا گرامر کار نمی‌کنیم. اگر می‌خواهید گرامر کار کنید، متأسفانه اینجا جای درستی نیست!" },
      { fr: "Dans ce podcast, je vous parle de sujets que je trouve intéressants et j'essaye de tout vous expliquer ⟪pour que vous compreniez|pour que + subjonctif = «تا اینکه». فعل compreniez حالت التزامی (subjonctif) است⟫ un maximum de choses. Et ⟪plus vous écouterez, plus vous comprendrez|«هرچه بیشتر... بیشتر». ساختار plus... plus⟫. C'est pour ça que je vous conseille d'écouter ce podcast plusieurs fois. Et pour vous aider à comprendre, vous pouvez aussi lire la ⟦transcription|متن پیاده‌شده⟧ du podcast sur mon site internet.", fa: "در این پادکست، درباره‌ی موضوعاتی که به نظرم جالب‌اند حرف می‌زنم و سعی می‌کنم همه‌چیز را برایتان توضیح دهم تا حداکثر چیزها را بفهمید. و هرچه بیشتر گوش بدهید، بیشتر می‌فهمید. به همین خاطر توصیه می‌کنم این پادکست را چند بار گوش بدهید. و برای کمک به فهمتان، می‌توانید متن پیاده‌شده‌ی پادکست را هم در سایتم بخوانید." },
      { fr: "Dans le dernier podcast, je vous ai annoncé le sujet d'aujourd'hui. Est-ce que ⟪vous vous en rappelez|se rappeler = فعل دوضمیره. en جایگزین «de ce sujet» شده. ضمیر vous دوم اجباری است⟫ ? Dans le dernier podcast, je vous ai annoncé que le prochain sujet ⟪serait|conditionnel (شرطی) — برای بیان آینده در گذشته⟫ la théorie du genre.", fa: "در پادکست قبلی، موضوع امروز را اعلام کردم. به یادش می‌آورید؟ در پادکست قبلی اعلام کردم که موضوع بعدی نظریه‌ی جنسیت خواهد بود." },
      { fr: "Avez-vous déjà ⟦entendu parler de|entendre parler DE = «درباره‌ی چیزی شنیدن». اصطلاح با de⟧ ça ? Peut-être que c'est la première fois que vous entendez parler de la théorie du genre. Dans ce cas, je vais vous expliquer très simplement ⟪de quoi il s'agit|il s'agit DE = «موضوع عبارت است از / صحبت سرِ...». فعل غیرشخصی⟫.", fa: "آیا تا حالا درباره‌اش شنیده‌اید؟ شاید اولین بار است که درباره‌ی نظریه‌ی جنسیت می‌شنوید. در این صورت، خیلی ساده برایتان توضیح می‌دهم که موضوع چیست." },
      { fr: "La théorie du genre est la traduction française des gender studies. ⟪Il s'agit de|il s'agit de + مصدر = «موضوع این است که / باید»⟫ faire la différence entre le ⟦sexe biologique|جنسیت زیستی⟧ et le genre. D'un côté, il y a donc le sexe biologique, c'est celui qu'on a à la ⟦naissance|تولد⟧, quand on ⟦naît|به دنیا می‌آییم (فعل naître)⟧. Le bébé est ⟦soit... soit|یا... یا (ساختار)⟧ un garçon, soit une fille. Mais, de l'autre côté, il existe aussi le genre, qui est la ⟦construction|ساخت / برساخت⟧ de notre identité sexuelle. Autrement dit, est-ce que l'on ⟦se sent|احساس می‌کند (se sentir)⟧ plus homme, ou femme ? Parfois, le sexe biologique et le genre peuvent être différents.", fa: "نظریه‌ی جنسیت ترجمه‌ی فرانسوی gender studies است. موضوع این است که بین جنسیت زیستی و جنسیت اجتماعی (ژانر) تمایز قائل شویم. از یک طرف، جنسیت زیستی هست، همان که هنگام تولد داریم، وقتی به دنیا می‌آییم. نوزاد یا پسر است یا دختر. اما، از طرف دیگر، ژانر هم وجود دارد، که برساختِ هویت جنسی ماست. به عبارت دیگر، آیا فرد بیشتر احساس مرد بودن می‌کند یا زن؟ گاهی، جنسیت زیستی و ژانر می‌توانند متفاوت باشند." },
      { fr: "En France, il y a une ⟦polémique|جدل / مناقشه⟧ autour de la théorie du genre. En 2014, des ⟦rumeurs|شایعات⟧ ⟪se sont répandues|se répandre = «پخش شدن» (فعل دوضمیره، اینجا گذشته)⟫ sur internet. Une rumeur, c'est une information qui n'est pas ⟦vérifiée|تأییدشده⟧ et qui ⟦se diffuse|پخش می‌شود⟧, qui ⟦se propage|منتشر می‌شود⟧. Donc, il y avait une rumeur disant que l'école française ⟦enseignait|آموزش می‌داد (enseigner)⟧ la théorie du genre. Des gens ont pensé que l'école voulait transformer leurs garçons en filles. Les parents d'élèves ont commencé à ⟪s'envoyer des SMS|s'envoyer = «به همدیگر فرستادن» (فعل دوضمیره متقابل)⟫ pour diffuser cette rumeur. Alors la rumeur a commencé à ⟦grossir|بزرگ شدن⟧ et à être ⟦exagérée|اغراق‌شده⟧.", fa: "در فرانسه، جدلی پیرامون نظریه‌ی جنسیت هست. در ۲۰۱۴، شایعاتی در اینترنت پخش شد. شایعه اطلاعاتی است که تأیید نشده و پخش می‌شود، منتشر می‌شود. پس شایعه‌ای در اینترنت بود که می‌گفت مدرسه‌ی فرانسوی نظریه‌ی جنسیت را آموزش می‌دهد. عده‌ای فکر کردند مدرسه می‌خواهد پسرهایشان را به دختر تبدیل کند. والدین دانش‌آموزان شروع کردند به فرستادن پیامک به همدیگر تا این شایعه را پخش کنند. آن‌گاه شایعه شروع به بزرگ‌شدن و اغراق‌شدن کرد." },
      { fr: "Résultat : dans plusieurs régions, les parents ont eu peur et ils ont ⟦retiré|بیرون آوردند (retirer)⟧ leurs enfants de l'école pendant plusieurs jours. Évidemment, ces rumeurs étaient complètement ⟦fausses|نادرست (مؤنثِ faux)⟧. Mais en 2016, le pape François a lui aussi participé à la polémique. Il a déclaré que les ⟦manuels scolaires|کتاب‌های درسی⟧ français ⟦influençaient|تأثیر می‌گذاشتند⟧ les élèves. Et pour le pape, la théorie du genre est ⟦contre-nature|خلاف طبیعت⟧ parce qu'elle ⟪pousse les enfants à|pousser qqn À = «کسی را وادار کردن به». با à⟫ choisir une orientation différente.", fa: "نتیجه: در چند منطقه، والدین ترسیدند و بچه‌هایشان را چند روز از مدرسه بیرون آوردند. بدیهی است که این شایعات کاملاً نادرست بودند. اما در ۲۰۱۶، پاپ فرانسوا هم در این جدل شرکت کرد. اعلام کرد که کتاب‌های درسی فرانسوی روی دانش‌آموزان تأثیر می‌گذارند. و برای پاپ، نظریه‌ی جنسیت خلاف طبیعت است چون بچه‌ها را وادار می‌کند گرایش متفاوتی انتخاب کنند." },
      { fr: "Mais, en réalité, dans les manuels scolaires français on ne parle presque pas de théorie du genre. Certains livres de biologie expliquent simplement qu'en plus du sexe biologique, l'éducation et la société ont une influence sur la construction de notre identité sexuelle. Mais aucun professeur n'⟦encourage|تشویق می‌کند⟧ les élèves à choisir une orientation. Le pape a simplement ⟦cru|باور کرد (croire)⟧ les rumeurs.", fa: "اما، در واقع، در کتاب‌های درسی فرانسوی تقریباً درباره‌ی نظریه‌ی جنسیت حرفی زده نمی‌شود. بعضی کتاب‌های زیست‌شناسی فقط توضیح می‌دهند که علاوه بر جنسیت زیستی، آموزش و جامعه روی برساخت هویت جنسی ما تأثیر دارند. اما هیچ معلمی دانش‌آموزان را به انتخاب گرایش تشویق نمی‌کند. پاپ فقط شایعات را باور کرد." },
      { fr: "Je pense que s'il y a tellement de polémiques sur ce sujet, ça signifie qu'il est intéressant. ⟪quoi qu'il en soit|«به هر حال / در هر صورت» — اصطلاح ثابت با subjonctif⟫, nous allons voir pourquoi cette théorie est importante aujourd'hui et comment elle peut nous aider à mieux comprendre notre société. Vous êtes prêts ? Alors, c'est parti !", fa: "فکر می‌کنم اگر این‌قدر جدل بر سر این موضوع هست، یعنی جالب است. به هر حال، می‌بینیم چرا این نظریه امروز مهم است و چطور می‌تواند به ما کمک کند جامعه‌مان را بهتر بفهمیم. آماده‌اید؟ خب، بزن بریم!" },
      { fr: "Dans les années 60 et 70, c'est l'époque de la ⟦libération|آزادی / رهایی⟧ sexuelle dans les pays occidentaux. Les jeunes, et surtout les jeunes femmes, veulent plus de liberté. ⟪Elles en ont marre|en avoir marre (DE) = «خسته/بیزار بودن از» — اصطلاح محاوره‌ای⟫, elles en ont assez de la société ⟦patriarcale|مردسالار⟧, c'est-à-dire de la société dans laquelle les hommes ont tous les pouvoirs. Elles ont obtenu le ⟦droit de vote|حق رأی⟧ et elles l'utilisent pour obtenir l'⟦égalité|برابری⟧ des droits. Les femmes veulent être ⟪égales aux|égal À = «برابر با». با à می‌آید⟫ hommes.", fa: "در دهه‌ی ۶۰ و ۷۰، دوران آزادی جنسی در کشورهای غربی است. جوان‌ها، و به‌ویژه زنان جوان، آزادی بیشتری می‌خواهند. از جامعه‌ی مردسالار خسته‌اند، یعنی جامعه‌ای که در آن مردان همه‌ی قدرت را دارند. حق رأی به دست آوردند و از آن استفاده می‌کنند تا برابری حقوق به دست آورند. زنان می‌خواهند با مردان برابر باشند." },
      { fr: "Dans ce contexte, des ⟦intellectuelles|روشنفکران زن⟧ féministes américaines commencent à ⟪s'interroger|s'interroger = «از خود پرسیدن / تأمل کردن» (فعل دوضمیره)⟫, à se poser des questions sur la place des femmes dans la société. Elles décident d'étudier les ⟦inégalités|نابرابری‌ها⟧ de traitement entre les hommes et les femmes. Elles veulent comprendre pourquoi les femmes ne peuvent pas ⟦exercer|انجام دادن / اشتغال داشتن به⟧ les mêmes professions. Pendant des siècles, toutes ces choses étaient considérées comme normales, personne ne ⟪s'y opposait|s'opposer À = «مخالفت کردن با». y جایگزین à+چیز⟫. Mais dans les années 60, beaucoup de femmes ne veulent plus accepter cet ordre des choses.", fa: "در این بستر، روشنفکران فمینیست آمریکایی شروع می‌کنند به تأمل، به پرسیدن درباره‌ی جایگاه زنان در جامعه. تصمیم می‌گیرند نابرابری‌های رفتاری بین زنان و مردان را مطالعه کنند. می‌خواهند بفهمند چرا زنان نمی‌توانند همان مشاغل را داشته باشند. قرن‌ها، همه‌ی این چیزها عادی تلقی می‌شد، هیچ‌کس با آن مخالفت نمی‌کرد. اما در دهه‌ی ۶۰، خیلی از زنان دیگر نمی‌خواهند این نظم را بپذیرند." },
      { fr: "C'est pour cela qu'elles créent les gender studies : pour analyser les différences entre les hommes et les femmes, pour voir si ces différences existent vraiment, ou si elles ont juste été ⟦inventées|ساختگی / جعل‌شده⟧. Par exemple, pendant longtemps on pensait que les hommes étaient meilleurs que les femmes en mathématiques, qu'ils étaient plus ⟦doués|بااستعداد⟧. On pensait que le ⟦cerveau|مغز⟧ des hommes et celui des femmes étaient différents. Avec les études de genre, on a montré que cette théorie était fausse.", fa: "به همین خاطر است که مطالعات جنسیت را پدید می‌آورند: برای تحلیل تفاوت‌های بین زنان و مردان، برای دیدن اینکه آیا این تفاوت‌ها واقعاً وجود دارند، یا فقط ساختگی‌اند. مثلاً، مدت‌ها فکر می‌کردند مردان در ریاضیات از زنان بهترند، که بااستعدادترند. فکر می‌کردند مغز مردان و زنان متفاوت است. با مطالعات جنسیت، نشان دادند این نظریه نادرست است." },
      { fr: "Le problème pour comprendre la théorie du genre, c'est qu'elle ⟪touche à|toucher À = «مربوط بودن به / دست زدن به». با à⟫ plein de domaines différents : la littérature, la philosophie, l'histoire, la psychologie, la sociologie. Donc, il est difficile de faire la ⟦synthèse|جمع‌بندی⟧ de toutes ces études.", fa: "مشکل فهم نظریه‌ی جنسیت این است که به کلی حوزه‌ی مختلف مربوط می‌شود: ادبیات، فلسفه، تاریخ، روان‌شناسی، جامعه‌شناسی. پس، جمع‌بندی همه‌ی این مطالعات سخت است." },
      { fr: "Alors attention, la théorie du genre ne dit pas que les différences biologiques n'existent pas. Elle ⟦reconnaît|به رسمیت می‌شناسد (reconnaître)⟧ parfaitement qu'il existe bien des différences biologiques. Mais elle dit aussi que beaucoup de différences ne sont pas biologiques, elles sont seulement le ⟦résultat|نتیجه⟧ de notre éducation, de la façon dont la société ⟦considère|می‌نگرد / در نظر می‌گیرد⟧ les hommes et les femmes.", fa: "خب حواستان باشد، نظریه‌ی جنسیت نمی‌گوید تفاوت‌های زیستی وجود ندارند. کاملاً به رسمیت می‌شناسد که تفاوت‌های زیستی وجود دارند. اما می‌گوید خیلی از تفاوت‌ها زیستی نیستند، فقط نتیجه‌ی آموزش ما هستند، نتیجه‌ی شیوه‌ای که جامعه به زنان و مردان می‌نگرد." },
      { fr: "Pour bien comprendre ça, je vais ⟪partager avec vous|partager AVEC = «به اشتراک گذاشتن با»⟫ une ⟦citation|نقل‌قول⟧ de Simone de Beauvoir. C'est une philosophe française qui a ⟪joué un grand rôle|jouer un rôle = «نقش ایفا کردن» (کالوکیشن)⟫ dans le mouvement féministe. Elle a écrit un livre mondialement célèbre qui s'appelle Le Deuxième Sexe. Et dans ce livre, elle écrit : ⟦« On ne naît pas femme, on le devient »|«زن به دنیا نمی‌آیند، زن می‌شوند» — جمله‌ی معروف⟧. Que signifie cette citation ?", fa: "برای فهم خوبِ این، یک نقل‌قول از سیمون دو بووار با شما به اشتراک می‌گذارم. او فیلسوفی فرانسوی است که نقش بزرگی در جنبش فمینیستی ایفا کرد. کتابی جهانی‌مشهور نوشت به نام «جنس دوم». و در این کتاب می‌نویسد: «زن به دنیا نمی‌آیند، زن می‌شوند.» این نقل‌قول یعنی چه؟" },
      { fr: "Elle signifie qu'à la naissance, un bébé a un sexe biologique, mais son ⟦comportement|رفتار⟧ est ⟦neutre|خنثی⟧. ⟪Que le bébé soit un garçon ou une fille|que + subjonctif (soit) = «چه... چه». ساختار اعطایی⟫, il veut les mêmes choses : il veut manger, dormir, être avec ses parents. Mais ensuite, quand l'enfant grandit, il apprend à ⟪se comporter|se comporter = «رفتار کردن» (فعل دوضمیره)⟫ différemment. Si l'enfant est un garçon, on va lui apprendre à se comporter comme un garçon. Et si c'est une fille, elle va être ⟦éduquée|تربیت‌شده⟧ pour devenir une femme.", fa: "یعنی هنگام تولد، نوزاد جنسیت زیستی دارد، اما رفتارش خنثی است. چه نوزاد پسر باشد چه دختر، همان چیزها را می‌خواهد: می‌خواهد بخورد، بخوابد، با والدینش باشد. اما بعد، وقتی کودک بزرگ می‌شود، یاد می‌گیرد متفاوت رفتار کند. اگر کودک پسر باشد، به او یاد می‌دهند مثل پسر رفتار کند. و اگر دختر باشد، تربیت می‌شود تا زن شود." },
      { fr: "Pour vous donner un autre exemple, je vous propose d'écouter un ⟦extrait|بخش / گزیده⟧ de film. Ce film s'appelle « Les garçons et Guillaume, à table ! ». C'est une ⟦comédie|کمدی⟧ française sortie en 2013. En français, on dit ⟦« à table ! »|«بیایید سر میز / غذا آماده است!»⟧ quand le repas est prêt. Ce qui est bizarre, c'est qu'elle fait la différence entre « les garçons » et Guillaume. Pourtant, Guillaume est un prénom de garçon. Alors, pourquoi sa mère ne le considère-t-elle pas comme un garçon ?", fa: "برای یک مثال دیگر، پیشنهاد می‌کنم یک گزیده از فیلم گوش بدهید. این فیلم «پسرها و گیوم، سر میز!» نام دارد. یک کمدی فرانسوی محصول ۲۰۱۳ است. در فرانسه می‌گویند «à table!» وقتی غذا آماده است. چیز عجیب این است که او بین «پسرها» و گیوم تمایز قائل می‌شود. در حالی که گیوم یک اسم پسرانه است. پس چرا مادرش او را پسر در نظر نمی‌گیرد؟" },
      { fr: "Le père : « Bon Guillaume, qu'est-ce que tu veux faire comme sport ? J'ai vu ton ⟦livret|کارنامه⟧, tu es ⟦nul|ضعیف / صفر⟧ en sport. ⟪je veux que tu fasses|vouloir que + subjonctif (fasses) = «می‌خواهم که تو ... کنی»⟫ du sport. » Guillaume : « Du piano ! »", fa: "پدر: «خب گیوم، می‌خواهی چه ورزشی بکنی؟ کارنامه‌ات را دیدم، در ورزش ضعیفی. می‌خواهم ورزش کنی.» گیوم: «پیانو!»" },
      { fr: "⟪« Être nul en »|être nul EN qqch = «در چیزی خیلی ضعیف بودن». با en⟫ quelque chose, ça signifie être très mauvais. À l'école, les élèves disent « je suis nul en mathématiques ». Comme Guillaume a de mauvais résultats, son père veut qu'il fasse du sport tous les samedis. Et vous avez entendu quels sports il lui propose ? Le foot, la boxe, le judo, et même la ⟦lutte|کشتی⟧ gréco-romaine ! Pourquoi le père propose-t-il ces sports ? Quel est le ⟦point commun|وجه اشتراک⟧ entre tous ces sports ?", fa: "«être nul en» چیزی یعنی خیلی بد بودن. در مدرسه، دانش‌آموزان می‌گویند «من در ریاضی ضعیفم». چون گیوم نتایج بدی دارد، پدرش می‌خواهد هر شنبه ورزش کند. و شنیدید چه ورزش‌هایی پیشنهاد می‌دهد؟ فوتبال، بوکس، جودو، و حتی کشتی فرنگی! چرا پدر این ورزش‌ها را پیشنهاد می‌دهد؟ وجه اشتراک همه‌ی این ورزش‌ها چیست؟" },
      { fr: "Vous avez ⟦deviné|حدس زدید⟧ ? Ces sports sont considérés comme des sports d'hommes, ils sont très physiques, ⟦voire|حتی / یا بهتر بگوییم⟧ même violents. Le père trouve que son fils ne ⟦se comporte|رفتار می‌کند⟧ pas assez comme un garçon. Être ⟦sportif|ورزشکار / اهل ورزش⟧, ça fait partie des choses que la société ⟪attend des|attendre DE = «انتظار داشتن از». با de⟫ garçons. On pense que les garçons doivent être sportifs, ⟦compétitifs|رقابت‌جو⟧.", fa: "حدس زدید؟ این ورزش‌ها ورزش‌های مردانه تلقی می‌شوند، خیلی فیزیکی‌اند، حتی خشن. پدر فکر می‌کند پسرش به‌اندازه‌ی کافی مثل پسر رفتار نمی‌کند. اهل ورزش بودن، بخشی از چیزهایی است که جامعه از پسرها انتظار دارد. فکر می‌کنند پسرها باید ورزشکار و رقابت‌جو باشند." },
      { fr: "Dans ce film, on voit qu'un garçon apprend à devenir un homme avec son éducation. Guillaume n'aime pas le sport, mais son père l'⟪oblige à|obliger qqn À = «مجبور کردن به». با à⟫ en faire. Guillaume doit ⟪se conformer au|se conformer À = «خود را وفق دادن با / تبعیت کردن از»⟫ modèle social de l'homme. Mais pour les filles, on pense que ça n'est pas très important. Cette différence nous montre que la société n'a pas les mêmes ⟦attentes|انتظارات⟧ avec les hommes et avec les femmes.", fa: "در این فیلم، می‌بینیم که یک پسر با تربیتش یاد می‌گیرد مرد شود. گیوم ورزش دوست ندارد، اما پدرش مجبورش می‌کند ورزش کند. گیوم باید خود را با الگوی اجتماعی مرد وفق دهد. اما برای دخترها، فکر می‌کنند خیلی مهم نیست. این تفاوت نشانمان می‌دهد که جامعه انتظارات یکسانی از مردان و زنان ندارد." },
      { fr: "Comment apprend-on à devenir une femme ou un homme ? Quand on est enfant, c'est l'éducation de nos parents qui nous influence. L'exemple le plus visible, ce sont les ⟦jouets|اسباب‌بازی‌ها⟧. Quand vous entrez dans un magasin de jouets, vous voyez la partie avec les jouets pour les garçons et celle pour les filles. Dans la partie pour les garçons, tout est bleu. Et chez les filles, tout est rose. Vous pensez que biologiquement, les garçons ⟦préfèrent|ترجیح می‌دهند⟧ le bleu et les filles le rose ?", fa: "چطور یاد می‌گیریم زن یا مرد شویم؟ وقتی کودکیم، تربیت والدینمان است که تأثیرمان می‌گذارد. آشکارترین مثال، اسباب‌بازی‌هاست. وقتی وارد یک اسباب‌بازی‌فروشی می‌شوید، بخش اسباب‌بازی‌های پسرانه و بخش دخترانه را می‌بینید. در بخش پسرها، همه‌چیز آبی است. و در بخش دخترها، همه‌چیز صورتی. فکر می‌کنید زیستی، پسرها آبی و دخترها صورتی را ترجیح می‌دهند؟" },
      { fr: "Évidemment non ! Simplement, on ⟪habitue les enfants à|habituer qqn À = «کسی را عادت دادن به». با à⟫ aimer ces couleurs très tôt. Ces décisions des parents et des entreprises influencent les ⟦goûts|سلیقه‌ها⟧ des enfants. Quels jouets les parents achètent-ils aux petits garçons ? Leurs jouets sont souvent pour faire la guerre ou ⟪se battre|se battre = «جنگیدن / دعوا کردن» (فعل دوضمیره)⟫ : des soldats, des super héros, des armes. Pour les petites filles, on achète plutôt des ⟦poupées|عروسک‌ها⟧ qu'elles peuvent ⟦habiller|لباس پوشاندن⟧ ou maquiller. On apprend aux filles qu'elles doivent ⟪faire attention à|faire attention À = «توجه/دقت کردن به». با à⟫ leur apparence.", fa: "بدیهی است که نه! فقط، بچه‌ها را خیلی زود به دوست‌داشتن این رنگ‌ها عادت می‌دهند. این تصمیم‌های والدین و شرکت‌ها روی سلیقه‌ی بچه‌ها تأثیر می‌گذارد. والدین چه اسباب‌بازی‌هایی برای پسربچه‌ها می‌خرند؟ اسباب‌بازی‌هایشان اغلب برای جنگیدن یا دعوا کردن است: سرباز، ابرقهرمان، اسلحه. برای دختربچه‌ها، بیشتر عروسک می‌خرند که می‌توانند لباس بپوشانند یا آرایش کنند. به دخترها یاد می‌دهند که باید به ظاهرشان توجه کنند." },
      { fr: "Souvent, on dit que les garçons sont meilleurs que les filles dans les sciences dures comme les mathématiques. Pour ⟦vérifier|راستی‌آزمایی کردن⟧ cela, des chercheurs français ont ⟦réalisé|انجام دادند⟧ une expérience intéressante. Ils ont fait deux groupes d'étudiants. Le but était de reproduire une forme ⟦géométrique|هندسی⟧. La différence : dans le premier groupe, on a dit que c'était un test de géométrie, et dans le deuxième, un test de dessin.", fa: "اغلب می‌گویند پسرها در علوم سخت مثل ریاضیات از دخترها بهترند. برای راستی‌آزمایی این، پژوهشگران فرانسوی یک آزمایش جالب انجام دادند. دو گروه دانشجو تشکیل دادند. هدف، بازتولید یک شکل هندسی بود. تفاوت: در گروه اول گفتند این آزمون هندسه است، و در گروه دوم، آزمون نقاشی." },
      { fr: "Devinez quoi : dans le groupe 1, qui pensait faire un test de géométrie, les garçons ont eu de meilleures notes. Et dans le groupe 2, qui pensait faire un test de dessin, ce sont les filles qui ont eu de meilleures notes ! Alors que le test était exactement le même. Cette expérience nous montre qu'il existe des ⟦stéréotypes|کلیشه‌ها⟧ à l'école et que les élèves sont ⟪victimes de|victime DE = «قربانیِ». با de⟫ ces stéréotypes. Il n'y a pas de différences entre le cerveau des hommes et celui des femmes, mais seulement une ⟦perception|ادراک / برداشت⟧ différente.", fa: "حدس بزنید: در گروه ۱، که فکر می‌کرد آزمون هندسه می‌دهد، پسرها نمرات بهتری گرفتند. و در گروه ۲، که فکر می‌کرد آزمون نقاشی می‌دهد، دخترها نمرات بهتری گرفتند! در حالی که آزمون دقیقاً یکی بود. این آزمایش نشانمان می‌دهد که کلیشه‌هایی در مدرسه وجود دارد و دانش‌آموزان قربانی این کلیشه‌ها هستند. تفاوتی بین مغز زنان و مردان نیست، فقط برداشتی متفاوت." },
      { fr: "Dans les manuels scolaires, les grands scientifiques sont souvent des hommes. Alors les petites filles ont ⟪tendance à|avoir tendance À = «گرایش/تمایل داشتن به». با à⟫ penser que ces matières sont réservées aux garçons. Par exemple, Maria Skłodowska-Curie a obtenu le prix Nobel de physique en 1903 avec son mari. Mais dans les livres, on la présente toujours avec son mari, comme si une femme ne pouvait pas ⟦réussir|موفق شدن⟧ sans son mari. Pourtant, elle a obtenu un deuxième prix Nobel toute seule.", fa: "در کتاب‌های درسی، دانشمندان بزرگ اغلب مردند. پس دختربچه‌ها تمایل دارند فکر کنند این رشته‌ها مخصوص پسرهاست. مثلاً، ماری کوری در ۱۹۰۳ جایزه‌ی نوبل فیزیک را با همسرش گرفت. اما در کتاب‌ها، همیشه او را با همسرش معرفی می‌کنند، انگار یک زن بدون همسرش نمی‌تواند موفق شود. در حالی که او یک نوبل دوم را کاملاً تنها گرفت." },
      { fr: "C'est dans le monde professionnel qu'on crée des différences. On pense qu'il y a des professions ⟦réservées|اختصاص‌یافته / محفوظ⟧ aux hommes, comme ingénieur, pompier, policier. Et d'autres métiers réservés aux femmes : maîtresse d'école, ⟦infirmière|پرستار (زن)⟧. Pendant longtemps, on pensait que les femmes ne pouvaient pas faire de politique. Mais la situation a complètement changé. Il y a de plus en plus de femmes qui font de la politique : des ⟦députées|نمایندگان مجلس (زن)⟧, des ministres, des présidentes même !", fa: "در دنیای حرفه‌ای است که تفاوت‌ها ساخته می‌شوند. فکر می‌کنند مشاغلی مخصوص مردانند، مثل مهندس، آتش‌نشان، پلیس. و مشاغل دیگری مخصوص زنان: معلم، پرستار. مدت‌ها فکر می‌کردند زنان نمی‌توانند سیاست‌ورزی کنند. اما وضعیت کاملاً تغییر کرده. زنان بیشتر و بیشتری وارد سیاست می‌شوند: نماینده‌ی مجلس، وزیر، حتی رئیس‌جمهور!" },
      { fr: "Maintenant, les gouvernements de certains pays ⟦imposent|تحمیل می‌کنند⟧ la ⟦parité|برابری تعداد (زن و مرد)⟧. La parité signifie qu'il doit y avoir autant de femmes que d'hommes. Grâce à ce genre de loi, les ⟦mentalités|طرز فکرها⟧ changent. Pourtant, dans les entreprises, il existe toujours des ⟦inégalités de salaires|نابرابری دستمزد⟧. En France, cette inégalité est de 19 %. Pour un même poste, une femme gagne en moyenne 19 % de moins qu'un homme. C'est ⟦injuste|ناعادلانه⟧ ! Heureusement, il y a de plus en plus d'organisations qui ⟦dénoncent|افشا می‌کنند / محکوم می‌کنند⟧ ces inégalités.", fa: "حالا، دولت‌های برخی کشورها برابری تعداد را تحمیل می‌کنند. این برابری یعنی باید به‌اندازه‌ی مردان زن وجود داشته باشد. به لطف این نوع قانون، طرز فکرها تغییر می‌کند. با این حال، در شرکت‌ها، هنوز نابرابری دستمزد هست. در فرانسه، این نابرابری ۱۹٪ است. برای یک شغل یکسان، یک زن به‌طور میانگین ۱۹٪ کمتر از یک مرد درآمد دارد. ناعادلانه است! خوشبختانه، سازمان‌های بیشتری این نابرابری‌ها را افشا می‌کنند." },
      { fr: "Pour conclure, on peut dire que la théorie du genre est très importante pour nous aider à ⟪prendre conscience des|prendre conscience DE = «آگاه شدن از / پی بردن به». کالوکیشن با de⟫ stéréotypes liés au sexe. Beaucoup de différences qu'on croyait biologiques sont en réalité des ⟦constructions sociales|برساخت‌های اجتماعی⟧. Peu importe notre sexe biologique, nous sommes avant tout des ⟦êtres humains|انسان‌ها⟧ avec notre propre caractère. Notre réussite ne devrait pas ⟪dépendre de|dépendre DE = «بستگی داشتن به». با de⟫ notre sexe biologique.", fa: "برای جمع‌بندی، می‌شود گفت نظریه‌ی جنسیت خیلی مهم است تا به ما کمک کند به کلیشه‌های مرتبط با جنسیت پی ببریم. خیلی از تفاوت‌هایی که زیستی می‌پنداشتیم در واقع برساخت‌های اجتماعی‌اند. مهم نیست جنسیت زیستی‌مان چیست، ما پیش از هر چیز انسان‌هایی با شخصیت خودمانیم. موفقیت ما نباید به جنسیت زیستی‌مان بستگی داشته باشد." },
      { fr: "Voilà, c'est la fin de ce podcast. J'espère que vous en savez un peu plus sur la théorie du genre. Comme d'habitude, vous pouvez trouver la transcription sur mon site internet innerfrench.com. Dans le prochain podcast, je vous parlerai du nouveau président français, Monsieur Emmanuel Macron, de ses idées et de son ⟦programme|برنامه⟧ pour la France. À bientôt, salut !", fa: "خب، این پایان این پادکست است. امیدوارم کمی بیشتر درباره‌ی نظریه‌ی جنسیت بدانید. مثل همیشه، می‌توانید متن را در سایتم innerfrench.com پیدا کنید. در پادکست بعدی، درباره‌ی رئیس‌جمهور جدید فرانسه، آقای امانوئل ماکرون، ایده‌ها و برنامه‌اش برای فرانسه حرف می‌زنم. به‌زودی، خداحافظ!" },
    ],
  },

  {
    num: 5,
    titre: "Le nouveau président français : Emmanuel Macron",
    titreFa: "رئیس‌جمهور جدید فرانسه: امانوئل ماکرون",
    theme: "سیاست · شخصیت",
    audio: "https://mcdn.podbean.com/mf/web/ii4jaj/LCP005_-_France_s_new_President.mp3",
    source: "https://innerfrench.com/05-nouveau-president-francais-emmanuel-macron/",
    intro: "در این اپیزود هوگو درباره‌ی امانوئل ماکرون صحبت می‌کند — کسی که در ۳۹ سالگی جوان‌ترین رئیس‌جمهور تاریخ جمهوری پنجم فرانسه شد. چطور یک آدم کاملاً ناشناس در ۴ سال به رأس قدرت رسید؟",
    paras: [{"fr": "Vous le savez sûrement, mais en France, il y a eu des élections très importantes il y a deux semaines : les ⟦élections présidentielles|انتخابات ریاست‌جمهوری⟧.", "fa": "احتمالاً می‌دانید که در فرانسه دو هفته پیش انتخابات بسیار مهمی برگزار شد: انتخابات ریاست‌جمهوری."}, {"fr": "Pourquoi les élections présidentielles sont-elles si importantes en France ? Parce que le Président a beaucoup de ⟦pouvoir|قدرت⟧. Par exemple, c'est lui qui ⟦nomme|منصوب می‌کند⟧ le Premier ministre. Il joue aussi un grand rôle dans la ⟦diplomatie|دیپلماسی⟧, il ⟦représente|نمایندگی می‌کند⟧ la France à l'étranger.", "fa": "چرا انتخابات ریاست‌جمهوری در فرانسه این‌قدر مهم است؟ چون رئیس‌جمهور قدرت زیادی دارد. مثلاً اوست که نخست‌وزیر را منصوب می‌کند. نقش بزرگی هم در دیپلماسی دارد و فرانسه را در خارج نمایندگی می‌کند."}, {"fr": "Le Président est également très ⟦médiatisé|تحت پوشش رسانه‌ای قرار می‌گیرد⟧. Un an avant le début de l'élection, tous les médias en parlent déjà ⟦quotidiennement|روزانه⟧. Pendant la ⟦campagne présidentielle|کمپین ریاست‌جمهوری⟧, les médias ⟪ne parlent que des élections|«ne... que» = فقط / منحصراً — ساختار محدودسازی⟫.", "fa": "رئیس‌جمهور همچنین بسیار تحت پوشش رسانه‌ای است. یک سال قبل از شروع انتخابات، همهٔ رسانه‌ها روزانه از آن حرف می‌زنند. در طول کمپین ریاست‌جمهوری، رسانه‌ها فقط از انتخابات حرف می‌زنند."}, {"fr": "Les personnes qui ont le droit de voter sont les ⟦citoyens|شهروندان⟧ français qui sont ⟦majeurs|بالغ (۱۸ سال به بالا)⟧. Il y a deux ⟦tours|دور⟧ à cette élection. Au 2e tour, c'est le candidat qui ⟦obtient le plus de voix|بیشترین رأی را به دست می‌آورد⟧ qui gagne.", "fa": "کسانی که حق رأی دارند شهروندان فرانسوی بالغ (۱۸ سال به بالا) هستند. این انتخابات دو دور دارد. در دور دوم، نامزدی که بیشترین رأی را به دست آورد برنده می‌شود."}, {"fr": "Cette année, c'est Emmanuel Macron qui a gagné avec 66 % des voix ⟦face à|در برابر⟧ Marine Le Pen. Emmanuel Macron a donc été ⟦élu|انتخاب شده⟧ pour être le Président pendant 5 ans. 5 ans, c'est la durée du ⟦mandat|دوره / مأموریت⟧ présidentiel en France.", "fa": "امسال امانوئل ماکرون با ۶۶٪ آرا در برابر مارین لوپن برنده شد. پس ماکرون برای ۵ سال رئیس‌جمهور انتخاب شد. ۵ سال مدت دورهٔ ریاست‌جمهوری در فرانسه است."}, {"fr": "Emmanuel Macron est né en 1977 à Amiens. Il vient d'une famille ⟦aisée|مرفه / دارا⟧. « Aisé », ça veut dire « qui a de l'argent », quelqu'un pour qui l'argent n'est pas un problème.", "fa": "امانوئل ماکرون در ۱۹۷۷ در آمیان به دنیا آمد. از خانواده‌ای مرفه می‌آید. «Aisé» یعنی کسی که پول دارد، کسی که پول برایش مشکل نیست."}, {"fr": "À 15 ans, Emanuel fait une rencontre très importante. Il ⟦tombe amoureux|عاشق می‌شود⟧ de sa professeure de français Brigitte Trogneux, qui a 37 ans. ⟪Tomber amoureux|«tomber amoureux» — با tomber چون کنترل‌پذیر نیست، مثل افتادن⟫ — on utilise le verbe tomber parce que c'est quelque chose qu'on ne contrôle pas.", "fa": "در ۱۵ سالگی امانوئل یک رویارویی مهم داشت. عاشق معلم فرانسه‌اش بریژیت ترونیو می‌شود که ۳۷ سال داشت. از فعل «tomber» استفاده می‌شود چون این چیزی است که کنترلش نمی‌کنیم، مثل افتادن."}, {"fr": "Après le lycée, Emmanuel obtient un ⟦master de philosophie|فوق‌لیسانس فلسفه⟧ et entre dans la prestigieuse ⟦ENA|مدرسهٔ ملی اداری — تربیت‌کنندهٔ رؤسای جمهور⟧. C'est une école qui forme les personnes pour les plus ⟦hauts postes|بالاترین مناصب⟧ de l'administration publique.", "fa": "بعد از دبیرستان، امانوئل فوق‌لیسانس فلسفه گرفت و وارد مدرسهٔ ملی اداری معتبر (ENA) شد. این مدرسه افراد را برای بالاترین مناصب اداری تربیت می‌کند."}, {"fr": "En 2008, Macron rejoint la célèbre ⟦banque d'affaires|بانک سرمایه‌گذاری⟧ Rothschild. Il reste 4 ans dans cette banque et ⟦gagne|درمی‌آورد⟧ plus de 2 millions d'euros. Plus tard, il sera très ⟦critiqué|مورد انتقاد قرار می‌گیرد⟧ pour son passage dans cette banque.", "fa": "در ۲۰۰۸، ماکرون به بانک سرمایه‌گذاری معروف روتشیلد پیوست. ۴ سال در این بانک ماند و بیش از ۲ میلیون یورو درآورد. بعداً بسیار به خاطر این دوره مورد انتقاد قرار گرفت."}, {"fr": "En 2016, il quitte son poste de ministre de l'Économie et crée son propre ⟦mouvement politique|جنبش سیاسی⟧ qui s'appelle « ⟦En marche !|در حرکت! — یعنی باید پیشروی کرد⟧ ». Il pense que la France est ⟦bloquée|گیرکرده / راکد⟧ et lui veut la faire avancer.", "fa": "در ۲۰۱۶ از سمتش به‌عنوان وزیر اقتصاد استعفا داد و جنبش سیاسی خودش را به نام «در حرکت!» تأسیس کرد. فکر می‌کند فرانسه راکد مانده و او می‌خواهد آن را به پیش ببرد."}, {"fr": "La stratégie de Macron était différente : son mouvement n'était ⟪ni de droite ni de gauche|«ni... ni...» = نه... نه... — ساختار نفی دوگانه⟫. Il est au ⟦centre|مرکز⟧ de la scène politique.", "fa": "استراتژی ماکرون متفاوت بود: جنبشش نه راست بود نه چپ. در مرکز صحنهٔ سیاسی قرار داشت."}, {"fr": "Pour ⟦construire|ساختن⟧ son programme, il a décidé d'⟦interroger|مصاحبه کردن با / پرسیدن از⟧ directement les Français. 100 000 Français ont été ⟦interrogés|مورد مصاحبه قرار گرفتند⟧ et leurs réponses ont été utilisées pour créer un programme qui ⟦réponde à leurs attentes|پاسخگوی انتظاراتشان باشد — subjonctif بعد از qui de but⟫.", "fa": "برای ساختن برنامه‌اش، تصمیم گرفت مستقیماً از فرانسوی‌ها بپرسد. ۱۰۰٬۰۰۰ فرانسوی مورد مصاحبه قرار گرفتند و پاسخ‌هایشان برای ایجاد برنامه‌ای که پاسخگوی انتظاراتشان باشد استفاده شد."}, {"fr": "Macron a aussi été critiqué parce qu'il disait toujours ce que les gens voulaient entendre. On a pensé qu'il n'avait pas de ⟦convictions|اعتقادات / باورهای راسخ⟧. Certains pensaient aussi qu'il était trop jeune, qu'il n'avait pas assez d'⟦expérience|تجربه⟧.", "fa": "ماکرون همچنین مورد انتقاد قرار گرفت چون همیشه آنچه مردم می‌خواستند بشنوند می‌گفت. فکر می‌کردند اعتقادات راسخی ندارد. بعضی‌ها هم فکر می‌کردند خیلی جوان است و تجربهٔ کافی ندارد."}, {"fr": "⟦Malgré|علی‌رغم / با وجود⟧ toutes ces critiques, Macron a gagné le premier tour. Pour que Marine Le Pen ne gagne pas, tous les autres partis ont ⟦appelé les électeurs à voter|از رأی‌دهندگان خواستند که رأی بدهند — appeler à + مصدر⟫ pour Macron.", "fa": "علی‌رغم همهٔ این انتقادها، ماکرون دور اول را برد. برای اینکه مارین لوپن نبرد، همهٔ احزاب دیگر از رأی‌دهندگان خواستند به ماکرون رأی بدهند."}, {"fr": "Concernant l'économie, Macron veut ⟦supprimer|حذف کردن⟧ 120 000 postes de ⟦fonctionnaires|کارمندان دولت⟧. Les fonctionnaires, ce sont les personnes qui travaillent pour l'État. Il veut que l'État soit moins ⟦endetté|بدهکار⟧.", "fa": "در مورد اقتصاد، ماکرون می‌خواهد ۱۲۰٬۰۰۰ پست کارمند دولت را حذف کند. کارمندان دولت کسانی هستند که برای دولت کار می‌کنند. می‌خواهد دولت کمتر بدهکار باشد."}, {"fr": "Pour conclure, il y a trois choses importantes à retenir sur Emmanuel Macron. La première : il est le plus jeune Président de l'histoire de la Ve République. La deuxième : il a créé un nouveau parti ⟦centriste|میانه‌رو⟧, ni de droite ni de gauche. Et la troisième : il est ⟦libéral|لیبرال (اقتصادی: طرفدار بازار آزاد)⟧ sur le plan économique et ⟦pro-européen|طرفدار اتحادیه‌ی اروپا⟧.", "fa": "برای نتیجه‌گیری، سه چیز مهم را باید درباره‌ی ماکرون به خاطر بسپاریم. اول: جوان‌ترین رئیس‌جمهور تاریخ جمهوری پنجم است. دوم: یک حزب جدید میانه‌رو، نه راست نه چپ، تأسیس کرد. سوم: از نظر اقتصادی لیبرال و طرفدار اتحادیه‌ی اروپاست."}, {"fr": "Et j'ai une question pour vous : est-ce que les médias dans votre pays ont parlé d'Emmanuel Macron ? Si oui, que disent les médias sur lui ? ⟦Envoyez-moi un email⟧ à l'adresse hugo@innerfrench.com !", "fa": "و یک سؤال برای شما: آیا رسانه‌های کشورتان از امانوئل ماکرون صحبت کردند؟ اگر بله، رسانه‌ها چه می‌گویند؟ برایم ایمیل بفرستید!"}],
  },
  {
    num: 6,
    titre: "Apprendre une langue : les avantages cachés",
    titreFa: "یادگیری زبان: مزایای پنهان",
    theme: "روانشناسی · یادگیری",
    audio: "https://mcdn.podbean.com/mf/web/ii4jaj/LCP006_-_Apprendre_une_langue.mp3",
    source: "https://innerfrench.com/06-apprendre-langue-avantages-caches/",
    intro: "هوگو در این اپیزود از مزایایی صحبت می‌کند که معمولاً هیچ‌کس از آن‌ها حرف نمی‌زند: چطور یادگیری زبان مغز را جوان نگه می‌دارد، تساهل را افزایش می‌دهد، و حتی شخصیتت را عوض می‌کند!",
    paras: [{"fr": "Depuis le début des années 2000, il y a eu beaucoup d'études sur les personnes ⟦bilingues|دوزبانه⟧. Une personne bilingue, c'est quelqu'un qui connaît deux langues. Les scientifiques veulent savoir s'il existe des ⟦différences|تفاوت‌ها⟧ entre le ⟦cerveau|مغز⟧ des personnes bilingues et des personnes ⟦monolingues|تک‌زبانه⟧.", "fa": "از اوایل دهه‌ی ۲۰۰۰، مطالعات زیادی درباره‌ی افراد دوزبانه انجام شده. یک فرد دوزبانه کسی است که دو زبان بلد است. دانشمندان می‌خواهند بدانند آیا تفاوتی بین مغز افراد دوزبانه و تک‌زبانه وجود دارد."}, {"fr": "Dans le passé, les scientifiques pensaient que parler deux langues était un ⟦handicap|معلولیت / مشکل⟧ pour les enfants. ⟪Ils pensaient que la 2e langue pouvait gêner|gêner = مزاحم شدن / اخلال در — تفاوت با déranger⟫ les enfants bilingues et ⟦créer de la confusion|ایجاد سردرگمی کردن⟧.", "fa": "در گذشته، دانشمندان فکر می‌کردند صحبت‌کردن به دو زبان برای بچه‌ها معلولیت بود. فکر می‌کردند زبان دوم می‌تواند بچه‌های دوزبانه را مزاحم شود و ایجاد سردرگمی کند."}, {"fr": "Mais grâce aux expériences scientifiques récentes, on sait que tout ça était faux. En réalité, les enfants bilingues ⟦apprennent plus facilement|راحت‌تر یاد می‌گیرند⟧ que les autres. Ils peuvent ⟦se concentrer|تمرکز کردن⟧ sur un problème puis passer rapidement à un autre. Ils sont meilleurs pour ⟦résoudre des problèmes|حل کردن مسائل⟧.", "fa": "اما به لطف آزمایش‌های علمی اخیر، می‌دانیم که همه‌ی اینها غلط بود. در واقع، بچه‌های دوزبانه راحت‌تر از دیگران یاد می‌گیرند. می‌توانند روی یک مسئله تمرکز کنند و بعد سریع به مسئله‌ی دیگری بروند. در حل مسائل بهترند."}, {"fr": "Certains chercheurs pensent que les enfants bilingues sont plus habitués à ⟦contrôler leur environnement|کنترل محیط اطرافشان⟧. C'est comme quand vous ⟦conduisez une voiture|رانندگی می‌کنید⟧, vous devez faire attention à l'environnement : les autres voitures, les ⟦piétons|عابران پیاده⟧. Leur cerveau ⟦s'adapte|سازگار می‌شود⟧ plus rapidement.", "fa": "بعضی محققان فکر می‌کنند بچه‌های دوزبانه بیشتر به کنترل محیطشان عادت کرده‌اند. مثل وقتی رانندگی می‌کنید و باید به محیط اطراف توجه کنید: ماشین‌های دیگر، عابران پیاده. مغزشان سریع‌تر سازگار می‌شود."}, {"fr": "Quand vous faites du sport régulièrement, votre corps ⟦vieillit|پیر می‌شود⟧ moins vite. Eh bien, c'est pareil avec votre cerveau. ⟪Apprendre une langue étrangère est un excellent exercice pour le cerveau|«exercice pour» — «ورزش / تمرین برای»⟫ et la mémoire. Des études ont montré que les personnes qui parlent plusieurs langues sont moins ⟦touchées par|مبتلا به⟧ des maladies comme ⟦Alzheimer|آلزایمر⟧.", "fa": "وقتی منظم ورزش می‌کنید، بدنتان کندتر پیر می‌شود. خوب، با مغزتان هم همین‌طور است. یادگیری زبان خارجی یک تمرین عالی برای مغز و حافظه است. مطالعات نشان داده افرادی که چند زبان می‌دانند کمتر به بیماری‌هایی مثل آلزایمر مبتلا می‌شوند."}, {"fr": "En plus de tous ces avantages pour notre cerveau, apprendre une langue étrangère améliore aussi notre ⟦tolérance|تساهل / مدارا⟧. Quand on apprend une langue, on voit que des personnes communiquent différemment. On comprend qu'elles ont une ⟦culture différente|فرهنگ متفاوت⟧, et que notre culture n'est pas la seule au monde. On dit en français ⟦être ouvert d'esprit|روشنفکر بودن / باز بودن ذهن⟧.", "fa": "علاوه بر همهٔ این مزایا برای مغز، یادگیری زبان خارجی تساهل ما را هم بهبود می‌بخشد. وقتی زبانی یاد می‌گیریم، می‌بینیم افراد به شکل متفاوتی ارتباط برقرار می‌کنند. می‌فهمیم فرهنگ متفاوتی دارند و فرهنگ ما تنها فرهنگ جهان نیست. در فرانسه می‌گویند «روشنفکر بودن»."}, {"fr": "Nous avons aussi beaucoup de ⟦stéréotypes|کلیشه‌ها⟧ sur les autres nationalités. Un stéréotype, c'est une idée qu'on accepte ⟦sans réfléchir|بدون فکر کردن⟧. Quand on apprend une langue étrangère, on comprend que beaucoup de stéréotypes sont faux. On adopte une nouvelle ⟦façon de penser|شیوه‌ی تفکر⟧.", "fa": "ما کلیشه‌های زیادی درباره‌ی ملیت‌های دیگر داریم. کلیشه ایده‌ای است که بدون فکر کردن می‌پذیریم. وقتی زبان خارجی یاد می‌گیریم، می‌فهمیم که کلیشه‌های زیادی غلط‌اند. یک شیوه‌ی تفکر جدید اتخاذ می‌کنیم."}, {"fr": "Les personnes qui parlent plusieurs langues ont aussi une meilleure ⟦capacité d'adaptation|ظرفیت سازگاری⟧. Quand on parle plusieurs langues, on peut lire un texte même si on ne comprend pas tous les mots. ⟪On ne se concentre pas sur les mots qu'on ne connaît pas, mais sur ceux qu'on comprend|ساختار مقایسه‌ای: «non pas sur X, mais sur Y»⟫.", "fa": "افرادی که چند زبان صحبت می‌کنند ظرفیت سازگاری بهتری هم دارند. وقتی چند زبان می‌دانیم، می‌توانیم متنی را بخوانیم حتی اگر همهٔ کلمات را نفهمیم. روی کلماتی که نمی‌دانیم تمرکز نمی‌کنیم، بلکه روی آنهایی که می‌فهمیم."}, {"fr": "Pour résumer, on peut dire que les personnes ⟦polyglottes|چندزبانه (بیش از دو زبان)⟧ ont généralement plus ⟦confiance en elles|اعتماد به نفس⟧. Elles savent qu'elles sont capables de faire de nouvelles choses. Elles n'ont pas peur de prendre des ⟦risques|ریسک‌ها⟧ et de sortir de leur ⟦zone de confort|منطقه‌ی امنیت⟧.", "fa": "برای خلاصه کردن، می‌توان گفت افراد چندزبانه معمولاً اعتماد به نفس بیشتری دارند. می‌دانند که توانایی انجام کارهای جدید را دارند. از ریسک‌کردن و خروج از منطقه‌ی امنیتشان نمی‌ترسند."}, {"fr": "Le dernier avantage est le plus ⟦surprenant|شگفت‌آور⟧. Plusieurs études ont montré que la ⟦personnalité|شخصیت⟧ d'une personne ⟦change en fonction de|تغییر می‌کند بر اساس⟧ la langue qu'elle parle. ⟪Par exemple, je suis souvent plus ouvert et énergique quand je parle anglais|Hugo مثال شخصی از تغییر شخصیت⟫. Je pense que c'est parce que les Américains sont très ⟦charismatiques|کاریزماتیک⟧, ils ont un style plus ⟦chaleureux|گرم / صمیمی⟧.", "fa": "آخرین مزیت شگفت‌انگیزترین است. مطالعات متعدد نشان داده‌اند که شخصیت یک فرد بر اساس زبانی که صحبت می‌کند تغییر می‌کند. مثلاً وقتی انگلیسی حرف می‌زنم معمولاً بازتر و پرانرژی‌ترم. فکر می‌کنم چون آمریکایی‌ها خیلی کاریزماتیک‌اند و سبکی گرم‌تر دارند."}, {"fr": "Moi, j'ai deux personnalités. Ma personnalité française et ma personnalité anglaise. ⟪Quand on a plusieurs personnalités, c'est un peu comme vivre plusieurs vies|تشبیه زیبا — داشتن چند زبان مثل زندگی‌های متعدد⟫. Et vous, est-ce que vous avez plusieurs personnalités ? Comment est votre personnalité française ?", "fa": "من دو شخصیت دارم. شخصیت فرانسه‌ام و شخصیت انگلیسی‌ام. وقتی چند شخصیت داری، کمی مثل زندگی‌کردن چند زندگی است. و شما، آیا چند شخصیت دارید؟ شخصیت فرانسوی‌تان چطور است؟"}],
  },
  {
    num: 7,
    titre: "Les théories du complot",
    titreFa: "نظریه‌های توطئه",
    theme: "اجتماع · روانشناسی",
    audio: "https://mcdn.podbean.com/mf/web/ii4jaj/LCP007_-_Theories_du_complot.mp3",
    source: "https://innerfrench.com/07-theories-complot/",
    intro: "هوگو در این اپیزود درباره‌ی نظریه‌های توطئه صحبت می‌کند: چطور ساخته می‌شوند، چرا آدم‌ها باورشان می‌کنند، و چطور می‌شود با آن‌ها مبارزه کرد. از ماه تا یازده سپتامبر!",
    paras: [{"fr": "Un ⟦complot|توطئه / نقشهٔ پنهانی⟧, c'est quand des personnes se réunissent pour préparer un projet secret. En général, ce projet secret c'est quelque chose d'assez négatif. Par exemple, un complot pour ⟦prendre le pouvoir|قدرت را به دست گرفتن⟧. Et une théorie du complot, c'est une théorie qui explique un événement d'une façon différente de la ⟦version officielle|روایت رسمی⟧.", "fa": "توطئه وقتی است که افرادی جمع می‌شوند تا یک پروژه‌ی مخفی آماده کنند. معمولاً این پروژه چیزی نسبتاً منفی است. مثلاً توطئه‌ای برای به دست گرفتن قدرت. و نظریه‌ی توطئه نظریه‌ای است که یک رویداد را به شکلی متفاوت از روایت رسمی توضیح می‌دهد."}, {"fr": "La première théorie du complot concerne la Lune. En 1969, l'astronaute Neil Armstrong a ⟦posé le pied|پا گذاشت⟧ sur la Lune avec la mission Apollo 11. Mais certaines personnes pensent que les États-Unis n'ont jamais envoyé d'homme sur la Lune. Elles disent que la NASA a filmé les images dans un ⟦studio de cinéma|استودیوی سینمایی⟧.", "fa": "اولین نظریه‌ی توطئه درباره‌ی ماه است. در ۱۹۶۹، فضانورد نیل آرمسترانگ با مأموریت آپولو ۱۱ پا بر ماه گذاشت. اما بعضی فکر می‌کنند آمریکا هیچ‌وقت انسانی به ماه نفرستاده. می‌گویند ناسا تصاویر را در یک استودیوی سینمایی فیلم‌برداری کرده."}, {"fr": "Les personnes qui croient à ces rumeurs ont des arguments : elles disent qu'il n'y a pas d'⟦étoiles|ستاره‌ها⟧ dans le ciel sur les photos de la NASA. Elles disent aussi que le ⟦drapeau|پرچم⟧ américain ⟦flotte|می‌وزد / موج می‌زند⟧ dans les airs alors qu'il n'y a pas d'⟦atmosphère|اتمسفر⟧ sur la Lune, donc pas de vent.", "fa": "کسانی که به این شایعات باور دارند دلایلی می‌آورند: می‌گویند در عکس‌های ناسا ستاره‌ای در آسمان نیست. همچنین می‌گویند پرچم آمریکا در هوا موج می‌زند در حالی که روی ماه اتمسفری نیست، پس باد هم نیست."}, {"fr": "Le deuxième exemple, ce sont les ⟦illuminati|ایلومیناتی⟧. D'après les théories du complot, les illuminati, c'est un groupe secret de personnes très puissantes qui veut contrôler le monde. Ils veulent le ⟦nouvel ordre mondial|نظم نوین جهانی⟧. Leurs symboles sont la ⟦pyramide|هرم⟧ et l'⟦œil|چشم⟧. On peut le voir sur les billets de 1$ aux États-Unis.", "fa": "مثال دوم ایلومیناتی است. بر اساس نظریه‌های توطئه، ایلومیناتی یک گروه مخفی از افراد بسیار قدرتمند است که می‌خواهد جهان را کنترل کند. آن‌ها نظم نوین جهانی می‌خواهند. نمادهایشان هرم و چشم است. می‌توان آن را روی اسکناس یک دلاری آمریکا دید."}, {"fr": "La troisième théorie concerne les ⟦attentats|حملات تروریستی⟧ en France en 2015. Ces théories disaient que le vrai ⟦responsable|مسئول⟧ n'était pas l'État islamique, mais le ⟦Gouvernement français|دولت فرانسه⟧. Pourquoi ? Pour ⟦renforcer son pouvoir|تقویت کردن قدرتش⟧, pour renforcer le contrôle de la police. Des théories similaires existent pour les attentats du ⟦11 septembre|یازده سپتامبر⟧ aux États-Unis.", "fa": "نظریه‌ی سوم درباره‌ی حملات تروریستی فرانسه در ۲۰۱۵ است. این نظریه‌ها می‌گفتند مسئول واقعی داعش نبود، بلکه دولت فرانسه بود. چرا؟ برای تقویت قدرتش، برای تقویت کنترل پلیس. نظریه‌های مشابهی برای حملات یازده سپتامبر آمریکا وجود دارد."}, {"fr": "Alors, comment faire la ⟦recette|دستور / فرمول⟧ d'une théorie du complot ? D'abord, il faut un ⟦bouleversement|تغییر بنیادین / شوک بزرگ⟧, quelque chose qui change complètement l'ordre ⟦établi|مستقر / موجود⟧. Par exemple, une guerre, des attentats, une ⟦crise économique|بحران اقتصادی⟧, une catastrophe naturelle.", "fa": "پس فرمول یک نظریه‌ی توطئه چطور است؟ اول، باید یک شوک بزرگ باشد، چیزی که نظم موجود را کاملاً تغییر می‌دهد. مثلاً یک جنگ، حملات تروریستی، یک بحران اقتصادی، یک فاجعه‌ی طبیعی."}, {"fr": "Le deuxième élément, c'est une ⟦explication officielle|توضیح رسمی⟧. Parfois, ces explications sont difficiles à comprendre pour le ⟦grand public|عموم مردم⟧. Et des personnes cherchent des explications plus simples. Le troisième ingrédient, c'est un ⟦groupe secret|گروه مخفی⟧ qui est responsable de l'événement. Ce groupe a ses propres ⟦intérêts|منافع⟧ et ⟦ambitions|جاه‌طلبی‌ها⟧.", "fa": "عنصر دوم یک توضیح رسمی است. گاهی این توضیحات برای عموم مردم سخت‌فهم است. و افرادی توضیحات ساده‌تری می‌جویند. سومین ماده یک گروه مخفی است که مسئول رویداد است. این گروه منافع و جاه‌طلبی‌های خودش را دارد."}, {"fr": "Pourquoi est-il difficile de ⟦démentir|رد کردن / ابطال کردن⟧ les théories du complot ? D'abord, parce qu'elles utilisent beaucoup d'⟦arguments|دلایل / استدلال‌ها⟧. Quand vous prenez un argument individuellement, c'est facile de montrer qu'il est faux. Mais quand vous ⟦mélangez|قاطی می‌کنید⟧ tous ces arguments ensemble, ça devient très difficile.", "fa": "چرا ابطال نظریه‌های توطئه سخت است؟ اول، چون از دلایل زیادی استفاده می‌کنند. وقتی یک استدلال را به‌تنهایی می‌گیرید، راحت است نشان دهید غلط است. اما وقتی همهٔ این استدلال‌ها را با هم قاطی می‌کنید، خیلی سخت می‌شود."}, {"fr": "Pourquoi croyons-nous à ces théories ? Parce que le monde dans lequel nous vivons est de plus en plus ⟦complexe|پیچیده⟧, difficile à comprendre. Et nous sentons que nous sommes un peu ⟦perdus|گم / سردرگم⟧. Nous ne pouvons pas comprendre les mécanismes qui expliquent un événement.", "fa": "چرا به این نظریه‌ها باور می‌کنیم؟ چون دنیایی که در آن زندگی می‌کنیم روز به روز پیچیده‌تر و سخت‌فهم‌تر می‌شود. و احساس می‌کنیم کمی سردرگم هستیم. نمی‌توانیم مکانیسم‌هایی را که یک رویداد را توضیح می‌دهند بفهمیم."}, {"fr": "Une autre raison, c'est que nous n'aimons pas beaucoup le ⟦hasard|تصادف / شانس⟧. Si nous croyons au hasard, ça veut dire que nous sommes ⟦vulnérables|آسیب‌پذیر⟧. Avec les théories du complot, on ⟦supprime|حذف می‌کند⟧ ce hasard. On explique qu'il y a des causes, des raisons. C'est une vision ⟦manichéenne|مانوی — دنیا را به خیر مطلق و شر مطلق تقسیم‌بندی کردن⟧ : le bien contre le mal.", "fa": "دلیل دیگر اینکه ما زیاد تصادف را دوست نداریم. اگر به تصادف باور داشته باشیم، یعنی آسیب‌پذیریم. با نظریه‌های توطئه، این تصادف حذف می‌شود. توضیح داده می‌شود که علت‌هایی وجود دارد. این یک دیدگاه مانوی است: خیر در برابر شر."}, {"fr": "Quels sont les risques des théories du complot ? On fait de moins en moins ⟦confiance|اعتماد⟧ aux médias et au gouvernement. On pense qu'ils nous ⟦mentent|دروغ می‌گویند⟧. Ça ⟦provoque|ایجاد می‌کند⟧ de l'⟦isolement|انزوا⟧ parce que finalement on ne peut plus faire confiance à personne.", "fa": "ریسک‌های نظریه‌های توطئه چیست؟ روز به روز کمتر به رسانه‌ها و دولت اعتماد می‌کنیم. فکر می‌کنیم به ما دروغ می‌گویند. این انزوا ایجاد می‌کند چون دیگر به هیچ‌کس نمی‌توان اعتماد کرد."}, {"fr": "Qu'est-ce qu'on peut faire pour ⟦combattre|مبارزه کردن با⟧ ces théories ? D'abord, grâce à l'⟦éducation|آموزش⟧. Ensuite, ⟦encourager l'esprit critique|تقویت تفکر انتقادی⟧ : il faut ⟦vérifier ses sources|منابع را بررسی کردن⟧ d'information. Et enfin, ⟦rétablir la confiance|بازگرداندن اعتماد⟧ dans la ⟦démocratie|دموکراسی⟧.", "fa": "برای مبارزه با این نظریه‌ها چه کار می‌توان کرد؟ اول از طریق آموزش. بعد تقویت تفکر انتقادی: باید منابع اطلاعاتی را بررسی کنیم. و در آخر، بازگرداندن اعتماد به دموکراسی."}],
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
