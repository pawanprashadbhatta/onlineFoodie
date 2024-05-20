const express=require("express");
const { connectToDatabase } = require("./database/connection");
//routes require here


const app= express()
 require('dotenv').config();

//parsing data from form
app.use(express.json())
app.use(express.urlencoded({extended:true}))

 //connect to database
 connectToDatabase(process.env.MONGODB_URI)
 const authRoute=require("./routes/authRoute")
 const productRoute=require('./routes/productRoute')
 const adminUserRoute=require("./routes/adminUserRoute")
 const reviewRoute=require("./routes/reviewRoute")
 const userProfileRoute=require("./routes/userProfileRoute")
 //routes here
app.use("/api/auth",authRoute)
app.use('/api',productRoute)
app.use('/api',adminUserRoute)
app.use('/api',reviewRoute)
app.use('/api',userProfileRoute)
//telling nodejs to give access to uploads filder
app.use(express.static('/uploads'))
app.get("/",(req,res)=>{
    res.status(400).json({
        message:"hello this is test api"
    })
})
const PORT= process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} successfully...`)
})