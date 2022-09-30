import React from 'react'
import Header from '../../components/header/header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"

const home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
    
    <Posts/>
    <Sidebar/>
    </div>
    </>
  )
}

export default home