import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

const Regiter = () => {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input className='registerInput' type="text" placeholder='Enter your username...'/>

            <label>Email</label>
            <input className='registerInput' type="text" placeholder='Enter your email...'/>

            <label>Password</label>
            <input className='registerInput' type="text" placeholder='Enter your password...'/>
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
        <Link to="/register">Register</Link>
        </button>
    </div>
  )
}

export default Regiter