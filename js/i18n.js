/* ==========================================================================
   Simple bilingual (AR/EN) dictionary + engine.
   Usage: add data-i18n="key" to any element's text, or data-i18n-ph="key"
   for placeholder text, and it will be filled automatically on load and
   on language switch.
   ========================================================================== */

const I18N = {
  ar: {
    "brand.name": "أوبسيديان ديزاين",
    "nav.home": "الرئيسية",
    "nav.about": "عن المشروع",
    "nav.gallery": "الصور والنماذج",
    "nav.services": "الخدمات",
    "nav.interest": "سجّل اهتمامك",
    "nav.contact": "تواصل معنا",
    "lang.toggle": "English",

    /* ---------- Home ---------- */
    "home.eyebrow": "قريباً جداً",
    "home.title": "قريباً",
    "home.subtitle": "مؤسسة أوبسيديان ديزاين — تصميم وتنفيذ وتركيب كل ما يتعلق بالديكور الداخلي، بلمسة فاخرة وضمان حقيقي. نُحضّر لكم تجربة معرض مميزة، تابعونا لمعرفة كل التفاصيل فور توفرها.",
    "home.cta.interest": "سجّل اهتمامك الآن",
    "home.cta.about": "تعرّف على المشروع",
    "home.follow": "تابعنا لتصلك آخر التحديثات",

    /* ---------- About ---------- */
    "about.eyebrow": "تعريف بالمشروع",
    "about.title": "قصة __GRAD_START__أوبسيديان ديزاين__GRAD_END__",
    "about.lead": "مؤسسة سعودية متخصصة في التصميم الداخلي والديكور، نجمع بين الحرفية العريقة والذوق العصري لنحوّل تصوّرك إلى مساحة حقيقية — من الفكرة الأولى إلى التركيب النهائي.",
    "about.mission.title": "رسالتنا",
    "about.mission.text": "نقدّم لعملائنا حلول ديكور متكاملة (تصميم، تنفيذ، تركيب) بجودة عالية ومواعيد موثوقة، مع ضمان حقيقي على كل عمل نسلّمه.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text": "أن نكون الاسم الأول اللي يخطر ببال أي عميل يبغى ديكور فاخر ومخصص بالكامل، من المطبخ إلى أدق تفاصيل الإكسسوارات.",
    "about.values.title": "قيمنا",
    "about.values.text": "الدقة في التنفيذ، الشفافية مع العميل بكل مرحلة، واحترام الجودة حتى في أصغر التفاصيل — هذي القيم اللي ما نتنازل عنها.",
    "about.story.title": "من فكرتك إلى واقع تلمسه بيدك",
    "about.story.text": "فريق التنفيذ لدينا يملك خبرة حرفية عريقة في مجال الديكور — قادرين نرسم لك تصميمك، نصنعه، ونركّبه في بيتك بالضبط زي ما تتخيله.",
    "about.capability.title": "نقدر ننفذ أي تصميم تتخيله",
    "about.capability.text": "من الرسم الأولي للفكرة، إلى التصنيع، إلى التركيب النهائي في موقعك — بإشراف مهندسين ذوي خبرة، ومع ضمان على كل عمل.",
    "about.readymade.text": "وإذا ما عندك تصوّر جاهز، تقدر تتصفّح مجموعتنا من النماذج الجاهزة المذهلة وتختار وتخصص منها مباشرة — بنفس مستوى الفخامة، وبخطوات أسرع.",

    /* ---------- Gallery ---------- */
    "gallery.eyebrow": "معرض الأعمال",
    "gallery.lead": "لمسات وتفاصيل تعكس روح أوبسيديان ديزاين في كل مساحة — من فكرة أولى إلى أدق الإكسسوارات.",
    "gallery.item.kitchenClassic": "مطابخ كلاسيك",
    "gallery.item.kitchenModern": "مطابخ مودرن",
    "gallery.item.wardrobe": "خزائن وغرف ملابس",
    "gallery.item.bathroom": "تصاميم حمامات",
    "gallery.item.bedroom": "غرف نوم فاخرة",
    "gallery.item.decor": "إكسسوارات ديكور",
    "gallery.item.livingroom": "صالات ومجالس فاخرة",
    "gallery.item.staircase": "سلالم داخلية فخمة",

    /* ---------- Services ---------- */
    "services.eyebrow": "الخدمات",
    "services.title": "خدماتنا",
    "services.lead": "نقدّم كل ما يخص الديكور الداخلي: تصميم، تصنيع، تركيب، وضمان — بمختلف الأنماط والمساحات. كل تصميم عندنا يبدأ بفكرة، وينتهي بمساحة تعكس راحتك.",
    "services.locked.title": "قائمة الخدمات الكاملة قريباً",
    "services.locked.cta": "سجّل اهتمامك لتصلك دعوة الافتتاح",

    "services.cat.title": "ليش تختار أوبسيديان ديزاين؟",
    "services.cat.text": "مو بس ننفذ ديكور — نصنع فرق تحسّه من أول لحظة تدخل فيها المكان.",
    "svc.kitchenClassic.title": "مطابخ كلاسيك",
    "svc.kitchenClassic.text": "تصاميم مطابخ بطابع كلاسيكي فاخر، خامات وألوان دافئة تناسب الذوق التقليدي الراقي.",
    "svc.kitchenModern.title": "مطابخ مودرن",
    "svc.kitchenModern.text": "خطوط نظيفة وتصميم عصري يجمع بين الجمال والعملية، بأحدث الخامات والتشطيبات.",
    "svc.wardrobe.title": "خزائن وغرف ملابس",
    "svc.wardrobe.text": "تصميم خزائن وغرف ملابس مخصصة حسب المساحة والاحتياج، بتنظيم داخلي عملي وأنيق.",
    "svc.bathroom.title": "تصاميم حمامات",
    "svc.bathroom.text": "ديكورات حمامات فاخرة، من المغاسل إلى التشطيبات النهائية، بلمسة عصرية أو كلاسيكية.",
    "svc.bedroom.title": "غرف نوم",
    "svc.bedroom.text": "تصميم غرف نوم متكاملة تجمع بين الراحة والفخامة، بأثاث وإضاءة مصمّمة خصيصاً للمساحة.",
    "svc.decor.title": "إكسسوارات ديكور",
    "svc.decor.text": "لمسات تكميلية دقيقة — إكسسوارات وتفاصيل ديكورية تعطي المساحة طابعها النهائي المميز.",
    "svc.sinks.title": "المغاسل",
    "svc.sinks.text": "تصميم وتركيب مغاسل بخامات متنوعة تناسب مطبخك أو حمامك من حيث الشكل والوظيفة.",
    "svc.livingroom.title": "صالات ومجالس",
    "svc.livingroom.text": "تصميم صالات ومجالس بطابع يعكس ذوقك، من الأثاث إلى الإضاءة والتفاصيل الداخلية.",
    "svc.ceiling.title": "جبس بورد وإضاءة",
    "svc.ceiling.text": "تصاميم أسقف وإضاءة مخفية تعطي المساحة عمقاً وفخامة، بخطوط منحنية أو هندسية حسب الطابع المطلوب.",
    "svc.library.title": "مكتبات ومكاتب منزلية",
    "svc.library.text": "تصميم مكتبات ومكاتب منزلية بخامات خشبية فاخرة، توازن بين الطابع الكلاسيكي والعملية اليومية.",
    "svc.staircase.title": "السلالم الداخلية",
    "svc.staircase.text": "تصميم وتنفيذ درابزين وتشطيبات السلالم بلمسات رخامية وذهبية تعطي المدخل طابعاً مهيباً.",

    "services.process.title": "كيف نشتغل معك",
    "process.design.title": "التصميم",
    "process.design.text": "نستمع لفكرتك ونحوّلها لتصميم مبدئي يعكس ذوقك ومساحتك.",
    "process.execution.title": "التنفيذ",
    "process.execution.text": "فريقنا الحرفي يصنّع كل قطعة بدقة وفق التصميم المعتمد.",
    "process.installation.title": "التركيب",
    "process.installation.text": "تركيب احترافي في موقعك، بأقل إزعاج وأعلى دقة تنفيذ.",
    "process.warranty.title": "الضمان",
    "process.warranty.text": "كل عمل نسلّمه مغطّى بضمان حقيقي يعطيك راحة بال كاملة.",

    /* ---------- Interest form ---------- */
    "interest.eyebrow": "قبل الافتتاح",
    "interest.title": "سجّل اهتمامك",
    "interest.lead": "كن من أوائل المهتمين بمشروع أوبسيديان ديزاين. سجّل بياناتك وسنُبقيك على اطّلاع بكل جديد، بما في ذلك دعوة الافتتاح الرسمي.",
    "interest.form.name": "الاسم الكامل",
    "interest.form.name.ph": "اكتب اسمك",
    "interest.form.email": "البريد الإلكتروني",
    "interest.form.email.ph": "example@email.com",
    "interest.form.phone": "رقم الجوال (اختياري)",
    "interest.form.phone.ph": "05xxxxxxxx",
    "interest.form.interest": "ما الذي يثير اهتمامك بالمشروع؟",
    "interest.form.interest.ph": "اكتب رسالة قصيرة (اختياري)",
    "interest.form.submit": "إرسال التسجيل",
    "interest.form.note": "بياناتك تُستخدم فقط لإبلاغك بمستجدات المشروع، ولن تُشارك مع أي جهة خارجية.",
    "interest.success.title": "تم التسجيل بنجاح!",
    "interest.success.text": "شكراً لاهتمامك. سنتواصل معك فور توفر تحديثات جديدة عن أوبسيديان ديزاين.",

    /* ---------- Contact ---------- */
    "contact.eyebrow": "تواصل معنا",
    "contact.title": "نسعد بتواصلك معنا",
    "contact.lead": "لأي استفسار أو اقتراح، تقدر تتواصل معنا عبر القنوات التالية أو من خلال النموذج.",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الجوال",
    "contact.info.location": "الموقع",
    "contact.info.location.val": "الدمام، المملكة العربية السعودية",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.message.ph": "اكتب رسالتك هنا...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.success.title": "تم إرسال رسالتك",
    "contact.success.text": "شكراً لتواصلك، سنرد عليك في أقرب وقت ممكن.",

    /* ---------- Footer ---------- */
    "footer.tagline": "تصميم وتنفيذ وتركيب الديكور الداخلي — بلمسة فاخرة وضمان حقيقي.",
    "footer.col.links": "روابط سريعة",
    "footer.col.contact": "تواصل معنا",
    "footer.col.legal": "بيانات المنشأة",
    "footer.legal.cr": "الرقم الموحد للسجل التجاري",
    "footer.legal.vat": "الرقم الضريبي",
    "footer.rights": "مؤسسة أوبسيديان ديزاين. جميع الحقوق محفوظة",
  },

  en: {
    "brand.name": "Obsidian Design",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.services": "Services",
    "nav.interest": "Register Interest",
    "nav.contact": "Contact",
    "lang.toggle": "العربية",

    /* ---------- Home ---------- */
    "home.eyebrow": "Launching soon",
    "home.title": "Coming Soon",
    "home.subtitle": "Obsidian Design Est. — full interior decor design, execution and installation, with a genuine warranty on every project. We're preparing a special showroom experience — stay tuned.",
    "home.cta.interest": "Register Your Interest",
    "home.cta.about": "Learn About the Project",
    "home.follow": "Follow us for the latest updates",

    /* ---------- About ---------- */
    "about.eyebrow": "About the project",
    "about.title": "The story of __GRAD_START__Obsidian Design__GRAD_END__",
    "about.lead": "A Saudi establishment specialized in interior design and decor, combining time-honored craftsmanship with a modern eye — turning your vision into a real space, from first sketch to final installation.",
    "about.mission.title": "Our Mission",
    "about.mission.text": "We deliver complete decor solutions — design, execution, installation — with high quality, reliable timelines, and a genuine warranty on every project we hand over.",
    "about.vision.title": "Our Vision",
    "about.vision.text": "To be the first name that comes to mind for anyone who wants fully custom, luxury decor — from the kitchen down to the smallest accessory.",
    "about.values.title": "Our Values",
    "about.values.text": "Precision in execution, transparency with our clients at every stage, and a respect for quality down to the smallest detail — values we never compromise on.",
    "about.story.title": "From your idea to a reality you can touch",
    "about.story.text": "Our execution team carries deep, time-honored craft experience — we can sketch your idea, build it, and install it in your home exactly as you imagined it.",
    "about.capability.title": "We can build whatever you imagine",
    "about.capability.text": "From the first sketch, to manufacturing, to final on-site installation — overseen by experienced engineers, with a warranty on every project.",
    "about.readymade.text": "And if you don't have a fixed vision yet, browse our collection of stunning ready-made designs and customize one to fit your space directly — the same level of luxury, in fewer steps.",

    /* ---------- Gallery ---------- */
    "gallery.eyebrow": "Showcase",
    "gallery.lead": "Touches and details that reflect the spirit of Obsidian Design in every space — from a first idea down to the finest accessory.",
    "gallery.item.kitchenClassic": "Classic Kitchens",
    "gallery.item.kitchenModern": "Modern Kitchens",
    "gallery.item.wardrobe": "Wardrobes & Closets",
    "gallery.item.bathroom": "Bathroom Design",
    "gallery.item.bedroom": "Luxury Bedrooms",
    "gallery.item.decor": "Decor Accessories",
    "gallery.item.livingroom": "Luxury Living Rooms",
    "gallery.item.staircase": "Grand Staircases",

    /* ---------- Services ---------- */
    "services.eyebrow": "Services",
    "services.title": "Our Services",
    "services.lead": "Everything related to interior decor: design, manufacturing, installation, and warranty — across every style and space. Every design we create starts with an idea, and ends with a space that reflects your comfort.",
    "services.locked.title": "Full service list — coming soon",
    "services.locked.cta": "Register interest to get a launch invite",

    "services.cat.title": "Why Choose Obsidian Design?",
    "services.cat.text": "We don't just execute decor — we create a difference you feel the moment you walk in.",
    "svc.kitchenClassic.title": "Classic Kitchens",
    "svc.kitchenClassic.text": "Timeless kitchen designs in warm tones and materials, suited to a refined, traditional taste.",
    "svc.kitchenModern.title": "Modern Kitchens",
    "svc.kitchenModern.text": "Clean lines and contemporary design that balance beauty and function, in the latest materials and finishes.",
    "svc.wardrobe.title": "Wardrobes & Closets",
    "svc.wardrobe.text": "Custom wardrobe and closet design tailored to your space and needs, with smart, elegant internal organization.",
    "svc.bathroom.title": "Bathroom Design",
    "svc.bathroom.text": "Luxury bathroom decor, from vanities to final finishes, in a modern or classic touch.",
    "svc.bedroom.title": "Bedrooms",
    "svc.bedroom.text": "Complete bedroom design that blends comfort and luxury, with furniture and lighting designed for the space.",
    "svc.decor.title": "Decor Accessories",
    "svc.decor.text": "The finishing touches — accessories and detail work that give a space its final signature character.",
    "svc.sinks.title": "Sinks & Vanities",
    "svc.sinks.text": "Design and installation of sinks in a range of materials suited to your kitchen or bathroom, in form and function.",
    "svc.livingroom.title": "Living & Majlis Rooms",
    "svc.livingroom.text": "Living room and majlis design that reflects your taste, from furniture to lighting and interior detail.",
    "svc.ceiling.title": "Gypsum Ceilings & Lighting",
    "svc.ceiling.text": "Ceiling and concealed-lighting designs that give a space depth and luxury, in curved or geometric lines to match the desired style.",
    "svc.library.title": "Home Libraries & Offices",
    "svc.library.text": "Home library and office design in fine wood finishes, balancing a classic feel with everyday practicality.",
    "svc.staircase.title": "Interior Staircases",
    "svc.staircase.text": "Staircase railing and finish design and execution, with marble and gold touches that give an entrance a grand character.",

    "services.process.title": "How we work with you",
    "process.design.title": "Design",
    "process.design.text": "We listen to your idea and turn it into an initial design that reflects your taste and space.",
    "process.execution.title": "Execution",
    "process.execution.text": "Our craft team manufactures every piece precisely to the approved design.",
    "process.installation.title": "Installation",
    "process.installation.text": "Professional on-site installation, with minimal disruption and maximum precision.",
    "process.warranty.title": "Warranty",
    "process.warranty.text": "Every project we deliver is backed by a genuine warranty for complete peace of mind.",

    /* ---------- Interest form ---------- */
    "interest.eyebrow": "Before we launch",
    "interest.title": "Register Your Interest",
    "interest.lead": "Be among the first to know about Obsidian Design. Leave your details and we'll keep you posted, including your invite to the official launch.",
    "interest.form.name": "Full name",
    "interest.form.name.ph": "Your name",
    "interest.form.email": "Email address",
    "interest.form.email.ph": "example@email.com",
    "interest.form.phone": "Phone number (optional)",
    "interest.form.phone.ph": "05xxxxxxxx",
    "interest.form.interest": "What interests you about the project?",
    "interest.form.interest.ph": "A short note (optional)",
    "interest.form.submit": "Submit",
    "interest.form.note": "Your details are only used to update you on the project and will never be shared with third parties.",
    "interest.success.title": "You're registered!",
    "interest.success.text": "Thanks for your interest — we'll reach out as soon as there's news about Obsidian Design.",

    /* ---------- Contact ---------- */
    "contact.eyebrow": "Get in touch",
    "contact.title": "We'd love to hear from you",
    "contact.lead": "For any question or suggestion, reach us through the channels below or the form.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.location.val": "Dammam, Saudi Arabia",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Write your message here...",
    "contact.form.submit": "Send Message",
    "contact.success.title": "Your message has been sent",
    "contact.success.text": "Thanks for reaching out — we'll get back to you as soon as possible.",

    /* ---------- Footer ---------- */
    "footer.tagline": "Interior decor design, execution & installation — luxury finish, genuine warranty.",
    "footer.col.links": "Quick Links",
    "footer.col.contact": "Contact Us",
    "footer.col.legal": "Establishment Info",
    "footer.legal.cr": "Unified Commercial Registration No.",
    "footer.legal.vat": "VAT Registration No.",
    "footer.rights": "Obsidian Design Establishment. All rights reserved",
  }
};

function applyI18n(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    let val = I18N[lang][key];
    if (val == null) return;
    if (val.includes("__GRAD_START__")) {
      val = val
        .replace("__GRAD_START__", '<span class="grad">')
        .replace("__GRAD_END__", "</span>");
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    const val = I18N[lang][key];
    if (val != null) el.setAttribute("placeholder", val);
  });

  try { localStorage.setItem("obsidian_lang", lang); } catch (e) {}
}

function getInitialLang(){
  try {
    const saved = localStorage.getItem("obsidian_lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) {}
  return "ar";
}

function initI18n(){
  const lang = getInitialLang();
  applyI18n(lang);

  const toggleBtn = document.querySelector("[data-lang-toggle]");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.lang === "ar" ? "ar" : "en";
      const next = current === "ar" ? "en" : "ar";
      applyI18n(next);
    });
  }
}

document.addEventListener("DOMContentLoaded", initI18n);
