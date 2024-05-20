const { getUserProfile, deleteUserProfile, updateMyPassword } = require("../controllers/user/userProfile/userProfileController")
const isAuthenticated = require("../middleware/isAuthenticated")

const router=require("express").Router()
router.route("/userProfile").get(isAuthenticated, getUserProfile).delete(isAuthenticated,deleteUserProfile).patch(isAuthenticated,updateMyPassword)
module.exports=router