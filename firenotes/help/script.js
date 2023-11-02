document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const privacyPolicy = document.getElementById("privacy-policy");

    const helpContent = {
        en: `
            <h2>[Title]</h2>
            <p>[Last Update]</p>
            <h3>[Introduction]</h3>
            <p>[Introduction Content]</p>
            <h3>[Section 1 Title]</h3>
            <p>[Section 1 Content]</p>
            <p>[Section 1 Additional Content]</p>
            <h3>[Section 2 Title]</h3>
            <p>[Section 2 Content]</p>
            <h3>[Section 3 Title]</h3>
            <p>[Section 3 Content]</p>
            <h3>[Section 4 Title]</h3>
            <p>[Section 4 Content]</p>
            <h3>[Section 5 Title]</h3>
            <p>[Section 5 Content]</p>
            <p>[Contact Information]</p>
            <p>[Last Update Date]</p>
        `,
        es: `
            <h2>[Título]</h2>
            <p>[Última Actualización]</p>
            <h3>[Introducción]</h3>
            <p>[Contenido de la Introducción]</p>
            <h3>[Título de la Sección 1]</h3>
            <p>[Contenido de la Sección 1]</p>
            <p>[Contenido Adicional de la Sección 1]</p>
            <h3>[Título de la Sección 2]</h3>
            <p>[Contenido de la Sección 2]</p>
            <h3>[Título de la Sección 3]</h3>
            <p>[Contenido de la Sección 3]</p>
            <h3>[Título de la Sección 4]</h3>
            <p>[Contenido de la Sección 4]</p>
            <h3>[Título de la Sección 5]</h3>
            <p>[Contenido de la Sección 5]</p>
            <p>[Información de Contacto]</p>
            <p>[Fecha de Última Actualización]</p>
        `,
        ca: `
            <h2>[Títol]</h2>
            <p>[Última Actualització]</p>
            <h3>[Introducció]</h3>
            <p>[Contingut de la Introducció]</p>
            <h3>[Títol de la Secció 1]</h3>
            <p>[Contingut de la Secció 1]</p>
            <p>[Contingut Addicional de la Secció 1]</p>
            <h3>[Títol de la Secció 2]</h3>
            <p>[Contingut de la Secció 2]</p>
            <h3>[Títol de la Secció 3]</h3>
            <p>[Contingut de la Secció 3]</p>
            <h3>[Títol de la Secció 4]</h3>
            <p>[Contingut de la Secció 4]</p>
            <h3>[Títol de la Secció 5]</h3>
            <p>[Contingut de la Secció 5]</p>
            <p>[Informació de Contacte]</p>
            <p>[Data de l'Última Actualització]</p>
        `,
        it: `
            <h2>[Titolo]</h2>
            <p>[Ultimo Aggiornamento]</p>
            <h3>[Introduzione]</h3>
            <p>[Contenuto dell'Introduzione]</p>
            <h3>[Titolo della Sezione 1]</h3>
            <p>[Contenuto della Sezione 1]</p>
            <p>[Contenuto Aggiuntivo della Sezione 1]</p>
            <h3>[Titolo della Sezione 2]</h3>
            <p>[Contenuto della Sezione 2]</p>
            <h3>[Titolo della Sezione 3]</h3>
            <p>[Contenuto della Sezione 3]</p>
            <h3>[Titolo della Sezione 4]</h3>
            <p>[Contenuto della Sezione 4]</p>
            <h3>[Titolo della Sezione 5]</h3>
            <p>[Contenuto della Sezione 5]</p>
            <p>[Informazioni di Contatto]</p>
            <p>[Data dell'Ultimo Aggiornamento]</p>
        `,
    };

    // Function to change language and load the corresponding help content
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        privacyPolicy.innerHTML = helpContent[selectedLanguage];
    });

    // Initial call to load help content in English if the user's language is not available
    const userLanguage = navigator.language.split('-')[0];
    if (helpContent[userLanguage]) {
        languageSelector.value = userLanguage;
        privacyPolicy.innerHTML = helpContent[userLanguage];
    } else {
        privacyPolicy.innerHTML = helpContent["en"]; // Load English by default
    }
});

// Function to go back in the browser's history
function goBack() {
    window.history.back();
}
