import React,{useEffect} from 'react'
import {useNavigate} from  'react-router-dom'

const Logout = () => {

const navigate = useNavigate()

         //----- useEffect to logout -----//
         useEffect(()=>{
            fetch('/logout',{
              method:"GET",
              headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
              },
              credentials:"include"
            }).then((res)=>{
              navigate('/signin',{replace:true})
              if(!res.status===200){
                const error = new Error(res.error)
                throw error
              }
            }).catch((error)=>{ console.log(error)})
      
           })
  return (
    <div>
      logout
    </div>
  )
}

export default Logout
