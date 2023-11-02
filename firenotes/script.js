const strings = {
    en: {
        slide1Title: "Always at your service",
        slide1Subtitle: "Open your notes on any web, anytime.",
        slide2Title: "Visually comfortable",
        slide2Subtitle: "Simple and beautiful interface, dark theme, nice fonts... Simply simple! ;)",
        slide3Title: "Your text anywhere",
        slide3Subtitle: "Changes are saved at all times, close it and reopen it, the text is still there!",
        slide4Title: "Goodbye text!",
        slide4Subtitle: "Burn your notes with a simple click. But don't worry, it will still be on your clipboard.",
        slide5Title: "Always free, always yours.",
        slide5Subtitle: "FireNotes is free and open source. Malware-free. Trustworthy always.",
        downloadButton: "Download",
        goBackButton: "Go Back",
        appDescription: "Your notes wherever you go. Simple, convenient and fast.",
        privacyPolicyLink: "Privacy Policy",
        myWebsiteLink: "My Website",
        changelogLink: "Changelog",
        contactLink: "Contact",
        helpButton: "Help",
        webverButton: "Web Version",
        sourceButton: "Source Code"
    },
    es: {
        slide1Title: "En cualquier momento",
        slide1Subtitle: "Abre tus notas en cualquier web, cuando quieras.",
        slide2Title: "Visualmente cómodo",
        slide2Subtitle: "Interfaz simple y bonita, tema oscuro, tipos de letra agradables... ¡Simplemente simple! ;)",
        slide3Title: "Tu texto en cualquier lugar",
        slide3Subtitle: "Los cambios se guardan en todo momento, ciérralo y vuelve a abrirlo, el texto sigue ahí.",
        slide4Title: "¡Adiós texto!",
        slide4Subtitle: "Quema tus notas con un simple clic. Pero no te preocupes, aún estará en tu portapapeles.",
        slide5Title: "Siempre libre, siempre tuyo.",
        slide5Subtitle: "FireNotes es gratuito y de código abierto. Libre de software malicioso. De confianza siempre.",
        downloadButton: "Descargar",
        goBackButton: "Volver",
        appDescription: "Tus notas dondequiera que vayas. Sencillo, cómodo y rápido.",
        privacyPolicyLink: "Política de privacidad",
        myWebsiteLink: "Mi página web",
        changelogLink: "Changelog",
        contactLink: "Contacto",
        helpButton: "Ayuda",
        webverButton: "Versión Web",
        sourceButton: "Código Fuente"
    },
    ca: {
        slide1Title: "En qualsevol moment",
        slide1Subtitle: "Obre les teves notes a qualsevol web, quan vulguis.",
        slide2Title: "Visualment còmode",
        slide2Subtitle: "Interfície simple i bonica, tema fosc, tipus de lletra agradables... Simplement simple! ;)",
        slide3Title: "El teu text allà on vagis",
        slide3Subtitle: "Els canvis es guarden en tot moment, tancant-ho i tornant-ho a obrir, el text és aquí.",
        slide4Title: "Adéu text!",
        slide4Subtitle: "Crema les notes amb un simple clic. Però no et preocupis, encara estarà al teu porta-retalls.",
        slide5Title: "Sempre lliure, sempre teu.",
        slide5Subtitle: "FireNotes és gratuït i de codi obert. Sense programari maliciós. De confiança sempre.",
        downloadButton: "Baixar",
        goBackButton: "Tornar",
        appDescription: "Les teves notes allà on vagis. Senzill, còmode i ràpid.",
        privacyPolicyLink: "Política de privadesa",
        myWebsiteLink: "La meva Web",
        changelogLink: "Changelog",
        contactLink: "Contacte",
        helpButton: "Ajuda",
        webverButton: "Versió Web",
        sourceButton: "Codi Font"
    },
    it: {
        slide1Title: "In qualsiasi momento",
        slide1Subtitle: "Apri le tue note su qualsiasi web, quando vuoi.",
        slide2Title: "Visualmente confortevole",
        slide2Subtitle: "Interfaccia semplice e bella, tema scuro, bei caratteri... Semplicemente semplice! ;)",
        slide3Title: "Il tuo testo ovunque",
        slide3Subtitle: "Le modifiche vengono salvate in ogni momento, chiudilo e riaprilo, il testo è ancora lì!",
        slide4Title: "Addio testo!",
        slide4Subtitle: "Brucia i tuoi appunti con un semplice clic. Ma non preoccuparti, sarà ancora nei tuoi appunti.",
        slide5Title: "Sempre libero, sempre tuo.",
        slide5Subtitle: "FireNotes è gratuito e open source. Senza malware. Affidabile sempre.",
        downloadButton: "Scarica",
        goBackButton: "Torna Indietro",
        appDescription: "I tuoi appunti ovunque tu vada. Semplice, conveniente e veloce.",
        privacyPolicyLink: "Politica sulla privacy",
        myWebsiteLink: "Il mio sito web",
        changelogLink: "Changelog",
        contactLink: "Contatto",
        helpButton: "Aiuto",
        webverButton: "Versione Web",
        sourceButton: "Codice Sorgente"
    }
};

const defaultLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    const slides = document.querySelectorAll(".text");
    const downloadButton = document.getElementById("downloadButton");
    const goBackButton = document.getElementById("goBackButton");
    const appDescription = document.getElementById("appDescription");
    const privacyPolicyLink = document.getElementById("privacyPolicyLink");
    const myWebsiteLink = document.getElementById("myWebsiteLink");
    const changelogLink = document.getElementById("changelogLink");
    const contactLink = document.getElementById("contactLink");
    const helpButton = document.getElementById("helpButton");
    const webverButton = document.getElementById("webverButton");
    const sourceButton = document.getElementById("sourceButton");

    function updateTexts(language) {
        const textStrings = strings[language] || strings[defaultLanguage];

        // Actualizar los textos de las diapositivas
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            const slideTitle = slide.querySelector("h2");
            const slideSubtitle = slide.querySelector("p");

            if (textStrings) {
                slideTitle.textContent = textStrings[`slide${i + 1}Title`] || "";
                slideSubtitle.textContent = textStrings[`slide${i + 1}Subtitle`] || "";
            }
        }

        // Actualizar otros textos
        if (textStrings) {
            downloadButton.textContent = textStrings["downloadButton"] || "";
            goBackButton.textContent = textStrings["goBackButton"] || "";
            appDescription.textContent = textStrings["appDescription"] || "";
            privacyPolicyLink.textContent = textStrings["privacyPolicyLink"] || "";
            myWebsiteLink.textContent = textStrings["myWebsiteLink"] || "";
            changelogLink.textContent = textStrings["changelogLink"] || "";
            contactLink.textContent = textStrings["contactLink"] || "";
            helpButton.textContent = textStrings["helpButton"] || "";
            webverButton.textContent = textStrings["webverButton"] || "";
            sourceButton.textContent = textStrings["sourceButton"] || "";
        }
    }

    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        updateTexts(selectedLanguage);
    }

    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLanguageCode = userLanguage.split("-")[0];

    if (strings[defaultLanguageCode]) {
        languageSelect.value = defaultLanguageCode;
        updateTexts(defaultLanguageCode);
    } else {
        languageSelect.value = defaultLanguage;
        updateTexts(defaultLanguage);
    }

    languageSelect.addEventListener("change", changeLanguage);
});
