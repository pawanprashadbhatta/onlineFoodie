const User = require("../../../models/userModel/userModel")

exports.GetAdminUser=async(req,res)=>{
    const user=await User.find().select(["-password"])
    if(user.length>1){
        return res.status(400).json({
            message:"user fetched successfully",
            data
        })
    }

    res.status(400).json({
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