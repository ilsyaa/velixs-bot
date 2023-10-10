const wa = require("./app/baileys/Socket.js")
const log = require('./app/func/log.js')
const { sessionName } = require("./config.js")
const onMessageReceived = require('./app/handler/onMessageReceived.js')
const onGroupParticipants = require('./app/handler/onGroupParticipants.js')
const { loadCommands } = require("./app/func/loadCommands.js")
loadCommands()

const startBOT = async() => {
    const sock = await wa.startSession(sessionName)
    
    sock.ev.on("messages.upsert", async(msg) => { new onMessageReceived(msg, sock).main() })
    sock.ev.on("group-participants.update", async(ev) => { new onGroupParticipants({ ev, sock }).main() })
}

startBOT()
