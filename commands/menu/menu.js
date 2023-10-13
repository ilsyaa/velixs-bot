const { menuByLabel } = require("../../app/func/loadCommands.js")
const { react } = require("../../config.js")
const Message = require("../../app/func/Message.js")

module.exports = {
    name : "menu",
    description : "Menu Bot Velixs-Bot",
    cmd : ['help', 'menu'],
    run : async({ m, sock }) => {

        const message = new Message({ m, sock })
        message.react(react.process)

        let text = ''
        text += '*😺 Menu Velixs-Bot*\n\n'
        menuByLabel.forEach((val, key) => {
            text += `┌──「 *${key}*\n`
            val.forEach((v) => {
                text += `▢ ${m.prefix+v.cmd[0]} ${v.example}\n`
            })
            text += `└────────────\n\n`
        })

        text += `\n`
        text += `_👑 author: Ilsya_\n`
        text += `⚡ sources: _www.github.com/ilsyaa/velixs-bot_`
        
        await message.react(react.success)
        await sock.sendMessage(m.from, { text: text }, { quoted: m }).catch(()=>{
            message.react(react.failed)
        })
    }
}