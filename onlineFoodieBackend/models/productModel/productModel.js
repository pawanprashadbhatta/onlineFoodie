const mongoose=require('mongoose')
const Schema= mongoose.Schema
const productSchema=new Schema({ 
    productName:{
        type:String,
        required:true
    },productDescription:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productStock:{
        type:String,
      
        required:true
    },
    productStatus:{
        type:String,
        enum:["available","unavailable"],
        required:true
    },
},{
    timestamps:true
})
 const Product= mongoose.model("Product",productSchema)
 module.exports=Product