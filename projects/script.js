document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const projects = document.getElementById("projects");

    const translations = {
        en: {
            'more-about-me-title': 'Want to know more about me?',
            'more-about-me-text': 'Visit my website or my GitHub profile',
            'web-button': 'Website',
            'github-button': 'GitHub',
            'subtitle': 'My software, games, and more!',
            'privacy-policy': 'Privacy Policy',
            'contact': 'Contact',
            'view-project-button': 'View Project',
            'projects-title': 'My projects',
            "projects-description": "Here are all my projects that I have been doing over the years. You will find tools, games, extensions... Occasionally I make something new, so don't forget to drop by here from time to time! ;)",
        },
        es: {
            'more-about-me-title': '¿Quieres saber más de mí?',
            'more-about-me-text': 'Visita mi página web o mi perfil en GitHub',
            'web-button': 'Página Web',
            'github-button': 'GitHub',
            'subtitle': '¡Mi software, juegos y más!',
            'privacy-policy': 'Política de Privacidad',
            'contact': 'Contacto',
            'view-project-button': 'Ver proyecto',
            'projects-title': 'Mis proyectos',
            "projects-description": "Aquí están todos mis proyectos que he ido haciendo a lo largo de los años. Encontrarás herramientas, juegos, extensiones... Cada cierto tiempo hago algo nuevo, ¡así que no te olvides de pasarte por aquí de vez en cuando! ;)",
        },
        ca: {
            'more-about-me-title': 'Vols saber-ne més sobre mi?',
            'more-about-me-text': 'Visita el meu lloc web o el meu perfil a GitHub',
            'web-button': 'Lloc web',
            'github-button': 'GitHub',
            'subtitle': 'El meu programari, jocs i molt més!',
            'privacy-policy': 'Política de privadesa',
            'contact': 'Contacte',
            'view-project-button': 'Veure el projecte',
            'projects-title': 'Els meus projectes',
            "projects-description": "Aquí estan tots els meus projectes que he anat fent al llarg dels anys. Trobaràs eines, jocs, extensions... Cada cert temps faig alguna cosa nova, així que no t'oblidis de passar-t'hi de tant en tant! ;)",
        },
        it: {
            'more-about-me-title': 'Vuoi saperne di più su di me?',
            'more-about-me-text': 'Visita il mio sito web o il mio profilo GitHub',
            'web-button': 'Sito web',
            'github-button': 'GitHub',
            'subtitle': 'Il mio software, i miei giochi e altro ancora!',
            'privacy-policy': 'Informativa sulla privacy',
            'contact': 'Contatto',
            'view-project-button': 'Vedi progetto',
            'projects-title': 'I miei progetti',
            "projects-description": "Ecco tutti i progetti che ho realizzato negli anni. Troverai strumenti, giochi, estensioni... Ogni tanto creo qualcosa di nuovo, quindi non dimenticare di passare di tanto in tanto! ;)",
        },
    };

    const projectData = [
        {
            image: "project1.png",
            title: {
                en: "FireNotes",
                es: "FireNotes",
                ca: "FireNotes",
                it: "FireNotes",
            },
            description: {
                en: "FireNotes is a browser extension that allows you to take notes quickly and easily anywhere on the web.",
                es: "FireNotes es una extensión de navegador que permite tomar notas de forma rápida y sencilla en cualquier lugar de la web.",
                ca: "FireNotes és una extensió de navegador que permet prendre notes de manera ràpida i senzilla a qualsevol lloc del web.",
                it: "FireNotes è un'estensione del browser per prendere appunti in modo rapido e semplice ovunque sul Web.",
            },
            languages: ["HTML", "CSS", "JavaScript"],
            projectLink: "https://elmees21.github.io/firenotes/",
        },
        {
            image: "project2.png",
            title: {
                en: "Everybody Clicks",
                es: "Everybody Clicks",
                ca: "Everybody Clicks",
                it: "Everybody Clicks",
            },
            description: {
                en: "Everybody Clicks is an online co-op clicker game where you work with others to increase your cursor count.",
                es: "Everybody Clicks es un juego clicker cooperativo online en el que trabajas junto a otros para aumentar el número de cursores.",
                ca: "Everybody Clicks és un joc clicker cooperatiu online en què treballes amb altres per augmentar el nombre de cursors.",
                it: "Everybody Clicks è un gioco clicker cooperativo online in cui giochi insieme ad altri per aumentare il numero di cursori.",
            },
            languages: ["TurboWarp (Scratch 3.0)"],
            projectLink: "https://eloi546.itch.io/everybody-clicks",
        },
    ];

    function createProjectBox(project, selectedLanguage) {
        const projectBox = document.createElement("div");
        projectBox.className = "project-box";

        const projectImage = document.createElement("img");
        projectImage.className = "project-image";
        projectImage.src = project.image;
        projectBox.appendChild(projectImage);

        const projectTitle = document.createElement("h3");
        projectTitle.className = "project-title";
        projectTitle.textContent = project.title[selectedLanguage];
        projectBox.appendChild(projectTitle);

        const projectDescription = document.createElement("p");
        projectDescription.className = "project-description";
        projectDescription.textContent = project.description[selectedLanguage];
        projectBox.appendChild(projectDescription);

        const projectLanguages = document.createElement("p");
        projectLanguages.className = "project-languages";
        projectLanguages.textContent = project.languages.join(", ");
        projectBox.appendChild(projectLanguages);

        const projectButton = document.createElement("a");
        projectButton.className = "button-view-project";
        projectButton.textContent = translations[selectedLanguage]['view-project-button'];
        projectButton.href = project.projectLink;
        projectBox.appendChild(projectButton);

        return projectBox;
    }

    function loadProjects(selectedLanguage) {
        projects.innerHTML = "";

        for (const project of projectData) {
            const projectBox = createProjectBox(project, selectedLanguage);
            projects.appendChild(projectBox);
        }

        for (const key in translations[selectedLanguage]) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[selectedLanguage][key];
            }
        }
    }

    const userLanguage = navigator.language || navigator.userLanguage;

    const initialLanguage = translations[userLanguage] ? userLanguage : 'en';

    loadProjects(initialLanguage);
    languageSelector.value = initialLanguage;

    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        loadProjects(selectedLanguage);
    });
});