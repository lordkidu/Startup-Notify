fx_version 'cerulean'
game 'gta5'

author 'ludwikgame'
description 'Notification script'
version '1.1'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/sound.mp3',
}

client_scripts {
    'config.lua',
    'client.lua'

}

exports {
    'exportStartupNotify'
}
