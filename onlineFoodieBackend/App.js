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
 //routes here
app.use("/api/auth",authRoute)
app.use('/api/product/',productRoute)


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