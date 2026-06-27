const LESSONS = [
  {
    file: "PRONONCIATION.html",
    title: "🔊 تلفظ فرانسوی — ۵ روز ویدیویی",
    titleFr: "Prononciation",
    category: "prononciation", level: "A1–B2",
    tags: ["prononciation","tلفظ","phonétique","vidéo"],
    summary: "۵ ویدیو تمرین تلفظ + راهنمای کامل"
  },
  {file:"PRON_jour1.html",title:"🔊 تلفظ روز ۱ — Les sifflantes",titleFr:"Sifflantes S/Z/CH/J",category:"prononciation",level:"A1–B2",tags:["prononciation","S","CH","J"],summary:"صداهای سوت‌مانند"},
  {file:"PRON_jour2.html",title:"🔊 تلفظ روز ۲ — Le R français",titleFr:"Le R français",category:"prononciation",level:"A1–B2",tags:["prononciation","R","uvulaire"],summary:"حرف R گلویی"},
  {file:"PRON_jour3.html",title:"🔊 تلفظ روز ۳ — Les nasales",titleFr:"Voyelles nasales",category:"prononciation",level:"A1–B2",tags:["prononciation","nasales","AN","ON","IN"],summary:"مصوت‌های خیشومی"},
  {file:"PRON_jour4.html",title:"🔊 تلفظ روز ۴ — Liaison",titleFr:"S muet et liaison",category:"prononciation",level:"A1–B2",tags:["prononciation","liaison","S muet"],summary:"S صامت و liaison"},
  {file:"PRON_jour5.html",title:"🔊 تلفظ روز ۵ — ON vs AN",titleFr:"ON vs AN · R final",category:"prononciation",level:"A1–B2",tags:["prononciation","ON","AN","R final"],summary:"ON در مقابل AN"},

  {
    file: "IF_ep08.html",
    title: "🎧 InnerFrench #08 — Les stéréotypes",
    titleFr: "#08 Les stéréotypes",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","B1","stéréotypes"],
    summary: "کلیشه‌ها — با متن کامل و هایلایت"
  },

  {
    file: "GRAM_passe_compose.html",
    title: "📐 Le Passé Composé",
    titleFr: "Le Passé Composé",
    category: "grammar", level: "A2–B1",
    tags: ["passé composé","auxiliaire","participe passé","A2","B1"],
    summary: "گذشته مرکب — ساختار کامل با avoir و être"
  },

  {
    file: "GRAM_constructions_impersonnelles.html",
    title: "📐 Constructions impersonnelles — Subjonctif ou Indicatif ?",
    titleFr: "Constructions impersonnelles",
    category: "grammar", level: "B1–C1",
    tags: ["subjonctif","indicatif","impersonnel","il faut","B2","C1"],
    summary: "ساختارهای غیرشخصی با وجه التزامی یا اخباری + ۱۲ تمرین تعاملی"
  },
  {file:"GRAM_passe_recent.html",title:"📐 Le Passé Récent — venir de",titleFr:"Le Passé Récent",category:"grammar",level:"A2–B1",tags:["passé récent","venir de","A2"],summary:"گذشته نزدیک — تازه"},
  {file:"GRAM_pc_imparfait.html",title:"📐 Passé Composé et Imparfait",titleFr:"PC et Imparfait",category:"grammar",level:"B1–B2",tags:["passé composé","imparfait","B1"],summary:"تفاوت گذشته مرکب و استمراری"},
  {file:"GRAM_subjonctif.html",title:"📐 Subjonctif vs Indicatif",titleFr:"Subjonctif vs Indicatif",category:"grammar",level:"B1–C1",tags:["subjonctif","indicatif","B2","C1"],summary:"وجه التزامی کامل با تمام محرک‌ها"},
  {file:"GRAM_en_y_cod_coi.html",title:"📐 EN · Y · COD · COI",titleFr:"Pronoms compléments",category:"grammar",level:"B1–B2",tags:["pronoms","COD","COI","EN","Y"],summary:"ضمایر مفعولی کامل با ترتیب و جایگاه"},
  {
    file: "MINI_000.html",
    title: "✍️ Le silence qui parle",
    titleFr: "Le silence qui parle",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "سکوت که حرف می‌زند"
  },
  {
    file: "MINI_001.html",
    title: "✍️ Apprendre à dire non",
    titleFr: "Apprendre à dire non",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "یاد گرفتن نه گفتن"
  },
  {
    file: "MINI_002.html",
    title: "✍️ Le pouvoir des habitudes",
    titleFr: "Le pouvoir des habitudes",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "قدرت عادت‌ها"
  },
  {
    file: "MINI_003.html",
    title: "✍️ Vivre loin de sa famille",
    titleFr: "Vivre loin de sa famille",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "زندگی دور از خانواده"
  },
  {
    file: "MINI_004.html",
    title: "✍️ Ma routine du matin",
    titleFr: "Ma routine du matin",
    category: "miniarticle", level: "A2",
    tags: ["mini","article","lecture","B1"],
    summary: "روتین صبحگاهی من"
  },
  {
    file: "MINI_005.html",
    title: "✍️ J'aime le week-end",
    titleFr: "J'aime le week-end",
    category: "miniarticle", level: "A1-A2",
    tags: ["mini","article","lecture","B1"],
    summary: "آخر هفته را دوست دارم"
  },
  {
    file: "MINI_006.html",
    title: "✍️ Mon plat préféré",
    titleFr: "Mon plat préféré",
    category: "miniarticle", level: "A1-A2",
    tags: ["mini","article","lecture","B1"],
    summary: "غذای مورد علاقه‌ام"
  },
  {
    file: "MINI_007.html",
    title: "✍️ Pourquoi j'apprends le français",
    titleFr: "Pourquoi j'apprends le français",
    category: "miniarticle", level: "A2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا فرانسه یاد می‌گیرم"
  },
  {
    file: "MINI_008.html",
    title: "✍️ Qu'est-ce qui fait durer l'amour ?",
    titleFr: "Qu'est-ce qui fait durer l'amour ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چه چیزی عشق را ماندگار می‌کند؟"
  },
  {
    file: "MINI_009.html",
    title: "✍️ Faut-il éviter le petit-déjeuner ?",
    titleFr: "Faut-il éviter le petit-déjeuner ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا باید از صبحانه اجتناب کرد؟"
  },
  {
    file: "MINI_010.html",
    title: "✍️ Le secret pour le meilleur été",
    titleFr: "Le secret pour le meilleur été",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "راز بهترین تابستان"
  },
  {
    file: "MINI_011.html",
    title: "✍️ La lumière du matin",
    titleFr: "La lumière du matin",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "نور صبح — ضدافسردگی طبیعی"
  },
  {
    file: "MINI_012.html",
    title: "✍️ « Sois heureux. » — le vrai but ?",
    titleFr: "« Sois heureux. » — le vrai but ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "خوشبخت باش — هدف واقعی است؟"
  },
  {
    file: "MINI_013.html",
    title: "✍️ Pourquoi les matins sont-ils difficiles ?",
    titleFr: "Pourquoi les matins sont-ils difficiles ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا صبح‌ها سخت‌اند؟"
  },
  {
    file: "MINI_014.html",
    title: "✍️ La magie d'une courte promenade",
    titleFr: "La magie d'une courte promenade",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "جادوی یک پیاده‌روی کوتاه"
  },
  {
    file: "MINI_015.html",
    title: "✍️ Le manque de sommeil",
    titleFr: "Le manque de sommeil",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "کمبود خواب فراتر از خستگی"
  },
  {
    file: "MINI_016.html",
    title: "✍️ L'art de dire « non » sans culpabiliser",
    titleFr: "L'art de dire « non » sans culpabiliser",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "هنر نه گفتن بدون احساس گناه"
  },
  {
    file: "MINI_017.html",
    title: "✍️ Pourquoi à l'aise avec certaines personnes ?",
    titleFr: "Pourquoi à l'aise avec certaines personnes ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا با برخی راحت‌تریم؟"
  },
  {
    file: "MINI_018.html",
    title: "✍️ L'écoute véritable",
    titleFr: "L'écoute véritable",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "گوش دادن واقعی — مهارت نادر"
  },
  {
    file: "MINI_019.html",
    title: "✍️ Les erreurs, nos vrais professeurs",
    titleFr: "Les erreurs, nos vrais professeurs",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "اشتباهات، معلمان واقعی ما"
  },
  {
    file: "MINI_020.html",
    title: "✍️ Pourquoi se comparer aux autres nous épuise",
    titleFr: "Pourquoi se comparer aux autres nous épuise",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا مقایسه خسته‌مان می‌کند"
  },
  {
    file: "MINI_021.html",
    title: "✍️ Le pouvoir des petits débuts",
    titleFr: "Le pouvoir des petits débuts",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "قدرت شروع‌های کوچک"
  },
  {
    file: "MINI_022.html",
    title: "✍️ Pourquoi sommes-nous toujours pressés ?",
    titleFr: "Pourquoi sommes-nous toujours pressés ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا همیشه عجله داریم؟"
  },
  {
    file: "MINI_023.html",
    title: "✍️ La solitude à l'ère des réseaux sociaux",
    titleFr: "La solitude à l'ère des réseaux sociaux",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "تنهایی در عصر شبکه‌های اجتماعی"
  },
  {
    file: "MINI_024.html",
    title: "✍️ Acheter moins, être plus heureux ?",
    titleFr: "Acheter moins, être plus heureux ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "کمتر خریدن، خوشحال‌تر بودن؟"
  },
  {
    file: "MINI_025.html",
    title: "✍️ Les études permettent-elles de réussir ?",
    titleFr: "Les études permettent-elles de réussir ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا تحصیل موفقیت می‌آورد؟"
  },
  {
    file: "MINI_026.html",
    title: "✍️ Vivre à l'étranger : avantages ou inconvénients ?",
    titleFr: "Vivre à l'étranger : avantages ou inconvénients ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "زندگی در خارج: مزایا یا معایب؟"
  },
  {
    file: "MINI_027.html",
    title: "✍️ Apprendre la langue du pays est-il essentiel ?",
    titleFr: "Apprendre la langue du pays est-il essentiel ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "یادگیری زبان کشور مقصد ضروری است؟"
  },
  {
    file: "MINI_028.html",
    title: "✍️ La télévision dans l'éducation des enfants",
    titleFr: "La télévision dans l'éducation des enfants",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "نقش تلویزیون در تربیت کودکان"
  },
  {
    file: "MINI_029.html",
    title: "✍️ Internet favorise-t-il l'isolement ?",
    titleFr: "Internet favorise-t-il l'isolement ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا اینترنت انزوا می‌آورد؟"
  },
  {
    file: "MINI_030.html",
    title: "✍️ Pourquoi la musique nous donne des frissons ?",
    titleFr: "Pourquoi la musique nous donne des frissons ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا موسیقی لرزه‌مان می‌اندازد؟"
  },
  {
    file: "MINI_031.html",
    title: "✍️ Le silence est-il devenu un luxe ?",
    titleFr: "Le silence est-il devenu un luxe ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا سکوت تبدیل به لوکس شده؟"
  },
  {
    file: "MINI_032.html",
    title: "✍️ Pourquoi rêvons-nous la nuit ?",
    titleFr: "Pourquoi rêvons-nous la nuit ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا شب خواب می‌بینیم؟"
  },
  {
    file: "MINI_033.html",
    title: "✍️ Faut-il vraiment suivre ses passions ?",
    titleFr: "Faut-il vraiment suivre ses passions ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا باید دنبال اشتیاق‌هایمان باشیم؟"
  },
  {
    file: "MINI_034.html",
    title: "✍️ Les animaux ont-ils des émotions ?",
    titleFr: "Les animaux ont-ils des émotions ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا حیوانات احساس دارند؟"
  },
  {
    file: "MINI_035.html",
    title: "✍️ Pourquoi le temps passe-t-il plus vite ?",
    titleFr: "Pourquoi le temps passe-t-il plus vite ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا زمان سریع‌تر می‌گذرد؟"
  },
  {
    file: "MINI_036.html",
    title: "✍️ Le bonheur d'apprendre à tout âge",
    titleFr: "Le bonheur d'apprendre à tout âge",
    category: "miniarticle", level: "A2-B1",
    tags: ["mini","article","lecture","B1"],
    summary: "خوشبختی یادگیری در هر سن"
  },
  {
    file: "MINI_037.html",
    title: "✍️ Pourquoi rougit-on quand on est gêné ?",
    titleFr: "Pourquoi rougit-on quand on est gêné ?",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "چرا موقع خجالت سرخ می‌شویم؟"
  },
  {
    file: "MINI_038.html",
    title: "✍️ Faut-il toujours dire la vérité ?",
    titleFr: "Faut-il toujours dire la vérité ?",
    category: "miniarticle", level: "B1-B2",
    tags: ["mini","article","lecture","B1"],
    summary: "آیا باید همیشه حقیقت را گفت؟"
  },
  {
    file: "MINI_039.html",
    title: "✍️ Le pouvoir surprenant de la gratitude",
    titleFr: "Le pouvoir surprenant de la gratitude",
    category: "miniarticle", level: "B1",
    tags: ["mini","article","lecture","B1"],
    summary: "قدرت شگفت‌انگیز قدردانی"
  },
  {
    file: "PHRASES_utiles.html",
    title: "💬 جملات کاربردی فرانسوی",
    titleFr: "Phrases utiles",
    category: "phrases", level: "A1–B2",
    tags: ["phrases","expressions","communication","parler"],
    summary: "جملات کاربردی روزمره فرانسوی"
  },
  {
    file: "GUIDE_prononciation.html",
    title: "🔊 راهنمای کامل تلفظ فرانسوی",
    titleFr: "Guide de prononciation",
    category: "grammar", level: "A1–B2",
    tags: ["prononciation","phonétique","accent","sons"],
    summary: "راهنمای جامع تلفظ از A1 تا B2"
  },
  {
    file: "VOCAB_mots_daujourdhui_01.html",
    title: "📚 Les mots d'aujourd'hui — Modes de vie",
    titleFr: "Les mots d'aujourd'hui",
    category: "vocab", level: "B1–B2",
    tags: ["vocabulaire","modes de vie","jeunes","B1"],
    summary: "واژگان سبک زندگی جوانان فرانسوی"
  },
  {
    file: "GRAMMAR_comparaison.html",
    title: "📐 La Comparaison — مقایسه در فرانسه",
    titleFr: "La Comparaison",
    category: "grammar", level: "A2–C1",
    tags: ["comparaison","plus","moins","aussi","autant"],
    summary: "مقایسه کامل در فرانسه از A2 تا C1"
  },
  {
    file: "VOCAB_prison_justice.html",
    title: "📚 La prison & la justice pénale",
    titleFr: "La prison & la justice pénale",
    category: "vocab", level: "B2–C1",
    tags: ["vocabulaire","TCF","B2","C1"],
    summary: "زندان و عدالت کیفری"
  },
  {
    file: "VOCAB_vaccination_sante.html",
    title: "📚 La vaccination & la santé publique",
    titleFr: "La vaccination & la santé publique",
    category: "vocab", level: "B1–C1",
    tags: ["vocabulaire","TCF","B2","C1"],
    summary: "واکسیناسیون و بهداشت عمومی"
  },
  {
    file: "VOCAB_glottophobie.html",
    title: "📚 La glottophobie & les discriminations",
    titleFr: "La glottophobie & les discriminations",
    category: "vocab", level: "B2–C1",
    tags: ["vocabulaire","TCF","B2","C1"],
    summary: "گلوتوفوبی و تبعیض"
  },
  {
    file: "VOCAB_drogues_loi.html",
    title: "📚 Drogues, loi & société",
    titleFr: "Drogues, loi & société",
    category: "vocab", level: "B2–C1",
    tags: ["vocabulaire","TCF","B2","C1"],
    summary: "مواد مخدر، قانون و جامعه"
  },
  {
    file: "GRAM_futur_proche.html",
    title: "📐 Le Futur Proche — آینده نزدیک",
    titleFr: "Le Futur Proche",
    category: "grammar", level: "A2–B1",
    tags: ["futur","futur proche","aller","conjugaison"],
    summary: "ساختار، کاربرد و مثال‌های فراوان futur proche"
  },
  {
    file: "GRAM_futur_simple.html",
    title: "📐 Le Futur Simple — آینده ساده",
    titleFr: "Le Futur Simple",
    category: "grammar", level: "A2–B2",
    tags: ["futur","futur simple","conjugaison","irréguliers"],
    summary: "صرف کامل، افعال بی‌قاعده، کاربردها و quand+futur"
  },
  {
    file: "GRAM_futur_anterieur.html",
    title: "📐 Le Futur Antérieur — آینده قبلی",
    titleFr: "Le Futur Antérieur",
    category: "grammar", level: "B2–C1",
    tags: ["futur","futur antérieur","temps composé","antériorité"],
    summary: "ساختار، کاربرد antériorité و مقایسه سه زمان آینده"
  },
  {
    file: "PODCAST_player.html",
    title: "🎙️ پادکست فرانسوی — پخش مستقیم",
    titleFr: "Podcasts français — Psychologie et bien-être",
    category: "podcast", level: "B1–B2",
    tags: ["podcast","psychologie","écoute","B1","B2"],
    summary: "پخش مستقیم پادکست‌های فرانسوی — روان‌شناسی و رفاه"
  },
  {
    file: "PODCAST_ep288_amour.html",
    title: "🎙️ L'amour idéalisé — entre rêve et réalité",
    titleFr: "Ep.288 — L'amour idéalisé",
    category: "podcast", level: "B2",
    tags: ["podcast","psychologie","amour","couple","B2"],
    summary: "اپیزود ۲۸۸: عشق آرمانی — بین رؤیا و واقعیت با درمانگر دیان صاباغ"
  },
  {
    file: "TCF/PAGE_examens_tcf.html",
    title: "📋 راهنمای امتحانات TCF / TEF / DELF",
    titleFr: "Guide des examens TCF",
    category: "tcf", level: "B1–C1",
    tags: ["tcf","tef","delf","exam","Canada"],
    summary: "معرفی کامل امتحانات TCF Canada، TEF و DELF"
  },
  {
    file: "TCF/Tache1/index.html",
    title: "🎤 Expression Orale — Tâche 1",
    titleFr: "Tâche 1: Monologue",
    category: "tcf", level: "B1–C1",
    tags: ["tcf","expression orale","tâche 1","monologue"],
    summary: "تاچه ۱: مونولوگ آزاد — توضیح و تمرین"
  },
  {
    file: "TCF/Tache2/jogging.html",
    title: "🎤 Expression Orale — Tâche 2 (Jogging)",
    titleFr: "Tâche 2: Jogging en groupe",
    category: "tcf", level: "B1–C1",
    tags: ["tcf","expression orale","tâche 2","dialogue","jogging"],
    summary: "تاچه ۲: گفتگو — موضوع: جاگینگ گروهی"
  },
  {
    file: "TCF/Tache3/TCF_EO_T3_autorite_enfant.html",
    title: "🎤 Tâche 3 — Autorité et enfant",
    titleFr: "Tâche 3: Autorité et enfant",
    category: "tcf", level: "B2–C1",
    tags: ["tcf","expression orale","tâche 3","débat","autorité"],
    summary: "تاچه ۳: بحث و استدلال — اقتدار والدین"
  },
  {
    file: "TCF/Tache3/TCF_EO_T3_expatriation.html",
    title: "🎤 Tâche 3 — Expatriation",
    titleFr: "Tâche 3: S'habituer à l'étranger",
    category: "tcf", level: "B2–C1",
    tags: ["tcf","expression orale","tâche 3","débat","expatriation"],
    summary: "تاچه ۳: بحث — زندگی در خارج از کشور"
  },
  {
    file: "TCF/Tache3/TCF_EO_T3_relations_distance.html",
    title: "🎤 Tâche 3 — Relations à distance",
    titleFr: "Tâche 3: Relations à distance",
    category: "tcf", level: "B2–C1",
    tags: ["tcf","expression orale","tâche 3","débat","relations"],
    summary: "تاچه ۳: بحث — روابط دوری"
  },
  {
    file: "TCF/Tache3/TCF_EO_T3_travail_canada.html",
    title: "🎤 Tâche 3 — Travailler au Canada",
    titleFr: "Tâche 3: Travail au Canada",
    category: "tcf", level: "B2–C1",
    tags: ["tcf","expression orale","tâche 3","débat","Canada","travail"],
    summary: "تاچه ۳: بحث — کار در کانادا"
  },
  {
    file: "TCF/Tache3/TCF_EO_T3_travail_etranger.html",
    title: "🎤 Tâche 3 — Travail à l'étranger",
    titleFr: "Tâche 3: Travail à l'étranger",
    category: "tcf", level: "B2–C1",
    tags: ["tcf","expression orale","tâche 3","débat","travail"],
    summary: "تاچه ۳: بحث — کار در خارج از کشور"
  },
  {
    file: "IMAGE/img_1166.html",
    title: "📸 تکنسین داخل لوله",
    titleFr: "Un technicien dans un tuyau",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/pNZhBKpQfAyjl5BXo7UqKlIeLDk4SDqwgMYP79SLbn9m1DzQEItci2QUQs3jP-RBkbx4iZoi6RjRt5eG4g3qL_ECCBq_347y-RWaO0dSCmN-l0rz2ssHMOf3cGwscz3beBnu0CZfOpiuAmDnAX_SAStulhyfDvHOlkUIqYY8JvbAVgiPKgMQF78x0koSwfgsBvrkEWFOdj-gLwp5UoMvkNJL8LL2N49LSRzeorstJyQzZs25xg-35GnpGd4JTvRC2Q5nVxqWAlALZvV-t9r3UR4OhRDpaE2fvxF9XuOGIdt5q7T5Tl-dBsz2RuoVK0OzGnQ5rQJ0zc_qraCkX9Ej-w.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "تکنسین داخل لوله — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1165.html",
    title: "📸 فلامینگوها در آب",
    titleFr: "Des flamants roses dans l'eau",
    category: "image", level: "A2-B1",
    image: "https://cdn4.telesco.pe/file/fzps9tdGu7M1pOyfRIKA7ZABTALH3Vd5V-t3NNMFWOrsF8tieb1vKJUehVDiThkRK9Hm4FkdjpVFmOffXmUsVymnCM-jGSYvSefr0cORN8jMoiYy2A1lkPNJPaLdcUzlFKIicp4-auNo80_2T1hZOrXmwko4LY9R0H7vqS_fDlNyA9SmKphdqaZT1lHxyLCj8m5yjABg3usTIM2V7vkBZAFXZiRZn6YBrQs-pNali_0ADXhLqKAAiLenjketFzXZJRwnne0eW7YdljYg0TghPi6dGzKgwbysYtNto2wxltq8H2nHiL6Gp_eJSjn7t-74UfULuVHB67Yh9rYrV38jow.jpg",
    tags: ["image","décrire","description","A2-B1"],
    summary: "فلامینگوها در آب — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1164.html",
    title: "📸 سه دوست با پاپ‌کورن",
    titleFr: "Trois amis avec du popcorn",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/EL-V6y30fmtfthaZxDy38om_lRiSceYYaT6VVG4XWkZxd-hUQOdirjVnnfzqWdj13Vz0Ha1QTBE9FstlAjujJDCNkzbclyTYJZVWjLyPjOJGtiZhnBUgOhFNWj5rXne4taTHLOGVV5R5-HhuvebDC8CKnl23jYrp9w6CI64_ZeZxyGjB7WYE7FI2-BYRQ04uubxarJwmCnJJDn-0mcjrJ-MB5YJItBY9k-46ZcMyhZK23BrXi0l4g_EUlqhxoKRlybGcPoEwTHIAxE3MsbAOlgo5XJpl1wzzy5czOxhFywymEDQGQcs2wHee-CB7LBs8PuvTZ4OU5z76r3wvOLblzg.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "سه دوست با پاپ‌کورن — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1163.html",
    title: "📸 فروشنده میوه",
    titleFr: "Un vendeur de fruits",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/kzt9JhNWxT75CDeVueVAXhpmS9cjqtcXQjBpvZP4_VsArY1UdPS-1HadwiKLjapcupCj2CQu2vIADmTN868GLh9fj8LIXN2GtyQiNbiIWUFtnKECJQM_NlWq9dUig5yU3gc5tat_j1GLGhl3JObq4EqGCKHUPY7MsHXTxnRwzvU77EsETqp0dSQQZVBbtVo-V_9Ji41YtFXd36EEYtJnHboOQjgi5-E7Vm0lkB-BaCuIANnQ5kyiCtzAje6KolVghTUVFkFzRL40FbqqfvDAUCMmnftq5__vJSNHmG5z3enqUz1DiOhgmu6qIOHHmYTlS-mPSy7yt43N1JdF78SfMA.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "فروشنده میوه — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1162.html",
    title: "📸 فرآیند تأیید کیفیت",
    titleFr: "Un processus de vérification",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/Mbq9P5ZHeYHFbSVxmaO6yt_rr-sCzZnGNMecMrQdxAt9ytfrEluR5VxoMFHZIlUdAn_1cX-IInjRoXHIr2CxHspg2vO8xq_UObBh6LaVBmOUMwKGE0jN0cUb2GaPYWv1WXImMPU8gJhUnDjpQ5Oy4-HE3kAvbBLn143vgS2nuglW_DaJNSkXzjlcIVy0L6-0Px2xDc6tGMklKK6Wtz5MiiByY_O-spmM4Tr83rGzR9gJW777oDC0VDgBY3fW1ZxzUQaNJp8CqGeyaZ793EY7aIxagitxpNoIpugLk2_3vY-TEG1AXKYNC19bAX_eJ9jhLbV5n_Bdgxab1wmAL2HMqw.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "فرآیند تأیید کیفیت — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1161.html",
    title: "📸 سه حالت احساسی",
    titleFr: "Trois expressions d'émotion",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/OK9eeCExZG1TshAFec2FzaEUf84233hd_uwwhvQ22lLi4YeH2gLAr61bF8m4w4yQ1-uAytJsX6ZIMSFfB4Q5WPpBZEstn7mwdo2HiTPtlXuPcNLYVQ12WX4Of4L1vtI1_RAWDgTbmSRGjAGZGDYw9lql6J8O44YSzr7Ncv1-xIdEtmMUSMsKQnLtl2IcGwftNdaq_N1K0xGEMlcBi0vFyWwq7OVZI4ytgyuYXAOuAoCK14h3N-fi85d_X9psW4gjGftEu-bxUio3aAG0EK2gL1ytI8VI9XbU_2t_LB0IZ-ZOlg094bHOP3tQR-INzBb35c3wVkSbR99VUZea-io80A.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "سه حالت احساسی — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1160.html",
    title: "📸 بطری با پیام کمک",
    titleFr: "Une bouteille avec HELP",
    category: "image", level: "A2-B1",
    image: "https://cdn4.telesco.pe/file/X518fOgBH3XkVvZhO_QDtKslLMALYLpWmo5j-34VODw15Vh7YYWtrf4-TpjaIROAoHslrbyTZPryNsCZFLIMPD0bGtqNjVCkc0sP5LF9Mqpz-EUk4Cfw_8JwblPd0R024hN-rgNigD1oOJ4BS003V0pi6Ad2Q1UL7rVvDzG7luR-KCs-uR2WYsr31rnT-eWP_4RCnwtO4MN722Uap57h5R6MJISqCpvU_sdYzHciAj_xrXLmNqGhT1iXsDBICn2D6h79lOnUHdehAY8pZbvX5QNNg4Vx3vut8_CEnCD32ag1u1nFvaY7zctLODdefep0KyBgzWM9Yc1Pk5N18ArjhA.jpg",
    tags: ["image","décrire","description","A2-B1"],
    summary: "بطری با پیام کمک — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1159.html",
    title: "📸 مرکز تماس",
    titleFr: "Un centre d'appels",
    category: "image", level: "A2-B1",
    image: "https://cdn4.telesco.pe/file/W7x8E_KYBrKkZS-Z3XLlcVDpuvnDr6Q_q8oSN02TRehB0PtxgTtDMuMKcJQ8R7zbTjHgJfXpzIGkCGhWhSZeRiCCm1JrrcPQeGQTB4sPCoafu3ZR0_b8qYWptMREgHDODteSSoTtsFmtki8-BLxHSrEEIBNmekxslGr0B-Qu_zsQZ_7s2J2tPCbM27jnRxy_yIVHmvicNDd4A8Gj6e5yw8cl50VeE4atUxagealMloY6lftxXBUe5ioHPEbNuFKA1xhSAsAn2INCmDLmlYi_DZxeMVK8Sz5yE3g0gZ-_oSNofCgv-aztgXkx_Ak2bZHY1eDy796AWq2zgO_y6jGRuA.jpg",
    tags: ["image","décrire","description","A2-B1"],
    summary: "مرکز تماس — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1158.html",
    title: "📸 برشته کردن قهوه",
    titleFr: "Torréfaction du café",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/OPg9nZo3GNvaOS_i4LbnBLLR8Ef84aCyg_UCF-5LAAe2WKM1hNa6PDCfxlb_J_vFWQOemN_8JpwlhPP76SDFAGa9xkqfRjZgmXmEhYDJHdTsS_772FCaX9LlU3Dakk_2gNcGfxs2GZjFU4CsN7kzpQeInRYiSrw8gJthhtv1dJWZeGY3ZMjrX-pHQJ1srB0ZdoBkj7gdiHorrCFXsiTYg5maXs4_X5_FiDrxN3MCPyz9c0jAoD5IHCIQQBMiYgwOmGsgarfi_Rw8HurVQ325WYvxz2ryHeJ-AToQi-DT_ub7SxEcYNsjJi2cfu7Qg6m-XGF3qcJNogqplQQiz16UQQ.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "برشته کردن قهوه — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1157.html",
    title: "📸 آفتاب‌پرست روی شاخه",
    titleFr: "Un caméléon sur une branche",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/fDb_xfmHo21GEsGKtwebImbS7qZwKGgf_qDtQyPrXDQBwcF3MpUcDmHVfG0r8BEcd3UBeb3_4mPjX80A5jLkcKBn8BMZTE_Y7AFpyOA5Z6cdW3k2J3zAbUwGXQvY4V1ytzIShLsDXCpUjYIv9CLkiNPmhP_A76GBJ-GDATdpidKnHB9ExP8vApFy42DWKQs2WZLrOVAyB8imw_RWjHfu7OM-UWPtNJAOQ4nI3vJh-ofhjAxWIco4zpc6p2fqpP6JDT3W2Y6PVPPvz1QSHHOrurYa2-oRUtWQ7nje_m-I-dNHCwpSQPbW8NE71-x1ko0_1OHBagsfiPtrlgi4uirenA.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "آفتاب‌پرست روی شاخه — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1156.html",
    title: "📸 پنج ستاره طلایی",
    titleFr: "Cinq étoiles dorées",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/Ie4jFp6RDHyX1vcMZb53a-BuibnI5meHYW6xh03a1_aJW-0LRKZwfRFqwA-OZO2611qVPg3bEnW5sfBxNsIax3Szeb4yPNDmvGutTum51iEkyJ5cVEnP4Klo3QJ3bPwd2Rvfl3KjrlL-NmPdKPQ5OiQbUzJdyzR4KcTeSsgEKZHTN92ZtQkMEM4jX0g67EOYMFC0wSWLU5sp5V7ugPjRxuFWLwCDc8NmE50XTkKweqQUv30_2q5ZFU8SQs77xgZyaiu9uDHjWl8maJ3ocqZBVKIzqfIZh11_6Ln7qVxP2nGUBzV7uYMb7qcf6j4JSjmNt1Ue5YS_lsSd9YBWs3KsRg.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "پنج ستاره طلایی — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1154.html",
    title: "📸 دو نفر، یک دست حمایت",
    titleFr: "Deux personnes, une main tendue",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/Jna07r6CTQm9sYp6ys0yLqh23UcIQ-Xl63N1z57y1rL1qnengYLJHjTGbapLVG0nPcyXjEi0M4cQdOStDPc41GHrpYgVdSTXj5oeKcNx79KLd-KkAV8HMHCTXgOK7OoRck9mkpk5_AtMtCG1YV5otOZXl2r2YLkSN1GBrX3liXJGIqlJSYf0sjrxush0pymyx6mr_YffiBWnWjJqYSJscmVwqcAd8jynXRoVobUJ9F1YdhZ47EdSB02604o9hVGELxI3O_mWERVaO0-wQ17R8J6Gk3Brdesb6CbEqopYRlc3luB1Rjhs0GfqDE041-BAnkS2Em_Hgwt69v-krGEgyA.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "دو نفر، یک دست حمایت — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1153.html",
    title: "📸 گربه نارنجی و کار",
    titleFr: "Un chat roux et le travail",
    category: "image", level: "B1-B2",
    image: "https://cdn4.telesco.pe/file/TgZNbPdJdEiJ9iHb-tKp11MPNVibTKYoybpnQNazvohpPi79VOfNbAwaamhh7iPBbCMQAAl-bU6TYax_SxAjGP6-1U6JG_HQuHpM1iDtD1s6YjjcCJwcUUxvmJP6ZIBvbn0kvur_UnU3k1wse3gX6qJ9wnlYymhheyYCJfiKp5h9XzOUMqZJAG3sDF1hKEQKTbPhqEaQ1MQSasgPnWqj5lWOjHGg5-FED55oI3_DTc83_7oTNGc8ES2hs5ThQdifqVBx3Xx1A6IKic5lU9T_TZNtOQjgQNXp7rZQMYlltruB8EwsFNBMUKlGXEOWfqN_7ukX0k4mUXq3oJiMcZN4-A.jpg",
    tags: ["image","décrire","description","B1-B2"],
    summary: "گربه نارنجی و کار — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1152.html",
    title: "📸 دختر در میان گل‌های مارگریت",
    titleFr: "Une femme dans les marguerites",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/X0a4BhvkVskbQgr0T4wlYCVgwUFzXARcxqrVdsOrBLNAd1sKgJBcpvz_ueKh8MU6HLZ-_iJNtyebVjQ4X3h9b6VDuiim7yWJhQ6WRT7YQlZuGj_tZ68cy_JS4yIul-tl_9L0k-GQs_oLVoTaCEOKWjcZdMlCRGg6XfOZLYDhee4secRs0KSlP_Qa6qMyllHw4FpAdJkzGDFWxhYKJ-uO4w3scKCc8IuBC4_dJr0lJGsumirzkkYT9BDlej738Px80A8ecTXZMtbT3DJH6FoMOCQNkBLPSR3VlZCPPm5rV4ybn7drGGJpsXtgZiAfmO0fwZ0RDgJZgo63M9TBE4gjcQ.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "دختر در میان گل‌های مارگریت — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1151.html",
    title: "📸 دختر با دوربین عکاسی",
    titleFr: "Une femme avec un appareil photo",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/kQpV-bRGXeQVAlsxh-2xjK9uETLtJ4-jQeRozxNYhi_c-lngzmjn__swjtDpfZk-XScW2206oB_j5_Qvne7SWS6EDofq8CJpQ3Xig6E-ITzH_VNuSyjK7aXWlISLtHeKOTeQXqZBBmUkcYrdRczT-H_obzJqxrJu9jC5HlZ5Bx7UOHzQZU0lg_xwK6-LaxBqRGXHa-oo2MUB_Qujl7jANiwV6lvT9p9W6YSghkeaUZ6fa0DUkI2sU_P5wimmz1H7ihUZWYHH1W8aqq8fE6sSc7T4ZhISAmCpDVSdqBVIFHDVfLRU0xwj89lLObcptTX2T4WBsvoDMdSRf5FCR8jGMA.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "دختر با دوربین عکاسی — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1150.html",
    title: "📸 دختر کوچک و موشک",
    titleFr: "Une petite fille et une fusée",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/s2jGi7218IkkFoBuFvxfc2SXm3TmgM63GSrwC_9Tce_uJ6TraLd1Mx9vHb2qENk1Uw2r0U29swIJGjLp78COFX-ygB6DhMBm-JoTsCBoH0xiRYexVgt4hbiXrxieRZUsixejPwWIfr8Hkmll0KgaiUlp4x77O2pMrQyOAZ417cfy6OGH0MY9Jb7H7Ym05F2eH49vJ_IuLZfcswIM9tBPHLAAkzt-wWjOCcVpcRxpOZ_0pnbpza0wA6uhd5iL9U6A-erMkyNNZ45VHbFkCozEMuvjpZfUwfcLU6L7exCRXQb7QaXzih5Y_qIOPTjVfaDfg_7TNKQWHoQj0ZKoHOsnfQ.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "دختر کوچک و موشک — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1149.html",
    title: "📸 سبک ساده و طبیعی",
    titleFr: "Style simple et naturel",
    category: "image", level: "A2",
    image: "https://cdn4.telesco.pe/file/o7qjqf4kEr2vFY3ZihN9CsxxmEFG01zR_HMc-q9aeJGDDMHslH0gfjf-yinzyZcXd80mK5cVLa68wmMcSlT5aTMzH_7YlIG-L4hlGyA5NB7K4bBAhIgMnBoQZS8oLTjVIu-gDzWY-Cr7ud5XShyDQAboRJaNZ1V3CG_4P-R7iZG0Ix6VZ6WI1nOsYw6VvZPIEuq5uCZQ6OKBvzQh14214XxK_ShQ5va1bm6SsnRBUsrZVq96bVkJDzdQsHRP9E9QI6sHkSWc_Hh0w-0uGCNE4_cDp5dlgI2pq0FZ6aRKejsIssyXMh9xo1VMmwnrJUpo6dXQpH8dAMx3HzyoRI1PNA.jpg",
    tags: ["image","décrire","description","A2"],
    summary: "سبک ساده و طبیعی — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1148.html",
    title: "📸 دست شیک با ساعت",
    titleFr: "Une main élégante avec une montre",
    category: "image", level: "A2-B1",
    image: "https://cdn4.telesco.pe/file/RnFftX7fvPd0Ro6Qfdi1cWqRmNSi15yN-wgckSOOtcb6ASskwX3XCzfXG-sIMRRftJ3i8riCP4RwShsPse9N41065BpHz6VCvu9mlSwfEWRAv-oQUTQve4SA4AfMJSYUS7GgKr17mmZEbfyF00tmUlJ78Lutd-sOwf8YN-LTXMrxHETWw3SlFmtGDdVO2UmhXrM6nn27go_bICt-mLHQEV5j8cHGAIZJbCMPlovvsj1ZAAqt4DU9boHcEAJJDP7HxF7Gqux6H0H_gTE9Cd_sGC0Tou7Tri3VU6g-ZoFAkMS5Kr_aTekJFuxJcFFWSRRhcmz_GCeQRjrT-5p2cPJJZQ.jpg",
    tags: ["image","décrire","description","A2-B1"],
    summary: "دست شیک با ساعت — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1147.html",
    title: "📸 پرتره مرموز با نور رنگی",
    titleFr: "Portrait mystérieux sous lumière colorée",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/SD8mLQT5ZGiVShxHK-p4kAbq1LtbvpNd7AVRwDNR3Ve9WtltV3ylngCygt_4-PB8lJOEAU4di8dbeIPzZGTEBv95OVpw8LMhAI2htk_yvCJXFWnFnBteSkRo7d8iHv80dacEL4xQfgmymEppfwSrZjdOBCSp3mEbvK_B1OXz-j5z9ACu00q4xDxJyVCGmBo4yE539W5EdNlpATBLhA3oGWI27xzJxw_YWHkAVC3wf18xku_3qdzMXgDf3JVsNanOFrSQ1CXw4T4AgoYnKtdXqSmW1A7HkiHzUPpIOsLoKlE05DhGDkcvULmRDcyFFmPHGL0i796FY-ZohZYQn_ZGpw.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "پرتره مرموز با نور رنگی — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1146.html",
    title: "📸 هنر مادهوبانی هند",
    titleFr: "Art Madhubani — peinture indienne",
    category: "image", level: "B1-B2",
    image: "https://cdn4.telesco.pe/file/piE3wqwwcw9XlIfl0GekolRiLlhauRjWheoZavJdKjkberIjbKUg88IfBufsr6fC57xKJXKkdRDIjYv33N4A7rpu4_DMxwzYDEtPWIbnrhD78_1NhpjJFkGZDh3U33q3fFnLv0tCjUO_gkI_eknuABGB7-Wp8lIAvK4Dwyuh_NukIhIj5gcvxCwErmM7aKCtbpRYPfkeGpvDjjzIph8IlKD71gZubKpjr0M6uSNvlOsOILrDRvXqE5xY120D-6_ZLwPMvQYC6f1SiEeQj5EBG9lwJr7fgD-pIO26JPRLCgNGDDWpVPjHnHOVOWGXYdMK_u0RQ-8cqwTo4dXBvqHuAg.jpg",
    tags: ["image","décrire","description","B1-B2"],
    summary: "هنر مادهوبانی هند — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1145.html",
    title: "📸 شوالیه دورر",
    titleFr: "Le Chevalier de Dürer",
    category: "image", level: "B2",
    image: "https://cdn4.telesco.pe/file/spcthlBK8t4VVtA9JA5hOjqOMIHA90EzLBqmE3dLmGc3JXbu9h4aRstAjvp4nj_y6CJIN2847VK4kfGu7nAAGG8e-itGEo2pSh5iIJBjj04clTsaaHNg3vRILsR8bqHfnRkP7pG4V58TCxV3azYUyf-mpB529Fj9VSAArQFJgmQlBvvQoIEveR0E9o0d8AwKIi2UeLu3I8uhQry47f1kuOCzubFvCH-WImPcRfBhZbuDaAVJgKwrRvHYBNv7zdcPopVnexAgRSPeIajAzoigYH-xFkSljOpUTa-jTY_MVFUQP-VXKOob2hJHtgpurGB-QV1lnmQMRa_LJm-wTBUGYw.jpg",
    tags: ["image","décrire","description","B2"],
    summary: "شوالیه دورر — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1144.html",
    title: "📸 دست‌های پیر روی پیانو",
    titleFr: "Mains âgées sur un piano",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/gcTSFxuyBqBQgoRnruQ7SvLKSnCmPmpVXx8wXYTjAT-MCBz1kjgBwN4j3Vn3bwGr_lOf5QuShq5B9WnuoUgpn94Q0ap8BM2vUyQgG3KP3Qvq1O-9LA2sfXgiCaiQciFe9LQHpPnvOwqrMv09yl1wgi_0DjtC2ItqNeAJ2XG9z_m-rR9abx3mgOW6fAJ_fpjIbww-pRhDWZjiz644vY-GQW2BR5AFx9Mwn1omOzfR5mcz80odk1ptLE1lwZE3suB3EDCPoKm89MF9vx8xM3smyCcnzHxRGOJAO5IQUKXHRpjOujMUs9R7uETLXeqRzpz_LcaFjwvHxbZIWJt7LdsxBA.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "دست‌های پیر روی پیانو — توصیف تصویر"
  },
  {
    file: "IMAGE/img_1143.html",
    title: "📸 آزادی بر فراز صخره",
    titleFr: "Liberté au sommet d'un rocher",
    category: "image", level: "A2-B1",
    image: "https://cdn4.telesco.pe/file/ILKcpwBJxDUDEYC14LKDa8eQO7BGVt54SXUr0pO9H6KHMti7qXv4wSUoPGOYKWB3qUUaSMECM4_mTnsqsypVcBoed4YHhyjLLYxIcwEboDVzYVj1YTm08WbKzrin_0bKYbqxaIRblDf3ZgehJYn9KijfrMb-7eA1mefPt9jQwO3BpMLjaWssPfT_bfcOzDQ11oGujgtxy1xMoBNLP3IC8SvpEgJcnDoeuwvdA9mq7caZIrnSQrvuedCuXNyTeNed8yBuy231R_xKHXzuur4ESU-kPhXZFkYjzGlbybABMlp5QtSvaRaEHcLnGfBDUQFX_KbP-k69R7AyY8DQDdwroQ.jpg",
    tags: ["image","décrire","description","A2-B1"],
    summary: "آزادی بر فراز صخره — توصیف تصویر"
  },
  {
    file: "innerfrench.html?ep=1",
    title: "🎧 InnerFrench #1 — یادگیری طبیعی زبان فرانسه",
    titleFr: "#1 Apprendre le français naturellement",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "یادگیری طبیعی زبان فرانسه"
  },
  {
    file: "innerfrench.html?ep=2",
    title: "🎧 InnerFrench #2 — زندگی با ربات‌ها",
    titleFr: "#2 Vivre avec les robots",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "زندگی با ربات‌ها"
  },
  {
    file: "innerfrench.html?ep=3",
    title: "🎧 InnerFrench #3 — خوشبخت‌ترین کشورها",
    titleFr: "#3 Les pays les plus heureux",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "خوشبخت‌ترین کشورها"
  },
  {
    file: "innerfrench.html?ep=4",
    title: "🎧 InnerFrench #4 — نظریه‌ی جنسیت",
    titleFr: "#4 La théorie du genre",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "نظریه‌ی جنسیت"
  },
  {
    file: "innerfrench.html?ep=5",
    title: "🎧 InnerFrench #5 — رئیس‌جمهور جدید فرانسه: امانوئل ماکرون",
    titleFr: "#5 Le nouveau président français : Emmanuel Macron",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "رئیس‌جمهور جدید فرانسه: امانوئل ماکرون"
  },
  {
    file: "innerfrench.html?ep=6",
    title: "🎧 InnerFrench #6 — یادگیری زبان: مزایای پنهان",
    titleFr: "#6 Apprendre une langue : les avantages cachés",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "یادگیری زبان: مزایای پنهان"
  },
  {
    file: "innerfrench.html?ep=7",
    title: "🎧 InnerFrench #7 — نظریه‌های توطئه",
    titleFr: "#7 Les théories du complot",
    category: "innerfrench", level: "B1–B2",
    tags: ["innerfrench","podcast","écoute","B1","B2"],
    summary: "نظریه‌های توطئه"
  },
  {
    file: "VIDEO_intro.html",
    title: "🎬 ویدیوهای آموزشی فرانسه",
    titleFr: "Vidéos de français",
    category: "video", level: "A1–C1",
    tags: ["video","vidéo","apprentissage"],
    summary: "ویدیوهای آموزشی منتخب برای یادگیری فرانسه"
  },
  {
    file: "IMAGE_neon_open.html",
    title: "📸 توصیف تصویر — Panneau OPEN néon",
    titleFr: "Un panneau OPEN en néon rose",
    category: "image", level: "B1",
    image: "https://cdn4.telesco.pe/file/W4gapvOkfXlY0_ftx9Tw1FFGVYRzqn2D50SWWCx8L17OBSIJG8yusiLnQp6clqVtEhQcDHIzQ_qcfjzSivLXYegMaQ6f63PYUqGQDRm56ZavjSjhvv7CO9CDR9FoT7xuERY8IH8yoWNER1DuycA3gn63EJaboeRp765uHodBr8NHDVpYLBd04qq_xhy4BqRgw32mw5XOPP-5NP1HGCptUfHBTuEnFkg-3b2C4XUGjmDZVzPW92pEAsk8wafPg_SW_ZszcmyLmsD6oPTw9PPOS0S5hphM7yD6wYLrZdg5iQhWDcxL3d8Cbjq6os9CGCw4MTXLddCjZFwfn0h9YzYdLQ.jpg",
    tags: ["image","décrire","description","B1"],
    summary: "توصیف تصویر با هایلایت واژگان و ساختارها"
  },
  {
    file: "IMAGE_femme_crop_top.html",
    title: "📸 توصیف تصویر — Une jeune femme",
    titleFr: "Une jeune femme dans une pièce",
    category: "image", level: "A2–B1",
    image: "https://cdn4.telesco.pe/file/d8o9Xbf_5tSecKa6b_4ed9CYmH2Dtunuf6qulUHoJFpDnpy17LSRUuH8PpjAk5aOJuaVKRyGw9StTpm4avoPG354TERqqCC-KWMx1MFSssSZmsJsm-udm1HIl_L_UeYBRruDtvvTP9Q9hDvu14-aixdqCGeMzJgwnrNymGiQDxKWxRGOPmLZZXsrTi5FzYZ0Qp-8Std-mB1iTio0bFg9uhq4pdowSD3Wfbxin62o7XtZhtJ7ACoLT-IegZs3eQI3VJc0UmK197AcHWvN2C3362FHUWPmeAbI3YWSCFwC-WWGdXhULgneWcsmuV9fftZu0AvWBJhT8c35Jv3a2q5M8A.jpg",
    tags: ["image","décrire","description","A2–B1"],
    summary: "توصیف تصویر با هایلایت واژگان و ساختارها"
  },
  {
    file: "IMAGE_ordinateur_lampe.html",
    title: "📸 توصیف تصویر — Ordinateur et lampe dorée",
    titleFr: "Un ordinateur et une lampe ancienne",
    category: "image", level: "A2–B1",
    image: "https://cdn4.telesco.pe/file/XdRcdtpymRQcd0BxCY_B3ZTldy6R6eMV6pWFgluQcGDt00F4BCpTm1fqOHtQ--GVEECOQo6d1Sq19zTvfFrhjlCZc0D3GVKFKh1OBO4WDzKPfuxRsMVPmSbLsCbtyz0Hl3IiL3nYwm2b_5VhMGxYg1Ky6vLiel8FgvoetRcROMTyk8d5MJs8Dy_wxPlXRis2ERbOhrVq9LPAl_X7k7fd070USmi5XaoRQaQz-dk45bIZI49iXG8vPx8G_K3YClXf2Kc9_2OYosylcZiSsmDYhK-L8pD3AfI6xZbujB3L7dhfGPnfok-ZOO8d6hY7c9_WZUClPU5QRph0Ee7JEvyFjA.jpg",
    tags: ["image","décrire","description","A2–B1"],
    summary: "توصیف تصویر با هایلایت واژگان و ساختارها"
  },
  {
    file: "IMAGE_flacon_cosmetique.html",
    title: "📸 توصیف تصویر — Un flacon cosmétique",
    titleFr: "Un flacon en verre ambré",
    category: "image", level: "B1–B2",
    image: "https://cdn4.telesco.pe/file/BfLmZIBUbFIZBc9ZE_3XygYnY3kXusvBX7TEGwsDPbkVQZ7T2NvW5XqcOdVNITZAT2l4zq8ng3GNvolzNBoqx9_4J92jxRiZ-oGrKiYNJxECQxWOczmo_VCVjz9eyhYu_5DVJpkfDfdikSsnrPBgG2kI74BS7_OYCpHSTsOFgOIMa_w64lXB8qSJyFOPe8Bf3odtTUvM9L-xoGJd0iANLzgWyJZ2D6NrnLbz1GhVwJ-sRgN3X8OaicV4FkOIeaTRTtxqgHvTQxu6-GWxyUaEOmVOhAUKD5iqZZ9BkXvIR83Ajz8w1wZJLxJVyKGCj4T1TVeN09mI5Bmf7V3ZQ.jpg",
    tags: ["image","décrire","description","B1–B2"],
    summary: "توصیف تصویر با هایلایت واژگان و ساختارها"
  },
  {
    file: "IMAGE_disque_dur.html",
    title: "📸 توصیف تصویر — Disque dur sur le sable",
    titleFr: "Décrire une image: disque dur",
    category: "image",
    level: "B1–B2",
    image: "https://cdn4.telesco.pe/file/VUqOHPbkwClCT6qvJEsuNGdE9UV0NRm6pfjYLOrguapuHK6ucetor11J74deWRnRJQr9OGAXPTTCh-lkAgCVB6uKWsVHnuJjmrbkV2Xe2-1NcgUBkw-LP_4ao_oW8OxhfNqmaLyIeHPWyU2jYDO3YTszSnKlWXph5qTqHqc0vr7Rvz1LocXOoXmcFHjUdjSPWzxQAHZywF3RofhOkgj-hRPjQcmOzBIkmcDPcIA_gq28RI_I0Cx-fyxfXQ3kaJEOPAOZ6nMKJpKb3KjM6VdvXLd8CwhWGAeG1exdQ9qXfgrsyphbX2j460MFzOPQM19VWiGfSrbwdjdvR8ALO2sRsQ.jpg",
    tags: ["image","décrire","description","B1","B2","vocabulaire"],
    summary: "توصیف تصویر هارد دیسک روی شن — با هایلایت واژگان و ساختارها"
  },
  {
    file: "GRAMMAR_passe_recent.html",
    title: "📐 Le Passé Récent — venir de",
    titleFr: "Le Passé Récent",
    category: "grammar", level: "A2",
    tags: ["grammaire","passé récent","venir de","A2"],
    summary: "ساختار venir de + infinitif برای بیان عمل تازه انجام‌شده"
  },
  {
    file: "GRAMMAR_cest_ilest.html",
    title: "📐 C'est / Il est",
    titleFr: "C'est vs Il est",
    category: "grammar", level: "A2–B1",
    tags: ["grammaire","cest","il est","A2","B1"],
    summary: "تفاوت C'est و Il est — یکی از رایج‌ترین اشتباهات"
  },
  {
    file: "VOCAB_decrire_look.html",
    title: "👤 Décrire le look de quelqu'un",
    titleFr: "Décrire le look",
    category: "vocab", level: "A2–B1",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=70",
    tags: ["vocabulaire","look","description","apparence","A2","B1"],
    summary: "توصیف ظاهر و قیافه کسی — قد، مو، چشم، لباس"
  },
  {
    file: "GRAMMAR_pronom_y.html",
    title: "📐 Le Pronom Y — Complément de lieu",
    titleFr: "Le Pronom Y",
    category: "grammar", level: "A2–B2",
    tags: ["grammaire","pronom","y","lieu","complément"],
    summary: "ضمیر Y برای جایگزینی مکان و «à + چیز» — با تحلیل و تمرین"
  },
  {
    file: "GRAMMAR_pouvoir_vouloir_devoir.html",
    title: "📐 Pouvoir · Vouloir · Devoir",
    titleFr: "Verbes modaux: Pouvoir, Vouloir, Devoir",
    category: "grammar", level: "A1–B1",
    tags: ["grammaire","modal","pouvoir","vouloir","devoir","verbes"],
    summary: "افعال وجهی — توانستن، خواستن، باید — با مثال، ترجمه و تمرین"
  },
  {
    file: "Comparaison/superlatifs.html",
    title: "📐 Les Comparatifs et Superlatifs",
    titleFr: "Comparatifs et Superlatifs",
    category: "grammar", level: "A2–C1",
    tags: ["grammaire","comparatif","superlatif","meilleur","pire","mieux"],
    summary: "درجات مقایسه و عالی در فرانسه با مثال و تمرین"
  },
  {
    file: "Comparaison/comparaison.html",
    title: "📐 La Comparaison — A2 تا C1",
    titleFr: "La Comparaison complète",
    category: "grammar", level: "A2–C1",
    tags: ["grammaire","comparaison","plus","moins","aussi","superlatif"],
    summary: "مقایسه کامل در فرانسه از A2 تا C1"
  },
  {
    file: "CULTURE_acadie_cayenne.html",
    title: "🎉 جشن آکادی و کارناوال کاین",
    titleFr: "Le Grand Tintamarre & Le Festival de Cayenne",
    category: "culture", level: "B1",
    tags: ["فرهنگ","کانادا","Acadie","Guyane","fête"],
    summary: "جشن ملی آکادیایی‌ها در نیوبرانزویک و کارناوال ترسناک کاین در گویان فرانسه"
  },
  {
    file: "VOCAB_mots_difficiles.html",
    title: "📚 ۱۰۰ کلمهٔ دشوار فرانسه",
    titleFr: "100 Mots Difficiles en Français",
    category: "vocab", level: "B2–C1",
    tags: ["واژگان","مشکل","avancé","B2","C1"],
    summary: "۱۰۰ کلمهٔ سطح B2–C1 با تعریف فرانسوی، ترجمهٔ فارسی و ۲ مثال هر کدام. قابل جستجو و فیلتر بر اساس سطح و موضوع (احساس، اخلاق، ذهن، اجتماع...).",
  },
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
// MINIARTICLES moved to data-extra.js
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
// INNERFRENCH moved to data-extra.js
// ═══════════════════════════════════════════════════════════
//  شاگردان خصوصی — محتوای اختصاصی هر شاگرد (با رمز)
//  هر شاگرد:
//    nom    : نام شاگرد
//    emoji  : ایموجی
//    note   : یادداشت/توضیح کوتاه
//    items  : آرایه‌ای از محتواها {titre, desc, link?}
// ═══════════════════════════════════════════════════════════

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

const MINI_FILES = {
  "Le silence qui parle": "MINI_000.html",
  "Apprendre à dire non": "MINI_001.html",
  "Le pouvoir des habitudes": "MINI_002.html",
  "Vivre loin de sa famille": "MINI_003.html",
  "Ma routine du matin": "MINI_004.html",
  "J'aime le week-end": "MINI_005.html",
  "Mon plat préféré": "MINI_006.html",
  "Pourquoi j'apprends le français": "MINI_007.html",
  "Qu'est-ce qui fait durer l'amour ?": "MINI_008.html",
  "Faut-il éviter le petit-déjeuner ?": "MINI_009.html",
  "Le secret pour le meilleur été": "MINI_010.html",
  "La lumière du matin": "MINI_011.html",
  "« Sois heureux. » — le vrai but ?": "MINI_012.html",
  "Pourquoi les matins sont-ils difficiles ?": "MINI_013.html",
  "La magie d'une courte promenade": "MINI_014.html",
  "Le manque de sommeil": "MINI_015.html",
  "L'art de dire « non » sans culpabiliser": "MINI_016.html",
  "Pourquoi à l'aise avec certaines personnes ?": "MINI_017.html",
  "L'écoute véritable": "MINI_018.html",
  "Les erreurs, nos vrais professeurs": "MINI_019.html",
  "Pourquoi se comparer aux autres nous épuise": "MINI_020.html",
  "Le pouvoir des petits débuts": "MINI_021.html",
  "Pourquoi sommes-nous toujours pressés ?": "MINI_022.html",
  "La solitude à l'ère des réseaux sociaux": "MINI_023.html",
  "Acheter moins, être plus heureux ?": "MINI_024.html",
  "Les études permettent-elles de réussir ?": "MINI_025.html",
  "Vivre à l'étranger : avantages ou inconvénients ?": "MINI_026.html",
  "Apprendre la langue du pays est-il essentiel ?": "MINI_027.html",
  "La télévision dans l'éducation des enfants": "MINI_028.html",
  "Internet favorise-t-il l'isolement ?": "MINI_029.html",
  "Pourquoi la musique nous donne des frissons ?": "MINI_030.html",
  "Le silence est-il devenu un luxe ?": "MINI_031.html",
  "Pourquoi rêvons-nous la nuit ?": "MINI_032.html",
  "Faut-il vraiment suivre ses passions ?": "MINI_033.html",
  "Les animaux ont-ils des émotions ?": "MINI_034.html",
  "Pourquoi le temps passe-t-il plus vite ?": "MINI_035.html",
  "Le bonheur d'apprendre à tout âge": "MINI_036.html",
  "Pourquoi rougit-on quand on est gêné ?": "MINI_037.html",
  "Faut-il toujours dire la vérité ?": "MINI_038.html",
  "Le pouvoir surprenant de la gratitude": "MINI_039.html",
};
