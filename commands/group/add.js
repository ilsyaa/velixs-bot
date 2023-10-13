const { msg, react } = require("../../config.js")
const Message = require("../../app/func/Message.js")

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

        const message = new Message({ m, sock })
        message.react(react.process)

        await sock.groupParticipantsUpdate(m.from, [user], 'add').then(res=>{
            if(res[0].content?.attrs?.error == 409){
                message.react(react.success)
                m.reply("_Sudah menjadi anggota._")
            }else if(res[0].content?.attrs?.error == 403){
                message.react(react.failed)
                m.reply("_Nomor ini harus di undang manual._")
            }
            message.react(react.success)
        }).catch(()=>{ message.react(react.failed) })
    }
}