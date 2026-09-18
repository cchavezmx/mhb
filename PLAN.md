# Plan: Reemplazar logo.svg por LOGO_MHB.png

## Alcance
Actualizar la versión activa del sitio en la carpeta `./MHB/`:
- `index.html`
- Las 32 páginas de vitrina (`mhb-vitrina*.html`)

No se modificará la carpeta `uploads/html MHB/`, que conserva una versión anterior con el logo como SVG inline.

## Cambios a realizar
1. En cada archivo HTML, reemplazar:
   ```html
   src="logo.svg"
   ```
   por:
   ```html
   src="LOGO_MHB.png"
   ```
2. Conservar el contenedor `.logo-slot`, el fallback `.logo-fallback` y el atributo `alt=""`.
3. No eliminar `logo.svg` por ahora; solo se deja de usar como referencia activa.

## Estilos
El contenedor `.logo-slot` mide 52×52px y el CSS ya define:
```css
.logo-slot img{max-width:100%;max-height:100%;display:block}
```
Esto debería escalar `LOGO_MHB.png` correctamente. Si las proporciones del PNG lo requieren, se agregará `object-fit: contain`.

## Verificación
- Confirmar con `grep` que ningún HTML en `./MHB/` siga apuntando a `logo.svg`.
- Revisar visualmente `index.html` y al menos una vitrina para comprobar que el logo se renderiza.
