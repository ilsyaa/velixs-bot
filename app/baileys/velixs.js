const wa = require("./Socket.js")
const { sessionName } = require("../../config.js")
const onMessageReceived = require('../handler/onMessageReceived.js')
const onGroupParticipants = require('../handler/onGroupParticipants.js')
const { loadCommands } = require("../func/loadCommands.js")
loadCommands()

const startBOT = async() => {
    const sock = await wa.startSession(sessionName)
    
    sock.ev.on("messages.upsert", async(msg) => { new onMessageReceived(msg, sock).main() })
    sock.ev.on("group-participants.update", async(ev) => { new onGroupParticipants({ ev, sock }).main() })
}

startBOT()
