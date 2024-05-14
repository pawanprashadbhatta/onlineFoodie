const mongoose=require("mongoose")

exports.connectToDatabase= async()=>{
await mongoose.connect(process.env.MONGODB_URI)
console.log("Database connected successfully...💞")
}

 