import React from 'react'
import './Nav.css'
import {BsHouse, BsPersonBadge, BsBriefcase, BsPalette, BsMailbox} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a 
      href="#"
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><BsHouse /></a>
      <a href="#about" 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}><BsPersonBadge /></a>
      <a href="#experience"
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}><BsBriefcase /></a>
      <a href="#portfolio"
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' : ''}><BsPalette /></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><BsMailbox /></a>
    </nav>
  )
}

export default Nav