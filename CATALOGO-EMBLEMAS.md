# Catálogo de emblemas — Museo de Historia de la Biblia

Referencia para generar los 33 emblemas en SVG. Uno por página: 32 vitrinas más la portada.

## 1. Contrato técnico

Cualquier SVG que no cumpla esto se va a ver mal o no se va a ver. No es negociable:

| Requisito                  | Valor                                                         | Por qué                                                                                                                               |
| -------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `viewBox`                  | `0 0 64 64`                                                   | El contenedor `.emblema` es de 64×64 px. Usa siempre este, cuadrado.                                                                  |
| Color                      | `currentColor`, **nunca** un color fijo                       | El CSS inyecta el dorado `--acento` (`#A8832C`). Si el SVG trae `fill="#A8832C"` escrito a mano, deja de responder a cambios de tema. |
| Atributos `width`/`height` | **No los pongas**                                             | El CSS ya fuerza `width:100%; height:100%`. Si vienen en el SVG, estorban.                                                            |
| Grosor de trazo            | 2 a 4 unidades                                                | Se dibuja a 64 px sobre fondo oscuro. Menos de 2 desaparece.                                                                          |
| Fondo                      | Ninguno                                                       | Va sobre `--cabecera` (`#2B2A28`). Un `<rect>` de fondo blanco arruina el encabezado.                                                 |
| Prohibido                  | `<image>`, `<filter>`, gradientes, máscaras, fuentes externas | Rompen el estilo plano y algunos no cargan desde `file://`.                                                                           |
| Prohibido                  | `<script>`, `onload`, `onclick`                               | Es señalización de museo; nada de código en los recursos.                                                                             |
| Accesibilidad              | El `<div class="emblema">` ya lleva `aria-hidden="true"`      | Es decorativo. No le pongas `<title>` ni `alt`.                                                                                       |

Excepción: las vitrinas **24** y **26** usan color a propósito (cada barra es de un color distinto). Si las rehaces, puedes conservar colores literales ahí.

### Esqueleto válido

```html
<div aria-hidden="true" class="emblema">
  <svg aria-hidden="true" viewBox="0 0 64 64">
    <path d="…" fill="currentColor" />
    <path d="…" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  </svg>
</div>
```

## 2. Prompt base para el generador

```
Diseña un icono SVG plano, monocromo y minimalista, estilo sello o grabado editorial.
Requisitos estrictos:
- viewBox="0 0 64 64", sin atributos width ni height
- un solo color: usa literalmente currentColor en fill y stroke
- sin fondo, sin gradientes, sin filtros, sin <image>, sin <text>, sin script
- stroke-width entre 2 y 4; formas simples, legibles a 64 px
- se verá en dorado sobre fondo café muy oscuro
Motivo: <pega aquí la columna «Motivo para el SVG»>
```

Evita `<text>`: la fuente no viaja con el SVG y en otra máquina se sustituye por otra.
Las vitrinas 3 y 29 hoy dependen de texto — si las rehaces, conviértelas en trazos.

## 3. Las 33 páginas

