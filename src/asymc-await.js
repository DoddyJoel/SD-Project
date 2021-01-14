const db= require('../backend/database')
const menu = require('../models/resturante')

async function main(){
    const menus=new menu({
        categoria:'Bebidas',
        nombre:'Vinos',
        precio:1.00
    })
    const savemenu=await menus.save();
    console.log(savemenu);
    return savemenu
}

main()
.then(savemenu =>console.log(savemenu))
.catch(err =>console.log(err))