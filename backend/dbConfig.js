

const mongoose =require('mongoose') ;
const uri ="mongodb+srv://username:password@test.d2zj3pw.mongodb.net/?retryWrites=true&w=majority" ;
mongoose.connect(uri , {useNewUrlParser: true , useUnifiedTopology:true}); 
const connection=mongoose.connection;
connection.once('open' , ()=> {console.log("data base connection succefully");})
