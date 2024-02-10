const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const emailRoute = require("./routes/emailRoutes")
const userRoute = require("./routes/userRoutes")

const app = express()
const PORT = 2000

//inbuilt middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to Gmail App")
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    //console.log("Mongoose is connected")
    app.listen(PORT)
})
.catch((err)=>{console.log("Error", err)})

app.use("/emails",emailRoute)
app.use("/users",userRoute)
