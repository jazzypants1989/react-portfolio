import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Jesse Pence</h1>
        <h5 className='text-light'>I'm a full-stack web developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Look at this handsome guy!" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>

  )
}

export default Header