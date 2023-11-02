document.addEventListener("DOMContentLoaded", function() {
    const noteText = document.getElementById("note-text");
    const settingsButton = document.getElementById("settings-button");
    const returnButton = document.getElementById("return-button");
    const resetButton = document.getElementById("reset-button");
    const aboutButton = document.getElementById("about-button");
    const rateButton = document.getElementById("rate-button");
    const webButton = document.getElementById("web-button");
    const settingsMenu = document.getElementById("settings-menu");
    const editorIcons = document.getElementById("editor-icons");
    const fontSelect = document.getElementById("font-select");
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    const decreaseFontSizeButton = document.getElementById("decrease-font-size");
    const increaseFontSizeButton = document.getElementById("increase-font-size");
    const copyTextButton = document.getElementById("copy-text");

    function showSettingsMenu() {
        noteText.style.display = "none";
        editorIcons.style.display = "none";
        settingsButton.style.display = "none";
        returnButton.style.display = "block";
        settingsMenu.style.display = "block";
    }

    function hideSettingsMenu() {
        noteText.style.display = "block";
        editorIcons.style.display = "flex";
        settingsButton.style.display = "block";
        returnButton.style.display = "none";
        settingsMenu.style.display = "none";
    }

    settingsButton.addEventListener("click", showSettingsMenu);

    returnButton.addEventListener("click", hideSettingsMenu);

    resetButton.addEventListener("click", function() {
        const confirmReset = window.confirm("Do you want to reset everything? Saved text and data will be lost.");
        if (confirmReset) {
            localStorage.clear();
            noteText.value = "";
            noteText.style.fontSize = "16px";
            noteText.style.fontFamily = "Arial, sans-serif";
            document.body.classList.remove("dark-mode");
            settingsMenu.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    });

    aboutButton.addEventListener("click", function() {
        window.alert("FireNotes\n\nMade by: elmees21\nCurrent Version: v1.0\nLast Updated: 29/9/23\n\nContributions and credits to the creators of the fonts used:\n\n- Arial: Developed by Monotype Imaging. https://www.monotype.com/fonts/arial\n- Georgia: Designed by Matthew Carter. https://www.microsoft.com/typography/fonts/georgia.aspx\n- Monospace: A type category. https://en.wikipedia.org/wiki/Monospaced_font\n- Cursive: A type category. https://en.wikipedia.org/wiki/Cursive_script\n\nIcons provided by Google Material Icons under the Apache License 2.0.\n\nSpecial thanks to all contributors.\n\nThank you for using this tool! 😉");    });

    rateButton.addEventListener("click", function() {
        window.open("https://elmees21.github.io/firenotes/help", "_blank");
    });

    webButton.addEventListener("click", function() {
        window.open("https://elmees21.github.io/firenotes/download", "_blank");
    });

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", isDarkMode);
    settingsMenu.classList.toggle("dark-mode", isDarkMode);

    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
        noteText.style.fontSize = savedFontSize + "px";
    }

    const savedFont = localStorage.getItem("font");
    if (savedFont) {
        noteText.style.fontFamily = savedFont;
        fontSelect.value = savedFont;
    }

    const savedText = localStorage.getItem("noteText");
    if (savedText) {
        noteText.value = savedText;
    }

    noteText.addEventListener("input", function() {
        localStorage.setItem("fontSize", noteText.style.fontSize.replace("px", ""));
        localStorage.setItem("noteText", noteText.value);
    });

    decreaseFontSizeButton.addEventListener("click", function() {
        const currentSize = parseFloat(window.getComputedStyle(noteText).fontSize);
        const newSize = currentSize - 2;
        noteText.style.fontSize = newSize + "px";
        localStorage.setItem("fontSize", newSize);
    });

    increaseFontSizeButton.addEventListener("click", function() {
        const currentSize = parseFloat(window.getComputedStyle(noteText).fontSize);
        const newSize = currentSize + 2;
        noteText.style.fontSize = newSize + "px";
        localStorage.setItem("fontSize", newSize);
    });

    toggleDarkModeButton.addEventListener("click", function() {
        const isDark = document.body.classList.toggle("dark-mode");
        settingsMenu.classList.toggle("dark-mode", isDark);
        localStorage.setItem("darkMode", isDark);
    });

    fontSelect.addEventListener("change", function() {
        const selectedFont = fontSelect.value;
        noteText.style.fontFamily = selectedFont;
        localStorage.setItem("font", selectedFont);
    });

    copyTextButton.addEventListener("click", function() {
        const textToCopy = noteText.value;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(function() {
                notification.style.display = "block";
                setTimeout(function() {
                    notification.style.display = "none";
                }, 1000);
                noteText.value = "";
                localStorage.setItem("noteText", "");
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const noteText = document.getElementById("note-text");
    const settingsButton = document.getElementById("settings-button");
    const returnButton = document.getElementById("return-button");
    const resetButton = document.getElementById("reset-button");
    const aboutButton = document.getElementById("about-button");
    const rateButton = document.getElementById("rate-button");
    const webButton = document.getElementById("web-button");
    const settingsMenu = document.getElementById("settings-menu");
    const editorIcons = document.getElementById("editor-icons");
    const fontSelect = document.getElementById("font-select");
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    const decreaseFontSizeButton = document.getElementById("decrease-font-size");
    const increaseFontSizeButton = document.getElementById("increase-font-size");
    const copyTextButton = document.getElementById("copy-text");
    const languageSelect = document.getElementById("language-select");

    const strings = {
        en: {
            title: "FireNotes",
            about: "About",
            rateUs: "Help and Documentation",
            website: "Download",
            settings: "Settings",
            reset: "Reset",
            darkMode: "Dark Mode",
            resetDescription: "This will delete the text in memory, the current text size, and font.",
            darkModeDescription: "Improves readability and reduces eye strain",
            aboutTitle: "FireNotes",
            other: "Other",
            languageLabel: "Language",
        },
        es: {
            title: "FireNotes",
            about: "Acerca de",
            rateUs: "Ayuda y documentación",
            website: "Descargar",
            settings: "Ajustes",
            reset: "Restablecer",
            darkMode: "Modo oscuro",
            resetDescription: "Esto borrará el texto en memoria, el tamaño de texto actual y la fuente.",
            darkModeDescription: "Mejora la legibilidad y reduce la fatiga visual",
            aboutTitle: "FireNotes",
            other: "Otros",
            languageLabel: "Idioma",
        },
        ca: {
            title: "FireNotes",
            about: "Quant a",
            rateUs: "Ajuda i documentació",
            website: "Baixa'l",
            settings: "Configuració",
            reset: "Restablir",
            darkMode: "Mode fosc",
            resetDescription: "Això esborrarà el text en memòria, la mida de text actual i la font.",
            darkModeDescription: "Millora la llegibilitat i redueix la fatiga visual",
            aboutTitle: "FireNotes",
            other: "Altres",
            languageLabel: "Idioma",
        },
        it: {
            title: "FireNotes",
            about: "Su di noi",
            rateUs: "Aiuto e documentazione",
            website: "Scaricare",
            settings: "Impostazioni",
            reset: "Ripristina",
            darkMode: "Modalità scura",
            resetDescription: "Ciò cancellerà il testo in memoria, la dimensione del testo attuale e il carattere.",
            darkModeDescription: "Migliora la leggibilità e riduce l'affaticamento degli occhi",
            aboutTitle: "FireNotes",
            other: "Altri",
            languageLabel: "Lingua",
        },
    };

    function setLanguage(lang) {

        document.getElementById("title").textContent = strings[lang].title;
        document.getElementById("about-title").textContent = strings[lang].aboutTitle;

        document.getElementById("settings-heading").textContent = strings[lang].settings;
        document.getElementById("reset-heading").textContent = strings[lang].reset;
        document.getElementById("reset-description").textContent = strings[lang].resetDescription;
        document.getElementById("toggle-dark-mode").textContent = strings[lang].darkMode;
        document.getElementById("dark-mode-heading").textContent = strings[lang].darkMode;
        document.getElementById("dark-mode-description").textContent = strings[lang].darkModeDescription;
        document.getElementById("other-heading").textContent = strings[lang].other;
        document.getElementById("language-label").textContent = strings[lang].languageLabel;

        resetButton.textContent = strings[lang].reset;
        aboutButton.textContent = strings[lang].about;
        rateButton.textContent = strings[lang].rateUs;
        webButton.textContent = strings[lang].website;
    }

    function saveLanguage(lang) {
        localStorage.setItem("language", lang);
    }

        loadLanguage();

        languageSelect.addEventListener("change", function() {
            const selectedLang = languageSelect.value;
            setLanguage(selectedLang);
            saveLanguage(selectedLang);
        });

    function loadLanguage() {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLanguage(savedLang);
            languageSelect.value = savedLang;
        } else {

            const browserLang = navigator.language.slice(0, 2);
            if (strings[browserLang]) {
                setLanguage(browserLang);
                languageSelect.value = browserLang;
            } else {
                setLanguage("en"); 
                languageSelect.value = "en";
            }
        }
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }

});