const axios = require('axios');
const { apis, react } = require("../../config.js")
const Message = require("../../app/func/Message.js")

module.exports = {
    name : "translate",
    description : "Google Translate",
    menu : {
        label : 'education',
        example : "_en query_",
    },
    cmd : ['translate'],

    run : async({ m, sock }) => {
        if(!m.args[0] && !m.arg) return sock.sendMessage(m.from, { text: `Contoh : ${m.prefix}translate en Hai Apa Kabar?` })

        const message = new Message({ m, sock })
        message.react(react.process)

        let text = m.arg.slice(m.args[0].length)
        let to = m.args[0]

        axios.get(apis.velixs.endpoint+`/google-translate?apikey=${apis.velixs.apikey}&to=${to}&text=${text}`).then(async(res)=>{
            message.react(react.success)
            await sock.sendMessage(m.from, { text : res.data.data.result }, { quoted: m })
        }).catch(async(err)=>{ message.react(react.failed) })
    }
}