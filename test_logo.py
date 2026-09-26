import os
import re
import sys

def test_logos():
    html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'vista-emblemas.html']
    print(f"Encontrados {len(html_files)} archivos HTML para validar.")
    
    errors = []
    
    # 1. Validar que no haya <object data="LOGO_MHB.png"
    for file_name in html_files:
        with open(file_name, 'r', encoding='utf-8') as f:
            content = f.read()
            
            if 'object data="LOGO_MHB.png"' in content:
                errors.append(f"{file_name} contiene '<object data=\"LOGO_MHB.png\"'")
            
            # Buscar <img src="LOGO_MHB.png"
            if 'src="LOGO_MHB.png"' not in content:
                errors.append(f"{file_name} no contiene '<img src=\"LOGO_MHB.png\"'")
                
            # Verificar que .logo-slot envuelva al img
            logo_slot_match = re.search(r'class="logo-slot"[^>]*>[\s\S]*?<img src="LOGO_MHB.png"', content)
            if not logo_slot_match:
                errors.append(f"{file_name} no tiene el img de LOGO_MHB.png dentro de .logo-slot")

    # 2. Validar estilos.css
    with open('estilos.css', 'r', encoding='utf-8') as f:
        css_content = f.read()
        if '.logo-slot img' not in css_content:
            errors.append("estilos.css no contiene la regla '.logo-slot img'")
            
    if errors:
        print("PRUEBAS FALLIDAS:")
        for err in errors[:10]: # mostrar los primeros 10 errores
            print(f" - {err}")
        if len(errors) > 10:
            print(f" ... y {len(errors) - 10} errores más.")
        sys.exit(1)
    else:
        print("TODAS LAS PRUEBAS PASARON EXITOSAMENTE!")
        sys.exit(0)

if __name__ == '__main__':
    test_logos()
