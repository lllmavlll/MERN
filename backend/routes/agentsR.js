const express =require('express')
agentsRoute =express.Router()

agentsRoute.get('/',(req,res)=>{
    res.send("agentsRouteagentsRoute")
})

module.exports = agentsRoute