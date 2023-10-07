const { default: axios } = require("axios")
const { apis } = require("../../config.js")

module.exports = {
    name : "igstalk",
    description : "Instagram Stalking",
    menu : {
        label : 'stalk',
        example : "_username_",
    },
    cmd : ['igstalk'],
    run : async({ m, sock }) => {
        if(!m.args[0]) return sock.sendMessage(m.from, { text: `Contoh : ${m.prefix}igstalk username` })

        axios.get(apis.velixs.endpoint+`/instagram?apikey=${apis.velixs.apikey}&username=${m.args[0]}`).then(async(res)=>{
            let text = ``
            text += `┌──「 *STALKING*\n`
            text += `▢ *🔖 Name:* ${res.data.data.name}\n`
            text += `▢ *🔖 Username:* ${res.data.data.username}\n`
            text += `▢ *👥 Followers:* ${res.data.data.followers}\n`
            text += `▢ *🫂 Following:* ${res.data.data.following}\n`
            text += `▢ *🏝️ Posts:* ${res.data.data.posts}\n`
            text += `▢ *🔗 Link:* https://instagram.com/${res.data.data.username}\n`
            text += `└────────────`
            // return sock.sendMessage(m.from, { text: text }, { quoted: m })
            sock.sendMessage(m.from, {
                text: text,
                contextInfo: {
                    forwardingScore: 0,
                    isForwarded: false,
                    externalAdReply: {
                        title: (`${res.data.data.name}`),
                        body: (`${res.data.data.username}`),
                        thumbnailUrl: (`${res.data.data.image}`),
                        sourceUrl: (`https://www.instagram.com/${res.data.data.username}`),
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                }
            }, {quoted: m})
        }).catch(async(err)=>{
            if(err.response.data.message == 'user not found') return sock.sendMessage(m.from, { text: `Username ${m.args[0]} tidak ditemukan.` }, { quoted: m })
        })

    }
}