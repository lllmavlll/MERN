import React, { useEffect, useState } from 'react'
import './Support.css'
import supBanner from '../Assets/imgs/supBgi.jpg'
// import {useNavigate}  from 'react-router-dom'


const Support =()=>{

   
   const [userData , setUserData]=useState({})

//----- call function to check if user loged in -----//
   const callPage =async()=>{
      try { 
         const res = await fetch ('/getdata',{
            method:"GET",
            headers:{
               "Content-Type":"application/json"
            },
         });
         const data = await res.json();
         console.log(data)
         setUserData(data)
          if(!res.status===200){
            const error = new Error(res.error)
            throw error;
          }
      } catch (error) {
         console.log(error)   
      }
   }
   //----- useState to get data of a user through token -----//
   useEffect(()=>{
      callPage()
   })

   return (
       <div className="supMain">
        <form  method='GET'>
           <div className="supContainer">
               <p className='supHead'>how can we help you?</p>
               <div className="supBanner">
                  <img alt=''  src={supBanner}/>
               </div>
                  <input autoComplete='off' value={userData.username} placeholder='username'name='username' className="supName" type='text'/>
                  <input autoComplete='off' value={userData.email} placeholder='email' name='email' className="supEmail" type='email'/>
                  <textarea autoComplete='off'  placeholder='enter your message' name='issue' className="supMessage" type='text'/>
                  <button type='submit'   className="supSubBtn" >submit</button>
           </div>
        </form>
       </div>
   )

}
export default Support