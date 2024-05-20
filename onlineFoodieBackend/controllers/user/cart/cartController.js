const Product=require("../../../models/productModel")
const User = require("../../../models/userModel/userModel")
exports.addToCart=async(req,res)=>{
    const userId=req.user.id
    const productId=req.params
    if(!productId){
        return res.status(400).json({
            message : "Please provide ProductId"
        })
    }
    const productExist = await Product.findById(productId)
    if(!productExist){
        return res.status(404).json({
            message : "No product with that productId"
        })
    }
    const user = await User.findById(userId)
      // check if that productId already exist or not , yeti xa vaney qty matra badaunu paryo na vaye productId
      const existingCartItem= user.cart.find((item)=>{
        item.product.equals(productId)
      })
      if(existingCartItem){
        existingCartItem.quantity+=1;
    }else{
        user.cart.push({
            product : productId,
            quantity : 1
        })
    }
    await user.save()
    const updatedUser = await User.findById(userId).populate('cart.product')
    res.status(200).json({
        message: "Product added to cart",
        data : updatedUser.cart
    })

}

exports.getMyCartItems = async(req,res)=>{
    const userId = req.user.id 
    const userData = await User.findById(userId).populate({
        path : "cart.product",
        select : "-productStatus"
    }) 
   
    res.status(200).json({
        message : "Cart Item Fetched Successfully",
        data  : userData.cart
    })
}