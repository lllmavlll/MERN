import React, { useEffect } from 'react'
import './Support.css'
import supBanner from '../Assets/imgs/supBgi.jpg'
import {useNavigate}  from 'react-router-dom'


const Support =()=>{
   const navigate =useNavigate()

   const callSupPage =async()=>{
      try { 
         const res = await fetch ('/support',{
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

   useEffect(()=>{
      callSupPage()
   })

   return (
       <div className="supMain">
        <form  method='GET'>
           <div className="supContainer">
               <p className='supHead'>how can we help you?</p>
               <div className="supBanner">
                  <img alt=''  src={supBanner}/>
               </div>
                  <input autoComplete='off'  placeholder='username'name='username' className="supName" type='text'/>
                  <input autoComplete='off'  placeholder='email' name='email' className="supEmail" type='email'/>
                  <textarea autoComplete='off'  placeholder='enter your message' name='issue' className="supMessage" type='text'/>
                  <button type='submit'   className="supSubBtn" >submit</button>
           </div>
        </form>
       </div>
   )

}
export default Support