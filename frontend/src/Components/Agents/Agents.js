import React, {useEffect} from 'react'
import './Agents.css'
import { useNavigate } from 'react-router-dom'


const Agents = () => {

  const navigate =useNavigate()
   

  //----- call function to check if user loged in -----//
     const callPage =async()=>{
        try { 
           const res = await fetch ('/getdata',{
              method:"GET",
              headers:{
                 Accept:"application/json",
                 "Content-Type":"application/json"
              },
              credentials:'include'
           });
           const data = await res.json();
           console.log(data)
            if(!res.status===200){
              const error = new Error(res.error)
              throw error;
            }
        } catch (error) {
           console.log(error)   
           navigate('/signin')      
        }
     }
     //----- useState to get data of a user through token -----//
     useEffect(()=>{
        callPage()
     })

  return (
    <div>
      <h1>Agents</h1>
    </div>
  )
}

export default Agents
