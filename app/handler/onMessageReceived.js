const { serialize } = require('../func/velixs.serialize.js');
const { commands } = require("../func/loadCommands.js")
const log = require("../func/log.js")
const config = require("../../config.js")

class onMessageReceived {
    constructor (m, sock){
        this.m = m
        this.sock = sock
    }

    async main(){
        let m = serialize(this.sock, this.m.messages?.[0])
        if (!m.message) return
        if (m.key && m.key.remoteJid == "status@broadcast") return
        if (m.key.id.startsWith("BAE5") && m.key.id.length == 16) return

        m.isOwner = config.owner.find((v) => v + "@s.whatsapp.net" == m.sender) ? true : false
        m.groupMetadata  = m.isGroup ? await this.sock.groupMetadata(m.key.remoteJid) : {}
        let participant_sender = (m.isGroup ? m.groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
        let participant_bot = (m.isGroup ? m.groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
        m.isSuperAdmin = participant_sender?.admin == 'superadmin' ? true : false
        m.isAdmin = m.isSuperAdmin || participant_sender?.admin == 'admin' ? true : false
        m.isBotAdmin = participant_bot?.admin == 'admin' ? true : false

        // console.log(participant_bot);
        try{
            const command = Array.from(commands.values()).find((v) => v.cmd.find((x) => x.toLowerCase() == m.commandWithoutPrefix.toLowerCase()));
            if(!command) return
            command.run({m , sock: this.sock})
        } catch(e) {
            log.error(e)
        }
    }
}

module.exports = onMessageReceived