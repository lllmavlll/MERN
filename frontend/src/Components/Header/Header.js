import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logoimg from '../Assets/imgs/LOGO1.png'

const Header = () => {
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
      </div>
    </div>
    </>
  )
}

export default Header
