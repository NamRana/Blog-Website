import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const login = () => {
  return (
    <div className='login'>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" placeholder='Enter your email...'/>

            <label>Password</label>
            <input type="password" placeholder='Enter your password...'/>

            <button className='loginButton'>Login</button>
        </form>

        <button className='loginRegisterButton'>
        <Link to="/register">Register</Link>
        </button>
    </div>
  )
}

export default login