fx_version("adamant")

game("gta5")
lua54("yes")

author("ESX-Framework")
description("Official ESX-Legacy Property System")
version("1.0.0")

shared_scripts({ "@es_extended/imports.lua", "@es_extended/locale.lua", "locales/*.lua" })
file("client/html/copy.html")
ui_page("client/html/copy.html")

server_scripts({
	"@oxmysql/lib/MySQL.lua",
	"config.lua",
	"server/*.lua",
})

client_scripts({
	"config.lua",
	"client/cctv.lua",
	"client/main.lua",
	"client/furniture.lua",
})

dependencies({
	"es_extended",
})
