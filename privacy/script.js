document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const privacyPolicy = document.getElementById("privacy-policy");

    const policies = {
        en: `
            <h2>Privacy Policy for Eloi Mesa's Personal Website</h2>
            <p>Last update: September 22, 2023.</p>
            <h3>Introduction:</h3>
            <p>Thank you for visiting Eloi Mesa's personal website. Your privacy is important to us and we want to make sure you clearly understand how your information may be collected and used while you browse this website. Please read this Privacy Policy carefully to understand how we handle your personal information.</p>
            <h3>1. Information collected</h3>
            <p>We would like to clarify that Eloi Mesa, owner of this website, does not collect any personal data from visitors. We respect your privacy and aim to provide a safe and enjoyable browsing experience without compromising your personal information.</p>
            <p>However, it is important to note that when using this website, you may find external links to other websites, which may have their own privacy policies. We have no control over the data collection practices of these external websites and recommend that you review their respective privacy policies when you visit them.</p>
            <h3>2. Cookies</h3>
            <p>This website may use cookies for the sole purpose of improving user experience and website functionality. Cookies are small text files that are placed on your device when you visit a website. They are commonly used to improve your browsing experience and collect non-personal information such as browser type, device type, and pages visited. As the website owner, I recommend visiting your browser settings to make the necessary changes related to cookies so that you feel comfortable and secure.</p>
            <h3>3. Third party services</h3>
            <p>Our website is hosted on GitHub Pages, which are subject to the GitHub Privacy Policy. Additionally, external links from this website may direct you to third party websites, each with its own privacy policy. We recommend that you review the privacy policies of these services when you browse away from our site, as they may collect and process your personal information.</p>
            <h3>4. Changes to this Privacy Policy</h3>
            <p>We may update this Privacy Policy to reflect changes in our practices or for other operational, legal or regulatory reasons. Please check this page periodically for updates.</p>
            <h3>5. Contact information</h3>
            <p>If you have any questions or concerns about this Privacy Policy or the practices of this website, please contact the owner at eloi.mesa@outlook.com.</p>
            <p>By using this website, you agree to the terms of this Privacy Policy. Thank you for your interest and attention.</p>
            <p>Last update: September 22, 2023</p>
        `,
        es: `
            <h2>Política de Privacidad del Sitio Web Personal de Eloi Mesa</h2>
            <p>Última actualización: 22 de septiembre de 2023.</p>
            <h3>Introducción:</h3>
            <p>Le agradecemos su visita al sitio web personal de Eloi Mesa. Su privacidad es importante para nosotros y deseamos asegurarnos de que comprenda claramente cómo se pueden recopilar y utilizar sus datos mientras navega por este sitio web. Lea atentamente esta Política de Privacidad para entender cómo gestionamos sus datos personales.</p>
            <h3>1. Información recopilada</h3>
            <p>Deseamos aclarar que Eloi Mesa, propietario de este sitio web, no recopila ningún dato personal de los visitantes. Respetamos su privacidad y buscamos proporcionar una experiencia de navegación segura y agradable sin comprometer su información personal.</p>
            <p>Es importante señalar, sin embargo, que al utilizar este sitio web, podría encontrar enlaces externos a otros sitios web que pueden tener sus propias políticas de privacidad. No tenemos control sobre las prácticas de recopilación de datos de estos sitios web externos y le recomendamos que revise sus respectivas políticas de privacidad cuando los visite.</p>
            <h3>2. Cookies</h3>
            <p>Este sitio web podría utilizar cookies con el único propósito de mejorar la experiencia del usuario y la funcionalidad del sitio web. Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita un sitio web. Comúnmente se utilizan para mejorar su experiencia de navegación y recopilar información no personal, como el tipo de navegador, el tipo de dispositivo y las páginas visitadas. Como propietario del sitio web, le recomendamos que visite la configuración de su navegador para realizar los cambios necesarios relacionados con las cookies para que se sienta cómodo y seguro.</p>
            <h3>3. Servicios de terceros</h3>
            <p>Nuestro sitio web está alojado en GitHub Pages, que está sujeto a la Política de Privacidad de GitHub. Además, los enlaces externos desde este sitio web pueden dirigirlo a sitios web de terceros, cada uno con su propia política de privacidad. Le recomendamos que revise las políticas de privacidad de estos servicios cuando navegue fuera de nuestro sitio, ya que pueden recopilar y procesar su información personal.</p>
            <h3>4. Cambios en esta Política de Privacidad</h3>
            <p>Podríamos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas u otras razones operativas, legales o regulatorias. Por favor, consulte esta página periódicamente para obtener actualizaciones.</p>
            <h3>5. Información de contacto</h3>
            <p>Si tiene alguna pregunta o inquietud acerca de esta Política de Privacidad o las prácticas de este sitio web, póngase en contacto con el propietario en eloi.mesa@outlook.com.</p>
            <p>Al utilizar este sitio web, usted acepta los términos de esta Política de Privacidad. Gracias por su interés y atención.</p>
            <p>Última actualización: 22 de septiembre de 2023</p>
        `,
        ca: `
            <h2>Política de Privadesa del Lloc Web Personal d'Eloi Mesa</h2>
            <p>Última actualització: 22 de setembre de 2023.</p>
            <h3>Introducció:</h3>
            <p>Li agraim la seva visita al lloc web personal d'Eloi Mesa. La seva privadesa és important per a nosaltres i desitgem assegurar-nos que entengui clarament com es poden recopilar i utilitzar les seves dades mentre navega per aquest lloc web. Llegeixi atentament aquesta Política de Privadesa per comprendre com gestionem les seves dades personals.</p>
            <h3>1. Informació recopilada</h3>
            <p>Desitgem aclarir que Eloi Mesa, propietari d'aquest lloc web, no recopila cap dada personal dels visitants. Respectem la seva privadesa i busquem proporcionar una experiència de navegació segura i agradable sense comprometre les seves dades personals.</p>
            <p>No obstant això, és important assenyalar que, en utilitzar aquest lloc web, podria trobar enllaços externs a altres llocs web que podrien tenir les seves pròpies polítiques de privadesa. No tenim cap control sobre les pràctiques de recopilació de dades d'aquests llocs web externs i li recomanem que revisi les seves respectives polítiques de privadesa quan els visiti.</p>
            <h3>2. Cookies</h3>
            <p>Aquest lloc web podria utilitzar cookies amb l'únic propòsit de millorar l'experiència de l'usuari i la funcionalitat del lloc web. Les cookies són petits arxius de text que es col·loquen al seu dispositiu quan visita un lloc web. Comúment s'utilitzen per millorar la seva experiència de navegació i recopilar informació no personal, com ara el tipus de navegador, el tipus de dispositiu i les pàgines visitades. Com a propietari del lloc web, li recomanem que visiti la configuració del seu navegador per realitzar els canvis necessaris relacionats amb les cookies perquè es senti còmode i segur.</p>
            <h3>3. Serveis de tercers</h3>
            <p>El nostre lloc web està allotjat a GitHub Pages, que està subjecte a la Política de Privadesa de GitHub. A més, els enllaços externs d'aquest lloc web el poden dirigir a llocs web de tercers, cadascun amb la seva pròpia política de privadesa. Li recomanem que revisi les polítiques de privadesa d'aquests serveis quan navegui fora del nostre lloc, ja que podrien recopilar i processar les seves dades personals.</p>
            <h3>4. Canvis en aquesta Política de Privadesa</h3>
            <p>Podríem actualitzar aquesta Política de Privadesa per reflectir canvis en les nostres pràctiques o per altres raons operatives, legals o reguladores. Consulti aquesta pàgina periòdicament per a obtenir actualitzacions.</p>
            <h3>5. Informació de contacte</h3>
            <p>Si té alguna pregunta o preocupació sobre aquesta Política de Privadesa o les pràctiques d'aquest lloc web, posi's en contacte amb el propietari a eloi.mesa@outlook.com.</p>
            <p>Utilitzant aquest lloc web, vostè accepta els termes d'aquesta Política de Privadesa. Gràcies pel seu interès i atenció.</p>
            <p>Última actualització: 22 de setembre de 2023</p>

        `,
        it: `
            <h2>Informativa sulla Privacy per il Sito Web Personale di Eloi Mesa</h2>
            <p>Ultimo aggiornamento: 22 settembre 2023.</p>
            <h3>Introduzione:</h3>
            <p>La ringraziamo per aver visitato il sito web personale di Eloi Mesa. La sua privacy è importante per noi e desideriamo assicurarci che capisca chiaramente come i suoi dati possono essere raccolti e utilizzati durante la navigazione su questo sito web. Legga attentamente questa Informativa sulla Privacy per capire come gestiamo i suoi dati personali.</p>
            <h3>1. Informazioni raccolte</h3>
            <p>Desideriamo precisare che Eloi Mesa, proprietario di questo sito web, non raccoglie dati personali dai visitatori. Rispettiamo la sua privacy e cerchiamo di fornire un'esperienza di navigazione sicura e piacevole senza compromettere i suoi dati personali.</p>
            <p>Tuttavia, è importante notare che utilizzando questo sito web, potrebbe trovare link esterni ad altri siti web che potrebbero avere le proprie politiche sulla privacy. Non abbiamo controllo sulle pratiche di raccolta dati di questi siti web esterni e le raccomandiamo di consultare le rispettive politiche sulla privacy quando li visita.</p>
            <h3>2. Cookies</h3>
            <p>Questo sito web potrebbe utilizzare i cookie esclusivamente allo scopo di migliorare l'esperienza dell'utente e la funzionalità del sito web. I cookie sono piccoli file di testo che vengono posizionati sul suo dispositivo quando visita un sito web. Sono comunemente utilizzati per migliorare la sua esperienza di navigazione e raccogliere informazioni non personali come il tipo di browser, il tipo di dispositivo e le pagine visitate. Come proprietario del sito web, le raccomandiamo di visitare le impostazioni del suo browser per apportare le modifiche necessarie relative ai cookie in modo da sentirsi a suo agio e al sicuro.</p>
            <h3>3. Servizi di terzi</h3>
            <p>Il nostro sito web è ospitato su GitHub Pages, soggetto alla Privacy Policy di GitHub. Inoltre, i link esterni da questo sito web potrebbero indirizzarla a siti web di terze parti, ognuno con la propria politica sulla privacy. Le raccomandiamo di consultare le politiche sulla privacy di questi servizi quando naviga fuori dal nostro sito, poiché potrebbero raccogliere e elaborare i suoi dati personali.</p>
            <h3>4. Modifiche a questa Informativa sulla Privacy</h3>
            <p>Potremmo aggiornare questa Informativa sulla Privacy per riflettere modifiche nelle nostre pratiche o per altre ragioni operative, legali o regolamentari. Controlli questa pagina periodicamente per gli aggiornamenti.</p>
            <h3>5. Informazioni di contatto</h3>
            <p>Se ha domande o preoccupazioni riguardo a questa Informativa sulla Privacy o alle pratiche di questo sito web, si metta in contatto con il proprietario all'indirizzo eloi.mesa@outlook.com.</p>
            <p>Utilizzando questo sito web, accetta i termini di questa Informativa sulla Privacy. Grazie per il suo interesse e attenzione.</p>
            <p>Ultimo aggiornamento: 22 settembre 2023</p>            
        `,
    };

    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLanguage = userLanguage.split("-")[0]; 
    const selectedLanguage = policies.hasOwnProperty(defaultLanguage) ? defaultLanguage : "en";
    languageSelector.value = selectedLanguage;
    privacyPolicy.innerHTML = policies[selectedLanguage];
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        privacyPolicy.innerHTML = policies[selectedLanguage];
    });
});
