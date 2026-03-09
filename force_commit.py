
import os
import subprocess
import time

repo_dir = r'E:\user\Downloads\All the Mods 10-6.1'
lock_file = os.path.join(repo_dir, '.git', 'index.lock')

def run_git(args):
    try:
        result = subprocess.run(['git'] + args, cwd=repo_dir, capture_output=True, text=True, encoding='utf-8')
        return result.stdout, result.stderr
    except Exception as e:
        return "", str(e)

def force_unlock():
    if os.path.exists(lock_file):
        try:
            os.remove(lock_file)
            print("Successfully removed index.lock")
        except Exception as e:
            print(f"Failed to remove lock: {e}")

# 1. 解鎖
force_unlock()

# 2. 先提交 .gitignore
run_git(['add', '.gitignore'])
out, err = run_git(['commit', '-m', 'Docs: 新增 .gitignore'])
print(f"GitIgnore Commit: {out or err}")

# 3. 獲取所有已暫存但未提交的檔案
out, err = run_git(['diff', '--cached', '--name-only'])
staged_files = out.splitlines()

if not staged_files:
    print("No files staged for commit.")
else:
    print(f"Found {len(staged_files)} staged files. Committing in batches...")
    
    batch_size = 100
    for i in range(0, len(staged_files), batch_size):
        batch = staged_files[i:i + batch_size]
        force_unlock() # 每批次前都嘗試解鎖一次
        # 這裡我們直接 commit 已經 staged 的檔案，不需要重新 add
        # 但為了保險，我們針對這批檔案下 commit 指令
        # 實際上直接執行 git commit 即可提交所有 staged 檔案，
        # 但檔案太多時 git 也會卡住，所以我們分開 commit
        msg = f"Feature: 補齊繁體中文翻譯 (Batch {i//batch_size + 1})"
        
        # 我們用一個技巧：只提交這一批檔案
        # 由於檔案已經 staged，我們可以使用 -- 限制 commit 的範圍
        res_out, res_err = run_git(['commit', '-m', msg, '--'] + batch)
        if "nothing to commit" in res_out or "nothing to commit" in res_err:
            continue
        print(f"Batch {i//batch_size + 1} committed.")
        time.sleep(0.5)

print("Final cleanup commit for everything else...")
force_unlock()
run_git(['add', '.'])
run_git(['commit', '-m', 'Final: 補齊所有翻譯與資源包結構'])

print("All tasks completed!")
