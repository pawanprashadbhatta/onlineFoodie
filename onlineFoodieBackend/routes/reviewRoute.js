const { getReview, deleteReview, createReview } = require("../controllers/user/review/reviewController")
const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")

const router=require("express").Router()
router.route("/reviews").get(getReview)
router.route("/reviews/:id").delete(isAuthenticated,deleteReview).post(isAuthenticated,permitedTo("customer") ,createReview)
module.exports=router