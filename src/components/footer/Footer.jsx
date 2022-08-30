import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTwitter, FaInstagram, FaBandcamp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jovial Penguin, LLC.</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Home</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jpence1989/'>
            <BsLinkedin />
        </a>
        <a target="_blank" rel="noreferrer" href='https://github.com/jazzypants1989/'>
            <FaGithub />
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.twitter.com/JessePence5/'>
            <FaTwitter />
        </a>
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/jazzypants420/'>
            <FaInstagram />
        </a>
        <a target="_blank" rel="noreferrer" href='https://jessepence.bandcamp.com'>
            <FaBandcamp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Jovial Penguin, LLC. All rights reserved.</small>
      </div>
    </footer>
    )
}

export default Footer