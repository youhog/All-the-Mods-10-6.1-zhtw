# 🚀 All the Mods 10 (ATM10) 繁體中文北爛化補丁

<div align="center">

![GitHub Release](https://img.shields.io/github/v/release/youhog/All-the-Mods-10-6.1-zhtw?style=for-the-badge&color=orange)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/youhog/All-the-Mods-10-6.1-zhtw/release.yml?style=for-the-badge&label=BUILD)
![Minecraft Version](https://img.shields.io/badge/Minecraft-1.21.1-green?style=for-the-badge&logo=minecraft)
![Modloader](https://img.shields.io/badge/Modloader-NeoForge-blue?style=for-the-badge)

**「這不是一般的翻譯，這是魔法，也是爆肝與迷因的結晶。」**

[📥 立即下載](../../releases/latest) | [🛠️ 回報問題](../../issues) | [📜 參與貢獻](../../pulls)

</div>

---

## ✨ 補丁特色 (Localization Highlights)

我們不只是把英文變成中文，我們是把「靈魂」灌進去。

*   **🇹🇼 台灣在地化**：拒絕大陸用語與機翻。`Ingot` 是「錠」、`Plate` 是「板材」、`Bolt` 是「螺栓」、`Upgrade` 是「升級模組」。
*   **🤪 北爛語氣注入**：任務書讀起來像是在跟老司機聊天，充滿台灣網路梗（如：窩、爆肝、塊陶、哭啊）。
*   **🎯 100% 地毯式翻譯**：
    *   📖 **任務書 (FTB Quests)**：全數 50+ 章節、章節分組、獎勵表全數中文化。
    *   🖥️ **核心模組介面**：ATM 核心、MI 工業、神化、邪惡工藝等大型模組全數翻譯。
    *   📜 **KubeJS 腳本**：連代碼裡寫死的自定義物品名稱、伺服器警告訊息都不放過。
*   **🤖 專業 CI/CD 維護**：
    *   自動語法檢查，確保 JSON 與 SNBT 格式 100% 正確。
    *   自動修復腳本，防止任何括號或引號手滑。

---

## 📦 安裝說明 (Installation Guide)

請到 [發布頁面](../../releases/latest) 下載最新版本。推薦使用 **方法 A**。

### 🌟 方法 A：模組化安裝 (最推薦)
> **優點：安裝最快、不影響原始檔案、更新方便。**
1. 下載 `ATM10_ZHTW_Mod_vX.X.X.jar`。
2. 將檔案直接丟進你的 Minecraft 執行目錄下的 `mods` 資料夾。
3. 進遊戲後，在語言設定選擇 **「繁體中文 (台灣)」**。
4. **注意**：此方法可翻譯 90% 內容，但「任務書」建議搭配 **方法 B**。

### 📖 方法 B：任務書補丁 (僅限任務)
> **優點：解決模組化安裝無法完全覆蓋任務書的問題。**
1. 下載 `ATM10_Quests_Only_vX.X.X.zip`。
2. 解壓縮後會得到一個 `config` 資料夾。
3. 將該資料夾直接覆蓋到你的遊戲目錄下。
4. 進入遊戲執行 `/ftbquests reload` 即可生效。

### 🛠️ 方法 C：整合包製作者專用 (Overrides)
1. 下載 `ATM10_Full_Patch_vX.X.X.zip`。
2. 解壓後將所有內容覆蓋至遊戲根目錄。

---

## ❓ 常見問題 (FAQ)

**Q：為什麼我裝了之後還是英文？**
A：請檢查你的遊戲語言是否設定為 **「繁體中文 (台灣)」**。如果是設定成「繁體中文 (香港)」或其他，補丁將不會生效。

**Q：有些物品還是英文，這正常嗎？**
A：正常。因為有些模組的文字是藏在它自己的 Jar 檔裡，我們優先翻譯了模組包作者自定義的部分。如果你發現很重要的東西沒翻到，歡迎開 [Issue](../../issues) 告訴我們模組名。

**Q：這個補丁會導致遊戲崩潰嗎？**
A：不會。我們有自動化的語法檢查流程，任何語法錯誤在發布前都會被擋下來。

---

## 🛠️ 開發與自動化 (Internal Tools)

本專案使用 **Gemini CLI** 進行高效率的自動化翻譯與維護。

*   **`fix_translations.py`**: 我們的自動修復神器，確保所有檔案編碼與語法閉合。
*   **GitHub Actions**: 每次推送自動跑語法測試，確保品質。

---

## 📜 聲明與授權 (Disclaimer)

*   本補丁為非官方翻譯，基於 **All the Mods 10** 模組包開發。
*   所有權利保留給原模組作者與 AllTheMods 團隊。
*   **轉載授權**：歡迎分享，但請註明本 GitHub 專案連結。

---
<div align="center">
  製作：Gemini CLI & youhog | 願你的肝能撐過這個維度。
</div>
