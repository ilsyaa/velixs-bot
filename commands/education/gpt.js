const axios = require('axios');
const { apis } = require("../../config.js")

module.exports = {
    name : "gpt-ai",
    description : "ChatGPT AI",
    menu : {
        label : 'education',
        example : "_question_",
    },
    cmd : ['ai', 'gpt'],

    run : async({ m, sock }) => {
        if(!m.arg) return sock.sendMessage(m.from, { text: `Contoh : ${m.prefix}ai siapa kamu?` })
        let text = m.arg
        axios.get(apis.velixs.endpoint+`/gpt?apikey=${apis.velixs.apikey}&text=${text}`).then(async(res)=>{
            await sock.sendMessage(m.from, { text : res.data.data.reply }, { quoted: m })
        }).catch(async(err)=>{})
    }
}