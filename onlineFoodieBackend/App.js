const express=require("express");
const { connectToDatabase } = require("./database/connection");
//routes require here


const app= express()
 require('dotenv').config();

//parsing data from form
app.use(express.json())
app.use(express.urlencoded({extended:true}))

 //connect to database
 connectToDatabase()
 const authRoute=require("./routes/authRoute")
 //routes here
app.use("/api/auth",authRoute)

app.get("/",(req,res)=>{
    res.status(400).json({
        message:"hello this is test api"
    })
})
const PORT= process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} successfully...`)
})