const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]
},{timestamps:true})


//----- generating tokens -----//
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        error.log(error)
    }
}

module.exports = mongoose.model('User',userSchema)
