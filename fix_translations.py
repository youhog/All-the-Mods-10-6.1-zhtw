import os
import glob
import re

def fix_json(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 簡單修復：確保以 } 結尾
        content = content.strip()
        if not content.endswith('}'):
            content += '\n}'
        
        # 移除 JSON 末尾多餘的逗號 (例如 "a": 1, })
        content = re.sub(r',\s*}', '\n}', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Fixed JSON: {file_path}")
    except Exception as e:
        print(f"❌ Failed to fix JSON {file_path}: {e}")

def fix_snbt(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        content = "".join(lines).strip()
        
        # 檢查引號數量
        quote_count = content.count('"')
        if quote_count % 2 != 0:
            # 如果是奇數，通常是最後一行漏了引號
            if content.endswith('}'):
                content = content[:-1].strip()
            
            if not content.endswith('"'):
                content += '"'
            
            if not content.endswith('}'):
                content += '\n}'
        
        # 確保最後有 }
        if not content.endswith('}'):
            content += '\n}'

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Fixed SNBT: {file_path}")
    except Exception as e:
        print(f"❌ Failed to fix SNBT {file_path}: {e}")

if __name__ == "__main__":
    # 修復 JSON
    for f in glob.glob('overrides/kubejs/assets/*/lang/zh_tw.json'):
        fix_json(f)
    
    # 修復 SNBT
    for f in glob.glob('overrides/config/ftbquests/quests/lang/zh_tw/**/*.snbt', recursive=True):
        fix_snbt(f)
    for f in glob.glob('overrides/config/ftbquests/quests/lang/zh_tw/*.snbt'):
        fix_snbt(f)
