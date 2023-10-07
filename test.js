const wa = require('velixs-md')

wa.setCredentialsDir('./storage/wa_credentials');
wa.startSession('ilsya');

wa.onConnected(async (sessionId) => {
    console.log('Session Connected : '+ sessionId);
})

wa.onMessageReceived(async(msg)=>{
    if (msg.key.fromMe || msg.key.remoteJid.includes("status")) return;
    if(msg.message?.extendedTextMessage?.text == 'ping'){  // jika pesan berupa text dan berisi ping
        // maka kirim pesan pong
        await wa.sendTextMessage({
            sessionId: msg.sessionId, // ini session ilsya
            to: msg.key.remoteJid,  // ini pengirim pesan ping
            text: "pong",
            answering: msg, // ini untuk reply pesan
            isGroup : wa.isGroup(msg.key.remoteJid) // buat ngecek pengirimnya dari group atau personal
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
})