|  Nº | Título                                     | Subtítulo                                          | Emblema hoy                                | Motivo para el SVG                                                                        |
| --: | ------------------------------------------ | -------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|   — | **Bienvenida** (portada)                   | Treinta y dos vitrinas · tres recorridos           | SVG — dos tablas de la ley                 | Las dos tablas de la ley, juntas.                                                         |
|   1 | **Los soportes de la antigüedad**          | Papiro, pergamino y el nacimiento del códice       | CSS — un rollo y dos hojas sueltas         | Rollo de papiro abierto junto a un códice de hojas cosidas: el paso del volumen al libro. |
|   2 | **El Tanaj y la tradición judía**          | Torá, Tanaj, Talmud y Midrash                      | SVG — rollo con renglones                  | Rollo de la Torá con sus dos ejes de madera (atzei jayim).                                |
|   3 | **La Septuaginta**                         | Alejandría, siglo III a.C. · la primera traducción | SVG — el numeral griego Ο′ (70)            | Los setenta traductores: el numeral Ο′, o setenta trazos en formación.                    |
|   4 | **La Peshitta**                            | La Biblia siríaca · siglos II al V                 | SVG — renglones y un disco                 | Renglones en escritura siríaca estrangelá, de derecha a izquierda.                        |
|   5 | **El Beato de Liébana**                    | Comentario al Apocalipsis, año 776                 | CSS — franjas de color                     | Las bandas cromáticas mozárabes de las miniaturas del Beato.                              |
|   6 | **La Biblia de San Luis**                  | París, 1226–1234 · tres tomos                      | CSS — retícula 2×4 de medallones           | Medallones pareados de una Biblia moralizada.                                             |
|   7 | **La Biblia de Nápoles**                   | Nápoles, hacia 1340–1350                           | CSS — flor de lis                          | Flor de lis angevina de la corte de Nápoles.                                              |
|   8 | **La Biblia de Gutenberg y la Pauperum**   | Maguncia, 1455 · la Biblia de 42 líneas            | CSS — página a dos columnas                | Página a dos columnas con 42 renglones: la B42.                                           |
|   9 | **Las Grandes Horas de Ana de Bretaña**    | Tours, 1503–1508 · Jean Bourdichon                 | SVG — rama con hojas                       | Rama botánica de los márgenes floreados de Bourdichon.                                    |
|  10 | **La Biblia Políglota Complutense**        | Alcalá de Henares, 1514–1517 · seis tomos          | CSS — tres columnas                        | Tres columnas paralelas: hebreo, latín y griego enfrentados.                              |
|  11 | **El Nuevo Testamento de Erasmo**          | Basilea, 1516 · el Textus Receptus                 | CSS — dos bloques enfrentados              | Doble columna griego–latín, cara a cara.                                                  |
|  12 | **La Biblia de Lutero**                    | Wittenberg, 1522–1534                              | SVG — rosa de Lutero                       | La Rosa de Lutero: corazón con cruz sobre una rosa, dentro de un círculo.                 |
|  13 | **La English Hexapla**                     | Londres, 1841 · seis versiones inglesas            | CSS — una línea griega sobre seis celdas   | Una línea griega encabezando seis franjas: las seis versiones inglesas.                   |
|  14 | **El Vita Christi de Montesino**           | Sevilla, Cromberger, 1531 · tercera parte          | CSS — barras verticales                    | Tipos móviles de plomo vistos de canto.                                                   |
|  15 | **El Nuevo Testamento de Enzinas**         | Amberes, 1543 · el primero en castellano           | SVG — corona                               | La corona imperial de Carlos V, a quien Enzinas entregó el libro en persona.              |
|  16 | **La Biblia de Ferrara**                   | Ferrara, 1553 · el Antiguo Testamento sefardí      | SVG — estrella de seis puntas              | Estrella de David formada por dos triángulos entrelazados.                                |
|  17 | **El Nuevo Testamento de Pérez de Pineda** | Ginebra, 1556 · con pie de imprenta falso          | SVG — barril                               | El tonel: los ejemplares entraron de contrabando a España escondidos en barricas de vino. |
|  18 | **La Biblia del Oso**                      | Basilea, 1569 · Casiodoro de Reina                 | CSS — retícula 3×3 tipo panal              | El oso del impresor Apiarius hurgando en un panal de miel.                                |
|  19 | **La Biblia del Cántaro**                  | Ámsterdam, 1602 · Cipriano de Valera               | SVG — cántaro                              | El cántaro que riega el árbol, emblema de Cipriano de Valera.                             |
|  20 | **La Biblia del Padre Scío**               | Valencia, 1790–1793 · primera edición              | CSS — caja a dos columnas                  | Texto bilingüe latín–castellano en columnas enfrentadas.                                  |
|  21 | **La Biblia de Torres Amat**               | Madrid, 1823–1825 · nueve tomos                    | CSS — nueve barras de distinta altura      | Nueve lomos desiguales alineados en un estante.                                           |
|  22 | **La Biblia de Vence, de Galván**          | México, 1831–1833 · veinticinco tomos              | SVG — tres bloques (clase «aguila»)        | El águila del escudo mexicano: la primera Biblia completa impresa en México.              |
|  23 | **Los grabados: Schnorr y Doré**           | Uguet 1878 · Doré 1866                             | CSS — dos estampas, una clara y otra densa | Dos grabados contrastados: el trazo limpio de Schnorr frente al rayado denso de Doré.     |
|  24 | **Las seis del siglo veinte**              | De Nácar-Colunga a Schökel · 1944-1975             | CSS — seis barras de colores               | Seis lomos de colores distintos, uno por versión.                                         |
|  25 | **La Biblia de Dalí**                      | Milán, 1964 · ciento cinco acuarelas               | SVG — manchas circulares translúcidas      | Manchas de acuarela superpuestas, al modo de Dalí.                                        |
|  26 | **Las Biblias de hoy**                     | Reina-Valera · las que se ciñen · las que explican | CSS — tres barras de colores               | Tres familias de Biblias actuales, una al lado de otra.                                   |
|  27 | **La Biblia en Braille**                   | Seis puntos · unos cuarenta volúmenes              | CSS — seis puntos en rejilla 2×3           | Celda braille de seis puntos, con los altos en relieve.                                   |
|  28 | **Las lenguas de México**                  | Cincuenta y seis variantes lingüísticas            | SVG — greca escalonada                     | Greca prehispánica escalonada, en cenefa.                                                 |
|  29 | **Las lenguas del mundo**                  | Cincuenta lenguas · nueve alfabetos                | CSS — caracteres A Ω א Я 中 あ 한 ع        | Mosaico de caracteres de nueve alfabetos distintos.                                       |
|  30 | **Las Biblias miniatura**                  | De la Biblia de pulga al microscopio               | CSS — tres rectángulos decrecientes        | Tres libros en escala decreciente, hasta el tamaño de una uña.                            |
|  31 | **La sección infantil**                    | La primera Biblia de casi todos                    | SVG — arcoíris de tres arcos               | Arcoíris sobre el arca: la primera Biblia de casi todos.                                  |
|  32 | **La versión APA**                         | Amplificada, Parafraseada y Armonizada · 2026      | SVG — eslabones enlazados                  | Tres eslabones unidos: amplificar, parafrasear, armonizar.                                |

