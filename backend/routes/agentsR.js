const express =require('express')
const agentsRoute =express.Router()

agentsRoute.get('/',(req,res)=>{
    res.send("agentsRouteagentsRoute")
})

module.exports = agentsRoute