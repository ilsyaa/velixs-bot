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
}

startBOT()
// wa.onConnected(async (sessionId) => { log.info(`Session Connected : ${sessionId}`) })
// wa.onDisconnected(async (sessionId) => { log.info(`Session Disconnected : ${sessionId}`) })

// wa.onMessageReceived(async ({ msg, sock }) => {
//     new onMessageReceived(msg, sock).main()
// })


// wa.onGroupParticipantsUpdated(async ({ ev, sock }) => { new onGroupParticipants({ ev, sock }).main() })