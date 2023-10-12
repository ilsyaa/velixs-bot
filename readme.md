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
    name : "menu", // gunakan huruf kecil dan - jangan pake space, harus uniqe
    description : "Menu Bot Velixs-Bot", // penjelasan fitur isi bebas

    // jika anda menghapus baris cmd ini maka commands ini akan berjalan setiap ada pesan masuk tidak peduli apapun pesanya. kamu bisa cek di bagian folder commands/_
    cmd : ['help', 'menu'],

    // option : tambahkan ini untuk menampilkan otomatis ke list menu
    menu : {
        label : 'translate', // ini untuk grouping sesuai label
        example : "_en text_", // ini contoh penggunaan nanti di menu akan seperti !help en text
    },

    options : {
        // kamu bisa menambahkan opsi ini jika ingin fitur boleh tidak memaki prefix.
        withoutPrefix : true
    },

    run : async({ m, sock}) => {
        if(!m.isGroup) return m.reply("Fitur Hanya Bisa di group.")
        if(!m.isAdmin) return m.reply("Fitur Hanya Untuk admin.")
        if(!m.isBotAdmin) return m.reply("Bot Harus Admin")


        // any code
    }
}
```

Masih Dalam Pengembangan 😺

### Thanks ⚡
[Ilsya](https://github.com/ilsyaa)

[Velixs](https://velixs.com)