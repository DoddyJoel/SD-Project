const mongoose=require('mongoose')
const uri='mongodb+srv://restaurant:70IuZAIRtY7a6Tya@cluster0.w68qc.mongodb.net/restaurante_db?retryWrites=true&w=majority'
const db=mongoose.connection;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

db.on('open',__dirname=>{
    console.log('Database is connect to',uri);
})

db.on('error',err=>{
    console.log(err)
})