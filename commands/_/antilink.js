const { msg, react } = require("../../config.js")
const Message = require("../../app/func/Message.js")

module.exports = {
    name : "antilink-group",
    description : "Antilink group. ketika ada link di group akan otomatis di hapus.",
    run : async({ m, sock }) => {
        if(!m.isGroup) return
        if(m.isAdmin) return
        if(m.isSuperAdmin) return
        if(m.isOwner) return
        if(!m.isBotAdmin) return

        let budy = m.body
        if (budy.match(`chat.whatsapp.com`)) {
            var gclink = (`https://chat.whatsapp.com/` + await sock.groupInviteCode(m.from))
            var isLinkThisGc = new RegExp(gclink, 'i')
            var isgclink = isLinkThisGc.test(budy)
            if (isgclink) return
            try {
                let delet = m.key.participant
                let bang = m.key.id
                let res = sock.sendMessage(m.from, { delete: { remoteJid: m.from, fromMe: false, id: bang, participant: delet }})
                if (res) {
                    sock.sendMessage(m.from, { text: `_😿 Dilarang Mengirim Link Group lain tanpa seizin admin._` })
                }
            } catch {
                m.quoted.delete()
            }
        }
        return next = true;
    }
}