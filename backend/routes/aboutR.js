const express =require('express')
aboutRoute =express.Router()

aboutRoute.get('/',(req,res)=>{
    res.send("about")
})

module.exports = aboutRoute