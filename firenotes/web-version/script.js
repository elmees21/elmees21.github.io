const strings = {
  en: {
    versionWebText: "Web Version",
    likeText: "Do you like it?",
    downloadInfoText: "You can download the extension to use FireNotes in your browser, while browsing. And it even works offline!",
    externButtonText: "Open Externally ◰",
    goBackButtonText: "Exit",
    privacyPolicyLinkText: "Privacy Policy",
    myWebsiteLinkText: "My Website",
    changelogLinkText: "Changelog",
    contactLinkText: "Contact",
    downloadButton: "Download",
  },
  es: {
    versionWebText: "Versión web",
    likeText: "¿Te gusta?",
    downloadInfoText: "Puedes descargar la extensión para utilizar FireNotes en tu navegador, mientras navegas. ¡E incluso funciona sin conexión!",
    externButtonText: "Abrir externamente ◰",
    goBackButtonText: "Salir",
    privacyPolicyLinkText: "Política de privacidad",
    myWebsiteLinkText: "Mi Página Web",
    changelogLinkText: "Changelog",
    contactLinkText: "Contacto",
    downloadButton: "Descargar",
  },
  ca: {
    versionWebText: "Versió web",
    likeText: "T'agrada?",
    downloadInfoText: "Podeu descarregar l'extensió per utilitzar FireNotes al vostre navegador mentre navegueu per la web. I fins i tot funciona sense connexió!",
    externButtonText: "Obre externament ◰",
    goBackButtonText: "Sortir",
    privacyPolicyLinkText: "Política de privadesa",
    myWebsiteLinkText: "La meva Web",
    changelogLinkText: "Changelog",
    contactLinkText: "Contacte",
    downloadButton: "Descarregar",
  },
  it: {
    versionWebText: "Versione web",
    likeText: "Ti piace?",
    downloadInfoText: "Puoi scaricare l'estensione per utilizzare FireNotes nel tuo browser durante la navigazione. E funziona anche offline!",
    externButtonText: "Apri esternamente ◰",
    goBackButtonText: "Esci",
    privacyPolicyLinkText: "Informativa sulla privacy",
    myWebsiteLinkText: "Il mio sito web",
    changelogLinkText: "Changelog ",
    contactLinkText: "Contatto",
    downloadButton: "Scaricare",
  },
};

const languageSelect = document.getElementById("languageSelect");

const elementsToTranslate = {
  versionWebText: document.getElementById("versionWebText"),
  likeText: document.getElementById("likeText"),
  downloadInfoText: document.getElementById("downloadInfoText"),
  externButtonText: document.getElementById("externButton"),
  goBackButtonText: document.getElementById("goBackButton"), 
  privacyPolicyLinkText: document.getElementById("privacyPolicyLink"),
  myWebsiteLinkText: document.getElementById("myWebsiteLink"),
  changelogLinkText: document.getElementById("changelogLink"),
  contactLinkText: document.getElementById("contactLink"),
  downloadButton: document.getElementById("downloadButton"),
};

function changeLanguage() {
  const selectedLanguage = languageSelect.value;

  const translatedStrings = strings[selectedLanguage];

  for (const key in elementsToTranslate) {
    if (translatedStrings[key]) {
      elementsToTranslate[key].textContent = translatedStrings[key];
    }
  }
}

const browserLanguage = navigator.language.slice(0, 2);
languageSelect.value = ["en", "es", "ca", "it"].includes(browserLanguage)
  ? browserLanguage
  : "en";

changeLanguage();

languageSelect.addEventListener("change", changeLanguage);

const externButton = document.getElementById("externButton");
externButton.addEventListener("click", () => {
  window.open("embed/editor.html", "_blank", "width=500,height=500");
});