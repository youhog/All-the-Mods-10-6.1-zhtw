// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7至少需要獄髓等級的搞頭才能挖掘'),
        Text.of('§6出現在深暗之域 (Deep Dark) 群系，且一定會露天生成'),
        Text.of('§6也出現在挖掘維度的深層石層 (Deep Slate Layer)')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7至少需要始源等級的搞頭才能挖掘'),
        Text.of('§b出現在任何地獄 (Nether) 群系'),
        Text.of('§b也出現在異界 (The Other)')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7至少需要震動等級的搞頭才能挖掘'),
        Text.of('§d出現在終界高地 (End Highlands)')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.of("§7§o它現在比較安靜一點了...")
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.of("§7§o它現在比較安靜一點了...")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.of("§7§o它現在比較安靜一點了...")
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.of("§7§o這不是你要找的錠"),
        Text.of("§6去合成 [沈默始源板材]")
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.of("§7§o這不是你要找的錠"),
        Text.of("§6去合成 [沈默震動板材]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.of("§7§o這不是你要找的錠"),
        Text.of("§6去合成 [沈默難得板材]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6在遠古城市 (Ancient Cities) 的可疑黏土裡挖掘')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§b在堡壘遺蹟 (Bastions) 的可疑靈魂砂裡挖掘')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§d由異界 (The Other) 地城圖書館裡的試煉生怪磚掉落')
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:hephaestus_forge_tier_1',[
        Text.of("§c§lShift+右鍵§r§c 點擊 §c§l鍛造台§r§c 並消耗 §l秘術粉末"),
        Text.of("§c█ = 飾金雕刻磨製深層石 (上方放鍛造台)"),
        Text.of("§7█ = 磨製深層石"),
        Text.of("§5█§7 = 飾金雕刻磨製深層石"),
        Text.of("§6█§7 = 雕刻秘法磨製深層石"),
        Text.of("§0███§7███§0███"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§7████§6█§7████"),
        Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
        Text.of("§7████§6█§7████"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0███§7███§0███")

    ])
    allthemods.add('forbidden_arcanus:clibano_core',[
        Text.of("§c§lShift+右鍵§r§c 點擊 §c§l大釜核心§r§c 並消耗 §c§l秘術粉末"),
        Text.of("§5█§7 = 磨製深層石"),
        Text.of("§7█ = 磨製深層石磚"),
        Text.of("§6█§7 = 大釜核心"),
        Text.of("§7從右到左 -> 從下到上"),
        Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
        Text.of("§7███§0█§7█§0█§7█§0█§7███"),
        Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    allthemods.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4可以從流浪商人那邊買到"),
        Text.of("§4或是對著橡木樹苗使用腐化靈魂"),
    ])
    allthemods.add('forbidden_arcanus:magnetized_darkstone_pedestal',[
        Text.of("§7對著深層石底座使用鐵磁混合物"),
    ])
    allthemods.add('forbidden_arcanus:soul',[
        Text.of("§7對著靈魂砂使用靈魂抽取器"),
        Text.of("§7極低機率在世界上自然生成"),
    ])
    allthemods.add('forbidden_arcanus:enchanted_soul',[
        Text.of("§7對著普通靈魂使用光輝噴濺藥水")
    ])
    allthemods.add('forbidden_arcanus:corrupt_soul',[
        Text.of("§7殺死怪物時有機率掉落")
    ])
    allthemods.add('forbidden_arcanus:blood_test_tube',[
        Text.of("§7副手拿著試管時殺死怪物")
    ])
    allthemods.add('forbidden_arcanus:xpetrified_orb',[
        Text.of("§7只能透過黑洞獲得"),
        Text.of("§7把暗物質跟腐化粉末丟地上就能做出黑洞"),
        Text.of("§7餵它吃經驗值，它就會吐出經驗礦球")
    ])
    allthemods.add('forbidden_arcanus:dragon_scale',[
        Text.of("§7由終界龍掉落")
    ])
    allthemods.add('forbidden_arcanus:stella_arcanum',[
        Text.of("§7極稀有地出現在 Y -44 到 Y 42 之間"),
        Text.of("§c挖掘時會自爆！小心你的肝！")
    ])
    allthemods.add(/forbidden_arcanus:runic_[sd]/,[
        Text.of("§7出現在地殼底部 Y 2 以下"),
    ])
    allthemods.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'],[
        Text.of("§7稀有地出現在 Y -40 到 Y 14 之間"),
        Text.of("§7在 Y -13 最常見")
    ])
    allthemods.add('forbidden_arcanus:artisan_relic',[
        Text.of("§a在村莊的防具匠、工具匠或武器匠房子裡開箱獲得"),
    ])
    allthemods.add('forbidden_arcanus:crescent_moon',[
        Text.of("§c這東西拿不到啦"),
    ])
    allthemods.add('forbidden_arcanus:crimson_stone',[
        Text.of("§a在掠奪者前哨站開箱獲得"),
    ])
    allthemods.add('forbidden_arcanus:soul_crimson_stone',[
        Text.of("§c使用一次後會變回普通的深紅石"),
    ])
    allthemods.add('forbidden_arcanus:elementarium',[
        Text.of("§a在叢林神廟、沙漠金字塔或海底遺跡開箱獲得"),
    ])
    allthemods.add('forbidden_arcanus:divine_pact',[
        Text.of("§a在異界的村莊或金字塔開箱獲得"),
    ])
    allthemods.add('forbidden_arcanus:maledictus_pact',[
        Text.of("§a在藏寶室堡壘開箱獲得"),
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/,[
        Text.of("§c不支援偽玩家 (Fake Player)"),
        Text.of("§c(例如路由盒、自動點擊器等方塊)")
    ])

    allthemods.add('toolbelt:belt', [
        Text.of("§7它有專屬的飾品欄位"),
        Text.of("§7去快捷鍵設定裡找「打開腰帶背包」")
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§a拿著職業方塊點右鍵把它塞進去，就能自動補貨")
    ])

	//Hyperbox
    if (Platform.isLoaded("hyperbox")) {
        allthemods.add('hyperbox:hyperbox', [
            Text.of("§a這模組在 6.0+ 版本會被刪除，請儘快搬家")
        ])
    }

    //Eternal Starlight
    if (Platform.isLoaded("eternal_starlight")) {
        allthemods.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
            Text.of('這是從「月光巨獸」身上掉下來的戰利品包。')
        ])
    }

    if (Platform.isLoaded('modular_machinery_reborn')) {
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_crucible"]', [
            Text.of('§c警告：這台機器已過時（退役）。'),
            Text.of('請在合成台裡把它轉成新版本。')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_star_altar"]', [
            Text.of('§c警告：這台機器已過時（退役）。'),
            Text.of('請在合成台裡把它轉成新版本。')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_enchanter"]', [
            Text.of('§c警告：這台機器已過時（退役）。'),
            Text.of('請在合成台裡把它轉成新版本。')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:auto_hepheastus_forge"]', [
            Text.of('§c警告：這台機器已過時（退役）。'),
            Text.of('請在合成台裡把它轉成新版本。')
        ])
    }
	// Apotheosis Gateway Warning
	allthemods.add([
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/frontier"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/ascent"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/summit"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/pinnacle"]'],
	[
		Text.of("§c警告：若在以下維度之外啟動，第 3 波後會自爆："),
		Text.of("§c主世界、地獄、終界、暮色森林")
	])
	// Botany Pot Sculk
	allthemods.add([
	"minecraft:sculk",
	"minecraft:sculk_sensor",
	"minecraft:sculk_catalyst",
	"minecraft:sculk_vein",
	"minecraft:sculk_shrieker",
	"deeperdarker:gloomy_sculk",
	"deeperdarker:gloomy_grass",
	"deeperdarker:glowing_flowers",
	"deeperdarker:sculk_vines",
	"deeperdarker:glowing_roots",
	"deeperdarker:bloom_berries",
	"deeperdarker:glowing_grass",
	"deeperdarker:sculk_tendrils"],
	[
		Text.of("§9放在盆栽裡時：需要附魔絲綢觸摸的鋤頭才能採收")
	])
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
