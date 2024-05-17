const {promisify} = require("util")


const jwt=require("jsonwebtoken")
const User = require("../models/userModel/userModel")
const isAuthenticated=async(req,res,next)=>{

    const token= req.headers.authorization
    if(!token){
        return res.status(400).json({
            message:'please provide token'
        })
    }
        //if token pathayo vane and now to verify if it is ligit or not 
                 
        // jwt.verify(token,process.env.JWT_SECRETKEY,(err,success)=>{
        //     if(err){
        //         return res.status(400).json({
        //             message:"please go for login"
        //         })
        //     }else{
        //         res.status(200).json({
        //             message:"valid token"
        //         })
        //     }
        // })
//alternative

try {
    
    const decoded = await promisify(jwt.verify)(token,process.env.JWTSECRET_KEY)
   
    const doesUserExist =  await User.findOne({_id : decoded.id})

   if(!doesUserExist){
    return res.status(404).json({
        message : "User doesn't exists with that token/id"
    })
   }
   req.user  = doesUserExist

   next()
  } catch (error) {
    res.status(500).json({
        message : error.message
    })
  }
}
 

 

  




module.exports=isAuthenticated