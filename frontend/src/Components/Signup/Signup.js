import React from 'react'
// import {Form, Link} from 'react-router-dom'
import './Signup.css'
import logo from '../Assets/logos/logo_white.avif'
import { NavLink } from 'react-router-dom'


const Signup = () => {
  return (
    <>
     <div className="signUpBgi">
          <div className="div2">
              <img alt='' src={logo}/>
              <div className="signInContainer">
                  <p className='SHeader'>Sign up</p>
                  {/* <input className='signInputs' type='text' placeholder='username '/>
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
                  <Link className='signElinks'>create account</Link> */}
                  <form action='/signup' method='post'>
                    <input required className='signInputs' autoComplete='off' name='username' type='text' placeholder='username '/>
                    <br/>
                    <input required className='signInputs' autoComplete='off' name='email' type='email' placeholder='email'/>
                    <br/>
                    <input required className='signInputs' autoComplete='off' name='password' type='password' placeholder='password '/>
                    <br/>
                    <input required className='signInputs' autoComplete='off' name='cpassword' type='password' placeholder='confirm password'/>
                    <br/>
                    <input type='submit' className='SignBtnn' value='sign up'/>
                    <br/>
                 <p className='newUserlink'> already have an account  <NavLink className='signElinks' to='/signin '> Login?</NavLink></p> 
                 </form>
              </div>
            
          </div>
      </div>
    </>
  )
}

export default Signup
