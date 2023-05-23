const express =require('express')
signupRoute =express.Router()
const userModel =require('../model/userSchema')


signupRoute.get('/',(req,res)=>{
    res.send("signupRoute")
})
signupRoute.post('/',(req,res)=>{
    const { username, email, password,cpassword }= req.body
    if(!username ||  !email ||  !password || !cpassword ){
            return res.status(422).json({error:"please fill all the fields"})
    }
    
})

module.exports = signupRoute