const { registerUser, loginUser, forgotPassword, verifyOtp, resetPassword } = require("../controllers/authController")

const router=require("express").Router()
 
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/forgetPassword").post(forgotPassword)
router.route("/verifyOtp").post(verifyOtp)
router.route("/resetPassword").post(resetPassword)
module.exports =router