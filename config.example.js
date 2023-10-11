module.exports = {
    sessionName : 'velixsmd',
    prefixs : ['!', '#', '/'],
    owner : [
        '6285174902345'
    ],
    apis : {
        velixs : {
            endpoint : "https://api.velixs.com",
            apikey : "YOUR_API_KEY"
        }
    },
    
    storage : __dirname + "/storage",
    
    msg : {
        isAdmin : "_😿 Fitur Untuk Admin Group_",
        isGroup : "_😿 Fitur Ini hanya untuk group._",
        isOwner : "_😿 Fitur Ini hanya untuk owner._",
        isBotAdmin : "_😿 Bot Bukan Admin._",
    }
}