const SlackBots =require('slackbots');
const axios = require('axios');
const db = require('../backend/database')
const menu=require('../models/resturante')
//Eliminar duplicados
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
// Funcion menu
async function main(){
    const menus= await menu.find()
    for(var i=0;i<menus.length;i++){
        bot.postMessageToChannel('general',"Categoria: "+menus[i].categoria+"\n"+
        "Plato: "+menus[i].nombre+"\n"+
        "Precio: "+menus[i].precio+"\n")
    }
 
 }

 async function categoria(){
    const menus= await menu.find()
    let list_category=[]
    for(var i=0;i<menus.length-1;i++){
        list_category.push(menus[i].categoria) //creando una lista con las categorias
    }
    const unique = list_category.filter(onlyUnique)

    for(var i=0;i<unique.length;i++){
        bot.postMessageToChannel('general',unique[i]+"\n")

    }
 
 }

 async function vegetariano(){
     const menus=await menu.find()
     for(var i=0;i<menus.length;i++){
         if (menus [i].categoria=="Plato vegetariano"){
             bot.postMessageToChannel('general', "Categoria: "+menus[i].categoria+"\n"+
             "Plato: "+menus[i].nombre+"\n"+
             "Precio: "+menus[i].precio+"\n")
         }
     }

 }
 async function bebidas(){
    const menus=await menu.find()
    for(var i=0;i<menus.length;i++){
        if (menus [i].categoria=="Bebidas"){
            bot.postMessageToChannel('general', "Categoria: "+menus[i].categoria+"\n"+
            "Plato: "+menus[i].nombre+"\n"+
            "Precio: "+menus[i].precio+"\n")
        }
    }

}

 async function postre(){
    const menus= await menu.find()
    for(var i=0;i<menus.length;i++){
        if(menus[i].categoria=="Postre"){
            bot.postMessageToChannel('general',"Categoria: "+menus[i].categoria+"\n"+
            "Plato: "+menus[i].nombre+"\n"+
            "Precio: "+menus[i].precio+"\n")
        }
    }
 
 }
 async function carta(){
    const menus= await menu.find()
    for(var i=0;i<menus.length;i++){
        if(menus[i].categoria=="Plato a la carta"){
            bot.postMessageToChannel('general',"Categoria: "+menus[i].categoria+"\n"+
            "Plato: "+menus[i].nombre+"\n"+
            "Precio: "+menus[i].precio+"\n")
        }
    }
 
 }
const bot=new SlackBots({
    token: 'xoxb-1289506250215-1304282982274-uX2OnL3L2MPZUbzjgmEV2182',
    name: 'donis'
});

bot.on('open',()=> console.log('Bot is ready'));

bot.on('start',()=>{
    bot.postMessageToChannel('general','Hola que deseas :smiley:')
});


bot.on('message',data=>{
    if(data.type !== 'message' || data.subtype=='bot_message' || !data.text)return;
    const arg=data.text.split(" ")
    if(arg.includes("menu")){
        main()
    }
    else if(arg.includes("como") && arg.includes("estas")){
        bot.postMessageToChannel('general','Bien y tu')
    }
    else if(arg.includes("categorías") || arg.includes("categorias") || arg.includes("opciones")|| arg.includes('opcion') ){
        categoria()
    }
    else if (arg.includes("postres")){
        postre()
    }
    else if ( arg.includes("bebidas") || arg.includes ("tomar") || arg.includes ("refrescos") ){
        bebidas()

    }
    else if (arg.includes("platos") && arg.includes("carta")){
        carta()
    }
    else if ( arg.includes("vegetarianas")  || arg.includes('vegetariana') || arg.includes('vegetariano') || arg.includes('vegetarianos') ) {
        vegetariano()
    }
    else if ( arg.includes("gracias"))  {
        bot.postMessageToChannel('general','Un gusto ayudarte')
    }
    else{
        bot.postMessageToChannel('general','en que te puedo ayudar')
    }
    console.log(arg)
})