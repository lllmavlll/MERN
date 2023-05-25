import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='navbar'>
      <div className='Logo'>
      <h1>ma<span>V.GG</span></h1>
      </div>
      <div className='nav-links'>
        <ul>
          <li><Link to={"agents"}>agents</Link></li>
          <li><Link to={'maps'}>maps</Link></li>
          <li><Link to={'weapons'}>weapons</Link></li>
          <li><Link to={'skins'}>skins</Link></li>
        </ul>
      </div>
      <div className='nav-signup'>
       <Link to={"signin"}><button className='nav-signup-btn'>Sign in</button></Link>
      </div>
    </div>
    </>
  )
}

export default Header
