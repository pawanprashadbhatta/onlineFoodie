const { addToCart } = require("../controllers/user/cart/cartController")
const isAuthenticated=require("../middleware/isAuthenticated")
const router=require("express").Router()
router.route("/cart").post(isAuthenticated,addToCart)
module.exports=router