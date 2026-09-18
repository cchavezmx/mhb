/* Lógica común de la audioguía: idiomas, lectura en voz alta y navegación. */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var LLAVE = "mhb-idioma";
  var audio = null;

  var NAVUI = {
    es: { indice: "Índice", ant: "Anterior", sig: "Siguiente", ir: "Ir a la vitrina", de: "de" },
    en: { indice: "Index", ant: "Previous", sig: "Next", ir: "Go to case", de: "of" },
    fr: { indice: "Index", ant: "Précédente", sig: "Suivante", ir: "Aller à la vitrine", de: "sur" },
    de: { indice: "Übersicht", ant: "Zurück", sig: "Weiter", ir: "Zur Vitrine", de: "von" },
    it: { indice: "Indice", ant: "Precedente", sig: "Successiva", ir: "Vai alla vetrina", de: "di" }
  };

  var actual = "es";
  try { var g = localStorage.getItem(LLAVE); if (g && GUIA[g]) actual = g; } catch (e) {}
  if (!GUIA[actual]) actual = Object.keys(GUIA)[0];

  var numero = document.body.getAttribute("data-vitrina");
  numero = numero ? parseInt(numero, 10) : null;
  var lista = (typeof VITRINAS !== "undefined") ? VITRINAS : null;

  function idioma() { return actual; }
  window.mhbIdioma = idioma;

  function pintarIdiomas() {
    var cont = $("idiomas");
    if (!cont) return;
    cont.innerHTML = "";
    Object.keys(GUIA).forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = GUIA[k].nombre;
      b.setAttribute("aria-pressed", k === actual);
      b.onclick = function () {
        detener();
        actual = k;
        try { localStorage.setItem(LLAVE, k); } catch (e) {}
        pintar();
      };
      cont.appendChild(b);
    });
  }

  function pintarNav() {
    if (!numero || !lista) return;
    var u = NAVUI[actual] || NAVUI.es;
    var ant = $("nav-ant"), sig = $("nav-sig"), sel = $("nav-sel"),
        pos = $("nav-pos"), barra = $("barra"), ini = $("nav-inicio");
    var i = numero - 1, total = lista.length;
    if (ini) ini.setAttribute("aria-label", u.indice);
    if (ant) {
      ant.textContent = "‹";
      ant.setAttribute("aria-label", u.ant);
      if (i > 0) { ant.href = lista[i - 1].f; ant.removeAttribute("aria-disabled"); }
      else { ant.removeAttribute("href"); ant.setAttribute("aria-disabled", "true"); }
    }
    if (sig) {
      sig.textContent = "›";
      sig.setAttribute("aria-label", u.sig);
      if (i < total - 1) { sig.href = lista[i + 1].f; sig.removeAttribute("aria-disabled"); }
      else { sig.removeAttribute("href"); sig.setAttribute("aria-disabled", "true"); }
    }
    if (pos) pos.textContent = numero + " " + u.de + " " + total;
    if (barra) barra.style.width = Math.round((numero / total) * 100) + "%";
    if (sel) {
      sel.setAttribute("aria-label", u.ir);
      sel.innerHTML = "";
      lista.forEach(function (v) {
        var o = document.createElement("option");
        o.value = v.f;
        o.textContent = v.n + " · " + (v.t[actual] || v.t.es);
        if (v.n === numero) o.selected = true;
        sel.appendChild(o);
      });
      sel.onchange = function () { location.href = sel.value; };
    }
  }

  function pintar() {
    var g = GUIA[actual];
    document.documentElement.lang = actual;
    var set = function (id, txt) { var el = $(id); if (el) el.textContent = txt; };
    set("ui-sala", g.ui.sala);
    set("ui-titulo", g.ui.titulo);
    set("ui-siglo", g.ui.siglo);
    set("ui-play", g.ui.play);
    set("ui-stop", g.ui.stop);
    set("ui-pie", g.ui.pie);
    set("ui-museo", g.ui.pie);
    if ($("ui-aviso")) $("ui-aviso").hidden = true;
    var texto = $("texto");
    if (texto) {
      texto.innerHTML = "";
      g.t.forEach(function (p, i) {
        var el = document.createElement("p");
        el.className = "parrafo"; el.id = "p" + i; el.textContent = p;
        texto.appendChild(el);
      });
    }
    pintarIdiomas();
    pintarNav();
    document.dispatchEvent(new CustomEvent("mhb:idioma", { detail: actual }));
  }

  function marcar(i) {
    var previos = document.querySelectorAll(".parrafo.sonando");
    for (var k = 0; k < previos.length; k++) previos[k].classList.remove("sonando");
    if (i >= 0) { var el = $("p" + i); if (el) el.classList.add("sonando"); }
  }

  function detener() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (audio) { audio.pause(); audio = null; }
    marcar(-1);
    if ($("btn-stop")) $("btn-stop").hidden = true;
    if ($("btn-play")) $("btn-play").hidden = false;
  }

  /* Preferencias de voz: primero la región (México), luego el timbre masculino. */
  var REGION = { es: ["es-MX", "es-US", "es-419", "es"], en: ["en-US", "en-GB", "en"], fr: ["fr-FR", "fr"], de: ["de-DE", "de"], it: ["it-IT", "it"] };
  var HOMBRES = ["juan", "jorge", "diego", "carlos", "miguel", "male", "hombre", "masculino", "alex", "aaron", "daniel", "fred", "thomas", "nicolas", "mathieu", "markus", "yannick", "hans", "stefan", "luca", "federico", "cosimo", "alessio"];
  var MUJERES = ["paulina", "monica", "mónica", "angelica", "angélica", "esperanza", "marisol", "samantha", "karen", "moira", "tessa", "amelie", "amélie", "audrey", "anna", "petra", "katja", "alice", "elsa", "female", "mujer", "femenino"];

  function elegirVoz(codigo) {
    var vs = (window.speechSynthesis ? speechSynthesis.getVoices() : []);
    if (!vs.length) return null;
    var base = codigo.slice(0, 2);
    var regs = REGION[base] || [base];
    for (var r = 0; r < regs.length; r++) {
      var reg = regs[r];
      var cand = vs.filter(function (v) { return v.lang.replace("_", "-").toLowerCase().indexOf(reg.toLowerCase()) === 0; });
      if (!cand.length) continue;
      var h = cand.find(function (v) { return HOMBRES.some(function (n) { return v.name.toLowerCase().indexOf(n) >= 0; }); });
      if (h) return h;
      var neutra = cand.find(function (v) { return !MUJERES.some(function (n) { return v.name.toLowerCase().indexOf(n) >= 0; }); });
      return neutra || cand[0];
    }
    return null;
  }

  function hayVoz(codigo) {
    if (!window.speechSynthesis) return false;
    var vs = speechSynthesis.getVoices();
    if (!vs.length) return true;
    return vs.some(function (v) { return v.lang.slice(0, 2) === codigo.slice(0, 2); });
  }

  function escuchar() {
    var g = GUIA[actual];
    detener();
    $("btn-play").hidden = true;
    $("btn-stop").hidden = false;
    if (typeof GRABACIONES !== "undefined" && GRABACIONES[actual]) {
      audio = new Audio(GRABACIONES[actual]);
      audio.onended = detener;
      audio.play();
      return;
    }
    if (!window.speechSynthesis || !hayVoz(g.voz)) {
      if ($("ui-aviso")) { $("ui-aviso").textContent = g.ui.aviso; $("ui-aviso").hidden = false; }
      detener();
      return;
    }
    var vozElegida = elegirVoz(g.voz);
    g.t.forEach(function (p, i) {
      var u = new SpeechSynthesisUtterance(p);
      u.lang = g.voz; u.rate = 0.92;
      if (vozElegida) u.voice = vozElegida;
      u.onstart = function () { marcar(i); };
      if (i === g.t.length - 1) u.onend = detener;
      speechSynthesis.speak(u);
    });
  }

  if ($("btn-play")) $("btn-play").onclick = escuchar;
  if ($("btn-stop")) $("btn-stop").onclick = detener;
  if (window.speechSynthesis) speechSynthesis.onvoiceschanged = function () {};
  pintar();
})();
