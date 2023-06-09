import React, {useEffect} from 'react'
import './Agents.css'
import { useNavigate ,Routes,Route, Link} from 'react-router-dom'
import Yoru from './Yoru'


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
    <>
      <div className='agentsMain'>
         <section className='A-sec1'>
            <div className='A-grid1'>
               <Link className='A-link' to={'brimstone'}> <h1><b>BRIMSTONE</b></h1></Link>
               <Link className='A-link' to={'yoru'}><h1 ><b>YORU</b></h1></Link>
               <Link className='A-link' to={'rayna'}><h1 ><b>RAYNA</b></h1></Link>
               <Link className='A-link' to={'sova'}><h1><b>SOVA</b></h1></Link>
               <Link className='A-link' to={'sage'}> <h1><b>SAGE</b></h1></Link>
               
            </div>
            <div className='A-grid2'>
               <Routes>
                  <Route path='yoru' element={<Yoru/>}/>
               </Routes>
               
            </div>
         </section>
      </div>
    </>
  )
}

export default Agents
