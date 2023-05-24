const express = require('express')
const aboutRoute = require('./routes/aboutR')
const agentsRoute = require('./routes/agentsR')
const mapsRoute = require('./routes/mapsR')
const weaponsRoute = require('./routes/weaponsR')
const signinRoute = require('./routes/signinR')
const signupRoute = require('./routes/signupR')
const auth = require('./routes/auth')
const dotenv =require('dotenv')
const userModel =require('./model/userSchema')
require('./db/mongo')  //----- mongo db path import
const app = express()

//----- dontenv file config
dotenv.config()
const PORT = process.env.PORT || 5001

//------ converting into jsonObject -----//
app.use(express.json())

//----- mongo connect -----//

// mongoose.connect(process.env.MONGO,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }) 
// .then(()=> {
//         console.log(`mongoconnect`)
// })
// .catch((err)=>console.log(err))


//----- landing page -----//

// app.use('/',(req,res)=>{
//     res.send("hello")
// })

app.use('/',auth)

//----- about route -----//
app.use('/about',aboutRoute)

//----- agents route -----//
app.use('/agents',agentsRoute)

//----- maps route -----//
app.use('/maps',mapsRoute)

//----- weapons route -----//
app.use('/weapons',weaponsRoute)

//----- signin route -----//
app.use('/signin',signinRoute)

//----- signup route -----//
app.use('/signup',signupRoute)



app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})
