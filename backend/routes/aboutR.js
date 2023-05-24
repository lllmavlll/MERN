const express =require('express')
const aboutRoute =express.Router()

aboutRoute.get('/',(req,res)=>{
    res.send("about")
})

module.exports = aboutRoute