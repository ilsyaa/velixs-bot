class Message {
    constructor({ sock, m }){
        this.sock = sock
        this.m = m
    }

    async react(emote){
        const reactionMessage = {
            react: {
                text: emote,
                key: this.m.key
            }
        }
        
        return await this.sock.sendMessage(this.m.from, reactionMessage)
    }
}

module.exports = Message