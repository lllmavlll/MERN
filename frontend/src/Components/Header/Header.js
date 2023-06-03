import React ,{ useEffect , useState}from 'react'
import { Link} from 'react-router-dom'
import './Header.css'
import logoimg from '../Assets/imgs/LOGO1.png'
 
const Header = () => {


  const [userData , setUserData] = useState('')

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
     //----- useEffect to get data of a user through token -----//
     useEffect(()=>{
        callPage()
     },[])



  return (
    <>
    <div className='NavbarHead'>
      <div className='Logo1'>
        <img className='LogoImg'alt='' src={logoimg}/>
      <Link className='logoLInk' to={""}><h1>av<span>zone</span></h1></Link>
      </div>
      <div className='navLinks'>
          <li><Link className='navLink' to={"agents"}>agents</Link></li>
          <li><Link className='navLink' to={'maps'}>maps</Link></li>
          <li><Link className='navLink' to={'weapons'}>weapons</Link></li>
          <li><Link className='navLink' to={'skins'}>skins</Link></li>
      </div>
      <div className='navSignup'>
       <Link to={"signin"}><button className='signButton'>Sign in</button></Link>
       <Link to={"logout"}><button className='signButton'>LogOut</button></Link>
      </div>
       {/* <h3 className='userName'>{userData.username}</h3> */}
    </div>
    </>
  )
}

export default Header
