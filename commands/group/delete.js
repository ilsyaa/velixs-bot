const { msg } = require("../../config.js")

module.exports = {
    name : "group-delete-message",
    description : "Delete Message from group",
    cmd : ['del','delete'],
    run : async({ m, sock }) => {
        if(!m.isGroup) return m.reply(msg.isGroup)
        if(!m.isAdmin) return m.reply(msg.isAdmin)
        if(!m.isBotAdmin) return m.reply(msg.isBotAdmin)
        if(!m.quoted) return m.reply(`Reply Message : _${m.prefix}del_`)

        try {
            let delet = m.message.extendedTextMessage.contextInfo.participant
            let bang = m.message.extendedTextMessage.contextInfo.stanzaId
            return sock.sendMessage(m.from, { delete: { remoteJid: m.from, fromMe: false, id: bang, participant: delet }})
        } catch {
            m.quoted.delete()
        }
    }
}