import React from 'react'
import './Support.css'
import supBanner from '../Assets/imgs/supBGI.webp'


const Support =()=>{

   // }
   return (
       <div className="supMain">
           <div className="supContainer">
               <p className='supHead'>how can we help you?</p>
               <div className="supBanner">
                   <img alt=''  src={supBanner}/>
               </div>
               <input autoComplete='off'  placeholder='username'name='username' className="supName" type='text'/>
               <input autoComplete='off'  placeholder='email' name='email' className="supEmail" type='email'/>
               <textarea autoComplete='off'  placeholder='enter your message' name='issue' className="supMessage" type='text'/>
               <button   className="supSubBtn" >submit</button>

           </div>

       </div>
   )

}
export default Support