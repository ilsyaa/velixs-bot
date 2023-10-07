const { default: axios } = require("axios")
const { apis, storage } = require("../../config.js")
const fs = require("fs")

module.exports = {
    name : "igdownloader",
    description : "Instagram Downloader",
    menu : {
        label : 'Downloader',
        example : "_url_",
    },
    cmd : ['igdl', 'igdownlod'],
    run : async({ m, sock }) => {
        if(!m.args[0]) return sock.sendMessage(m.from, { text: `Contoh : ${m.prefix}igstalk _url_` })

        axios.get(apis.velixs.endpoint+`/instagram/download?apikey=${apis.velixs.apikey}&url=${m.args[0]}`).then(async(res)=>{
            let result = res.data
            result.data.url.forEach(async (url) => {
                let buffer = await axios.get(url, { responseType: 'arraybuffer' })
                if (buffer.headers['content-disposition'].includes('jpeg')) {
                    await sock.sendMessage(m.from, { 
                        image : buffer.data
                    }, { quoted: m })
                } else if(buffer.headers['content-disposition'].includes('mp4')) {
                    await sock.sendMessage(m.from, { video : buffer.data, gifPlayback: true }, { quoted: m })
                }
            })
        }).catch(async(err)=>{
            if(err.response?.data?.message == 'Link not found') return sock.sendMessage(m.from, { text: `Link tidak ditemukan.` }, { quoted: m })
        })
    }
}