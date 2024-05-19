const Product = require("../../../models/productModel/productModel")
const fs=require('fs')
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

exports.getProducts=async(req,res)=>{
   const {id}=req.params
       const products=await Product.find(id)
       if(!products){
        res.status(400).json({
            message:"no product found ",
            products:[]
        })
  
}else{
    res.status(200).json({
        message:"product fetched successfully ",
        products
    })
}
}

//single product 


exports.getproduct=async(req,res)=>{
    const {id}=req.params
    if(!id){
        return res.status(400).json({
            message:"Plesse provide product id"
        })
    }
    const product=await Product.find({_id:id})
    if(product.length==0){
         return res.status(400).json({
            message:"no product found",
            product:[]
           
        })
    }else{
        res.status(200).json({
            message:"product fetched successfully.. ",
            product
        })
    }
   
}

//deleteproduct api
exports.deleteProduct=async(req,res)=>{
    const {id}=req.params
    if(!id){
        return res.status(400).json({
            messge:"please provide id of product you want to delete"
        })
    }
    const oldData = await Product.findById(id)
    if(!oldData){
        return res.status(404).json({
            message : "No data found with that id"
        })
    }
    const oldProductImage=oldData.productImage
const lengthToCut=process.env.BACKEND_URL
const finalLength=oldProductImage.slice(lengthToCut)
if(req.file && req.file.filename){
    //remove file from upload folder
    fs.unlink("./uploads"+finalLength,(err)=>{
        if(err){
            console.log("error deleting file",err) 
        }else{
            console.log("file deleted successfully")
        }
    })

}
    await Product.findByIdAndDelete(id)
    res.status(200).json({
        message:"product deleteed successfully"
    })}

    //update product
    exports.updateProduct=async(req,res)=>{
const {id}=req.params
const{productName,productDescription,productStatus,productStock,productPrice}=req.body
if(!productName||!productDescription||!productStatus||!productStock||!productPrice ||!id){
    return res.status(400).json({
        message:"please provide the detail"
    })
}

const oldData=await Product.findOne(id)
if(!oldData){
    return res.status(400).json({
        message:"no product with that id availlable "
    })
}
const oldProductImage=oldData.productImage
const lengthToCut=process.env.BACKEND_URL
const finalLength=oldProductImage.slice(lengthToCut)
if(req.file && req.file.filename){
    //remove file from upload folder
    fs.unlink("./uploads"+finalLength,(err)=>{
        if(err){
            console.log("error deleting file",err) 
        }else{
            console.log("file deleted successfully")
        }
    })

}
const newdata= await Product.findByIdAndUpdate(id,{
    productName ,
    productDescription ,
    productPrice,
    productStatus,
    productStock,
    productImage : req.file && req.file.filename ? process.env.BACKEND_URL +  req.file.filename :  oldProductImage
},{
    new : true,

})
res.status(200).json({
    messagee : "Product updated successfully",
    data 
})
}

   