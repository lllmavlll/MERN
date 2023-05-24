const express =require('express')
const weaponsRoute = express.Router()

weaponsRoute.get('/',(req,res)=>{
    res.send("weaponsRoute")
})

module.exports = weaponsRoute