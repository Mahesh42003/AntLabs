const mongosh=require("mongoose") 
mongosh.connect("mongodb+srv://Mahi123:lJy20HGE02NzIBdZ@cluster0.jf4gnyu.mongodb.net/react-tut")
.then(() => {
    console.log("mongodb connected")
}) 

const newSchema=new mongosh.Schema({  
    username:{ 
        type:String, 
        required:true  
    }, 
    password:{
        type:String,  
        required:true 
    }
}) 
const collection=mongosh.model("collection",newSchema) 
module.exports=collection