import React from 'react'
import './Signin.css'
import logo from '../Assets/logos/logo_white.avif'



const Signin = () => {
  return (
    <>
    <div className="bgi">
          <div className="div2">
              <img alt='' src={logo}/>
              <div className="signInContainer">
                  <p className='SHeader'>Sign In</p>
                  <input className='signInputs' name='username' type='text' placeholder='username '/>
                  <br/>
                  <input className='signInputs' name='password' type='password' placeholder='password'/>
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
                 
                 <p className='newUserlink'>new user<a className='signElinks' href='/signup'>signup?</a></p>

                  
              </div>
            
          </div>
      </div>
  </>
  )
}

export default Signin
