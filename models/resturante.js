const {Schema,model}=require('mongoose')

const menu=new Schema({
    categoria: String,
    nombre:String,
    precio:Number
})

module.exports =model('Menu',menu)