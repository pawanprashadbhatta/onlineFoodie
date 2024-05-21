const { addToCart, getMyCartItems, deleteItemFromCart, updateCartItems } = require("../controllers/user/cart/cartController")
const isAuthenticated=require("../middleware/isAuthenticated")
const router=require("express").Router()
router.route("/cart").get(isAuthenticated,getMyCartItems)
router.route("/cart/:productId").delete(isAuthenticated,deleteItemFromCart).post(isAuthenticated,addToCart).patch(isAuthenticated,updateCartItems)
module.exports=router