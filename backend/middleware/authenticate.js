const jwt = require('jsonwebtoken')
const userModel =require('../model/userSchema')


const authenticate = async(req,res,next)=>{
    try {
    //----- getting the token, which is created after login -----//
    const token= req.cookies.jwtoken

    //----- verifying the token with the  SECRET_KEY -----//
    const verifyJwt = jwt.verify(token,process.env.SECRET_KEY);
    
    //----- if token verified, identifying the token (of which user) -----//
    const rootUser =  await userModel.findOne({_id:verifyJwt._id,"tokens.token":token});
    
    //----- thrrow an error if user is not verified -----//
    if(!rootUser){ throw new Error('user not found')}

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    
    next()

    } catch (error) {
        res.status(401).send('UnAutherised user')
        console.log(error)
    }
}

module.exports =authenticate