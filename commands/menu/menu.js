module.exports = {
    name : "menu",
    description : "Menu Bot Velixs-Bot",
    cmd : ['help', 'menu'],
    run : async({ m, sock }) => {
        let text = ''
        text += '*😺 Menu Velixs-Bot*\n\n'
        // text += `${m.currentPrefix}idgames\n`
        text += `${m.currentPrefix}translate`
        text += `\n\n`
        text += `_👑 Author: Ilsya_\n`
        text += `⚡ _Sources: www.github.com/ilsyaa_`

        return sock.sendMessage(m.from, { text: text }, { quoted: m })
    }
}