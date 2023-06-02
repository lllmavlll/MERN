const express = require('express')
const auth = require('./routes/auth')
const dotenv =require('dotenv')
require('./db/mongo')  //----- mongo db path import
const app = express()

//----- dontenv file config
dotenv.config()
const PORT = process.env.PORT || 5001

//------ converting into jsonObject -----//
app.use(express.json())

//----- auth route -----//
app.use('/',auth)

//----- server listen -----//
app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})
