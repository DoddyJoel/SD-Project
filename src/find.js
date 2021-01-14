const db = require('../backend/database')
const menu=require('../models/restaurante')
const axios = require('axios');
async function main(){
   const menus= await menu.find()
   for(var i=0;i<menus.length;i++){
       console.log("Categoria: "+menus[i].categoria+"\n"+
       "Plato: "+menus[i].nombre+"\n"+
       "Precio: "+menus[i].precio+"\n")
   }

}

main()