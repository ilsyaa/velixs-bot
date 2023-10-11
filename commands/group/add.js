const { msg } = require("../../config.js")

module.exports = {
    name : "group-add",
    description : "Add member from group",
    cmd : ['add'],
    run : async({ m, sock }) => {
        if(!m.isGroup) return m.reply(msg.isGroup)
        if(!m.isAdmin) return m.reply(msg.isAdmin)
        if(!m.isBotAdmin) return m.reply(msg.isBotAdmin)

        if(!m.arg) return m.reply(`Contoh : _${m.prefix}add 62xxx_`)

        let user = m.arg.replace(/[^0-9]/g, '')+"@s.whatsapp.net"

        try{
            await sock.groupParticipantsUpdate(m.from, [user], 'add')
        }catch{
            await m.reply("Tidak Dapat Menambahkan Member")
        }
    }
}