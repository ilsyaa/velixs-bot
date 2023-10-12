const log = require('./app/func/log.js')
try{
    require('./config.js')
} catch {
    log.error('config.js not found!') 
    process.exit(1)
}


require('./app/baileys/velixs.js')
