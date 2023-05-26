import React from 'react'
import './Signin.css'
import {Link} from 'react-router-dom'
import logo from '../Assets/logos/logo_white.avif'



const Signin = () => {
  return (
    <>
    <div className="bgi">
          <div className="div2">
              <img alt='' src={logo}/>
              <div className="signInContainer">
                  <p>Sign In</p>
                  <input className='signInputs' type='text' placeholder='username '/>
                  <br/>
                  <input className='signInputs' type='password' placeholder='password'/>
                  <br/>
                  <ul>
                      <li className='fac'><i class="fa-brands fa-facebook"></i></li>
                      <li className='goo'><i class="fa-brands fa-google"></i></li>
                      <li className='app'><i class="fa-brands fa-apple"></i></li>
                      <li className='xbo'><i class="fa-brands fa-xbox"></i></li>
                  </ul>
                  <input className='cbox' type="checkbox"/>
                  <label className='cboxLabel'>Stay signed in</label>
                  <br/>   
                  <button className='SignBtnn'>sign in</button>
                  <br/>  
                  <Link className='signElinks'>can't sign in?</Link>
                  <br/>  
                  <Link className='signElinks' to={'signup'}>create account</Link>

                  
              </div>
            
          </div>
      </div>
  </>
  )
}

export default Signin
