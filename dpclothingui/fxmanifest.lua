fx_version 'bodacious'
game 'gta5'
description 'dpClothing+ With UI'
author 'Coast Side Dev - aboahmad'
version '1.0.0'
lua54 'yes'

-- Coast Side Dev - aboahmad
-- Discord: https://discord.gg/ewy2JmekUw

client_scripts {
	'Client/Functions.lua', 		-- Global Functions / Events / Debug and Locale start.
	'Locale/*.lua', 				-- Locales.
	'Client/Config.lua',			-- Configuration.
	'Client/Variations.lua',		-- Variants, this is where you wanan change stuff around most likely.
	'Client/Clothing.lua',
	'Client/NUI.lua',
}

ui_page 'ui/ui.html'
files {
    'ui/ui.html',
    "ui/js/*.js",
    "ui/css/*.css",
    'ui/imgs/*.png',
}