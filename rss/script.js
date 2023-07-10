window.addEventListener('load', function() {
  var rssFeedElement = document.getElementById('rss-feed');
  var siteListElement = document.querySelector('.site-list');
  var darkModeBtn = document.getElementById('dark-mode-btn');
  var contentTitleElement = document.querySelector('.content-title');

  siteListElement.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
      var siteItems = siteListElement.getElementsByTagName('li');
      for (var i = 0; i < siteItems.length; i++) {
        siteItems[i].classList.remove('active');
      }
      target.classList.add('active');

      var siteName = target.textContent.trim(); 

      if (siteName === '324') {
        var rssFeedUrl = 'https://api.ccma.cat/noticies?_format=rss&origen=frontal&frontal=n324-portada-noticia&version=2.0';
        var siteIcon = 'https://statics.ccma.cat/img/favicons/324-favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Catalunya Diari') {
        var rssFeedUrl = 'https://catalunyadiari.com/rss/last-posts';
        var siteIcon = 'https://catalunyadiari.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'La Vanguardia') {
        var rssFeedUrl = 'https://www.lavanguardia.com/rss/home.xml';
        var siteIcon = 'https://www.lavanguardia.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'ABC') {
        var rssFeedUrl = 'https://www.abc.es/rss/feeds/abc_ultima.xml';
        var siteIcon = 'https://static.abc.es/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'El Periódico') {
        var rssFeedUrl = 'https://www.elperiodico.com/es/rss/ultimas-noticias/rss.xml';
        var siteIcon = 'https://www.elperiodico.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Vilaweb') {
        var rssFeedUrl = 'https://www.vilaweb.cat/feed';
        var siteIcon = 'https://imatges.vilaweb.cat/nacional/wp-content/uploads/2022/05/favicon-09125230.png';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'El Punt Avui') {
        var rssFeedUrl = 'http://www.elpuntavui.cat/barcelona/nacional.feed?type=rss';
        var siteIcon = 'https://www.elpuntavui.cat/templates/d2015/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Esport 3') {
        var rssFeedUrl = 'https://api.ccma.cat/noticies?_format=rss&origen=frontal&frontal=pue3-home-noticia&version=2.0';
        var siteIcon = 'https://play-lh.googleusercontent.com/ShlkcR-DbAaqrhQxLWnOZHn-FJSLOyghtvR-KWr4QeBAC_g5h4aXT17llDCWKXJL5lGk';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Mundo Deportivo') {
        var rssFeedUrl = 'https://www.mundodeportivo.com/feed/rss/home/';
        var siteIcon = 'https://www.mundodeportivo.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Sport.es') {
        var rssFeedUrl = 'https://www.sport.es/es/rss/last-news/news.xml';
        var siteIcon = 'https://www.sport.es/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Marca') {
        var rssFeedUrl = 'https://e00-marca.uecdn.es/rss/portada.xml';
        var siteIcon = 'https://www.marca.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Xataka') {
        var rssFeedUrl = 'http://feeds.weblogssl.com/xataka2';
        var siteIcon = 'https://img.weblogssl.com/css/xataka/common/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'ComputerHoy') {
        var rssFeedUrl = 'https://computerhoy.com/rss';
        var siteIcon = 'https://computerhoy.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Genbeta') {
        var rssFeedUrl = 'https://www.genbeta.com/feedburner.xml';
        var siteIcon = 'https://img.weblogssl.com/css/genbeta/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Xataka Móvil') {
      var rssFeedUrl = 'https://www.xatakamovil.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/xatakamovil/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Xataka Android') {
      var rssFeedUrl = 'https://www.xatakandroid.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/xatakandroid/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Xataka Smart Home') {
      var rssFeedUrl = 'https://www.xatakahome.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/xatakahome/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Mundo Xiaomi') {
      var rssFeedUrl = 'https://www.mundoxiaomi.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/mundoxiaomi/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Nintenderos') {
      var rssFeedUrl = 'https://www.nintenderos.com/feed/';
      var siteIcon = 'https://www.nintenderos.com/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Nintendúo') {
      var rssFeedUrl = 'https://nintenduo.com/feed/';
      var siteIcon = 'https://nintenduo.com/wp-content/uploads/2021/06/cropped-Redes-32x32.png';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === '3DJuegos') {
      var rssFeedUrl = 'https://www.3djuegos.com/feedburner.xml';
      var siteIcon = 'https://pbs.twimg.com/profile_images/1597941638470537216/sCyFf7le_400x400.png';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === '3DJuegos Latam') {
      var rssFeedUrl = 'https://www.3djuegos.lat/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/3djuegoslat/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === '3DJuegos PC') {
      var rssFeedUrl = 'https://www.3djuegospc.com/feedburner.xml';
      var siteIcon = 'https://pbs.twimg.com/profile_images/1404435780869791749/PUPguwVG_400x400.jpg';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === '3DJuegos Guías') {
      var rssFeedUrl = 'https://www.3djuegosguias.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/3djuegosguias/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Hobby Consolas') {
      var rssFeedUrl = 'https://www.hobbyconsolas.com/rss';
      var siteIcon = 'https://www.hobbyconsolas.com/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Vida Extra') {
      var rssFeedUrl = 'https://www.vidaextra.com/feedburner.xml';
      var siteIcon = 'https://img.weblogssl.com/css/vidaextra/common/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
      } else if (siteName === 'Kudasai') {
      var rssFeedUrl = 'https://somoskudasai.com/feed/';
      var siteIcon = 'https://somoskudasai.com/favicon.ico';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
    } else if (siteName === 'Antojasai') {
      var confirmResult = window.confirm('¿Eres mayor de edad para ver las noticias a continuación?');
      if (confirmResult) {
        var rssFeedUrl = 'https://antojasai.com/feed/';
        var siteIcon = 'https://antojasai.com/favicon.ico';
        loadRssFeed(rssFeedUrl, siteIcon, siteName);}
    } else if (siteName === 'Misión Tokyo') {
      var rssFeedUrl = 'http://misiontokyo.com/feed';
      var siteIcon = 'http://misiontokyo.com/wp-content/uploads/2019/05/cropped-MT-32x32.jpg';
      loadRssFeed(rssFeedUrl, siteIcon, siteName);
    } else if (siteName === 'RSS Personalizado') {
      var customUrl = window.prompt('Ingresa la URL del feed RSS personalizado:');
      if (customUrl) {
        var confirmResult = window.confirm('¿Deseas cargar el feed RSS personalizado? (Puede tardar unos segundos)');
        if (confirmResult) {
          var rssFeedUrl = customUrl;
          var siteIcon = 'URL_DEL_ICONO';
          loadRssFeed(rssFeedUrl, siteIcon, siteName);
        }
      }
    } else if (siteName === 'Modo oscuro/claro') {
      document.body.classList.toggle('dark-mode');

    } else if (siteName === 'Cambiar idioma/Change language') {
      alert('Coming soon! / ¡Proximamente!');

    } else if (siteName === 'Versión para móviles') {
      alert('Coming soon! / ¡Proximamente!')


    } else if (siteName === 'Acerca de') {
      alert('RSS Reader, by elmees21 (elmees21.github.io). Thanks to the news websites for providing their RSS feeds. To you too for using my program!');
    } else if (siteName === '¿Cómo se usa?') {
      alert('👋 Bienvenido a mi lector de RSS, aquí podrás ver todas las noticias en pocos clics, de forma ordenada y cómoda.');
      alert('En la parte izquierda de la pantalla verás todas las webs para consultar noticias, haz click en una de ellas y verás como las noticias se muestran en la parte derecha.');
      alert('Podrás leer el titular un pequeño fragmento de la noticia, si te interesa puedes pulsar el botón de "Seguir leyendo".');
      alert('Si vas a leer por mucho rato, es recomendable activar el modo oscuro para una mayor comodidad. Lo puedes activar en la parte superior o desde la barra lateral.');
      alert('Si lo, prefieres puedes cargar un RSS personalizado con el botón "RSS Personalizado" de la barra lateral. Es muy útil si quieres comprobar si funciona o para leer de una web la cual no está en la lista de la barra lateral.');
      alert('También existen versiones de este sitio web para dispositivos móviles. También puedes cambiar el idioma de la interfaz si lo deseas.');
      alert('Por supuesto puedes repetir este tour cuando quieras pulsando el botón "¿Cómo se usa?", y puedes ver todos los créditos del programa con el botón "Acerca de".');
      alert('¡Disfruta leyendo! 😉');





    }
      
    }
  });

  darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  function loadRssFeed(rssFeedUrl, siteIcon, siteName) {
    fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(rssFeedUrl))
      .then(function(response) {
        return response.text();
      })
      .then(function(xmlText) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        var items = xmlDoc.querySelectorAll('item');

        rssFeedElement.innerHTML = '';

        items.forEach(function(item) {
          var title = item.querySelector('title').textContent;
          var description = item.querySelector('description').textContent;

          var parser = new DOMParser();
          var descriptionDoc = parser.parseFromString(description, 'text/html');
          var cleanDescription = descriptionDoc.body.textContent;

          var itemElement = document.createElement('div');
          itemElement.className = 'card';

          var titleElement = document.createElement('h2');
          titleElement.className = 'card-title';
          titleElement.textContent = title;

          var descriptionElement = document.createElement('p');
          descriptionElement.className = 'card-description';
          descriptionElement.textContent = cleanDescription;

          var buttonElement = document.createElement('button');
          buttonElement.className = 'card-button';
          buttonElement.textContent = 'Seguir leyendo';

          buttonElement.addEventListener('click', function() {
            window.open(item.querySelector('link').textContent, '_blank');
          });

          itemElement.appendChild(titleElement);
          itemElement.appendChild(descriptionElement);
          itemElement.appendChild(buttonElement);

          rssFeedElement.appendChild(itemElement);
        });

        contentTitleElement.textContent = siteName; 
      })
      .catch(function(error) {
        console.log('Error al cargar el feed RSS:', error);
      });
  }
});
