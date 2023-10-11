## **VELIXS-BOT**

### Install
```bat
1. Rename config.example.js ke config.js
2. Buka file config.js ubah yang perlu aja
3. npm install
4. npm start
```

### Commands Options
```ts
module.exports = {
    nameId : "menu",
    description : "Menu Bot Velixs-Bot",
    cmd : ['help', 'menu'],

    // option : tambahkan ini untuk menampilkan otomatis ke list menu
    menu : {
        label : 'translate',
        example : "_en text_",
    },

    run : async({ m, sock}) => {
        if(!m.isGroup) return m.reply("Fitur Hanya Bisa di group.")
        if(!m.isAdmin) return m.reply("Fitur Hanya Untuk admin.")
        if(!m.isBotAdmin) return m.reply("Bot Harus Admin")
    }
}
```

Masih Dalam Pengembangan 😺

### Thanks ⚡
[Ilsya](https://github.com/ilsyaa)

[Velixs](https://velixs.com)