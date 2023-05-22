const express =require('express')
signupRoute =express.Router()

signupRoute.get('/',(req,res)=>{
    res.send("signupRoute")
})

module.exports = signupRoute