import React, { useRef } from 'react'
import './Contact.css'
import { FaMailBulk, FaPhoneAlt, FaFacebookMessenger } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('wowzers_zowzers', 'wowzers-zowzers', form.current, '1FNQdJyRt-daxeXxf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <FaMailBulk className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jessepence@gmail.com</h5>
            <a href="mailto:jessepence@gmail.com" target='_blank'>Send an e-mail!</a>
          </div>
          <div className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" target='_blank'/>
            <h4>Facebook Messenger</h4>
            <h5>jazzypants420</h5>
            <a href="https://m.me/jazzypants420/">Send a Facebook message!</a>
          </div>
          <div className="contact__option">
            <FaPhoneAlt className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>1(502)416-4155</h5>
            <a href="tel:1(502)416-4155">Give me a call!</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='E-mail Address' required />
          <textarea name='message' placeholder='Message' rows='7' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact