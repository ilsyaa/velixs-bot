const { msg } = require("../../config.js")

module.exports = {
    name : "group-kick",
    description : "Kick member from group",
    cmd : ['kick'],
    run : async({ m, sock }) => {
        if(!m.isGroup) return m.reply(msg.isGroup)
        if(!m.isAdmin) return m.reply(msg.isAdmin)
        if(!m.isBotAdmin) return m.reply(msg.isBotAdmin)

        let user = m.mentions[0] ?? m.quoted?.sender
        if(!user) return m.reply(`Contoh : _${m.prefix}kick @user atau reply pesan_`)

        try{
            await sock.groupParticipantsUpdate(m.from, [user], 'remove')
        }catch{}
    }
}