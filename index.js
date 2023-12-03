const log = require('./app/func/log.js')
const express = require('express')
const app = express();
const port = 3000;

try{
    require('./config.js')
} catch {
    log.error('config.js not found!') 
    process.exit(1)
}

app.get('/', (req, res) => {
    res.send('Whatsapp BOT');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

require('./app/baileys/velixs.js')
