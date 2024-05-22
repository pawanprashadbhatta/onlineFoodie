const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")
const catchAsync = require("../services/catchAsync")
const {getAllOrders,getSingleOrder,updateOrderStatus,deleteOrder, updatePaymentStatus}=require("../controllers/admin/order/orderController")

const router = require("express").Router()

router.route("/orders").get(isAuthenticated,permitedTo("admin"),catchAsync(getAllOrders))
router.route("/orders/paymentstatus/:id").patch(isAuthenticated,permitedTo("admin"),catchAsync(updatePaymentStatus))
router.route("/orders/:id").get(isAuthenticated,permitedTo("admin"),catchAsync(getSingleOrder)).patch(isAuthenticated,permitedTo("admin"),catchAsync(updateOrderStatus)).delete(isAuthenticated,permitedTo("admin"),catchAsync(deleteOrder))




module.exports = router