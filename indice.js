/* Índice: recorridos, buscador y plano navegable de las 32 vitrinas. */
(function () {
  var UI = {
    es: { recorridos: "Elija un recorrido", todas: "Plano · las 32 vitrinas", buscar: "Buscar por nombre o número",
      vacio: "No hay vitrinas con ese nombre.", min: "min", h: "h", vitrinas: "vitrinas",
      r: { completo: ["Recorrido completo", "32 vitrinas · 1 h"], corto: ["Recorrido corto", "6 vitrinas · 15 min"], sept: ["Recorrido de septiembre", "6 vitrinas · 15 min"] },
      g: ["El texto antiguo y sus lenguas", "El libro copiado a mano", "La imprenta", "La Biblia en español", "América y México", "El siglo XX", "Hoy: lenguas y lectores"] },
    en: { recorridos: "Choose a tour", todas: "Map · all thirty-two cases", buscar: "Search by name or number",
      vacio: "No cases match that name.", min: "min", h: "h", vitrinas: "cases",
      r: { completo: ["Full tour", "32 cases · 1 h"], corto: ["Short tour", "6 cases · 15 min"], sept: ["September tour", "6 cases · 15 min"] },
      g: ["The ancient text and its languages", "The book copied by hand", "Printing", "The Bible in Spanish", "The Americas and Mexico", "The twentieth century", "Today: languages and readers"] },
    fr: { recorridos: "Choisissez un parcours", todas: "Plan · les trente-deux vitrines", buscar: "Chercher par nom ou numéro",
      vacio: "Aucune vitrine ne correspond.", min: "min", h: "h", vitrinas: "vitrines",
      r: { completo: ["Parcours complet", "32 vitrines · 1 h"], corto: ["Parcours court", "6 vitrines · 15 min"], sept: ["Parcours de septembre", "6 vitrines · 15 min"] },
      g: ["Le texte ancien et ses langues", "Le livre copié à la main", "L'imprimerie", "La Bible en espagnol", "Les Amériques et le Mexique", "Le XXe siècle", "Aujourd'hui : langues et lecteurs"] },
    de: { recorridos: "Wählen Sie einen Rundgang", todas: "Plan · alle zweiunddreißig Vitrinen", buscar: "Nach Name oder Nummer suchen",
      vacio: "Keine Vitrine gefunden.", min: "Min.", h: "Std.", vitrinas: "Vitrinen",
      r: { completo: ["Vollständiger Rundgang", "32 Vitrinen · 1 Std."], corto: ["Kurzer Rundgang", "6 Vitrinen · 15 Min."], sept: ["September-Rundgang", "6 Vitrinen · 15 Min."] },
      g: ["Der alte Text und seine Sprachen", "Das handgeschriebene Buch", "Der Buchdruck", "Die Bibel auf Spanisch", "Amerika und Mexiko", "Das 20. Jahrhundert", "Heute: Sprachen und Leser"] },
    it: { recorridos: "Scelga un percorso", todas: "Pianta · le trentadue vetrine", buscar: "Cerca per nome o numero",
      vacio: "Nessuna vetrina corrisponde.", min: "min", h: "h", vitrinas: "vetrine",
      r: { completo: ["Percorso completo", "32 vetrine · 1 h"], corto: ["Percorso breve", "6 vetrine · 15 min"], sept: ["Percorso di settembre", "6 vetrine · 15 min"] },
      g: ["Il testo antico e le sue lingue", "Il libro copiato a mano", "La stampa", "La Bibbia in spagnolo", "America e Messico", "Il Novecento", "Oggi: lingue e lettori"] }
  };

  var GRUPOS = [[1, 4], [5, 7], [8, 13], [14, 19], [20, 23], [24, 27], [28, 32]];
  var RECORRIDOS = { completo: null, corto: [5, 8, 18, 22, 28, 32], sept: [20, 21, 22, 24, 28, 32] };
  var activo = null;
  var filtro = "";

  var $ = function (id) { return document.getElementById(id); };

  function lang() {
    var l = (window.mhbIdioma ? window.mhbIdioma() : "es");
    return UI[l] ? l : "es";
  }

  function pintar() {
    var u = UI[lang()], l = lang();
    $("t-recorridos").textContent = u.recorridos;
    $("t-todas").textContent = u.todas;
    $("q").placeholder = u.buscar;
    $("q").setAttribute("aria-label", u.buscar);

    var cont = $("recorridos");
    cont.innerHTML = "";
    ["completo", "corto", "sept"].forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "recorrido";
      b.setAttribute("aria-pressed", activo === k);
      b.innerHTML = "<b></b><span></span>";
      b.querySelector("b").textContent = u.r[k][0];
      b.querySelector("span").textContent = u.r[k][1];
      b.onclick = function () { activo = (activo === k ? null : k); pintar(); };
      cont.appendChild(b);
    });

    var plano = $("plano");
    plano.innerHTML = "";
    var set = RECORRIDOS[activo] || null;
    var q = filtro.trim().toLowerCase();
    var visibles = 0;

    GRUPOS.forEach(function (rango, gi) {
      var g = document.createElement("section");
      g.className = "grupo";
      var h = document.createElement("h3");
      h.textContent = u.g[gi];
      g.appendChild(h);
      var fichas = document.createElement("div");
      fichas.className = "fichas";
      var enGrupo = 0;

      VITRINAS.filter(function (v) { return v.n >= rango[0] && v.n <= rango[1]; }).forEach(function (v) {
        var titulo = v.t[l] || v.t.es;
        if (q && titulo.toLowerCase().indexOf(q) < 0 && String(v.n).indexOf(q) < 0) return;
        var a = document.createElement("a");
        a.className = "ficha" + (set && set.indexOf(v.n) < 0 ? " apagada" : "");
        a.href = v.f;
        a.innerHTML = '<span class="n"></span><span class="tt"></span>';
        a.querySelector(".n").textContent = v.n;
        a.querySelector(".tt").textContent = titulo;
        fichas.appendChild(a);
        enGrupo++; visibles++;
      });

      if (!enGrupo) return;
      g.appendChild(fichas);
      plano.appendChild(g);
    });

    $("vacio").hidden = visibles > 0;
    $("vacio").textContent = u.vacio;
  }

  $("q").addEventListener("input", function (e) { filtro = e.target.value; pintar(); });
  document.addEventListener("mhb:idioma", pintar);
  pintar();
})();
