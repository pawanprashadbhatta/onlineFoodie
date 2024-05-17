const mongoose=require("mongoose")
const User = require("../models/userModel/userModel")
const adminSheeder = require("../adminSheeder")

exports.connectToDatabase= async(URI)=>{
await mongoose.connect(URI)
console.log("Database connected successfully...💞")


//admin sheeder import
adminSheeder()


}

 