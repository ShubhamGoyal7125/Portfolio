import React from 'react'
import {useState} from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {TbMessageCircle} from 'react-icons/tb';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle/></a>
      {/* <a href="#">Home</a>
      <a href="#about">User</a>
      <a href="#experience">Experience</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a> */}
    </nav>
  )
}

export default Nav