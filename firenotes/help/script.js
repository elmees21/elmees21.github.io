document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const privacyPolicy = document.getElementById("privacy-policy");

    const helpContent = {
        en: `
        <h1>Help and Documentation</h1>
        <p><i>Welcome, here you will find all your questions answered and learn how to use FireNotes</i></p>
        <h2>Index</h2>
        <ul>
            <li><a href="#introduction">Introduction and Installation</a></li>
            <li><a href="#usage">Usage and Features</a></li>
            <li><a href="#settings">Settings and Customization</a></li>
            <li><a href="#contact">Contact and Others</a></li>
        </ul>
        <hr>
        <div id="introduction">
        <h2>Introduction and Installation</h2>
        <h3>What is FireNotes?</h3>
        <p>FireNotes is a notepad application that you can open anytime, anywhere. No matter where you are on the web, you can always consult and edit your notepad. Plus, you can use useful features like dark mode or the burn button. Whoever you are, FireNotes will be a great help to you!</p>
        <h3>How and where can I install FireNotes?</h3>
        <p>FireNotes is available for download on Mozilla Firefox from the Firefox Add-ons store, completely free of charge. If you don't have Firefox or simply don't want to install it, you can use it without prior installation from our website and use the web version of the program.</p>
        <a href="https://elmees21.github.io/firenotes/download" target="_blank">
            <button class="mini-button">Download Now</button>
        </a>
        <p></p>
        <a href="https://elmees21.github.io/firenotes/web-version" target="_blank">
            <button class="mini-button">Web Version</button>
        </a>
        <h3>Is FireNotes available for other browsers?</h3>
        <p>Currently, FireNotes is only available for desktop Firefox browsers. We plan to release our extension on Chromium-based browsers in the near future, such as Chrome, Microsoft Edge, Opera, Brave, Vivaldi, etc. If you don't have a Firefox browser, you can always use the web version, which is compatible with all browsers and devices.</p>
        <h3>How do I open FireNotes in Firefox?</h3>
        <p>Once the extension is installed, click the extension button on the taskbar (🧩), and the menu with all your extensions will open, including FireNotes. Click on FireNotes, and the pop-up with the program will open, and the text you were working on last time will automatically load. If you prefer, you can open it as an external window with the "Open in external window" button. To close the pop-up, simply click outside of it or press the "Esc" key.</p>
        <p><i>Tip: If you want the button to launch FireNotes to be on the taskbar, go to the extensions menu and right-click on FireNotes, then activate "Pin to taskbar."</i></p>
        <h3>How do I uninstall FireNotes?</h3>
        <p>Go to the extensions menu and right-click on FireNotes, then select "Remove extension."</p>
        <p><i>Tip: If you want to delete all data and reset the program to the default state, you don't need to uninstall the extension. You can use the "Reset" button in the FireNotes settings (⚙️). If you want to temporarily stop using the extension without losing data, you can deactivate the extension.</i></p>
        </div>
        <hr>
        <div id="usage">
        <h2>Usage and Features</h2>
        <h3>How to start writing</h3>
        <p>To start writing in your blank notepad, just click on the empty area. Once you've done that, you can write whatever you want in the notepad.</p>
        <h3>How to save my text</h3>
        <p>FireNotes automatically saves everything you write, without pressing save buttons. Whenever you start the program, it will automatically load the last text you were working on. If you want to start over, you can delete everything manually using the "Reset" button in the settings (⚙️) or using the burn text button (🔥). We'll talk more about this last option later.</p>
        <h3>Increase or decrease text size</h3>
        <p>You can always increase or decrease the text size using the magnifying glass buttons (🔎). Use + to increase and - to decrease. When you start the program, the text size will automatically adjust to what you had last time. If you want to return to the default size, use the "Reset" button in the settings (⚙️), although keep in mind that other data will be lost.</p>
        <h3>Burn text</h3>
        <p>If you click the "🔥" burn text button, all your text will be deleted, but don't worry, it's still safe because the text you were editing has been copied to the clipboard. This means you can paste the text wherever you want in the browser or the system using Control + V (Command + V on macOS) or right-click and select "Paste." If you pressed it by accident, don't worry, you can paste the text back into the notepad and continue working.</p>
        <h3>Choose a font</h3>
        <p>In the header, you'll see a dropdown next to the icons. There you can choose the font you want to use in your documents. For now, you can choose from these fonts: Arial, Georgia, Monospace, and Italic. The program will always remember the font you used last time. More fonts will be added in the future.</p>
        </div>
        <hr>
        <div id="settings">
        <h2>Settings and Customization</h2>
        <h3>How to open the Settings menu</h3>
        <p>To open the Settings menu, simply click the gear button (⚙️), which is located in the upper right corner of the editor. All the features we'll go over in this section are inside this menu.</p>
        <h3>Reset</h3>
        <p>This function will delete all the application's data and return it to the default state. When you click the button, it will ask if you really want to reset everything. If you accept, the text you were working on will be deleted without the possibility of recovery, so it's advisable to move that text to another place before resetting. It will also deactivate dark mode, reset text size and font to the default state, and choose the default language of the browser.</p>
        <h3>Dark Mode</h3>
        <p>If you plan to work for a long time, are in a dark environment, or just want to give your notepad a special touch, you can activate dark mode. When activated, the entire program will have dark colors.</p>
        <h3>Interface Language</h3>
        <p>You can change the interface language at any time. When you first load the program, it will choose the default language of the browser. If it's not available, English will be chosen.</p>
        <h3>Credits and Links</h3>
        <p>Here you will find various menus with information about the program and external links.</p>
        <p><strong>About: </strong>Here you can check the program credits, see the current version, and view resources from other users used in FireNotes.</p>
        <p><strong>Help: </strong>On this page, you will learn how to use the program and find answers to possible questions you may have. In fact, it's the page you are currently consulting.</p>
        <p><strong>Website: </strong>You will access the extension's website, where you can check the news, documentation, source code, and GitHub repository, use the web version of the extension, or download it for other browsers or systems.</p>
        <p><strong>Rate Our Extension: </strong>If you click here, you will be redirected to your browser's extension store, where you can write a review about our extension. Feel free to add suggestions or report bugs, and if there's anything you don't like about our extension, don't hesitate to mention it; we are constantly improving. In advance, thanks for your reviews.</p>
        </div>
        <hr>
        <div id="contact">
        <h2>Contact and Others</h2>
        <h3>Contact</h3>
        <p>Do you have any questions? Want to send suggestions? You can contact us through this email:</p>
        <p>eloi.mesa@outlook.com</p>
        <h3>Privacy Policy</h3>
        <p>Here you can read the privacy policy of this website and the extension.</p>
        <a href="https://elmees21.github.io/firenotes/privacy-w" target="_blank">
            <button class="mini-button">Read the Web Privacy Policy of FireNotes</button>
        </a>
        <p></p>
        <a href="https://elmees21.github.io/firenotes/privacy-e" target="_blank">
            <button class="mini-button">Read the Extension Privacy Policy</button>
        </a>
        <p><i>The FireNotes application is not connected to the internet and does not collect any user information. Texts and settings are not saved on a server; they are saved locally.</i></p>
        <p><i>It is possible that data analytics samples, such as language, country, active users, etc., are collected from extension stores. Therefore, it is advisable to review the policies of the stores where you intend to download the extension.</i></p>
        <h3>Developers</h3>
        <p>If you are interested, please consult the open-source page, where you will find our extension's GitHub repository, translations, and technical data.</p>
        <a href="https://elmees21.github.io/firenotes/dev" target="_blank">
            <button class="mini-button">Go to the Open Source Page</button>
        </a>
        </div>
        <hr>
        <p><strong>Thank you for your interest :D</strong></p>
        <p><i>Last update: 9/29/2023</i></p>
                `,
        es: `
        <h1>Ayuda y documentación</h1>
        <p> <i>Bienvenido, aquí encontrarás todas tus dudas y aprenderás a como usar FireNotes</i> </p>
            <h2>Índice</h2>
            <ul>
                <li><a href="#introduction">Introducción e instalación</a></li>
                <li><a href="#usage">Uso y características</a></li>
                <li><a href="#settings">Ajustes y personalización</a></li>
                <li><a href="#contact">Contacto y otros</a></li>
            </ul>
        </div>
        <hr> </hr>
        <div id="introduction">
        <h2>Introducción e instalación</h2>
        <h3>¿Qué es FireNotes?</h3>
        <p>FireNotes es una aplicación de bloc de notas la cual puedes abrirla como quieras y cuando quieras. No importa en que parte de la web estés, siempre podrás consultar y editar tu bloc. Además, puedes usar funciones útiles, como el modo oscuro o el botón de quemar. Seas quien seas, ¡FireNotes te será de gran ayuda!</p>
        <h3>¿Como y donde puedo instalar FireNotes?</h3>
        <p>FireNotes está disponible para descargar en Mozilla Firefox desde la tienda de Complementos para Firefox (Firefox Add-ons) de forma completamente gratuita. Si no dispones de Firefox o simplemente no lo quieres instalar, puedes usarlo sin instalación previa desde nuestra página web y usar la versión web del programa.</p>
        <a href="https://elmees21.github.io/firenotes/download" target="_blank">
            <button class="mini-button">Descargar ahora</button>
          </a>
          <p> </p>
        <a href="https://elmees21.github.io/firenotes/web-version" target="_blank">
            <button class="mini-button">Versión Web</button>
          </a>
        <h3>¿FireNotes está disponible para otros navegadores?</h3>
        <p>De momento, FireNotes está solo disponible para navegadores Firefox de escritorio. Planeamos en un futuro no muy lejano publicar nuestra extensión en navegadores basados en Chromium, como por ejemplo Chrome, Microsoft Edge, Opera, Brave, Vivaldi, etc. Si no tienes un navegador Firefox, hasta entonces siempre podrás usar la versión web, que es compatible con todos los navegadores y dispositivos.</p>
        <h3>¿Cómo abro FireNotes en Firefox?</h3>
        <p>Una vez instalada la extensión, pulsa el botón de extensiones de la barra de tareas (🧩) y se abrirá el menú con todas tus extensiones, entre ellas FireNotes. Pulsa encima de FireNotes y se abrirá el pop-up con el programa, y automáticamente se cargará el texto en el que estabas trabajando la última vez. Si lo prefieres puedes abrirlo como una ventana externa con el botón de "Open in external window". Para cerrar el pop-up basta con hacer clic fuera de él o pulsando la tecla "Esc".</p>
        <p> <i>Consejo: Si quieres que el botón para ejecutar FireNotes esté en la barra de tareas, entra en el menú de extensiones y haz clic derecho en FireNotes, ahí activa "Fijar en la barra de tareas".</i> </p>
        <h3>¿Cómo elimino FireNotes?</h3>
        <p>Entra en el menú de extensiones y haz clic derecho en FireNotes, ahí selecciona "Eliminar extensión"</p>
        <p> <i>Consejo: Si lo que quieres es eliminar todos los datos y reiniciar el programa al estado predeterminado, no hace falta que elimines la extensión, puedes usar el botón de "Restablecer" en los ajustes de FireNotes (⚙️). Y si lo que quieres es dejar usar la extensión por un tiempo sin perder los datos, puedes desactivar la extensión.</i> </p>
        </div>
        <hr> </hr>
        <div id="usage">
        <h2>Uso y características</h2>
        <h3>Como empezar a escribir</h3>
        <p>Para empezar a escribir en tu bloc en blanco, basta con pulsar sobre el área vacía. Una vez hecho esto ya puedes escribir lo que quieras en el bloc.</p>
        <h3>Como guardar mi texto</h3>
        <p>FireNotes guarda todo lo que escribes automáticamente, sin pulsar botones de guardar. Siempre que inicies el programa, se cargará automáticamente el último texto en el que estabas trabajando. Si quieres empezar de nuevo puedes borrar todo manualmente, usando el botón de "Restablecer" de los ajustes (⚙️) o usando el botón de quemar texto (🔥). De esta última opción hablaremos más adelante.</p>
        <h3>Aumentar o disminuir el tamaño del texto</h3>
        <p>Siempre quieras, puedes aumentar y disminuir el tamaño del texto con los botones de lupa (🔎). Usa + para aumentar y - para disminuir. Al iniciar el programa tamaño se ajustará automáticamente al que tenías la última vez. Si quieres volver al tamaño predeterminado, usa el botón de "Restablecer" en los ajustes (⚙️), aunque ten en cuenta que se perderán los demás datos.</p>
        <h3>Quemar texto</h3>
        <p>Si pulsas el botón de quemar texto "🔥" se eliminará todo tu texto, pero no te preocupes, aún está a salvo, ya que el texto que estabas editando se ha copiado al portapapeles. Esto quiere decir que puedes pegar el texto donde quieras del navegador o del sistema usando Control + V (Command + V en macOS) o con clic derecho y seleccionando "Pegar". Si lo has pulsado por accidente, no te preocupes, puedes volver a pegar el texto en el bloc de notas y seguir trabajando.</p>
        <h3>Elegir un tipo de letra</h3>
        <p>En el encabezado verás que hay un desplegable al lado de los iconos. Ahí puedes elegir el tipo de letra que quieres usar en tus documentos. De momento puedes elegir entre estos tipos de letra: Arial, Georgia, Monospace y Cursiva. El programa recordará siempre al inicio el tipo de letra que usaste la última vez. Se añadirán más tipos de letra en el futuro.</p>
        </div>
        <hr> </hr>
        <div id="settings">
        <h2>Ajustes y personalización</h2>
        <h3>Como abrir el menú de Ajustes.</h3>
        <p>Para abrir el menú de Ajustes basta con pulsar el botón del engranaje (⚙️), el cual se encuentra en la parte superior derecha del editor. Todas las características que repasaremos a continuación en este apartado se encuentran dentro de este menú.</p>
        <h3>Restablecer</h3>
        <p>Esta función lo que hará es eliminar todos los datos de la aplicación y volver al estado predeterminado. Al pulsar el botón se preguntará si realmente quieres restablecerlo todo. Si aceptas, se eliminará el texto en el que estabas trabajando sin posibilidad de recuperarlo, por lo tanto, es recomendable mover ese texto a otro lugar antes de restablecer. También se desactivará el tema oscuro, se restablecerá el tamaño del texto y el tipo de letra al estado predeterminado, y se elegirá el idioma por defecto del navegador.</p>
        <h3>Modo oscuro</h3>
        <p>Si vas a pasar trabajar mucho rato seguido, estás en un entorno oscuro, o simplemente quieres darle un toque especial a tu bloc de notas, puedes activar el modo oscuro. Al activarse, todo el programa tendrá colores oscuros.</p>
        <h3>Idioma de la interfaz</h3>
        <p>En cualquier momento puedes cambiar el idioma de la interfaz. Al cargar el programa por primera vez se elegirá el idioma por defecto del navegador, en el caso de que no esté disponible se elegirá el inglés.</p>
        <h3>Créditos y enlaces</h3>
        <p>Aquí encontrarás diferentes menús con información del programa y enlaces externos.</p>
        <p><strong>Acerca de: </strong>Aquí podrás consultar los créditos del programa, ver la versión actual, y ver los recursos de otros usuarios utilizados en FireNotes</p>
        <p><strong>Ayuda: </strong>En esta página aprenderás a usar el programa y encontrarás respuesta a posibles dudas que tengas. De hecho, es la página que estás consultando ahora mismo.</p>
        <p><strong>Sitio Web: </strong>Accederás a la página web de la extensión, donde podrás consultar las novedades, la documentación, el código fuente y el repositorio de GitHub, usar la versión web de la extensión o descargarlo para otros navegadores o sistemas.</p>
        <p><strong>Valora nuestra extensión: </strong>Si pulsas aquí serás redirigido a la tienda de extensiones de tu navegador, aquí podrás escribir una reseña sobre nuestra extensión. No dudes en añadir sugerencias o comentar bugs, y si hay algo que no te guste de nuestra extensión, tampoco dudes en comentarlo, estamos en constante mejora. De antemano, gracias por vuestras reseñas.</p>
        </div>
        <hr> </hr>
        <div id="contact">
        <h2>Contacto y otros</h2>
        <h3>Contacto</h3>
        <p>¿Te has quedado con dudas? ¿Quieres enviar sugerencias? Puedes contactar con nosotros a través de este correo electrónico:</p>
        <p>eloi.mesa@outlook.com</p>
        <h3>Política de Privacidad</h3>
        <p>Aquí puedes leer la política de privacidad de este sitio web y de la extensión.</p>
        <a href="https://elmees21.github.io/firenotes/privacy-w" target="_blank">
            <button class="mini-button">Leer la Política de Privacidad de la Web de FireNotes</button>
          </a>
          <p> </p>
        <a href="https://elmees21.github.io/firenotes/privacy-e" target="_blank">
            <button class="mini-button">Leer la Política de Privacidad de la extensión</button>
          </a>
        <p><i>La aplicación de FireNotes no está conectada a internet y no recoge ningún tipo información de los usuarios. Los textos y configuraciones no se guardan en un servidor, se guardan localmente.</i></p>
        <p><i>Es posible que desde las tiendas de extensiones se recojan muestras de datos analíticos, como el idioma, país, usuarios activos, etc. Por ello es conveniente revisar las políticas de las tiendas donde usted vaya a descargar la extensión.</i></p>
        <h3>Desarrolladores</h3>
        <p>Si estáis interesados, consultad la página de código abierto, donde encontraréis el repositorio de GitHub de nuestra extensión, traducciones, y datos técnicos.</p>
        <a href="https://elmees21.github.io/firenotes/dev" target="_blank">
            <button class="mini-button">Ir a la página de código abierto</button>
          </a>
        </div>

        <hr> </hr>
        <p><strong>Gracias por vuestro interés :D</strong></p>
        <p><i>Última actualización: 29/9/2023</i></p>
                `,
        ca: `
        <h1>Ajuda i documentació</h1>
        <p> <i>Benvingut, aquí trobaràs totes les teves preguntes resoltes i aprendràs com utilitzar FireNotes</i> </p>
        <h2>Índex</h2>
        <ul>
            <li><a href="#introduction">Introducció i instal·lació</a></li>
            <li><a href="#usage">Ús i característiques</a></li>
            <li><a href="#settings">Configuració i personalització</a></li>
            <li><a href="#contact">Contacte i altres</a></li>
        </ul>
        </div>
        <hr> </hr>
        <div id="introduction">
        <h2>Introducció i instal·lació</h2>
        <h3>Què és FireNotes?</h3>
        <p>FireNotes és una aplicació de bloc de notes que pots obrir com vulguis i quan vulguis. No importa en quina part de la web estiguis, sempre podràs consultar i editar el teu bloc. A més, pots fer servir funcions útils, com el mode fosc o el botó de cremar. Siguis qui siguis, FireNotes et serà de gran ajuda!</p>
        <h3>Com i on puc instal·lar FireNotes?</h3>
        <p>FireNotes està disponible per descarregar a Mozilla Firefox des de la botiga de Complements per a Firefox (Firefox Add-ons) de forma completament gratuïta. Si no disposes de Firefox o simplement no el vols instal·lar, pots fer servir-lo sense instal·lació prèvia des de la nostra pàgina web i fer servir la versió web del programa.</p>
        <a href="https://elmees21.github.io/firenotes/download" target="_blank">
        <button class="mini-button">Descarregar ara</button>
        </a>
        <p> </p>
        <a href="https://elmees21.github.io/firenotes/web-version" target="_blank">
        <button class="mini-button">Versió Web</button>
        </a>
        <h3>FireNotes està disponible per altres navegadors?</h3>
        <p>De moment, FireNotes està disponible només per a navegadors Firefox d'escriptori. Planegem en un futur no gaire llunyà publicar la nostra extensió en navegadors basats en Chromium, com ara Chrome, Microsoft Edge, Opera, Brave, Vivaldi, etc. Si no tens un navegador Firefox, fins aleshores sempre podràs fer servir la versió web, que és compatible amb tots els navegadors i dispositius.</p>
        <h3>Com obrir FireNotes a Firefox?</h3>
        <p>Un cop instal·lada l'extensió, prem el botó d'extensions de la barra de tasques (🧩) i es obrirà el menú amb totes les teves extensions, entre elles FireNotes. Premeu damunt de FireNotes i es obrirà el pop-up amb el programa, i automàticament es carregarà el text en el qual estaves treballant l'última vegada. Si ho prefereixes pots obrir-lo com una finestra externa amb el botó "Open in external window". Per tancar el pop-up basta amb fer clic fora d'ell o prement la tecla "Esc".</p>
        <p> <i>Consell: Si vols que el botó per executar FireNotes estigui a la barra de tasques, entra en el menú d'extensions i fes clic dret a FireNotes, activa "Fixa a la barra de tasques".</i> </p>
        <h3>Com puc eliminar FireNotes?</h3>
        <p>Entra en el menú d'extensions i fes clic dret a FireNotes, selecciona "Eliminar extensió"</p>
        <p> <i>Consell: Si el que vols és eliminar totes les dades i reiniciar el programa a l'estat predeterminat, no cal que eliminis l'extensió, pots fer servir el botó "Restableix" a la configuració de FireNotes (⚙️). I si el que vols és deixar fer servir l'extensió per un temps sense perdre les dades, pots desactivar l'extensió.</i> </p>
        </div>
        <hr> </hr>
        <div id="usage">
        <h2>Ús i característiques</h2>
        <h3>Començar a escriure</h3>
        <p>Per començar a escriure al teu bloc en blanc, simplement prem sobre la zona buida. Un cop fet això ja pots escriure el que vulguis al bloc.</p>
        <h3>Com guardar el meu text</h3>
        <p>FireNotes guarda tot el que escrius automàticament, sense prémer botons de guardar. Sempre que iniciïs el programa, es carregarà automàticament l'últim text en el qual estaves treballant. Si vols començar de nou pots esborrar-ho tot manualment, fent servir el botó de "Restableix" de la configuració (⚙️) o fent servir el botó de cremar text (🔥). D'aquesta última opció en parlarem més endavant.</p>
        <h3>Augmentar o disminuir la mida del text</h3>
        <p>Sempre que vulguis, pots augmentar i disminuir la mida del text amb els botons de lupa (🔎). Fes servir + per augmentar i - per disminuir. En iniciar el programa, la mida s'ajustarà automàticament a la que tenies l'última vegada. Si vols tornar a la mida predeterminada, fes servir el botó de "Restableix" a la configuració (⚙️), encara que tingues en compte que es perdran les altres dades.</p>
        <h3>Cremar text</h3>
        <p>Si prems el botó de cremar text "🔥" s'esborrarà tot el teu text, però no et preocupis, encara està a salv, ja que el text en el qual estaves editant s'ha copiat al porta-retalls. Això vol dir que pots enganxar el text on vulguis del navegador o del sistema fent servir Control + V (Command + V a macOS) o amb clic dret i seleccionant "Enganxar". Si ho has premut per accident, no et preocupis, pots tornar a enganxar el text al bloc de notes i continuar treballant.</p>
        <h3>Triar un tipus de lletra</h3>
        <p>A l'encapçalament veuràs que hi ha un desplegable al costat dels ícones. Allà pots triar el tipus de lletra que vols fer servir als teus documents. De moment pots triar entre aquests tipus de lletra: Arial, Georgia, Monoespai i Cursiva. El programa recordarà sempre a l'inici el tipus de lletra que vas fer servir l'última vegada. S'afegiran més tipus de lletra en el futur.</p>
        </div>
        <hr> </hr>
        <div id="configuracio">
        <h2>Configuració i personalització</h2>
        <h3>Com obrir el menú de Configuració.</h3>
        <p>Per obrir el menú de Configuració simplement prem el botó de l'engranatge (⚙️), que es troba a la part superior dreta de l'editor. Totes les característiques que repassarem a continuació en aquest apartat es troben dins d'aquest menú.</p>
        <h3>Restableix</h3>
        <p>Aquesta funció el que farà és esborrar totes les dades de l'aplicació i tornar a l'estat predeterminat. Quan premis el botó, se't preguntarà si realment vols restablir-ho tot. Si acceptes, s'esborrarà el text en el qual estaves treballant sense possibilitat de recuperar-lo, per tant, és recomanable moure aquest text a un altre lloc abans de restablir. També s'aturarà el tema fosc, es restablirà la mida del text i el tipus de lletra a l'estat predeterminat, i s'escollirà l'idioma per defecte del navegador.</p>
        <h3>Mode fosc</h3>
        <p>Si vas a passar a treballar molta estona seguida, estàs en un entorn fosc, o simplement vols donar-li un toc especial al teu bloc de notes, pots activar el mode fosc. Quan s'activa, tot el programa tindrà colors foscos.</p>
        <h3>Idioma de la interfície</h3>
        <p>En qualsevol moment pots canviar l'idioma de la interfície. En carregar el programa per primera vegada s'escollirà l'idioma per defecte del navegador, en cas que no estigui disponible s'escollirà l'anglès.</p>
        <h3>Crèdits i enllaços</h3>
        <p>Aquí trobaràs diferents menús amb informació del programa i enllaços externs.</p>
        <p><strong>Quant a: </strong>Aquí podràs consultar els crèdits del programa, veure la versió actual i veure els recursos d'altres usuaris utilitzats a FireNotes.</p>
        <p><strong>Ajuda: </strong>En aquesta pàgina aprendràs a utilitzar el programa i trobaràs resposta a possibles preguntes que tinguis. De fet, és la pàgina que estàs consultant ara mateix.</p>
        <p><strong>Lloc web: </strong>Accediràs a la pàgina web de l'extensió, on podràs consultar les novetats, la documentació, el codi font i el repositori de GitHub, fer servir la versió web de l'extensió o descarregar-lo per altres navegadors o sistemes.</p>
        <p><strong>Valora la nostra extensió: </strong>Si premes aquí seràs redirigit a la botiga d'extensions del teu navegador, aquí podràs escriure una ressenya sobre la nostra extensió. No dubtis a afegir suggeriments o comentar errors, i si hi ha alguna cosa que no t'agradi de la nostra extensió, tampoc dubtis a comentar-ho, estem en constant millora. D'antemà, gràcies per les vostres ressenyes.</p>
        </div>
        <hr> </hr>
        <div id="contact">
        <h2>Contacte i altres</h2>
        <h3>Contacte</h3>
        <p>T'has quedat amb dubtes? Vols enviar suggeriments? Pots contactar amb nosaltres a través d'aquest correu electrònic:</p>
        <p>eloi.mesa@outlook.com</p>
        <h3>Política de Privadesa</h3>
        <p>Aquí pots llegir la política de privadesa d'aquest lloc web i de l'extensió.</p>
        <a href="https://elmees21.github.io/firenotes/privacy-w" target="_blank">
        <button class="mini-button">Llegir la Política de Privadesa de la Web de FireNotes</button>
        </a>
        <p> </p>
        <a href="https://elmees21.github.io/firenotes/privacy-e" target="_blank">
        <button class="mini-button">Llegir la Política de Privadesa de l'extensió</button>
        </a>
        <p><i>L'aplicació de FireNotes no està connectada a internet i no recopila cap tipus d'informació dels usuaris. Els textos i configuracions no es guarden en un servidor, es guarden localment.</i></p>
        <p><i>És possible que des de les botigues d'extensions es recullin mostres de dades analítiques, com l'idioma, país, usuaris actius, etc. Per això és convenient revisar les polítiques de les botigues on vulguis descarregar l'extensió.</i></p>
        <h3>Desenvolupadors</h3>
        <p>Si esteu interessats, consulteu la pàgina de codi obert, on trobareu el repositori de GitHub de la nostra extensió, traduccions i dades tècniques.</p>
        <a href="https://elmees21.github.io/firenotes/dev" target="_blank">
        <button class="mini-button">Anar a la pàgina de codi obert</button>
        </a>
        </div>
        <hr> </hr>
        <p><strong>Gràcies pel vostre interès :D</strong></p>
        <p><i>Última actualització: 29/9/2023</i></p>
                `,
        it: `
        <h1>Aiuto e documentazione</h1>
        <p><i>Benvenuti, qui troverete tutte le risposte alle vostre domande e imparerete come utilizzare FireNotes</i></p>
        <h2>Indice</h2>
        <ul>
            <li><a href="#introduction">Introduzione e installazione</a></li>
            <li><a href="#usage">Utilizzo e funzionalità</a></li>
            <li><a href="#settings">Impostazioni e personalizzazione</a></li>
            <li><a href="#contact">Contatto e altro</a></li>
        </ul>
        </div>
        <hr> </hr>
        <div id="introduction">
        <h2>Introduzione e installazione</h2>
        <h3>Cos'è FireNotes?</h3>
        <p>FireNotes è un'applicazione di blocco note che puoi aprire quando e come desideri. Non importa in quale parte del web ti trovi, sarai sempre in grado di consultare e modificare il tuo blocco note. Inoltre, puoi utilizzare funzioni utili come la modalità scura o il pulsante di "bruciatura". Sia chi sia, FireNotes ti sarà di grande aiuto!</p>
        <h3>Come e dove posso installare FireNotes?</h3>
        <p>FireNotes è disponibile per il download su Mozilla Firefox dallo store dei componenti aggiuntivi di Firefox (Firefox Add-ons) in modo completamente gratuito. Se non hai Firefox o semplicemente non desideri installarlo, puoi utilizzarlo senza una preinstallazione dal nostro sito web e utilizzare la versione web del programma.</p>
        <a href="https://elmees21.github.io/firenotes/download" target="_blank">
            <button class="mini-button">Scarica ora</button>
        </a>
        <p> </p>
        <a href="https://elmees21.github.io/firenotes/web-version" target="_blank">
            <button class="mini-button">Versione Web</button>
        </a>
        <h3>FireNotes è disponibile per altri browser?</h3>
        <p>Al momento, FireNotes è disponibile solo per il browser desktop Firefox. Pianifichiamo in un futuro non troppo lontano di pubblicare la nostra estensione su browser basati su Chromium, come ad esempio Chrome, Microsoft Edge, Opera, Brave, Vivaldi, ecc. Se non disponi di un browser Firefox, nel frattempo puoi sempre utilizzare la versione web, compatibile con tutti i browser e i dispositivi.</p>
        <h3>Come apro FireNotes in Firefox?</h3>
        <p>Dopo aver installato l'estensione, premi il pulsante delle estensioni sulla barra delle applicazioni (🧩) e verrà aperto il menu con tutte le tue estensioni, tra cui FireNotes. Fai clic su FireNotes e verrà aperta la finestra popup con il programma, e il testo su cui stavate lavorando verrà caricato automaticamente. Se preferisci, puoi aprirlo come una finestra esterna con il pulsante "Apri in finestra esterna". Per chiudere la finestra popup, è sufficiente fare clic al di fuori di essa o premere il tasto "Esc".</p>
        <p><i>Suggerimento: se desideri che il pulsante per eseguire FireNotes sia sulla barra delle applicazioni, accedi al menu delle estensioni e fai clic destro su FireNotes, quindi attiva "Aggiungi alla barra delle applicazioni".</i></p>
        <h3>Come disinstallo FireNotes?</h3>
        <p>Accedi al menu delle estensioni e fai clic destro su FireNotes, quindi seleziona "Rimuovi estensione".</p>
        <p><i>Suggerimento: se desideri eliminare tutti i dati e ripristinare il programma allo stato predefinito, non è necessario rimuovere l'estensione, puoi utilizzare il pulsante "Ripristina" nelle impostazioni di FireNotes (⚙️). Se desideri continuare a utilizzare l'estensione per un po' senza perdere i dati, puoi disattivare l'estensione.</i></p>
        </div>
        <hr> </hr>
        <div id="usage">
        <h2>Utilizzo e funzionalità</h2>
        <h3>Come iniziare a scrivere</h3>
        <p>Per iniziare a scrivere nel tuo blocco vuoto, è sufficiente fare clic sull'area vuota. Una volta fatto ciò, puoi iniziare a scrivere qualsiasi cosa nel blocco.</p>
        <h3>Come salvare il mio testo</h3>
        <p>FireNotes salva automaticamente tutto ciò che scrivi, senza dover premere pulsanti di salvataggio. Ogni volta che avvii il programma, verrà caricato automaticamente l'ultimo testo su cui stavi lavorando. Se desideri iniziare da capo, puoi cancellare tutto manualmente utilizzando il pulsante "Ripristina" nelle impostazioni (⚙️) o il pulsante di "bruciatura" del testo (🔥). Ne parleremo più avanti.</p>
        <h3>Aumentare o diminuire la dimensione del testo</h3>
        <p>Puoi sempre aumentare o diminuire la dimensione del testo utilizzando i pulsanti di ingrandimento (🔎). Usa + per aumentare e - per diminuire. Quando avvii il programma, la dimensione verrà automaticamente impostata su quella che avevi l'ultima volta. Se desideri tornare alla dimensione predefinita, utilizza il pulsante "Ripristina" nelle impostazioni (⚙️), anche se tieni presente che perderai altre informazioni.</p>
        <h3>Bruciare il testo</h3>
        <p>Se premi il pulsante per bruciare il testo "🔥", tutto il tuo testo verrà eliminato, ma non preoccuparti, è ancora al sicuro, poiché il testo su cui stavi lavorando è stato copiato negli appunti. Ciò significa che puoi incollare il testo dove desideri nel browser o nel sistema utilizzando Control + V (Command + V su macOS) o facendo clic con il pulsante destro e selezionando "Incolla". Se hai premuto per errore, non preoccuparti, puoi incollare nuovamente il testo nel blocco note e continuare a lavorare.</p>
        <h3>Scegliere un tipo di carattere</h3>
        <p>Nell'intestazione vedrai un menu a discesa accanto alle icone. Qui puoi scegliere il tipo di carattere da utilizzare nei tuoi documenti. Al momento puoi scegliere tra questi tipi di carattere: Arial, Georgia, Monospace e Corsivo. Il programma ricorderà sempre l'ultima scelta all'avvio. Saranno aggiunti ulteriori tipi di carattere in futuro.</p>
        </div>
        <hr> </hr>
        <div id="settings">
        <h2>Impostazioni e personalizzazione</h2>
        <h3>Come aprire il menu delle impostazioni</h3>
        <p>Per aprire il menu delle impostazioni, basta fare clic sul pulsante dell'ingranaggio (⚙️), che si trova nella parte superiore destra dell'editor. Tutte le funzionalità che esamineremo in questo paragrafo sono disponibili in questo menu.</p>
        <h3>Ripristina</h3>
        <p>Questa funzione eliminerà tutti i dati dell'applicazione e li riporterà allo stato predefinito. Quando si preme il pulsante, verrà chiesto se si desidera davvero ripristinare tutto. Se accetti, il testo su cui stavate lavorando verrà eliminato senza possibilità di recupero, pertanto è consigliabile spostare il testo altrove prima del ripristino. Inoltre, verrà disattivata la modalità scura, ripristinata la dimensione del testo e il tipo di carattere predefinito, e verrà selezionata la lingua predefinita del browser.</p>
        <h3>Modalità scura</h3>
        <p>Se prevedi di lavorare per lungo tempo, ti trovi in un ambiente scuro o desideri semplicemente dare un tocco speciale al tuo blocco note, puoi attivare la modalità scura. Quando è attivata, tutto il programma avrà colori scuri.</p>
        <h3>Lingua dell'interfaccia</h3>
        <p>In qualsiasi momento puoi cambiare la lingua dell'interfaccia. All'avvio del programma, verrà selezionata la lingua predefinita del browser, nel caso in cui non sia disponibile verrà selezionato l'inglese.</p>
        <h3>Crediti e collegamenti</h3>
        <p>Qui troverai diversi menu con informazioni sul programma e collegamenti esterni.</p>
        <p><strong>Su di noi:</strong> Qui puoi consultare i crediti del programma, vedere la versione attuale e visualizzare le risorse degli altri utenti utilizzate in FireNotes.</p>
        <p><strong>Aiuto:</strong> In questa pagina imparerai come utilizzare il programma e troverai risposte alle domande frequenti. In effetti, questa è la pagina che stai consultando in questo momento.</p>
        <p><strong>Sito web:</strong> Accederai al sito web dell'estensione, dove potrai consultare le novità, la documentazione, il codice sorgente e il repository di GitHub, utilizzare la versione web dell'estensione o scaricarlo per altri browser o sistemi.</p>
        <p><strong>Valuta la nostra estensione:</strong> Se fai clic qui, sarai reindirizzato allo store delle estensioni del tuo browser, dove potrai scrivere una recensione sulla nostra estensione. Non esitare a fornire suggerimenti o segnalare bug e, se c'è qualcosa che non ti piace della nostra estensione, non esitare a farlo notare, stiamo lavorando costantemente per migliorare. Grazie in anticipo per le tue recensioni.</p>
        </div>
        <hr> </hr>
        <div id="contact">
        <h2>Contatto e altro</h2>
        <h3>Contatto</h3>
        <p>Hai delle domande? Vuoi inviare suggerimenti? Puoi contattarci tramite questa email:</p>
        <p>eloi.mesa@outlook.com</p>
        <h3>Informativa sulla privacy</h3>
        <p>Qui puoi leggere l'informativa sulla privacy di questo sito web e dell'estensione.</p>
        <a href="https://elmees21.github.io/firenotes/privacy-w" target="_blank">
        <button class="mini-button">Leggi l'informativa sulla privacy del sito web di FireNotes</button>
        </a>
        <p> </p>
        <a href="https://elmees21.github.io/firenotes/privacy-e" target="_blank">
        <button class="mini-button">Leggi l'informativa sulla privacy dell'estensione</button>
        </a>
        <p><i>L'applicazione di FireNotes non è connessa a Internet e non raccoglie alcun tipo di informazione sugli utenti. I testi e le impostazioni non vengono salvati su un server, ma localmente.</i></p>
        <p><i>È possibile che dalle store delle estensioni vengano raccolti dati analitici, come la lingua, il paese, gli utenti attivi, ecc. Pertanto, è consigliabile consultare le politiche delle store dove intendi scaricare l'estensione.</i></p>
        <h3>Sviluppatori</h3>
        <p>Se sei interessato, consulta la pagina del codice sorgente, dove troverai il repository di GitHub della nostra estensione, le traduzioni e le informazioni tecniche.</p>
        <a href="https://elmees21.github.io/firenotes/dev" target="_blank">
        <button class="mini-button">Vai alla pagina del codice sorgente</button>
        </a>
        </div>
        <hr> </hr>
        <p><strong>Grazie per il vostro interesse :D</strong></p>
        <p><i>Ultimo aggiornamento: 29/9/2023</i></p>
                `,
    };

    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        privacyPolicy.innerHTML = helpContent[selectedLanguage];
    });

    const userLanguage = navigator.language.split('-')[0];
    if (helpContent[userLanguage]) {
        languageSelector.value = userLanguage;
        privacyPolicy.innerHTML = helpContent[userLanguage];
    } else {
        privacyPolicy.innerHTML = helpContent["en"]; 
    }
});

function goBack() {
    window.history.back();
}
