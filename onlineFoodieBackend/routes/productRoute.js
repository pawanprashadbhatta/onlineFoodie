const { createProduct, getProducts, getproduct } = require("../controllers/admin/product/productController")

const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")
const {storage, multer}=require("../middleware/multerConfig")
const router=require("express").Router()
 const uploads=multer({storage:storage})
router.route("/create").post(isAuthenticated, permitedTo("admin"),uploads.single('productImage'), createProduct)
router.route('/products').get(getProducts)
router.route('/products/:id').get(getproduct)

module.exports =router