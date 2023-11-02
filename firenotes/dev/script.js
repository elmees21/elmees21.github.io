document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const privacyPolicy = document.getElementById("privacy-policy");

    const helpContent = {
        en: `
        <h1>Developers Zone</h1>
        <p><i>Welcome, dear developer. Here you will find the program's source code and other advanced aspects.</i></p>
        <h2>Index</h2>
        <ul>
            <li><a href="#source">Source Code</a></li>
            <li><a href="#translations">Translations</a></li>
            <li><a href="#ver">Previous Program Versions</a></li>
            <li><a href="#contact">Others</a></li>
        </ul>
        <hr>
        <div id="source">
        <h2>Source Code</h2>
        <p>We upload all our code to the GitHub repository, keeping it up-to-date. You can see how we've built the program, find errors, propose solutions, or create your own version of FireNotes using our code. If you want to contact us, you can use the email (eloi.mesa@outlook.com) or through GitHub.</p>
        <p></p>
        <a href="https://github.com/elmees21/firenotes" target="_blank">
            <button class="mini-button">View our GitHub repository</button>
        </a>
        <p></p>
        <p><i>Note: The web version is stored in a separate repository, which stores this website and others by the user elmees21.</i></p>
        <p></p>
        <a href="https://github.com/elmees21/elmees21.github.io/tree/main/firenotes/web-version/embed" target="_blank">
            <button class="mini-button">View GitHub repository of the web version</button>
        </a>
        <h3>Can I replicate your code?</h3>
        <p>Yes, you can download my code and modify it as you wish, and you can even distribute it as you like. The only conditions I impose are that you must give me (elmees21) credit for basing your work on my code and that it cannot be used for commercial purposes, in other words, you cannot make money from my work.</p>
        </div>
        <hr>
        <div id="translations">
        <h2>Translations</h2>
        <h3>I want to start translating FireNotes into my language</h3>
        <p>If you speak a language other than English, Spanish (Spain), or Catalan (Catalonia), you can translate our program into your language. It doesn't matter which one.</p>
        <p><strong>To introduce yourself as a translator, write to us at this email: eloi.mesa@outlook.com</strong></p>
        <h3>The language I speak already has a translation, but it is incomplete or has errors.</h3>
        <p>In that case, get in touch with us, and you can resume the translation. (eloi.mesa@outlook.com)</p>
        <h3>I have translated before, but the new texts in the new versions are not updated.</h3>
        <p>In that case, contact us again, and we will provide you with the new texts.</p>
        <h3>My language has different variants, and I want to translate a specific one.</h3>
        <p>For example, if you want to translate into Brazilian Portuguese and there is already a translation into Portuguese from Portugal, don't worry, let us know in the email which variant of the language you want to translate.</p>
        <h3>Can I also translate the website?</h3>
        <p>Of course! You will be asked if you want to translate our entire website, including documentation or the homepage. We will also ask if you want to translate the texts of the stores where the extension is hosted.</p>
        <h3>Will my name appear after translating?</h3>
        <p>Yes! You will appear on this website and on the extension's "About" page. (If you don't want to appear, please inform us)</p>
        <h3>Translations already done:</h3>
        <p>English (US): elmees21</p>
        <p>Catalan (Catalonia): elmees21</p>
        <p>Spanish (Spain): elmees21</p>
        <p>Italian (Italy): (Google Translator, if you are a native speaker of this language, contact us.)</p>
        </div>
        <hr>
        <div id="ver">
        <h2>Previous Program Versions</h2>
        <p>You can check all the program versions in "Releases" on GitHub. Additionally, it explains how to manually install without going through the store.</p>
        <a href="https://github.com/elmees21/firenotes/releases" target="_blank">
            <button class="mini-button">View Releases on GitHub</button>
        </a>
        <hr>
        <div id="contact">
        <h2>Others</h2>
        <p>We want FireNotes to be the best open-source notepad extension. If you want and can, don't hesitate to contribute your bit! All contributions will be attributed (if you wish).</p>
        <h3>Contact</h3>
        <p>And remember, here is my email for anything. Always available!</p>
        <p>eloi.mesa@outlook.com</p>
        <hr>
        <p><strong>Thank you for your interest :D</strong></p>
        <p><i>Last update: 10/3/2023</i></p>
        </div>
                `,
        es: `
        <h1>Zona de desarrolladores</h1>
        <p><i>Bienvenido querido desarrollador, aquí encontrarás el código fuente del programa y otros aspectos avanzados.</i></p>
        <h2>Índice</h2>
        <ul>
            <li><a href="#source">Código fuente</a></li>
            <li><a href="#translations">Traducciones</a></li>
            <li><a href="#ver">Versiones anteriores del programa</a></li>
            <li><a href="#contact">Otros</a></li>
        </ul>
        <hr>
        <div id="source">
        <h2>Código fuente</h2>
        <p>Subimos todo nuestro código en el repositorio de GitHub, se mantiene actualizado siempre. Puedes ver como hemos el programa, encontrar errores, proponer soluciones o crear tu propia versión de FireNotes a partir de nuestro código. Si quieres contactarnos puedes usar el email (eloi.mesa@outlook.com) o a través de GitHub.</p>
        <p></p>
        <a href="https://github.com/elmees21/firenotes" target="_blank">
            <button class="mini-button">Ver nuestro repositorio de GitHub</button>
        </a>
        <p></p>
        <p><i>Nota: La versión web se almacena en un repositorio aparte, el que almacena este sitio web y otros del usuario elmees21.</i></p>
        <p></p>
        <a href="https://github.com/elmees21/elmees21.github.io/tree/main/firenotes/web-version/embed" target="_blank">
            <button class="mini-button">Ver repositorio de GitHub de la versión web</button>
        </a>
        <h3>¿Puedo replicar tu código?</h3>
        <p>Sí, puedes descargar mi código y modificarlo a tu antojo, e incluso lo puedes distribuir como quieras. Las únicas condiciones que pongo es que se me debe dar créditos a mí (elmees21) por basarte en mi código y que no se puede usar para fines comerciales, en otras palabras, no puedes generar dinero a partir de mi trabajo.</p>
        </div>
        <hr>
        <div id="translations">
        <h2>Traducciones</h2>
        <h3>Quiero empezar a traducir FireNotes a mi idioma</h3>
        <p>Si hablas un idioma que no sea el Inglés, Español (España) o Catalán (Cataluña) puedes traducir nuestro programa a tu idioma. No importa cuál sea.</p>
        <p><strong>Para presentarte como traductor, escríbenos a este e-mail: eloi.mesa@outlook.com</strong></p>
        <h3>El idioma el cual hablo ya tiene traducción, pero está incompleta o tiene errores.</h3>
        <p>En ese caso ponte en contacto con nosotros y podrás reanudar la traducción. (eloi.mesa@outlook.com)</p>
        <h3>Ya he traducido anteriormente, pero los nuevos textos de las nuevas versiones no están actualizados.</h3>
        <p>En ese caso ponte en contacto con nosotros de nuevo y te facilitaremos los nuevos textos.</p>
        <h3>Mi idioma tiene diferentes variantes, y quiero traducir a una en particular.</h3>
        <p>Si por ejemplo quieres traducir al Portugués de Brasil y ya existe una traducción al Portugués de Portugal, no te preocupes, indícanos en el e-mail la variante del idioma que quieres traducir.</p>
        <h3>¿Puedo traducir también la página web?</h3>
        <p>¡Claro! Se te preguntará si quieres traducir todo nuestro sitio web, incluyendo la documentación o la página de inicio. También te preguntaremos si quieres traducir los textos de las tiendas en las que está alojada la extensión.</p>
        <h3>¿Mi nombre aparecerá después de hacer la traducción?</h3>
        <p>¡Sí! Aparecerás en este sitio web y en la página de "Acerca de" de la extensión. (Si no quieres aparecer, infórmanoslo)</p>
        <h3>Traducciones ya realizadas:</h3>
        <p>English (US): elmees21</p>
        <p>Català (Catalunya): elmees21</p>
        <p>Español (España): elmees21</p>
        <p>Italiano (Italia): (Traductor de Google, si eres hablante de este idioma contáctanos.)</p>
        </div>
        <hr>
        <div id="ver">
        <h2>Versiones anteriores del programa</h2>
        <p>Puedes consultar todas las versiones del programa en "Releases" en GitHub. Además, se explica como instalar manualmente sin pasar por la tienda.</p>
        <a href="https://github.com/elmees21/firenotes/releases" target="_blank">
            <button class="mini-button">Ver Releases en GitHub</button>
        </a>
        <hr>
        <div id="contact">
        <h2>Otros</h2>
        <p>Queremos que FireNotes sea la mejor extensión de bloc de notas de código abierto. Si quieres y puedes, ¡no dudes en aportar tu granito de arena! Todas las aportaciones serán atribuidas (Si lo deseas).</p>
        <h3>Contacto</h3>
        <p>Y recuerda, aquí tienes mi e-mail para cualquier cosa. ¡Siempre disponible!</p>
        <p>eloi.mesa@outlook.com</p>
        <hr>
        <p><strong>Gracias por vuestro interés :D</strong></p>
        <p><i>Última actualización: 3/10/2023</i></p>
                `,
        
                ca: `
                <h1>Zona de Desenvolupadors</h1>
                <p><i>Benvingut, estimat desenvolupador. Aquí trobaràs el codi font del programa i altres aspectes avançats.</i></p>
                <h2>Índex</h2>
                <ul>
                    <li><a href="#source">Codi Font</a></li>
                    <li><a href="#translations">Traduccions</a></li>
                    <li><a href="#ver">Versions Anteriors del Programa</a></li>
                    <li><a href="#contact">Altres</a></li>
                </ul>
                <hr>
                <div id="source">
                <h2>Codi Font</h2>
                <p>Publiquem tot el nostre codi al repositori de GitHub, mantenint-lo actualitzat. Podeu veure com hem construït el programa, trobar errors, proposar solucions o crear la vostra pròpia versió de FireNotes utilitzant el nostre codi. Si voleu posar-vos en contacte amb nosaltres, podeu fer-ho a través de l'adreça de correu electrònic (eloi.mesa@outlook.com) o mitjançant GitHub.</p>
                <p></p>
                <a href="https://github.com/elmees21/firenotes" target="_blank">
                    <button class="mini-button">Veure el nostre repositori de GitHub</button>
                </a>
                <p></p>
                <p><i>Nota: La versió web es guarda en un repositori separat, que emmagatzema aquest lloc web i altres projectes de l'usuari elmees21.</i></p>
                <p></p>
                <a href="https://github.com/elmees21/elmees21.github.io/tree/main/firenotes/web-version/embed" target="_blank">
                    <button class="mini-button">Veure el repositori de GitHub de la versió web</button>
                </a>
                <h3>Puc replicar el teu codi?</h3>
                <p>Sí, podeu descarregar el meu codi i modificar-lo com vulgueu, i fins i tot podeu distribuir-lo com desitgeu. Les úniques condicions que imposo són que m'heu de donar crèdits a mi (elmees21) per basar-vos en el meu codi i que no es pot utilitzar amb finalitats comercials, en altres paraules, no podeu guanyar diners amb la meva feina.</p>
                </div>
                <hr>
                <div id="translations">
                <h2>Traduccions</h2>
                <h3>Vull començar a traduir FireNotes al meu idioma</h3>
                <p>Si parleu un idioma diferent de l'anglès, l'espanyol (Espanya) o el català (Catalunya), podeu traduir el nostre programa al vostre idioma. No importa quin sigui.</p>
                <p><strong>Per presentar-vos com a traductor, escriviu-nos a aquest correu electrònic: eloi.mesa@outlook.com</strong></p>
                <h3>L'idioma que parlo ja té una traducció, però està incompleta o té errors.</h3>
                <p>En aquest cas, poseu-vos en contacte amb nosaltres, i podeu reprendre la traducció. (eloi.mesa@outlook.com)</p>
                <h3>Ja he traduït anteriorment, però els nous textos de les noves versions no estan actualitzats.</h3>
                <p>En aquest cas, poseu-vos en contacte amb nosaltres de nou, i us facilitarem els nous textos.</p>
                <h3>El meu idioma té diferents variants, i vull traduir una en particular.</h3>
                <p>Per exemple, si voleu traduir al portuguès brasiler i ja existeix una traducció al portuguès de Portugal, no us preocupeu, indiqueu-nos a l'adreça de correu electrònic quina variant de l'idioma voleu traduir.</p>
                <h3>Puc traduir també la pàgina web?</h3>
                <p>¡Clar! Se us preguntarà si voleu traduir tot el nostre lloc web, incloent-hi la documentació o la pàgina d'inici. També us preguntarem si voleu traduir els textos de les botigues on s'allotja l'extensió.</p>
                <h3>El meu nom apareixerà després de fer la traducció?</h3>
                <p>Sí! Apareixerà al nostre lloc web i a la pàgina "Quant a" de l'extensió. (Si no voleu aparèixer, si us plau, informeu-nos-ho)</p>
                <h3>Traduccions ja realitzades:</h3>
                <p>Anglès (EUA): elmees21</p>
                <p>Català (Catalunya): elmees21</p>
                <p>Espanyol (Espanya): elmees21</p>
                <p>Italià (Itàlia): (Traductor de Google, si sou parlant natiu d'aquest idioma, poseu-vos en contacte amb nosaltres.)</p>
                </div>
                <hr>
                <div id="ver">
                <h2>Versions Anteriors del Programa</h2>
                <p>Podeu consultar totes les versions del programa a "Llançaments" a GitHub. A més, s'explica com instal·lar manualment sense passar per la botiga.</p>
                <a href="https://github.com/elmees21/firenotes/releases" target="_blank">
                    <button class="mini-button">Veure Llançaments a GitHub</button>
                </a>
                <hr>
                <div id="contact">
                <h2>Altres</h2>
                <p>Volem que FireNotes sigui l'extensió de bloc de notes de codi obert més destacada. Si voleu i podeu, no dubteu a col·laborar-hi! Totes les aportacions seran atribuïdes (si ho desitgeu).</p>
                <h3>Contacte</h3>
                <p>I recordeu, aquí teniu el meu correu electrònic per a qualsevol cosa. Sempre disponible!</p>
                <p>eloi.mesa@outlook.com</p>
                <hr>
                <p><strong>Gràcies pel vostre interès :D</strong></p>
                <p><i>Última actualització: 10/3/2023</i></p>
                </div>
                        `,
        it: `
        <h1>Zona Sviluppatori</h1>
        <p><i>Benvenuto, caro sviluppatore. Qui troverai il codice sorgente del programma e altri aspetti avanzati.</i></p>
        <h2>Indice</h2>
        <ul>
            <li><a href="#source">Codice Sorgente</a></li>
            <li><a href="#translations">Traduzioni</a></li>
            <li><a href="#ver">Versioni Precedenti del Programma</a></li>
            <li><a href="#contact">Altri</a></li>
        </ul>
        <hr>
        <div id="source">
        <h2>Codice Sorgente</h2>
        <p>Carichiamo tutto il nostro codice nel repository GitHub, mantenendolo sempre aggiornato. Puoi vedere come abbiamo costruito il programma, individuare errori, proporre soluzioni o creare la tua versione di FireNotes utilizzando il nostro codice. Se desideri contattarci, puoi farlo tramite l'indirizzo email (eloi.mesa@outlook.com) o attraverso GitHub.</p>
        <p></p>
        <a href="https://github.com/elmees21/firenotes" target="_blank">
            <button class="mini-button">Visualizza il nostro repository GitHub</button>
        </a>
        <p></p>
        <p><i>Nota: La versione web è archiviata in un repository separato, che contiene questo sito web e altri progetti dell'utente elmees21.</i></p>
        <p></p>
        <a href="https://github.com/elmees21/elmees21.github.io/tree/main/firenotes/web-version/embed" target="_blank">
            <button class="mini-button">Visualizza il repository GitHub della versione web</button>
        </a>
        <h3>Posso replicare il vostro codice?</h3>
        <p>Sì, puoi scaricare il mio codice e modificarlo a tuo piacimento, e puoi persino distribuirlo come preferisci. Le uniche condizioni che impongo sono che devi darmi (elmees21) il credito per basare il tuo lavoro sul mio codice e che non può essere utilizzato a scopi commerciali, in altre parole, non puoi guadagnare soldi dal mio lavoro.</p>
        </div>
        <hr>
        <div id="translations">
        <h2>Traduzioni</h2>
        <h3>Voglio iniziare a tradurre FireNotes nella mia lingua</h3>
        <p>Se parli una lingua diversa dall'inglese, lo spagnolo (Spagna) o il catalano (Catalogna), puoi tradurre il nostro programma nella tua lingua. Non importa quale sia.</p>
        <p><strong>Per presentarti come traduttore, scrivici a questa email: eloi.mesa@outlook.com</strong></p>
        <h3>La lingua che parlo ha già una traduzione, ma è incompleta o contiene errori.</h3>
        <p>In tal caso, contattaci, e potrai riprendere la traduzione. (eloi.mesa@outlook.com)</p>
        <h3>Ho già tradotto in precedenza, ma i nuovi testi nelle nuove versioni non sono aggiornati.</h3>
        <p>In tal caso, contattaci nuovamente, e ti forniremo i nuovi testi.</p>
        <h3>La mia lingua ha diverse varianti, e voglio tradurre una specifica.</h3>
        <p>Ad esempio, se vuoi tradurre in portoghese brasiliano e esiste già una traduzione in portoghese del Portogallo, non preoccuparti, comunicaci tramite l'email quale variante della lingua desideri tradurre.</p>
        <h3>Posso tradurre anche il sito web?</h3>
        <p>Certo! Ti verrà chiesto se desideri tradurre l'intero sito web, compresa la documentazione o la homepage. Ti chiederemo anche se desideri tradurre i testi dei negozi in cui è ospitata l'estensione.</p>
        <h3>Il mio nome comparirà dopo aver tradotto?</h3>
        <p>Sì! Apparirai su questo sito web e sulla pagina "Informazioni" dell'estensione. (Se non desideri apparire, informatelo per favore)</p>
        <h3>Traduzioni già effettuate:</h3>
        <p>Inglese (US): elmees21</p>
        <p>Catalano (Catalogna): elmees21</p>
        <p>Spagnolo (Spagna): elmees21</p>
        <p>Italiano (Italia): (Google Translator, se sei un madrelingua di questa lingua, contattaci.)</p>
        </div>
        <hr>
        <div id="ver">
        <h2>Versioni Precedenti del Programma</h2>
        <p>Puoi verificare tutte le versioni del programma in "Release" su GitHub. Inoltre, spiega come installare manualmente senza passare attraverso il negozio.</p>
        <a href="https://github.com/elmees21/firenotes/releases" target="_blank">
            <button class="mini-button">Visualizza le Release su GitHub</button>
        </a>
        <hr>
        <div id="contact">
        <h2>Altri</h2>
        <p>Vogliamo che FireNotes sia l'estensione di blocco note open source migliore. Se vuoi e puoi, non esitare a contribuire! Tutti i contributi saranno attribuiti (se lo desideri).</p>
        <h3>Contatto</h3>
        <p>E ricorda, ecco la mia email per qualsiasi cosa. Sempre disponibile!</p>
        <p>eloi.mesa@outlook.com</p>
        <hr>
        <p><strong>Grazie per il tuo interesse :D</strong></p>
        <p><i>Ultimo aggiornamento: 10/3/2023</i></p>
        </div>
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
