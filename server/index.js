const express = require("express")

const app =  express()

const mongoose = require("mongoose")
const routes = require("./routes/routes")
const cors = require("cors")

mongoose.connect("mongodb://localhost:27017/SignUpDatabase",{},() =>{
    console.log("Database Connected")
})

app.use(express.json())
app.use(cors())
app.use('/',routes)
app.listen(4000,() => console.log("Server Started"))