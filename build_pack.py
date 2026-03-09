
import os
import shutil

src_root = r'E:\user\Downloads\All the Mods 10-6.1\overrides\kubejs\assets'
dest_root = r'E:\user\Downloads\All the Mods 10-6.1\overrides\resourcepacks\ATM10-ZHTW\assets'

if os.path.exists(os.path.dirname(dest_root)):
    shutil.rmtree(os.path.dirname(dest_root))

os.makedirs(dest_root, exist_ok=True)

count = 0
for mod_name in os.listdir(src_root):
    src_lang = os.path.join(src_root, mod_name, 'lang', 'zh_tw.json')
    if os.path.exists(src_lang):
        dest_lang_dir = os.path.join(dest_root, mod_name, 'lang')
        os.makedirs(dest_lang_dir, exist_ok=True)
        shutil.copy2(src_lang, os.path.join(dest_lang_dir, 'zh_tw.json'))
        count += 1

pack_mcmeta = os.path.join(os.path.dirname(dest_root), 'pack.mcmeta')
with open(pack_mcmeta, 'w', encoding='utf-8') as f:
    f.write('{"pack": {"pack_format": 34, "description": "ATM10 ZHTW Patch by Gemini CLI"}}')

print(f"Standalone Resource Pack created: {count} mods.")
