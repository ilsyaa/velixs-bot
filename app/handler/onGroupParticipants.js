const { default: axios } = require("axios");
const { apis } = require("../../config.js")

class onGroupParticipants{
    constructor({ ev, sock }){
        this.ev = ev
        this.sock = sock
    }

    async main(){
        const { id, participants, action } = this.ev
        for(let user of participants){
            switch(action){
                case 'add':
                    let avatar = "https://velixs.com/assets/img/team/chatgbt2.jpg"
                    try{
                        avatar = await this.sock.profilePictureUrl(user, 'image')
                    } catch {}

                    axios.post(apis.velixs.endpoint+`/card/welcome`,{
                        "apikey": apis.velixs.apikey,
                        "avatar": avatar,
                        "heading": "Ilsya",
                        "text": `Selamat Datang di ${await sock.groupMetadata(user)?.subject ?? '-'}`
                    }, {
                        responseType: 'arraybuffer'
                    }).then(res=>{
                        this.sock.sendMessage(id, { 
                            image : res.data,
                            contextInfo: { mentionedJid: [user] }, 
                            caption: 'Selamat Datang @' + user.split('@')[0] 
                        })
                    })
                  
                    break
                case 'remove':
                    this.sock.sendMessage(id, { text: 'Selamat Tinggal @' + user.split('@')[0], mentions: [participants] });
                    break
                default:
                    break
            }
        }
    }
}

module.exports = onGroupParticipants