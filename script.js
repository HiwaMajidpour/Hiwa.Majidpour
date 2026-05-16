const translations = {
    en: {
        title: "Hiwa Majidpour",
        subtitle: "Creative IT Engineer & Multimedia Designer",
        desc: "QA • AI • Networking • Graphic Design • Motion Graphics",
        hire: "Hire Me",
        cv: "Download CV",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
    },

    de: {
        title: "Hiwa Majidpour",
        subtitle: "IT-Ingenieur & Multimedia Designer",
        desc: "QA • KI • Netzwerke • Grafikdesign • Motion Design",
        hire: "Hire Me",
        cv: "Lebenslauf",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt"
    },

    fa: {
        title: "هیوا مجیدپور",
        subtitle: "مهندس IT و طراح چندرسانه‌ای",
        desc: "تست نرم‌افزار • هوش مصنوعی • شبکه • طراحی گرافیک",
        hire: "استخدام من",
        cv: "دانلود رزومه",
        about: "درباره من",
        skills: "مهارت‌ها",
        projects: "پروژه‌ها",
        contact: "تماس"
    },

    ku: {
        title: "هیوا مجیدپور",
        subtitle: "ئەندازیاری IT و دیزاینەری میدیا",
        desc: "QA • AI • تۆڕ • دیزاین • ڤیدیۆ",
        hire: "کار لەگەڵم",
        cv: "داگرتنی CV",
        about: "دەربارە",
        skills: "شارەزایی",
        projects: "پڕۆژەکان",
        contact: "پەیوەندی"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}
function openImage(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}