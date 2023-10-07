## **VELIXS-BOT**

### Install
```bat
1. Rename config.example.js ke config.js
2. Buka file config.js ubah yang perlu aja
3. npm install
4. npm start
```

### Commands Options
Ini masih Konsep 😺
```ts
module.exports = {
    nameId : "menu",
    description : "Menu Bot Velixs-Bot",
    cmd : ['help', 'menu'],
    options : {
        adminOnly : false, // default false
        groupOnly : false, // default false 
        ownerOnly : false, // default false

        // jika ini bernilai true maka command harus memakai prefix contoh !help jika help doang gak bisa
        withPrefix : true,  // default true
    },
    run : async() => {}
}
```

Masih Dalam Pengembangan 😺

### Thanks ⚡
[Ilsya](https://github.com/ilsyaa)

[Velixs](https://velixs.com)