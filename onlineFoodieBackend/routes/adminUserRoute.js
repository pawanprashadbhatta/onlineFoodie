const { GetAdminUser } = require("../controllers/admin/user/userController")
const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")

const router=require("express").Router()
router.route('/adminUser').get(isAuthenticated,permitedTo("admin"),GetAdminUser)
module.exports=router