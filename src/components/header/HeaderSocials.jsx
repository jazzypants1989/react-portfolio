import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTwitter, FaInstagram, FaBandcamp} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
  )
}

export default HeaderSocials