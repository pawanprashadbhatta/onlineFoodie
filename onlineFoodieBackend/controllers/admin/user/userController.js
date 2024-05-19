const User = require("../../../models/userModel/userModel")

exports.getUser=async(req,res)=>{
    
    const data=await User.find({role:{$ne:"admin"}}).select(["-password","-createdAt","-updatedAt","-role","-__v"])
   if(data.length>1){
    return res.status(200).json({
        message: "Non-admin users fetched successfully",
        data
    });

   }
   
   
    if(data.length>1){
        return res.status(200).json({
            message:"user fetched successfully",
            data
        })
    }

    res.status(200).json({
        message:"user collection is empty"
        ,data:[]
    })
}

// delete User API
exports.deleteUser = async(req,res)=>{
    const userId = req.params.id 
    if(!userId){
        return res.status(400).json({
            message : "Please provide userId"
        })
    }
    // check if that userId users exists or not
    const user = await User.findById(userId)
    if(!user){
        res.status(404).json({
            message : "User not found with that userid"
        })
    }else{
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            message : "User deleted successfully"
        })
    }
}