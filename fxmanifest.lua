fx_version 'cerulean'
game 'gta5'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/sound.mp3',
}

client_scripts {
    'client.lua'
}

server_scripts {
    'server.lua'
}

exports {
    'exportStartupNotify'
}
