# 🚀 All the Mods 10 (ATM10) 繁體中文在地化補丁

<div align="center">

![GitHub Release](https://img.shields.io/github/v/release/youhog/All-the-Mods-10-6.1-zhtw?style=for-the-badge&color=blue)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/youhog/All-the-Mods-10-6.1-zhtw/release.yml?style=for-the-badge&label=Build%20Status)
![Minecraft Version](https://img.shields.io/badge/Minecraft-1.21.1-brightgreen?style=for-the-badge&logo=minecraft)
![Modloader](https://img.shields.io/badge/Modloader-NeoForge-informational?style=for-the-badge)

**「致力於提供最精確、最完整的 Minecraft 模組包繁體中文體驗。」**

[📥 立即下載](../../releases/latest) | [🐞 問題回報](../../issues) | [🤝 參與貢獻](../../pulls)

</div>

---

## ✨ 專案特色 (Project Features)

本專案針對 **All the Mods 10 (ATM10)** 進行深度在地化，確保所有文字符合台灣繁體中文玩家的閱讀習慣與術語標準。

*   **🎯 專業術語統一**：嚴格統一金屬、零件與學名翻譯。例如：`Ingot` 統一為「錠」、`Plate` 為「板材」、`Bolt` 為「螺栓」、`Upgrade` 為「升級模組」。
*   **📖 完整任務書中文化**：涵蓋 FTB Quests 全數 60 多個任務章節，包含主線、工業、魔法、探索等完整導引文字。
*   **🖥️ 核心模組在地化**：包含 Modern Industrialization、Apotheosis、Forbidden & Arcanus、Mekanism 等大型模組的介面與自定義文字。
*   **📜 腳本深度中文化**：針對 KubeJS 自定義物品名稱、伺服器系統訊息進行全面翻譯。
*   **🤖 自動化品質管理**：
    *   內建 JSON 與 SNBT 語法自動檢查，確保檔案格式 100% 正確。
    *   自動化 CI/CD 流程，確保每次發布皆經過嚴格驗證。

---

## 📦 安裝說明 (Installation Guide)

建議使用 **方法 A** 以獲得最穩定的體驗。

### 🌟 方法 A：模組化安裝 (推薦)
1. 前往 [發布頁面](../../releases/latest) 下載 `ATM10_ZHTW_Mod_vX.X.X.jar`。
2. 將該檔案放入 Minecraft 執行目錄下的 `mods` 資料夾中。
3. 啟動遊戲後，在語言設定中選取 **「繁體中文 (台灣)」**。

### 📖 方法 B：任務書補丁 (Config 覆蓋)
> 若模組化安裝未能成功顯示中文任務書，請使用此方法。
1. 下載 `ATM10_Quests_Only_vX.X.X.zip`。
2. 解壓縮後將得到的 `config` 資料夾直接覆蓋至遊戲根目錄。
3. 進入遊戲後輸入 `/ftbquests reload` 即可更新。

---

## ❓ 常見問題 (FAQ)

**Q：安裝後部分內容仍顯示英文？**
A：請確認遊戲內的語言設定為 **「繁體中文 (台灣)」**。若部分特定模組物品仍為英文，可能因為該文字硬編碼於模組核心內，歡迎開 Issue 告知我們。

**Q：可以將此補丁加入我的整合包嗎？**
A：歡迎任何形式的非商業轉載與整合，請註明來源為本 GitHub 專案。

---

## 🛠️ 開發與維護 (Technical Details)

本專案採用 **Gemini CLI** 與 GitHub Actions 協作開發：
*   **`fix_translations.py`**: 自動修復語法錯誤與編碼問題。
*   **`release.yml`**: 自動化打包與版本控制。

---
<div align="center">
  由 youhog 與 Gemini CLI 共同維護 | 致力於繁體中文 Minecraft 社群發展
</div>
