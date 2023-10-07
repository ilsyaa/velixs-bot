const axios = require('axios');
const { apis } = require("../../config.js")
const wa = require("velixs-md")

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

        let text = m.arg.slice(m.args[0].length)
        let to = m.args[0]

        axios.get(apis.velixs.endpoint+`/google-translate?apikey=${apis.velixs.apikey}&to=${to}&text=${text}`).then(async(res)=>{
            await sock.sendMessage(m.from, { text : res.data.data.result }, { quoted: m })
        }).catch(async(err)=>{})
    }
}