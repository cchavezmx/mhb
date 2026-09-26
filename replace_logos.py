import os

def replace_logos():
    # 1. Update index.html
    index_path = 'index.html'
    old_index = """            <span class="logo-slot"
              ><object data="LOGO_MHB.png" type="image/png" aria-hidden="true">
                <span class="logo-fallback">MHB</span>
              </object></span
            >"""
    new_index = """            <span class="logo-slot"
              ><img src="LOGO_MHB.png" alt="MHB"
            /></span>"""
    
    modified_count = 0
    
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if old_index in content:
            new_content = content.replace(old_index, new_index)
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {index_path}")
            modified_count += 1
        else:
            print(f"WARNING: Target pattern not found in {index_path}")
    else:
        print(f"ERROR: {index_path} not found")

    # 2. Update mhb-vitrina*.html
    old_vitrina = """            <a class="logo-slot" href="index.html" aria-label="Museo de Historia de la Biblia — inicio">
              <object data="LOGO_MHB.png" type="image/png" aria-hidden="true">
                <span class="logo-fallback">MHB</span>
              </object>
            </a>"""
    new_vitrina = """            <a class="logo-slot" href="index.html" aria-label="Museo de Historia de la Biblia — inicio">
              <img src="LOGO_MHB.png" alt="MHB" />
            </a>"""

    for f_name in os.listdir('.'):
        if f_name.startswith('mhb-vitrina') and f_name.endswith('.html'):
            with open(f_name, 'r', encoding='utf-8') as f:
                content = f.read()
            if old_vitrina in content:
                new_content = content.replace(old_vitrina, new_vitrina)
                with open(f_name, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated: {f_name}")
                modified_count += 1
            else:
                print(f"WARNING: Target pattern not found in {f_name}")
                
    print(f"Total files updated: {modified_count}")

if __name__ == '__main__':
    replace_logos()
