const User = require("./models/userModel/userModel")
const bcrypt=require("bcrypt")
const adminSheeder=async()=>{
//check if admin exist or not

const isAdminExist= await User.find({email:"admin@gmail.com"})
    if(isAdminExist.length==0){
//admin sheeding
await User.create({
    email:"admin@gmail.com",
    phoneNumber:9812779599,
    userName:"admin",
    role:"admin",
    password:bcrypt.hashSync(password,8)

})

    console.log("Admin sheded successfully")

    }else{
        console.log("admin already sheeded..")
        
    }


}

module.exports= adminSheeder