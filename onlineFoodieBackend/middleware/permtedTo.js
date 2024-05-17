const permitedTo=(...roles)=>{
return (req,res,next)=>{
const userRole=req.user.roles
if(!roles.includes(userRole)){
    res.status(400).json({
      message:  "you dont have permission for this"
    })
}else{
    next()
}
}
}
module.exports=permitedTo