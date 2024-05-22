const Review = require("../../../models/reviewModel/reviewModel")
const { findById } = require("../../../models/userModel/userModel")


exports.createReview=async(req,res)=>{
    const userId=req.user.id
    const{rating,message}=req.body
    const {productId}=req.params.id
    if(!rating||!message||!productId){
        return res.status(400).json(
          {  message:"please provide rating and message and productId"}
        )
    }
    //check if product with that id exist or not
    const productExist=await findById(productId)
if(!productExist){
    return res.status(400).json({
        message:"product with that id not availbale"
    })

    }
//insert into review table
const data=await Review.create({
rating,message,productId,userId
})
res.status(200).json({
    message : "Review added successfully"
})

}

exports.getReview=async(req,res)=>{
    const userId=req.user.id
   
   
    if(!userId){
        return res.status(400).json({
            message:'please provide userId'
        })
    }
    const reviews=await Review.find({userId})
    if(reviews.length==0){
         res.status(400).json({
            message:'you dont give any review yet',
            reviews:[]
        })
    }else{
        res.status(400).json({
            message:'your  review are',
            reviews
        })
    }
}

exports.deleteReview = async(req,res)=>{
    const reviewId   = req.params.id 
    // check if that user created this review 
    const userId = req.user.id 
    if(!reviewId){
        res.status(400).json({
            message : "Please provide reviewId "
        })
    }
    const review = Review.findById(reviewId)
    const ownerIdOfReview = review.userId 
    if(ownerIdOfReview !== userId){
        return res.status(400).json({
            message : "You don't have permission to delete this review"
        })
    } 

 
    await Review.findByIdAndDelete(reviewId)
    res.status(200).json({
        message : "Review delete successfully"
    })

}