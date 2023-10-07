const wa = require('velixs-md')
const log = require('./app/func/log.js')
const { sessionName } = require("./config.js")
const onMessageReceived = require('./app/handler/onMessageReceived.js')
const { loadCommands } = require("./app/func/loadCommands.js")

loadCommands()

// wa.loadSessionsFromStorage() // auto start all sessions
wa.setCredentialsDir('./storage/wa_credentials');
wa.startSession(sessionName);

wa.onConnected(async (sessionId) => { log.info(`Session Connected : ${sessionId}`) })
wa.onDisconnected(async (sessionId) => { log.info(`Session Disconnected : ${sessionId}`) })

wa.onMessageReceived(async ({ msg, sock }) => { 
    new onMessageReceived(msg, sock).main() 
})

wa.onGroupParticipantsUpdated(async (ev) => { 
    console.log(ev);
})