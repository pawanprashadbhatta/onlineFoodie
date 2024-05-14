const User = require("../models/userModel/userModel")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
// Register user api
exports.registerUser=async(req,res)=>{
    const {email,userName,password,confirmPassword,phoneNumber}=req.body
    if(!email||!userName||!password||!confirmPassword||!phoneNumber){
       return res.status(400).json({
            message:"please provided all the asked credentials..."
        })
    }
     // Check if password and confirmPassword match
     if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Password and confirmPassword do not match."
        });
    }

//check if user already registed 
    const alreadyRegistered= await User.find({
        email:email
    })
    if(alreadyRegistered.length>0)
   return res.status(400).json({
        message:"user already registered...."
    })

const data= await User.create({
    email,
    userName,
    password:bcrypt.hashSync(password,8),
    phoneNumber
  
})

res.status(200).json({
    message:"User registerd succesfully..",
    data
})
}

//login user api
exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    const {id}=req.params
    if(!email||!password){
       return res.status(400).json({
            message:"please provide asked credentials for login.."
        })
    }
    const userexist=await User.find({email:email})
    if(userexist==0){
        return res.status(404).json({
            message:"no user exist with that email.."
        })
    }

    //password check
    const isMatched= bcrypt.compareSync(password,userexist[0].password)
    if(isMatched){
       //generate token 
const token=jwt.sign({id:userexist[0]._id},process.env.JWTSECRET_KEY,{expiresIn:"5d"})

            res.status(200).json({
                message:"user logged in successfully",
                token
        })
    }else{
        return res.status(400).json({
            message:"please provide correct email or password"
        })
    }
    //generate token

}
