const Product = require("../../../models/productModel/productModel")

exports.createProduct = async (req,res)=>{
console.log(req.user)
    const file = req.file
    // console.log(file)
    let filePath
     if(!file){
      filePath ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s"
     }else{
      filePath = req.file.filename
     }
      const {productName,productDescription,productPrice,productStatus,productStock} = req.body
      if(!productName || !productDescription || !productPrice || !productStatus || !productStock){
          return res.status(400).json({
              message : "Please provide productName,productDescription,productPrice,productStatus,productStockQty"
          })
      }
      // insert into the Product collection/table
    const productCreated =  await Product.create({
          productName ,
          productDescription ,
          productPrice,
          productStatus,
          productStock,
          productImage : process.env.BACKEND_URL +  filePath
  
      })
      res.status(200).json({
          message : "Product Created Successfully",
          data : productCreated
      })


}
