import React ,{ useEffect} from 'react'
import './Skins.css'
import { useNavigate } from 'react-router-dom'

const Skins = () => {
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
         // console.log(data)
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
    <>
      <div className='skinsMain'>

         <section className='Sk-sec1'>
            <h1><b>Wapon SKins</b></h1>
            <p>Weapon Skins are cosmetics in VALORANT that modify the appearance of weapons. They can be bought from the store with VALORANT Points and can be upgraded using Radianite Points to further modify appearance. They can also be be bought from an active Night.Market or earned from a Battle Pass, and a few can be obtained for free by completing Contracts or Battle Passes.</p>
            <p>Each weapon skin shares a theme with about three to five other weapons, the exception being Agents' skins.</p>
            <p>There are currently 652 different weapon skins.</p>
         </section>

         <section className='Sk-sec2'>
            <h1><b>Skin editions</b></h1>

         </section>
      
      </div>
    </>
  )
}

export default Skins
