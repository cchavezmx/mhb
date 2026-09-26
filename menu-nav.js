(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // Orden exacto de las 54 paradas (QR 0 .. 53)
  var RUTAS = [
    { f: 'index.html', t: { es: 'Inicio', en: 'Home', fr: 'Accueil', de: 'Startseite', it: 'Inizio' } },
    { f: 'vitrina1.html', t: { es: 'Librero 1 · Los soportes de la antigüedad', en: 'Shelf 1 · Ancient supports', fr: "Étagère 1 · Les supports de l'Antiquité", de: 'Regal 1 · Die Träger der Antike', it: 'Scaffale 1 · I supporti dell’antichità' } },
    { f: 'vitrina2.html', t: { es: 'Maqueta 1 · El arca del pacto', en: 'Model 1 · The Ark of the Covenant', fr: 'Maquette 1 · L’Arche d’alliance', de: 'Modell 1 · Die Bundeslade', it: 'Modello 1 · L’Arca dell’Alleanza' } },
    { f: 'vitrina3.html', t: { es: 'Maqueta 2 · El tabernáculo', en: 'Model 2 · The Tabernacle', fr: 'Maquette 2 · Le Tabernacle', de: 'Modell 2 · Die Stiftshütte', it: 'Modello 2 · Il Tabernacolo' } },
    { f: 'vitrina4.html', t: { es: 'Librero 2 · El pergamino', en: 'Shelf 2 · The Parchment', fr: 'Étagère 2 · Le parchemin', de: 'Regal 2 · Das Pergament', it: 'Scaffale 2 · La Pergamena' } },
    { f: 'vitrina5.html', t: { es: 'Vitrina 1 · La Tora', en: 'Case 1 · The Torah', fr: 'Vitrine 1 · La Torah', de: 'Vitrine 1 · Die Tora', it: 'Vetrina 1 · La Torah' } },
    { f: 'vitrina6.html', t: { es: 'Vitrina 2 · El Tanaj y la tradición judía', en: 'Case 2 · The Tanakh and the Jewish tradition', fr: 'Vitrine 2 · Le Tanakh et la tradition juive', de: 'Vitrine 2 · Der Tanach und die jüdische Tradition', it: 'Vetrina 2 · Il Tanakh e la tradizione ebraica' } },
    { f: 'vitrina7.html', t: { es: 'Maqueta 3 · El templo de Salomón', en: 'Model 3 · The Temple of Solomon', fr: 'Maquette 3 · Le Temple de Salomon', de: 'Modell 3 · Der Tempel Salomos', it: 'Modello 3 · Il Tempio di Salomone' } },
    { f: 'vitrina8.html', t: { es: 'Vitrina 3 · La Septuaginta. Los Setenta', en: 'Case 3 · The Septuagint. The Seventy', fr: 'Vitrine 3 · La Septante. Les Septante', de: 'Vitrine 3 · Die Septuaginta. Die Siebzig', it: 'Vetrina 3 · La Settanta. I Settanta' } },
    { f: 'vitrina9.html', t: { es: 'Vitrina 4a · La Hexapla de Orígenes', en: 'Case 4a · Origen’s Hexapla', fr: 'Vitrine 4a · L’Hexaple d’Origène', de: 'Vitrine 4a · Die Hexapla des Origenes', it: 'Vetrina 4a · L’Esapla di Origene' } },
    { f: 'vitrina10.html', t: { es: 'Vitrina 4b · El códice de Alepo', en: 'Case 4b · The Aleppo Codex', fr: 'Vitrine 4b · Le Codex d’Alep', de: 'Vitrine 4b · Der Aleppo-Kodex', it: 'Vetrina 4b · Il Codice di Aleppo' } },
    { f: 'vitrina11.html', t: { es: 'Vitrina 5a · El Nuevo Testamento en siriaco y latín', en: 'Case 5a · The New Testament in Syriac and Latin', fr: 'Vitrine 5a · Le Nouveau Testament en syriaque et en latin', de: 'Vitrine 5a · Das Neue Testament auf Syrisch und Latein', it: 'Vetrina 5a · Il Nuovo Testamento in siriaco e latino' } },
    { f: 'vitrina12.html', t: { es: 'Vitrina 5b · El códice Amiatino', en: 'Case 5b · The Codex Amiatinus', fr: 'Vitrine 5b · Le Codex Amiatinus', de: 'Vitrine 5b · Der Codex Amiatinus', it: 'Vetrina 5b · Il Codex Amiatinus' } },
    { f: 'vitrina13.html', t: { es: 'Vitrina 6 · El Beato de Liébana', en: 'Case 6 · Beatus of Liébana', fr: 'Vitrine 6 · Le Beatus de Liébana', de: 'Vitrine 6 · Der Beatus von Liébana', it: 'Vetrina 6 · Il Beato di Liébana' } },
    { f: 'vitrina14.html', t: { es: 'Vitrina 7 · La Biblia de San Luis', en: 'Case 7 · The Bible of Saint Louis', fr: 'Vitrine 7 · La Bible de Saint Louis', de: 'Vitrine 7 · Die Bibel von Saint Louis', it: 'Vetrina 7 · La Bibbia di San Luigi' } },
    { f: 'vitrina15.html', t: { es: 'Librero 3a · Biblia alfonsina', en: 'Shelf 3a · Alfonsine Bible', fr: 'Étagère 3a · Bible alphonsine', de: 'Regal 3a · Die Alfonsinische Bibel', it: 'Scaffale 3a · Bibbia alfonsina' } },
    { f: 'vitrina16.html', t: { es: 'Librero 3b · Biblia del duque de Alba', en: 'Shelf 3b · Bible of the Duke of Alba', fr: 'Étagère 3b · Bible du duc d’Albe', de: 'Regal 3b · Die Bibel des Herzogs von Alba', it: 'Scaffale 3b · Bibbia del duca di Alba' } },
    { f: 'vitrina17.html', t: { es: 'Librero 4 · La pauperum', en: 'Shelf 4 · The Pauperum', fr: 'Étagère 4 · La Pauperum', de: 'Regal 4 · Die Pauperum', it: 'Scaffale 4 · La Pauperum' } },
    { f: 'vitrina18.html', t: { es: 'Vitrina 8 · El Salterio anglocatalán', en: 'Case 8 · The Anglo-Catalan Psalter', fr: 'Vitrine 8 · Le Psautier anglo-catalan', de: 'Vitrine 8 · Der Anglo-Katalanische Psalter', it: 'Vetrina 8 · Il Salterio anglo-catalano' } },
    { f: 'vitrina19.html', t: { es: 'Vitrina 9 · La Biblia de Nápoles', en: 'Case 9 · The Bible of Naples', fr: 'Vitrine 9 · La Bible de Naples', de: 'Vitrine 9 · Die Bibel von Neapel', it: 'Vetrina 9 · La Bibbia di Napoli' } },
    { f: 'vitrina20.html', t: { es: 'Vitrina 10 · La Biblia de Gutenberg', en: 'Case 10 · The Gutenberg Bible', fr: 'Vitrine 10 · La Bible de Gutenberg', de: 'Vitrine 10 · Die Gutenberg-Bibel', it: 'Vetrina 10 · La Bibbia di Gutenberg' } },
    { f: 'vitrina21.html', t: { es: 'Vitrina 11 · Las Grandes Horas de Ana de Bretaña', en: 'Case 11 · The Grandes Heures of Anne of Brittany', fr: 'Vitrine 11 · Les Grandes Heures d’Anne de Bretagne', de: 'Vitrine 11 · Die Grandes Heures der Anne von der Bretagne', it: 'Vetrina 11 · Le Grandes Heures di Anna di Bretagna' } },
    { f: 'vitrina22.html', t: { es: 'Vitrina 12 · La Biblia políglota complutense', en: 'Case 12 · The Complutensian Polyglot Bible', fr: 'Vitrine 12 · La Bible polyglote complutensienne', de: 'Vitrine 12 · Die Complutensische Polyglotte', it: 'Vetrina 12 · La Bibbia poliglota complutense' } },
    { f: 'vitrina23.html', t: { es: 'Vitrina 13 · El Nuevo Testamento de Erasmo', en: 'Case 13 · Erasmus’ New Testament', fr: 'Vitrine 13 · Le Nouveau Testament d’Érasme', de: 'Vitrine 13 · Das Neue Testament des Erasmus', it: 'Vetrina 13 · Il Nuovo Testamento di Erasmo' } },
    { f: 'vitrina24.html', t: { es: 'Vitrina 14 · La Biblia de Lutero', en: 'Case 14 · Luther’s Bible', fr: 'Vitrine 14 · La Bible de Luther', de: 'Vitrine 14 · Die Lutherbibel', it: 'Vetrina 14 · La Bibbia di Lutero' } },
    { f: 'vitrina25.html', t: { es: 'Vitrina 15 · La vida de Cristo', en: 'Case 15 · The Life of Christ', fr: 'Vitrine 15 · La Vie du Christ', de: 'Vitrine 15 · Das Leben Christi', it: 'Vetrina 15 · La Vita di Cristo' } },
    { f: 'vitrina26.html', t: { es: 'Vitrina 15a · El Vita Christi de Montesino', en: 'Case 15a · Montesino’s Vita Christi', fr: 'Vitrine 15a · Le Vita Christi de Montesino', de: 'Vitrine 15a · Montesinos Vita Christi', it: 'Vetrina 15a · Il Vita Christi di Montesino' } },
    { f: 'vitrina27.html', t: { es: 'Vitrina 15b · La vida y los milagros de Jesucristo', en: 'Case 15b · The Life and Miracles of Jesus Christ', fr: 'Vitrine 15b · La vie et les miracles de Jésus-Christ', de: 'Vitrine 15b · Das Leben und die Wunder Jesu Christi', it: 'Vetrina 15b · La vita e i miracoli di Gesù Cristo' } },
    { f: 'vitrina28.html', t: { es: 'Vitrina 15c · La vida de nuestro Señor Jesucristo', en: 'Case 15c · The Life of Our Lord Jesus Christ', fr: 'Vitrine 15c · La vie de Notre Seigneur Jésus-Christ', de: 'Vitrine 15c · Das Leben unseres Herrn Jesus Christus', it: 'Vetrina 15c · La vita di Nostro Signore Gesù Cristo' } },
    { f: 'vitrina29.html', t: { es: 'Vitrina 16 · La English Hexapla', en: 'Case 16 · The English Hexapla', fr: 'Vitrine 16 · L’English Hexapla', de: 'Vitrine 16 · Die English Hexapla', it: 'Vetrina 16 · La English Hexapla' } },
    { f: 'vitrina30.html', t: { es: 'Vitrina 17a · El Nuevo Testamento de Enzinas', en: 'Case 17a · Enzinas’ New Testament', fr: 'Vitrine 17a · Le Nouveau Testament d’Enzinas', de: 'Vitrine 17a · Das Neue Testament des Enzinas', it: 'Vetrina 17a · Il Nuovo Testamento di Enzinas' } },
    { f: 'vitrina31.html', t: { es: 'Vitrina 17b · La Biblia de Ferrara', en: 'Case 17b · The Ferrara Bible', fr: 'Vitrine 17b · La Bible de Ferrare', de: 'Vitrine 17b · Die Bibel von Ferrara', it: 'Vetrina 17b · La Bibbia di Ferrara' } },
    { f: 'vitrina32.html', t: { es: 'Vitrina 17c · El Nuevo Testamento de Pérez de Pineda', en: 'Case 17c · Pérez de Pineda’s New Testament', fr: 'Vitrine 17c · Le Nouveau Testament de Pérez de Pineda', de: 'Vitrine 17c · Das Neue Testament von Pérez de Pineda', it: 'Vetrina 17c · Il Nuovo Testamento di Pérez de Pineda' } },
    { f: 'vitrina33.html', t: { es: 'Vitrina 17d · El Breviario romano', en: 'Case 17d · The Roman Breviary', fr: 'Vitrine 17d · Le Bréviaire romain', de: 'Vitrine 17d · Das Römische Brevier', it: 'Vetrina 17d · Il Breviario Romano' } },
    { f: 'vitrina34.html', t: { es: 'Vitrina 17e · Los Evangelios de Juan de Valdés', en: 'Case 17e · The Gospels of Juan de Valdés', fr: 'Vitrine 17e · Les Évangiles de Juan de Valdés', de: 'Vitrine 17e · Die Evangelien von Juan de Valdés', it: 'Vetrina 17e · I Vangeli di Juan de Valdés' } },
    { f: 'vitrina35.html', t: { es: 'Vitrina 18a · La Biblia del Oso', en: 'Case 18a · The Bear Bible', fr: 'Vitrine 18a · La Bible de l’Ours', de: 'Vitrine 18a · Die Bärenbibel', it: 'Vetrina 18a · La Bibbia dell’Orso' } },
    { f: 'vitrina36.html', t: { es: 'Vitrina 18b · La Biblia del Cántaro', en: 'Case 18b · The Cántaro Bible', fr: 'Vitrine 18b · La Bible du Cántaro', de: 'Vitrine 18b · Die Cántaro-Bibel', it: 'Vetrina 18b · La Bibbia del Cántaro' } },
    { f: 'vitrina37.html', t: { es: 'Vitrina 19 · La Biblia del padre Scío', en: 'Case 19 · Father Scío’s Bible', fr: 'Vitrine 19 · La Bible du père Scío', de: 'Vitrine 19 · Die Bibel des Pater Scío', it: 'Vetrina 19 · La Bibbia di padre Scío' } },
    { f: 'vitrina38.html', t: { es: 'Vitrina 20 · La Biblia de Torres Amat', en: 'Case 20 · Torres Amat’s Bible', fr: 'Vitrine 20 · La Bible de Torres Amat', de: 'Vitrine 20 · Die Bibel von Torres Amat', it: 'Vetrina 20 · La Bibbia di Torres Amat' } },
    { f: 'vitrina39.html', t: { es: 'Vitrina 21 · La Biblia de Vence de Gálvan', en: 'Case 21 · Vence de Gálvan’s Bible', fr: 'Vitrine 21 · La Bible de Vence de Gálvan', de: 'Vitrine 21 · Die Bibel von Vence de Gálvan', it: 'Vetrina 21 · La Bibbia di Vence de Gálvan' } },
    { f: 'vitrina40.html', t: { es: 'Vitrina 22 · La tierra santa', en: 'Case 22 · The Holy Land', fr: 'Vitrine 22 · La Terre sainte', de: 'Vitrine 22 · Das Heilige Land', it: 'Vetrina 22 · La Terra Santa' } },
    { f: 'vitrina41.html', t: { es: 'Vitrina 23 · Las seis del siglo veinte', en: 'Case 23 · The six of the twentieth century', fr: 'Vitrine 23 · Les six du XXe siècle', de: 'Vitrine 23 · Die Sechs des zwanzigsten Jahrhunderts', it: 'Vetrina 23 · Le sei del ventesimo secolo' } },
    { f: 'vitrina42.html', t: { es: 'Vitrina 24ab · El cobre y la madera', en: 'Case 24ab · Copper and wood', fr: 'Vitrine 24ab · Le cuivre et le bois', de: 'Vitrine 24ab · Kupfer und Holz', it: 'Vetrina 24ab · Rame e legno' } },
    { f: 'vitrina43.html', t: { es: 'Vitrina 25a · La línea Schnorr von Carolsfeld', en: 'Case 25a · The Schnorr von Carolsfeld line', fr: 'Vitrine 25a · La ligne Schnorr von Carolsfeld', de: 'Vitrine 25a · Die Linie Schnorr von Carolsfeld', it: 'Vetrina 25a · La linea Schnorr von Carolsfeld' } },
    { f: 'vitrina44.html', t: { es: 'Vitrina 25b · La mancha. Biblia de Salvador Dalí', en: 'Case 25b · The stain. Salvador Dalí Bible', fr: 'Vitrine 25b · La tache. Bible de Salvador Dalí', de: 'Vitrine 25b · Der Fleck. Salvador Dalís Bibel', it: 'Vetrina 25b · La macchia. Bibbia di Salvador Dalí' } },
    { f: 'vitrina45.html', t: { es: 'Librero 5 · Las lenguas de México', en: 'Shelf 5 · The languages of Mexico', fr: 'Étagère 5 · Les langues du Mexique', de: 'Regal 5 · Die Sprachen Mexikos', it: 'Scaffale 5 · Le lingue del Messico' } },
    { f: 'vitrina46.html', t: { es: 'Librero 6 · La sección infantil', en: 'Shelf 6 · The children’s section', fr: 'Étagère 6 · Le rayon enfants', de: 'Regal 6 · Der Kinderbereich', it: 'Scaffale 6 · La sezione bambini' } },
    { f: 'vitrina47.html', t: { es: 'Vitrina 26 · Las Biblias miniatura', en: 'Case 26 · The miniature Bibles', fr: 'Vitrine 26 · Les Bibles miniatures', de: 'Vitrine 26 · Die Miniaturbibeln', it: 'Vetrina 26 · Le Bibbie in miniatura' } },
    { f: 'vitrina48.html', t: { es: 'Mesa 1 · La Biblia en microfilm', en: 'Table 1 · The Bible on microfilm', fr: 'Table 1 · La Bible en microfilm', de: 'Tisch 1 · Die Bibel auf Mikrofilm', it: 'Tavolo 1 · La Bibbia in microfilm' } },
    { f: 'vitrina49.html', t: { es: 'Atril 1 · La Biblia en braille', en: 'Lectern 1 · The Bible in Braille', fr: 'Pupitre 1 · La Bible en braille', de: 'Pult 1 · Die Bibel in Braille', it: 'Leggio 1 · La Bibbia in braille' } },
    { f: 'vitrina50.html', t: { es: 'Vitrina 27a · Las Biblias de hoy', en: 'Case 27a · Today’s Bibles', fr: 'Vitrine 27a · Les Bibles d’aujourd’hui', de: 'Vitrine 27a · Die Bibeln von heute', it: 'Vetrina 27a · Le Bibbie di oggi' } },
    { f: 'vitrina51.html', t: { es: 'Vitrina 28 · Las lenguas del mundo', en: 'Case 28 · The languages of the world', fr: 'Vitrine 28 · Les langues du monde', de: 'Vitrine 28 · Die Sprachen der Welt', it: 'Vetrina 28 · Le lingue del mondo' } },
    { f: 'vitrina52.html', t: { es: 'Vitrina 29 · La versión APA', en: 'Case 29 · The APA version', fr: 'Vitrine 29 · La version APA', de: 'Vitrine 29 · Die APA-Version', it: 'Vetrina 29 · La versione APA' } },
    { f: 'vitrina53.html', t: { es: 'Vitrina 30 · Vacía', en: 'Case 30 · Empty', fr: 'Vitrine 30 · Vide', de: 'Vitrine 30 · Leer', it: 'Vetrina 30 · Vuota' } }
  ];

  var UI = {
    es: { indice: 'Inicio', ant: 'Anterior', sig: 'Siguiente', ir: 'Ir a', de: 'de' },
    en: { indice: 'Home', ant: 'Previous', sig: 'Next', ir: 'Go to', de: 'of' },
    fr: { indice: 'Accueil', ant: 'Précédent', sig: 'Suivant', ir: 'Aller à', de: 'sur' },
    de: { indice: 'Start', ant: 'Zurück', sig: 'Weiter', ir: 'Gehe zu', de: 'von' },
    it: { indice: 'Inizio', ant: 'Precedente', sig: 'Successivo', ir: 'Vai a', de: 'di' }
  };

  // Intentar detectar idioma activo desde el script de la página (si existe)
  var idiomaActual = 'es';
  try {
    if (typeof mhbIdioma === 'function') idiomaActual = mhbIdioma() || 'es';
  } catch (e) {}
  if (!UI[idiomaActual]) idiomaActual = 'es';

  function archivoActual() {
    var p = location.pathname;
    var name = p.substring(p.lastIndexOf('/') + 1) || 'index.html';
    if (!name || name === '/') name = 'index.html';
    return name;
  }

  function posicion() {
    var name = archivoActual();
    for (var i = 0; i < RUTAS.length; i++) {
      if (RUTAS[i].f === name) return i;
    }
    return 0;
  }

  function href(name) {
    // Siempre salimos por .html; Vercel con cleanUrls lo mostrará limpio
    return name;
  }

  function render() {
    var nav = $('mhb-nav');
    var barra = $('mhb-barra');
    var pos = $('mhb-pos');
    if (!nav) return;

    var idx = posicion();
    var u = UI[idiomaActual] || UI.es;
    var total = RUTAS.length - 1; // sin contar index.html

    var html = '';

    // Inicio
    var enInicio = idx === 0;
    html += '<a class="mhb-nav-btn" id="mhb-inicio" href="' + href(RUTAS[0].f) + '" aria-label="' + esc(u.indice) + '">' +
            '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v8h-5v-5h-2v5H6v-8H3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>' +
            '</a>';

    // Anterior
    if (idx > 0) {
      html += '<a class="mhb-nav-btn" id="mhb-ant" href="' + href(RUTAS[idx - 1].f) + '" aria-label="' + esc(u.ant) + '">‹</a>';
    } else {
      html += '<span class="mhb-nav-btn" id="mhb-ant" aria-disabled="true" aria-label="' + esc(u.ant) + '">‹</span>';
    }

    // Selector
    html += '<select class="mhb-nav-sel" id="mhb-sel" aria-label="' + esc(u.ir) + '">';
    for (var i = 0; i < RUTAS.length; i++) {
      var label = RUTAS[i].t[idiomaActual] || RUTAS[i].t.es;
      html += '<option value="' + i + '"' + (i === idx ? ' selected' : '') + '>' + esc(label) + '</option>';
    }
    html += '</select>';

    // Siguiente
    if (idx < RUTAS.length - 1) {
      html += '<a class="mhb-nav-btn" id="mhb-sig" href="' + href(RUTAS[idx + 1].f) + '" aria-label="' + esc(u.sig) + '">›</a>';
    } else {
      html += '<span class="mhb-nav-btn" id="mhb-sig" aria-disabled="true" aria-label="' + esc(u.sig) + '">›</span>';
    }

    // Contador (1/53 en vitrinas, 0 para index)
    var displayPos = enInicio ? '—' : (idx + '/' + total);
    html += '<span class="mhb-nav-pos" id="mhb-pos">' + displayPos + '</span>';

    nav.innerHTML = html;

    if (barra) {
      var pct = enInicio ? 0 : Math.round((idx / total) * 100);
      barra.style.width = pct + '%';
    }

    // Escuchar cambios en el selector
    var sel = $('mhb-sel');
    if (sel) {
      sel.onchange = function () {
        var target = parseInt(sel.value, 10);
        if (target === idx) return;
        location.href = href(RUTAS[target].f);
      };
    }
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Renderizar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
