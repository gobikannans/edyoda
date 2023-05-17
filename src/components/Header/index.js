import React from 'react'
import logo from "../../assets/LOGO.png"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import "./index.css"


function Header() {
  return (
    <main className='nav-bg'>
      <nav className='nav-container'>
        <div className='nav-container-one'>
          <img src={logo} alt="logo" className='logo'/>
          <div className='title-container'>
            <p className='title'>Courses</p>
            <span className='drop-icon'><MdOutlineKeyboardArrowDown /></span>
          </div>
          <div className='title-container'>
            <p className='title'>Programs</p>
            <span className='drop-icon'><MdOutlineKeyboardArrowDown /></span>
          </div>
        </div>
        <div className='nav-container-two'>
          <AiOutlineSearch className='search-icon' size={20}/>
          <p className='title'>Log in</p>
          <button className='join-btn'>JOIN NOW</button>
        </div>
      </nav>
    </main>
  )
}

export default Header