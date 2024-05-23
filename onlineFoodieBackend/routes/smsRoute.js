const isAuthenticated = require("../middleware/isAuthenticated")
const catchAsync = require("../services/catchAsync")
const sendMessage = require("../services/sendSMS.JS")

const router=require("express").Router()
router.route("/sendsms").post(isAuthenticated,catchAsync(sendMessage))
module.exports=router