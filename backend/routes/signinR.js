const express =require('express')
signinRoute =express.Router()

signinRoute.get('/',(req,res)=>{
    res.send("signin")
})

module.exports = signinRoute