const express =require('express')
signinRoute =express.Router()
const userModel =require('../model/userSchema')
const bcrypt = require('bcrypt');

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
          return   res.status(404).send("<h1>user not found</h1>")
        }
    
        
        //----- matching Cridentials -----//
        const matchPassword = await  bcrypt.compare(password,existingUser.password)
        if(!matchPassword){
         return   res.status(400).send('<h1>incorrect password</h1> ')
            
        }
      
        //----- creating JWT (jasonWebToken) -----//
        // const token = jwt.sign({email : existingUser.email, id : existingUser._id},SECRET_KEY)
        // res.status(200).json({user:existingUser, token:token})
        //return res.status(200).redirect('home')
       return res.status(200).json({message:"sighnin yessss"})

    } catch (error) {
     return   res.status(500).json({message:"something went wrong"})
    }

})

module.exports = signinRoute