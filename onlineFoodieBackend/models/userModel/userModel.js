const mongoose=require("mongoose")
const Schema=mongoose.Schema

    const userSchema= new Schema({ 
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{type:String,
            required:[true,"password must be provided"]
        },
        userName:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true
        },
        role:{
            type:String,
           enum:["customer","admin"],
           default:"customer"
        },
        otp:{
            type:Number
        },
        cart : [{
            quantity : {
                type : Number,
                required : true
            },
            product : {type : Schema.Types.ObjectId, ref : "Product"}
        }],
    },{
        timestamps:true
    })
    const User=mongoose.model("User",userSchema)
    module.exports=User
