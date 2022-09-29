require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true})
.then(()=>{console.log("Connected to Mongoose Atlas")})
.catch(err =>{console.log(`An Error Occured : ${err}`)})


app.listen(PORT, ()=>{
    console.log(`Server is running PORT: ${PORT}`)
})