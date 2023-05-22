const express =require('express')
weaponsRoute =express.Router()

weaponsRoute.get('/',(req,res)=>{
    res.send("weaponsRoute")
})

module.exports = weaponsRoute