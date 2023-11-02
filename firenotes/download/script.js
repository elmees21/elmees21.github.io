document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const programIcon = document.getElementById("programIcon");
    const appTitle = document.getElementById("appTitle");
    const browserIcon = document.getElementById("browserIcon");
    const downloadText = document.getElementById("downloadText");
    const prodownloadButton = document.getElementById("prodownloadButton");
    const downloadButtons = document.querySelectorAll(".download-button");
    const webTitle = document.getElementById("webTitle");
    const webDescription = document.getElementById("webDescription");
    const webversionButton = document.getElementById("webversionButton");
    const helpTitle = document.getElementById("helpTitle");
    const helpDescription = document.getElementById("helpDescription");
    const helpLink = document.getElementById("helpLink");
    const exitButton = document.getElementById("exitButton");
    const browserName = document.getElementById("browserName"); 

    const strings = {
        en: {
            appTitle: "FireNotes",
            downloadText: "Download for this browser",
            prodownloadButton: "Download",
            webTitle: "Web Version of FireNotes",
            webDescription: "If you don't have one of these browsers, you can use the web version, which is compatible with all devices.",
            webversionButton: "Open Web Version",
            helpTitle: "Need Help?",
            helpDescription: "Check the help page to learn more about how and where to install FireNotes",
            helpLink: "View Help Website",
            exitButtonText: "Back to Homepage",
        },
        es: {
            appTitle: "FireNotes",
            downloadText: "Descargar para este navegador",
            prodownloadButton: "Descargar",
            webTitle: "Versión web de FireNotes",
            webDescription: "Si no tienes ninguno de estos navegadores, puedes usar la versión web, que es compatible con todos los dispositivos.",
            webversionButton: "Abrir versión Web",
            helpTitle: "¿Necesitas ayuda?",
            helpDescription: "Consulta la página de ayuda para saber más sobre cómo y dónde instalar FireNotes",
            helpLink: "Ver la web de ayuda",
            exitButtonText: "Volver al inicio",
        },
        ca: {
            appTitle: "FireNotes",
            downloadText: "Baixar per aquest navegador",
            prodownloadButton: "Baixa",
            webTitle: "Versió web de FireNotes",
            webDescription: "Si no tens cap d'aquests navegadors, pots utilitzar la versió web, que és compatible amb tots els dispositius.",
            webversionButton: "Obre la versió Web",
            helpTitle: "Necessites ajuda?",
            helpDescription: "Consulta la pàgina d'ajuda per aprendre més sobre com i on instal·lar FireNotes",
            helpLink: "Veure el lloc web d'ajuda",
            exitButtonText: "Tornar a la pàgina d'inici",
        },
        it: {
            appTitle: "FireNotes",
            downloadText: "Scarica per questo browser",
            prodownloadButton: "Scarica",
            webTitle: "Versione Web di FireNotes",
            webDescription: "Se non hai uno di questi browser, puoi utilizzare la versione web, che è compatibile con tutti i dispositivi.",
            webversionButton: "Apri la versione Web",
            helpTitle: "Hai bisogno di aiuto?",
            helpDescription: "Consulta la pagina di aiuto per saperne di più su come e dove installare FireNotes",
            helpLink: "Visualizza il sito di aiuto",
            exitButtonText: "Torna alla Homepage",
        },
    };

    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        translateUI(strings[selectedLanguage]);
    });

    const userLanguage = navigator.language || "en";
    const initialLanguage = userLanguage.startsWith("es")
        ? "es"
        : userLanguage.startsWith("ca")
        ? "ca"
        : userLanguage.startsWith("it")
        ? "it"
        : "en";
    languageSelector.value = initialLanguage;
    translateUI(strings[initialLanguage]);

    const browser = detectBrowser();
    if (browser === "Firefox") {
        browserIcon.src = "img/firefox.png";
        browserName.innerText = "Firefox";
        prodownloadButton.addEventListener("click", function () {

            window.location.href = 'https://addons.mozilla.org/firefox/addon/firenotes/';
        });
    } else if (browser === "Edge") {
        browserIcon.src = "img/edge.png";
        browserName.innerText = "Edge";
        prodownloadButton.addEventListener("click", function () {

            window.location.href = 'https://microsoftedge.microsoft.com/addons/detail/khigpoaojpepipkhkbjinannhjhippgg';
        });
    } else if (browser === "Chrome") {
        browserIcon.src = "img/chrome.png";
        browserName.innerText = "Chrome";
        prodownloadButton.addEventListener("click", function () {

            window.location.href = 'https://chrome.google.com/webstore/detail/firenotes-notepad/feammnbfalinhgkhojdpolpdoijifdaa';
        });    
    } else {

        document.querySelector(".browser-section").style.display = "none";
    }

    function detectBrowser() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes("Firefox")) {
            return "Firefox";
        } else if (userAgent.includes("Edg")) {
            return "Edge";
        } else if (userAgent.includes("Chrome")) {
            return "Chrome";
        } else {
            return "Unsupported";
        }
    }

    function translateUI(languageStrings) {
        if (languageStrings) {
            appTitle.textContent = languageStrings.appTitle;
            downloadText.textContent = languageStrings.downloadText;
            prodownloadButton.textContent = languageStrings.prodownloadButton;
            webTitle.textContent = languageStrings.webTitle;
            webDescription.textContent = languageStrings.webDescription;
            webversionButton.textContent = languageStrings.webversionButton;
            helpTitle.textContent = languageStrings.helpTitle;
            helpDescription.textContent = languageStrings.helpDescription;
            helpLink.textContent = languageStrings.helpLink;
            exitButton.textContent = languageStrings.exitButtonText;
            for (const button of downloadButtons) {
                button.textContent = languageStrings.prodownloadButton;
            }
        }
    }
});