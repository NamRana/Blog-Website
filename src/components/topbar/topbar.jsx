import React from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"
const topbar = () => {
  const user=false;
  return (
    <div className="top">
    <div className='topLeft'>
    <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className='topCenter'>
        <ul className="topList">
            <li className='topListItem'>
            <Link to="/">Home</Link>
            </li>
            <li className='topListItem'>
            <Link to="/about">About</Link> 
            </li>
            <li className='topListItem'>
            <Link to="/contact">Contact</Link>
            </li>
            <li className='topListItem'>
            <Link to="/write">Write</Link></li>
            <li className='topListItem'>{user && "Logout"}</li>
        </ul>
    </div>
    
    <div className='topRight'>
    {
      user?(
    
        <img 
        className='topImage'
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
        ):(
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )
        }
        </div>
        <i className="topSearchIcon fas fa-search"></i>
    </div>
  )
}

export default topbar