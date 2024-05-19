const permitedTo=(...roles)=>{
return (req,res,next)=>{
const userRole=req.user.role
console.log(userRole)
if(!roles.includes(userRole)){
    res.status(400).json({
      message:  "you dont have permission for to create product"
    })
}else{
    next()
}
}
}
module.exports=permitedTo