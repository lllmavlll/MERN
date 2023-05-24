const express =require('express')
const auth =express.Router()
const userModel =require('../model/userSchema')
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')


auth.get('/',(req,res)=>{
    res.send("signupRoute")
})
auth.post('/signup',async(req,res)=>{
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
           else if(password!=cpassword){
            return res.status(422).json({messege:"password not matching"})
           }
           else{
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
           }
     } catch (error) {   
        console.log(error)
    }
})

auth.get('/signin',(req,res)=>{
    res.send("signin")
})
auth.post('/signin',async(req,res)=>{

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

module.exports = auth