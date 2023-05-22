const express = require('express')
const aboutRoute = require('./routes/aboutR')
const agentsRoute = require('./routes/agentsR')
const mapsRoute = require('./routes/mapsR')
const weaponsRoute = require('./routes/weaponsR')
const signinRoute = require('./routes/signinR')
const signupRoute = require('./routes/signupR')
const app = express()
const port =5000


//----- landing page -----//
app.get('/',(req,res)=>{
    res.send("hello")
})
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



app.listen(port,()=>{
    console.log(`server running on https://localhost:${port}`)
})
