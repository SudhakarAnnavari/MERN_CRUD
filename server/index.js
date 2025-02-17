const express = require('express')
const cors = require('cors')
const Mongoose = require('mongoose')
const Router = require('./Router/userRouter')


const app = express()
app.use(cors())
app.use(express.json())

Mongoose.connect("mongodb+srv://annavarisudhakar:sudha93811@cluster0.sobpcyx.mongodb.net/CRUD")
.then(()=>console.log("db connected"))
.catch(()=>console.log("db connection failed"))

app.use('/user',Router)

app.listen(4000,(req,res)=>{
    console.log("server started")
})