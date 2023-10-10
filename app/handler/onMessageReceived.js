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
        // console.log(m);
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