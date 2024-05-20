const User = require("../../../models/userModel/userModel")

const bcrypt=require("bcrypt")

exports.getUserProfile=async(req,res)=>{
    const userId = req.user._id
   
    const myProfile = await User.findById(userId).select(["-password","-__v","-updatedAt", "-createdAt",""]);
    if (myProfile) {
        return res.status(200).json({
            message: "Your profile data is fetched successfully",
            data: myProfile
        });
    } else {
        return res.status(404).json({
            message: "Profile not found"
        });
    }
}

exports.deleteUserProfile=async(req,res)=>{
    const userId=req.user._id
    if(!userId){
        return res.status(400).json({
            message:"anomolous activity cant be performed"
        })
    }
    await User.find(userId)
    if(!userId){
        return res.status(400).json({
            message:"no user exist and delete id"
        })
    }else
    await User.findByIdAndDelete(userId)
    res.status(200).json({
        message:"user deleted successfully"
    })
}


exports.updateMyPassword = async(req,res)=>{
    const userId = req.user.id 
    const {oldPassword,newPassword,confirmPassword} = req.body 
    if(!oldPassword || !newPassword || !confirmPassword){
        return res.status(400).json({
            message : "Please provide oldPassword,newPassword,confirmPassword"
        })
    }
    if(newPassword !== confirmPassword){
        return res.status(400).json({
            message : "newPassword and oldPassword didnt matched"
        })

    }
    const userData=await User.findOne(userId)
   const hashedOldPassword=oldData.password
   //check if old password is correct or not

  const isPasswordMatched=bcrypt.compareSync(oldPassword,hashedOldPassword)
  if(!isPasswordMatched){
    return res.status(400).json({
        message:"incorect old password"
    })
  }
//if old password mathced
 oldData.password=bcrypt.hashSync(newPassword,8)
 await userData.save()
 res.status(200).json({
    message  : "Password Changed successfully",
    
})

}