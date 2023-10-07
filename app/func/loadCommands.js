const path = require('path')
const fs = require('fs')
const commandsDir = path.join(__dirname, '../../commands')
const commands = new Map();
const log = require("../func/log.js")

const loadFile = (filePath) => {
    try {
        if(filePath.endsWith('.js')) {
            const file = require(filePath);
            const name = file.name.toLowerCase().replace(/\s/g, "");
            if (!commands.has(name)) {
                commands.set(name, file)
            } else {
                log.warn(`Command name ${name} already exists.`)
            }
        }
        return false
    } catch (e) { 
        log.error(e)
    }
}

const exploreFolder = (dir) => {
    fs.readdirSync(dir).forEach(dirOrFile => {
        const dirOrFilePath = path.join(dir, dirOrFile);
        if (fs.statSync(dirOrFilePath).isDirectory()) {
            exploreFolder(dirOrFilePath);
        } else {
            loadFile(dirOrFilePath);
        }
    });
}

const loadCommands = async() => {
    exploreFolder(commandsDir)
    log.info(`Loaded ${commands.size} commands.`)
}

module.exports = {
    loadCommands,
    commands
}