### Archivos

|  Nº | Archivo                                    |
| --: | ------------------------------------------ |
|   — | `index.html`                               |
|   1 | `mhb-vitrina1-soportes.html`               |
|   2 | `mhb-vitrina2-tanaj.html`                  |
|   3 | `mhb-vitrina3-septuaginta.html`            |
|   4 | `mhb-vitrina4-peshitta.html`               |
|   5 | `mhb-vitrina5-beato-de-liebana.html`       |
|   6 | `mhb-vitrina6-biblia-de-san-luis.html`     |
|   7 | `mhb-vitrina7-biblia-de-napoles.html`      |
|   8 | `mhb-vitrina8-biblia-de-gutenberg.html`    |
|   9 | `mhb-vitrina9-ana-de-bretana.html`         |
|  10 | `mhb-vitrina10-poliglota-complutense.html` |
|  11 | `mhb-vitrina11-textus-receptus.html`       |
|  12 | `mhb-vitrina12-biblia-de-lutero.html`      |
|  13 | `mhb-vitrina13-english-hexapla.html`       |
|  14 | `mhb-vitrina14-vita-christi.html`          |
|  15 | `mhb-vitrina15-enzinas.html`               |
|  16 | `mhb-vitrina16-biblia-de-ferrara.html`     |
|  17 | `mhb-vitrina17-perez-de-pineda.html`       |
|  18 | `mhb-vitrina18-biblia-del-oso.html`        |
|  19 | `mhb-vitrina19-biblia-del-cantaro.html`    |
|  20 | `mhb-vitrina20-biblia-de-scio.html`        |
|  21 | `mhb-vitrina21-torres-amat.html`           |
|  22 | `mhb-vitrina22-vence-de-galvan.html`       |
|  23 | `mhb-vitrina23-grabados.html`              |
|  24 | `mhb-vitrina24-siglo-xx.html`              |
|  25 | `mhb-vitrina25-biblia-de-dali.html`        |
|  26 | `mhb-vitrina26-biblias-de-hoy.html`        |
|  27 | `mhb-vitrina27-braille.html`               |
|  28 | `mhb-vitrina28-lenguas-de-mexico.html`     |
|  29 | `mhb-vitrina29-lenguas-del-mundo.html`     |
|  30 | `mhb-vitrina30-biblias-miniatura.html`     |
|  31 | `mhb-vitrina31-seccion-infantil.html`      |
|  32 | `mhb-vitrina32-version-apa.html`           |

## 4. Cómo instalarlos

Los emblemas viven **dentro** de cada HTML, no en archivos sueltos. Para cambiar uno:

1. Busca en la página el bloque `<div aria-hidden="true" class="emblema">`.
2. Sustituye su contenido por el `<svg>` nuevo, conservando el `<div>` que lo envuelve.
3. **Si esa vitrina estaba dibujada con CSS** (ver la columna «Emblema hoy»), borra también su regla
   en el `<style>` de esa misma página. Si no, queda CSS muerto acumulándose.

Son 18 páginas con emblema CSS y 14 con SVG. Las 18 de CSS requieren el paso 3.

Conviene dejarlos en línea y no como archivos `.svg` sueltos: así el sitio sigue
cargando 33 páginas con solo dos peticiones de imagen, que es parte de por qué va rápido.

## 5. Antes de dar por bueno un SVG

Los generadores suelen entregar SVG con basura: rutas de miles de puntos, colores fijos,
mapas de bits incrustados en base64, o capas de Illustrator vacías. Revisa:

- [ ] `viewBox="0 0 64 64"` y sin `width`/`height`
- [ ] Aparece `currentColor`; no aparece ningún `#rrggbb`
- [ ] No aparece `<image`, `<filter`, `<script`, `base64`, `Gradient`
- [ ] Pesa menos de ~4 KB
- [ ] Se ve bien a 64 px, no solo ampliado
