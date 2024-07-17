import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
     <div className='loginsignup-container'>
      <h1>Sign Up</h1>
      <div className='loginsignup-feilds'>
        <input type='text' placeholder='Your Name' />
        <input type='email' placeholder='Email Address' />
        <input type='password' placeholder='Password' />
       
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account ?  <Link to="/login"Login><span>Login here</span></Link></p>
      <div className='loginsignup-agree'>
      <input type='checkbox' name='' id='' />
      <p>By continuing, i agree to the terms of use & privacy policy. </p>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup