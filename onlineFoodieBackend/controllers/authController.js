const User = require("../models/userModel/userModel")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const sendEmail = require("../services/sendEmail")
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
 

}

exports.forgotPassword=async(req,res)=>{
    const {email}=req.body
    if(!email){
        return res.status(400).json({
            message:"please provide email"
        })
    }
    //check if email is registered or not
    const userExist=await User.find({email})
    if(userExist.length==0){
    return res.status(400).json({
        message:"no user exist with this email"
    })
        }
//send otp to email
const otp= Math.floor(1000+Math.random()*9000)
userExist[0].otp=otp
userExist[0].save()
await sendEmail({
    email,
    subject:"your otp for forgetPassword is",
    message:`Your otp is ${otp} dont share with anyone`
})
return res.status(200).json({
    message:"otp send successfully"
})

    }



    //verify otp 

    exports.verifyOtp=async(req,res)=>{
        const {email,otp}=req.body
        if (!email) {
            return res.status(400).json({
                message: "Please provide email"
            });
        }
        
        if (!otp) {
            return res.status(400).json({
                message: "Please provide otp"
            });
        }
        
        //check if that otp is of provided email or not
        const userExist=await User.find({email})
        if(userExist.length==0){
            return res.status(400).json({
                message:"Invalid email provided"
            })
        }
        //check if email is also correct and verify for correct otp
        if(userExist[0].otp !==otp){
            return res.status(400).json({
                message:"please provide the correct otp "
            })
        }else{
            userExist[0].otp=undefined
            userExist[0].isOtpVerified=true
           await userExist[0].save()
            res.status(200).json({
                message:"go for change password ..Thankyou"
            })
        }
    }

    exports.resetPassword=async(req,res)=>{
        const {email,password,confirmPassword}=req.body
        if(!email||!password||!confirmPassword){
           return res.status(400).json({
                message:"please provide new password and email and confirmPassword"
            })
        }
        if(userExist[0].isOtpVerified !==true){
            return res.status(400).json({
                message:"Your can not perform this action"
            })
        }
        const userExist=await User.find({email})
        if(!userExist[0].length==0){
            return res.status(400).json({
                message:"please provide valid email for reset password"
            })
        }
        userExist[0].password=bcrypt.hashSync(password,8)
        userExist[0].isOtpVerified=false
       await userExist[0].save()
       res.status(200).json({
        message:"password changed successfully"
       })
    }

