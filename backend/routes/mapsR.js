const express =require('express')
mapsRoute =express.Router()

mapsRoute.get('/',(req,res)=>{
    res.send("mapsRoute")
})

module.exports = mapsRoute