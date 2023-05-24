const express =require('express')
signupRoute =express.Router()
const userModel =require('../model/userSchema')
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')


signupRoute.get('/',(req,res)=>{
    res.send("signupRoute")
})
signupRoute.post('/',async(req,res)=>{
    const { username, email, password,cpassword }= req.body

    //----- making sure user has entered all the fields -----//
    if(!username ||  !email ||  !password || !cpassword ){
            return res.status(422).json({error:"please fill all the fields"})
    }
    try {

        //----- checkking for existing user -----//
        const existingUser = await userModel.findOne({email:email})
        
        //----- if exists -----//
        if(existingUser){
            return res.status(422).json({messege:"user already exist"})
           }
                //----- if not create new user -----//
                const hashedPassword = await bcrypt.hash(password,10) //----- hashing password
                const hashedConPassword =  await bcrypt.hash(cpassword,10) //----- hashing confirm  password
                const userResult = new userModel({
                    username:username,
                    password:hashedPassword,
                    cpassword:hashedConPassword,
                    email:email,
                })
            await userResult.save()
        
            return  res.status(201).json({messege:"user saved"})
         
    } catch (error) {   
        console.log(error)
    }
})

module.exports = signupRoute