const { registerUser, loginUser, forgotPassword } = require("../controllers/authController")

const router=require("express").Router()
 
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/forgetPassword").post(forgotPassword)
module.exports =router