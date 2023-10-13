const axios = require('axios');
const { apis, react } = require("../../config.js")
const Message = require("../../app/func/Message.js")

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
        const message = new Message({ m, sock })
        await message.react(react.process)
        let text = m.arg
        axios.get(apis.velixs.endpoint+`/gpt?apikey=${apis.velixs.apikey}&text=${text}`).then(async(res)=>{
            await message.react(react.success)
            await sock.sendMessage(m.from, { text : res.data.data.reply }, { quoted: m })
        }).catch(async(err)=>{ await message.react(react.failed) })
    }
}