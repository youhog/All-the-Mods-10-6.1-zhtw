# 🚀 All the Mods 10 (ATM10) 繁體中文在地化補丁

<div align="center">

![GitHub Release](https://img.shields.io/github/v/tag/youhog/All-the-Mods-10-6.1-zhtw?label=Latest%20Version&style=for-the-badge&color=blue&sort=semver)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/youhog/All-the-Mods-10-6.1-zhtw/release.yml?branch=main&style=for-the-badge&label=Build%20Status)
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

## 📦 安裝說明 (Detailed Installation Guide)

本補丁提供多種安裝方式，您可以根據您的需求選擇最適合的一種。

### 前置需求
* 確保您已安裝 **All the Mods 10 (ATM10)** 模組包。
* 遊戲載入器版本需為 **NeoForge** (ATM10 預設)。

---

### 🌟 方案 A：模組化快速安裝 (最推薦)
這是最簡單且不破壞原始檔案的方式，適用於大多數一般玩家。

1. **下載檔案**：前往 [發布頁面](../../releases/latest) 下載 `ATM10_ZHTW_Mod_vX.X.X.jar`。
2. **定位資料夾**：打開您的 Minecraft 實例資料夾 (Instance Folder)，找到 `mods` 資料夾。
3. **放置檔案**：將下載的 `.jar` 檔案直接放入 `mods` 資料夾中。
4. **啟動遊戲**：啟動 Minecraft。
5. **語言設定**：在遊戲主選單點擊 **選項 (Options)** -> **語言 (Language)** -> 捲動並選取 **「繁體中文 (台灣)」** -> 點擊 **完成**。
6. **注意**：此方法可翻譯大部分物品與介面，但若發現「任務書」仍為英文，請搭配 **方案 B** 使用。

---

### 🎨 方案 D：語言資源包安裝 (解決物品未翻譯)
> **如果您發現物品名稱仍顯示為英文，請使用此方法。** 
1. **下載檔案**：下載 `ATM10_ResourcePack_ZHTW_vX.X.X.zip`。
2. **放置檔案**：將該檔案放入您 Minecraft 目錄下的 `resourcepacks` 資料夾中。
3. **啟用資源包**：啟動遊戲，進入 **選項 (Options)** -> **資源包 (Resource Packs)**。
4. **提升優先權**：將本補丁從左側移至右側，並確保它位於清單的 **最上方**（高過整合包內建資源）。
5. **完成**：點擊完成並等待遊戲重新載入資源。

---

### 📖 方案 B：任務書深度在地化 (Config 覆蓋)
如果您發現遊戲中的 FTB Quests 任務說明仍顯示為英文，請執行此步驟。

1. **下載檔案**：下載 `ATM10_Quests_Only_vX.X.X.zip`。
2. **解壓縮**：將下載的 Zip 檔案解壓縮，您會得到一個名為 `config` 的資料夾。
3. **覆蓋檔案**：將解壓出的 `config` 資料夾直接拖入遊戲根目錄並覆蓋。
4. **立即生效**：在對話框輸入 `/ftbquests reload` 或重新啟動遊戲。

---

### 🛠️ 方案 C：完整覆蓋安裝 (Overrides)
1. **下載檔案**：下載 `ATM10_Full_Patch_vX.X.X.zip`。
2. **解壓覆蓋**：將 Zip 內的內容全部解壓至遊戲根目錄，並覆蓋所有重複檔案。

---

## ✅ 驗證安裝是否成功
進入遊戲後，您可以檢查以下內容：
* **物品名稱**：檢查 `Modern Industrialization` 的機器或 `Allthemodium` 的礦石。
* **任務書**：按下快捷鍵檢查章節標題與描述是否已中文化。
* **系統提示**：嘗試使用禁用物品，觀察狀態列是否出現繁體中文警告。

---

## 🛠️ 開發與維護 (Technical Details)

本專案採用 **Gemini CLI** 與 GitHub Actions 協作開發：
*   **`fix_translations.py`**: 自動修復語法錯誤與編碼問題。
*   **`release.yml`**: 自動化打包與版本控制。

---
<div align="center">
  由 youhog 與 Gemini CLI 共同維護 | 致力於繁體中文 Minecraft 社群發展
</div>
