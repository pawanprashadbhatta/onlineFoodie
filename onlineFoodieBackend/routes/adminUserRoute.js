const { getUser, deleteUser } = require("../controllers/admin/user/userController")
const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")

const router=require("express").Router()
router.route('/user').get(isAuthenticated,permitedTo("admin"),
getUser)
router.route("/user/:id").delete(isAuthenticated,permitedTo("admin"),deleteUser)
module.exports=router