const express =require('express')
const mapsRoute =express.Router()

mapsRoute.get('/',(req,res)=>{
    // res.cookie("noo","yess")
    res.send("mapsRoute")
})

module.exports = mapsRoute