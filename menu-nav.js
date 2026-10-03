(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };

  // Orden exacto de las 54 paradas (QR 0 .. 53)
  var RUTAS = [
  {
    f: "index.html",
    t: {
      "es": "Inicio",
      "en": "Home",
      "fr": "Accueil",
      "de": "Startseite",
      "it": "Inizio"
    }
  },
  {
    f: "vitrina1.html",
    t: {
      "es": "Librero 1 · Los soportes de la antigüedad",
      "en": "Shelf 1 · What the ancients wrote on",
      "fr": "Étagère 1 · Les supports de l'Antiquité",
      "de": "Regal 1 · Die Schriftträger der Antike",
      "it": "Scaffale 1 · I supporti dell'antichità"
    }
  },
  {
    f: "vitrina2.html",
    t: {
      "es": "Maqueta 1 · El Arca del Pacto",
      "en": "Model 1 · The Ark of the Covenant",
      "fr": "Maquette 1 · L'Arche d'Alliance",
      "de": "Modell 1 · Die Bundeslade",
      "it": "Modello 1 · L'Arca dell'Alleanza"
    }
  },
  {
    f: "vitrina3.html",
    t: {
      "es": "Maqueta 2 · El Tabernáculo",
      "en": "Model 2 · The Tabernacle",
      "fr": "Maquette 2 · Le Tabernacle",
      "de": "Modell 2 · Die Stiftshütte",
      "it": "Modello 2 · Il Tabernacolo"
    }
  },
  {
    f: "vitrina4.html",
    t: {
      "es": "Librero 2 · El Pergamino",
      "en": "Shelf 2 · Parchment",
      "fr": "Étagère 2 · Le Parchemin",
      "de": "Regal 2 · Das Pergament",
      "it": "Scaffale 2 · La Pergamena"
    }
  },
  {
    f: "vitrina5.html",
    t: {
      "es": "Vitrina 1 · La Torá",
      "en": "Case 1 · The Torah",
      "fr": "Vitrine 1 · La Torah",
      "de": "Vitrine 1 · Die Tora",
      "it": "Vetrina 1 · La Torà"
    }
  },
  {
    f: "vitrina6.html",
    t: {
      "es": "Vitrina 2a · El Tanaj y la tradición judía",
      "en": "Case 2a · The Tanakh and the Jewish tradition",
      "fr": "Vitrine 2a · Le Tanakh et la tradition juive",
      "de": "Vitrine 2a · Der Tanach und die jüdische Überlieferung",
      "it": "Vetrina 2a · Il Tanak e la tradizione ebraica"
    }
  },
  {
    f: "vitrina7.html",
    t: {
      "es": "Maqueta 3 · El Templo de Salomón",
      "en": "Model 3 · Solomon's Temple",
      "fr": "Maquette 3 · Le Temple de Salomon",
      "de": "Modell 3 · Der Tempel Salomos",
      "it": "Modello 3 · Il Tempio di Salomone"
    }
  },
  {
    f: "vitrina8.html",
    t: {
      "es": "Vitrina 3b · La Biblia de Jünemann",
      "en": "Case 3b · The Jünemann Bible",
      "fr": "Vitrine 3b · La Bible de Jünemann",
      "de": "Vitrine 3b · Die Jünemann-Bibel",
      "it": "Vetrina 3b · La Bibbia di Jünemann"
    }
  },
  {
    f: "vitrina9.html",
    t: {
      "es": "Vitrina 4 · La Hexapla de Orígenes",
      "en": "Case 4 · Origen's Hexapla",
      "fr": "Vitrine 4 · Les Hexaples d'Origène",
      "de": "Vitrine 4 · Die Hexapla des Origenes",
      "it": "Vetrina 4 · L'Esapla di Origene"
    }
  },
  {
    f: "vitrina10.html",
    t: {
      "es": "Vitrina 5a · El Nuevo Testamento en siríaco y la Peshitta",
      "en": "Case 5a · The New Testament in Syriac and the Peshitta",
      "fr": "Vitrine 5a · Le Nouveau Testament en syriaque et la Peshitta",
      "de": "Vitrine 5a · Das Neue Testament auf Syrisch und die Peschitta",
      "it": "Vetrina 5a · Il Nuovo Testamento in siriaco e la Peshitta"
    }
  },
  {
    f: "vitrina11.html",
    t: {
      "es": "Vitrina 5b · El Códice Amiatino",
      "en": "Case 5b · The Codex Amiatinus",
      "fr": "Vitrine 5b · Le Codex Amiatinus",
      "de": "Vitrine 5b · Der Codex Amiatinus",
      "it": "Vetrina 5b · Il Codice Amiatino"
    }
  },
  {
    f: "vitrina12.html",
    t: {
      "es": "Vitrina 6 · El Beato de Liébana",
      "en": "Case 6 · The Beatus of Liébana",
      "fr": "Vitrine 6 · Le Beatus de Liébana",
      "de": "Vitrine 6 · Der Beatus von Liébana",
      "it": "Vetrina 6 · Il Beato di Liébana"
    }
  },
  {
    f: "vitrina13.html",
    t: {
      "es": "Vitrina 7 · La Biblia de San Luis",
      "en": "Case 7 · The Bible of Saint Louis",
      "fr": "Vitrine 7 · La Bible de Saint Louis",
      "de": "Vitrine 7 · Die Bibel des heiligen Ludwig",
      "it": "Vetrina 7 · La Bibbia di San Luigi"
    }
  },
  {
    f: "vitrina14.html",
    t: {
      "es": "Librero 3a · La Biblia Alfonsina",
      "en": "Shelf 3a · The Alfonsine Bible",
      "fr": "Étagère 3a · La Bible alphonsine",
      "de": "Regal 3a · Die alfonsinische Bibel",
      "it": "Scaffale 3a · La Bibbia alfonsina"
    }
  },
  {
    f: "vitrina15.html",
    t: {
      "es": "Librero 3b · La Biblia del Duque de Alba",
      "en": "Shelf 3b · The Duke of Alba Bible",
      "fr": "Étagère 3b · La Bible du duc d'Albe",
      "de": "Regal 3b · Die Bibel des Herzogs von Alba",
      "it": "Scaffale 3b · La Bibbia del duca d'Alba"
    }
  },
  {
    f: "vitrina16.html",
    t: {
      "es": "Librero 4 · La Biblia Pauperum",
      "en": "Shelf 4 · The Biblia Pauperum",
      "fr": "Étagère 4 · La Biblia Pauperum",
      "de": "Regal 4 · Die Biblia Pauperum",
      "it": "Scaffale 4 · La Biblia Pauperum"
    }
  },
  {
    f: "vitrina17.html",
    t: {
      "es": "Vitrina 8 · El Salterio Anglocatalán",
      "en": "Case 8 · The Anglo-Catalan Psalter",
      "fr": "Vitrine 8 · Le Psautier anglo-catalan",
      "de": "Vitrine 8 · Der anglo-katalanische Psalter",
      "it": "Vetrina 8 · Il Salterio anglocatalano"
    }
  },
  {
    f: "vitrina18.html",
    t: {
      "es": "Vitrina 9 · La Biblia de Nápoles",
      "en": "Case 9 · The Naples Bible",
      "fr": "Vitrine 9 · La Bible de Naples",
      "de": "Vitrine 9 · Die Bibel von Neapel",
      "it": "Vetrina 9 · La Bibbia di Napoli"
    }
  },
  {
    f: "vitrina19.html",
    t: {
      "es": "Vitrina 10 · La Biblia de Gutenberg",
      "en": "Case 10 · The Gutenberg Bible",
      "fr": "Vitrine 10 · La Bible de Gutenberg",
      "de": "Vitrine 10 · Die Gutenberg-Bibel",
      "it": "Vetrina 10 · La Bibbia di Gutenberg"
    }
  },
  {
    f: "vitrina20.html",
    t: {
      "es": "Vitrina 11 · Las Grandes Horas de Ana de Bretaña",
      "en": "Case 11 · The Great Hours of Anne of Brittany",
      "fr": "Vitrine 11 · Les Grandes Heures d'Anne de Bretagne",
      "de": "Vitrine 11 · Die Großen Stunden der Anne de Bretagne",
      "it": "Vetrina 11 · Le Grandi Ore di Anna di Bretagna"
    }
  },
  {
    f: "vitrina21.html",
    t: {
      "es": "Vitrina 12 · La Biblia Políglota Complutense",
      "en": "Case 12 · The Complutensian Polyglot Bible",
      "fr": "Vitrine 12 · La Bible polyglotte d'Alcalá",
      "de": "Vitrine 12 · Die Complutensische Polyglotte",
      "it": "Vetrina 12 · La Bibbia Poliglotta Complutense"
    }
  },
  {
    f: "vitrina22.html",
    t: {
      "es": "Vitrina 13 · El Nuevo Testamento de Erasmo",
      "en": "Case 13 · Erasmus's New Testament",
      "fr": "Vitrine 13 · Le Nouveau Testament d'Érasme",
      "de": "Vitrine 13 · Das Neue Testament des Erasmus",
      "it": "Vetrina 13 · Il Nuovo Testamento di Erasmo"
    }
  },
  {
    f: "vitrina23.html",
    t: {
      "es": "Vitrina 14 · La Biblia de Lutero",
      "en": "Case 14 · Luther's Bible",
      "fr": "Vitrine 14 · La Bible de Luther",
      "de": "Vitrine 14 · Die Lutherbibel",
      "it": "Vetrina 14 · La Bibbia di Lutero"
    }
  },
  {
    f: "vitrina24.html",
    t: {
      "es": "Vitrina 15 · La vida de Cristo",
      "en": "Case 15 · The Life of Christ",
      "fr": "Vitrine 15 · La vie du Christ",
      "de": "Vitrine 15 · Das Leben Christi",
      "it": "Vetrina 15 · La vita di Cristo"
    }
  },
  {
    f: "vitrina25.html",
    t: {
      "es": "Vitrina 15a · El Vita Christi de Montesino",
      "en": "Case 15a · Montesino's Vita Christi",
      "fr": "Vitrine 15a · La Vita Christi de Montesino",
      "de": "Vitrine 15a · Die Vita Christi des Montesino",
      "it": "Vetrina 15a · La Vita Christi di Montesino"
    }
  },
  {
    f: "vitrina26.html",
    t: {
      "es": "Vitrina 15b · La Vida y los milagros de Jesucristo",
      "en": "Case 15b · The Life and Miracles of Jesus Christ",
      "fr": "Vitrine 15b · La Vie et les miracles de Jésus-Christ",
      "de": "Vitrine 15b · Das Leben und die Wunder Jesu Christi",
      "it": "Vetrina 15b · La Vita e i miracoli di Gesù Cristo"
    }
  },
  {
    f: "vitrina27.html",
    t: {
      "es": "Vitrina 15c · La Vida de Nuestro Señor Jesucristo",
      "en": "Case 15c · The Life of Our Lord Jesus Christ",
      "fr": "Vitrine 15c · La Vie de Notre-Seigneur Jésus-Christ",
      "de": "Vitrine 15c · Das Leben unseres Herrn Jesus Christus",
      "it": "Vetrina 15c · La Vita di Nostro Signore Gesù Cristo"
    }
  },
  {
    f: "vitrina28.html",
    t: {
      "es": "Vitrina 16 · La English Hexapla",
      "en": "Case 16 · The English Hexapla",
      "fr": "Vitrine 16 · L'English Hexapla",
      "de": "Vitrine 16 · Die English Hexapla",
      "it": "Vetrina 16 · L'English Hexapla"
    }
  },
  {
    f: "vitrina29.html",
    t: {
      "es": "Vitrina 17a · El Nuevo Testamento de Enzinas",
      "en": "Case 17a · Enzinas's New Testament",
      "fr": "Vitrine 17a · Le Nouveau Testament d'Enzinas",
      "de": "Vitrine 17a · Das Neue Testament des Enzinas",
      "it": "Vetrina 17a · Il Nuovo Testamento di Enzinas"
    }
  },
  {
    f: "vitrina30.html",
    t: {
      "es": "Vitrina 17b · La Biblia de Ferrara",
      "en": "Case 17b · The Ferrara Bible",
      "fr": "Vitrine 17b · La Bible de Ferrare",
      "de": "Vitrine 17b · Die Bibel von Ferrara",
      "it": "Vetrina 17b · La Bibbia di Ferrara"
    }
  },
  {
    f: "vitrina31.html",
    t: {
      "es": "Vitrina 17c · El Nuevo Testamento de Pérez de Pineda",
      "en": "Case 17c · Pérez de Pineda's New Testament",
      "fr": "Vitrine 17c · Le Nouveau Testament de Pérez de Pineda",
      "de": "Vitrine 17c · Das Neue Testament des Pérez de Pineda",
      "it": "Vetrina 17c · Il Nuovo Testamento di Pérez de Pineda"
    }
  },
  {
    f: "vitrina32.html",
    t: {
      "es": "Vitrina 17d · El Breviario Romano",
      "en": "Case 17d · The Roman Breviary",
      "fr": "Vitrine 17d · Le Bréviaire romain",
      "de": "Vitrine 17d · Das Römische Brevier",
      "it": "Vetrina 17d · Il Breviario Romano"
    }
  },
  {
    f: "vitrina33.html",
    t: {
      "es": "Vitrina 17e · Los Evangelios de Juan de Valdés",
      "en": "Case 17e · Juan de Valdés's Gospels",
      "fr": "Vitrine 17e · Les Évangiles de Juan de Valdés",
      "de": "Vitrine 17e · Die Evangelien des Juan de Valdés",
      "it": "Vetrina 17e · I Vangeli di Juan de Valdés"
    }
  },
  {
    f: "vitrina34.html",
    t: {
      "es": "Vitrina 18a · La Biblia del Oso",
      "en": "Case 18a · The Bear Bible",
      "fr": "Vitrine 18a · La Bible de l'Ours",
      "de": "Vitrine 18a · Die Bärenbibel",
      "it": "Vetrina 18a · La Bibbia dell'Orso"
    }
  },
  {
    f: "vitrina35.html",
    t: {
      "es": "Vitrina 18b · La Biblia del Cántaro",
      "en": "Case 18b · The Pitcher Bible",
      "fr": "Vitrine 18b · La Bible de la Cruche",
      "de": "Vitrine 18b · Die Krugbibel",
      "it": "Vetrina 18b · La Bibbia della Brocca"
    }
  },
  {
    f: "vitrina36.html",
    t: {
      "es": "Vitrina 19 · La Biblia del padre Scío",
      "en": "Case 19 · Father Scío's Bible",
      "fr": "Vitrine 19 · La Bible du père Scío",
      "de": "Vitrine 19 · Die Bibel des Paters Scío",
      "it": "Vetrina 19 · La Bibbia del padre Scío"
    }
  },
  {
    f: "vitrina37.html",
    t: {
      "es": "Vitrina 20 · La Biblia de Torres Amat",
      "en": "Case 20 · The Torres Amat Bible",
      "fr": "Vitrine 20 · La Bible de Torres Amat",
      "de": "Vitrine 20 · Die Bibel von Torres Amat",
      "it": "Vetrina 20 · La Bibbia di Torres Amat"
    }
  },
  {
    f: "vitrina38.html",
    t: {
      "es": "Vitrina 21 · La Biblia de Vence, de Galván",
      "en": "Case 21 · Galván's Vence Bible",
      "fr": "Vitrine 21 · La Bible de Vence, de Galván",
      "de": "Vitrine 21 · Die Vence-Bibel von Galván",
      "it": "Vetrina 21 · La Bibbia di Vence, di Galván"
    }
  },
  {
    f: "vitrina39.html",
    t: {
      "es": "Vitrina 22 · La Tierra Santa",
      "en": "Case 22 · The Holy Land",
      "fr": "Vitrine 22 · La Terre Sainte",
      "de": "Vitrine 22 · Das Heilige Land",
      "it": "Vetrina 22 · La Terra Santa"
    }
  },
  {
    f: "vitrina40.html",
    t: {
      "es": "Vitrina 23 · Las seis del siglo veinte",
      "en": "Case 23 · The six of the twentieth century",
      "fr": "Vitrine 23 · Les six du vingtième siècle",
      "de": "Vitrine 23 · Die sechs des zwanzigsten Jahrhunderts",
      "it": "Vetrina 23 · Le sei del Novecento"
    }
  },
  {
    f: "vitrina41.html",
    t: {
      "es": "Vitrina 24 a y b · El cobre y la madera",
      "en": "Case 24 a y b · Copper and wood",
      "fr": "Vitrine 24 a y b · Le cuivre et le bois",
      "de": "Vitrine 24 a y b · Kupfer und Holz",
      "it": "Vetrina 24 a y b · Il rame e il legno"
    }
  },
  {
    f: "vitrina42.html",
    t: {
      "es": "Vitrina 25a · La línea. Schnorr von Carolsfeld",
      "en": "Case 25a · The line. Schnorr von Carolsfeld",
      "fr": "Vitrine 25a · La ligne. Schnorr von Carolsfeld",
      "de": "Vitrine 25a · Die Linie. Schnorr von Carolsfeld",
      "it": "Vetrina 25a · La linea. Schnorr von Carolsfeld"
    }
  },
  {
    f: "vitrina43.html",
    t: {
      "es": "Vitrina 25b · La mancha. La Biblia de Dalí",
      "en": "Case 25b · The stain. Dalí's Bible",
      "fr": "Vitrine 25b · La tache. La Bible de Dalí",
      "de": "Vitrine 25b · Der Fleck. Die Dalí-Bibel",
      "it": "Vetrina 25b · La macchia. La Bibbia di Dalí"
    }
  },
  {
    f: "vitrina44.html",
    t: {
      "es": "Librero 5 · Las lenguas de México",
      "en": "Shelf 5 · The languages of Mexico",
      "fr": "Étagère 5 · Les langues du Mexique",
      "de": "Regal 5 · Die Sprachen Mexikos",
      "it": "Scaffale 5 · Le lingue del Messico"
    }
  },
  {
    f: "vitrina45.html",
    t: {
      "es": "Librero 6 · La sección infantil",
      "en": "Shelf 6 · The children's section",
      "fr": "Étagère 6 · La section enfantine",
      "de": "Regal 6 · Die Kinderabteilung",
      "it": "Scaffale 6 · La sezione per bambini"
    }
  },
  {
    f: "vitrina46.html",
    t: {
      "es": "Vitrina 26 · Las Biblias miniatura",
      "en": "Case 26 · Miniature Bibles",
      "fr": "Vitrine 26 · Les Bibles miniatures",
      "de": "Vitrine 26 · Die Miniaturbibeln",
      "it": "Vetrina 26 · Le Bibbie in miniatura"
    }
  },
  {
    f: "vitrina47.html",
    t: {
      "es": "Mesa 1 · La Biblia en microfilm",
      "en": "Table 1 · The Bible on microfilm",
      "fr": "Table 1 · La Bible sur microfilm",
      "de": "Tisch 1 · Die Bibel auf Mikrofilm",
      "it": "Tavolo 1 · La Bibbia su microfilm"
    }
  },
  {
    f: "vitrina48.html",
    t: {
      "es": "Atril 1 · La Biblia en Braille",
      "en": "Lectern 1 · The Bible in Braille",
      "fr": "Pupitre 1 · La Bible en braille",
      "de": "Pult 1 · Die Bibel in Blindenschrift",
      "it": "Leggio 1 · La Bibbia in braille"
    }
  },
  {
    f: "vitrina49.html",
    t: {
      "es": "Librero 7 · Las Biblias digitales",
      "en": "Shelf 7 · The digital Bibles",
      "fr": "Étagère 7 · Les Bibles numériques",
      "de": "Regal 7 · Die digitalen Bibeln",
      "it": "Scaffale 7 · Le Bibbie digitali"
    }
  },
  {
    f: "vitrina50.html",
    t: {
      "es": "Vitrina 27a · Las Biblias de hoy",
      "en": "Case 27a · Today's Bibles",
      "fr": "Vitrine 27a · Les Bibles d'aujourd'hui",
      "de": "Vitrine 27a · Die Bibeln von heute",
      "it": "Vetrina 27a · Le Bibbie di oggi"
    }
  },
  {
    f: "vitrina51.html",
    t: {
      "es": "Vitrina 28 · Las lenguas del mundo",
      "en": "Case 28 · The languages of the world",
      "fr": "Vitrine 28 · Les langues du monde",
      "de": "Vitrine 28 · Die Sprachen der Welt",
      "it": "Vetrina 28 · Le lingue del mondo"
    }
  },
  {
    f: "vitrina52.html",
    t: {
      "es": "Vitrina 29 · La versión APA",
      "en": "Case 29 · The APA version",
      "fr": "Vitrine 29 · La version APA",
      "de": "Vitrine 29 · Die APA-Fassung",
      "it": "Vetrina 29 · La versione APA"
    }
  },
  {
    f: "vitrina53.html",
    t: {
      "es": "Vitrina 30 · La vitrina vacía",
      "en": "Case 30 · The empty case",
      "fr": "Vitrine 30 · La vitrine vide",
      "de": "Vitrine 30 · Die leere Vitrine",
      "it": "Vetrina 30 · La vetrina vuota"
    }
  }
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
      // Etiquetas cortas para el selector; "Inicio" conserva su nombre largo
      var label;
      if (i === 0) {
        label = RUTAS[i].t[idiomaActual] || RUTAS[i].t.es;
      } else {
        var partes = (RUTAS[i].t.es).split(' · ');
        var tipo = partes[0]; // p.ej. "Vitrina 4b"
        var num = String(i);
        label = num + ' ' + tipo;
      }
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
