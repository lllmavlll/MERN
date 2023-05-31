const express =require('express')
const aboutRoute =express.Router()
const authenticate =require('../middleware/authenticate')

aboutRoute.get('/',authenticate,(req,res)=>{
    res.send("about")
})

module.exports = aboutRoute