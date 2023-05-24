const express =require('express')
const signinRoute =express.Router()
const userModel =require('../model/userSchema')
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')


signinRoute.get('/',(req,res)=>{
    res.send("signin")
})
signinRoute.post('/',async(req,res)=>{

    const {email, password} = req.body
    try {
        //----- checking for existence of the user -----//
        const existingUser = await userModel.findOne({ email : email })
        if(!existingUser){
            // return res.status(404).json({ message:"user not found"})
          return   res.status(404).send("invalid credentials")
        }
    
        
        //----- matching Cridentials -----//
        const matchPassword = await  bcrypt.compare(password,existingUser.password)
        if(!matchPassword){
         return   res.status(400).send("invalid credentials")
            
        }
        const token = await existingUser.generateAuthToken()
        console.log(token)
        
        //----- creating JWT (jasonWebToken) -----//
        res.cookie("jwt-token",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
        
       return res.status(200).json({message:"sighnin yessss"})

    } catch (error) {
     return   res.status(500).json({message:"something went wrong"})
    }

})

module.exports = signinRoute