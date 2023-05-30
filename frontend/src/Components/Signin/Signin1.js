import React from 'react'
import './Signin.css'
import logo from '../Assets/logos/logo_white.avif'
import { NavLink } from 'react-router-dom'



const Signin = () => {
  return (
    <>
    <div className="bgi">
          <div className="div2">
              <img alt='' src={logo}/>
              <div className="signInContainer">
                <form action='/signin' method='post'>
                  <p className='SHeader'>Sign In</p>
                  <input required className='signInputs' autoComplete='off' name='email' type='email' placeholder='email'/>
                  <br/>
                  <input required className='signInputs' autoComplete='off' name='password' type='password' placeholder='password'/>
                  <br/>
                  {/* <ul>
                      <li className='fac'><i class="fa-brands fa-facebook"></i></li>
                      <li className='goo'><i class="fa-brands fa-google"></i></li>
                      <li className='app'><i class="fa-brands fa-apple"></i></li>
                      <li className='xbo'><i class="fa-brands fa-xbox"></i></li>
                  </ul> */}
                  <input className='cbox' type="checkbox"/>
                  <label className='cboxLabel'>Stay signed in</label>
                  <br/>   
                  <button type='submit' className='SignBtnn'>Login</button>
                  <br/>  
                 
                 <p className='newUserlink'>new user <NavLink className='signElinks' to='/signup'>signup?</NavLink></p>
                </form>
              </div>
            
          </div>
      </div>
  </>
  )
}

export default Signin
