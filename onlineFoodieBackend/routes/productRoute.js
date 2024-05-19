const { createProduct, getProducts, getproduct, deleteProduct, updateProduct } = require("../controllers/admin/product/productController")

const isAuthenticated = require("../middleware/isAuthenticated")
const permitedTo = require("../middleware/permtedTo")
const {storage, multer}=require("../middleware/multerConfig")
const router=require("express").Router()
 const uploads=multer({storage:storage})
router.route("/products").post(isAuthenticated, permitedTo("admin"),uploads.single('productImage'), createProduct)
router.route('/products').get(getProducts)
router.route('/products/:id').get(getproduct)
.delete(isAuthenticated,permitedTo("admin"),deleteProduct)
.patch(isAuthenticated,permitedTo("admin",uploads.single('productImage'),updateProduct))

module.exports =router