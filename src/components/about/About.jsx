import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward, FaCalculator, FaUsers} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know the man, the myth, the legend...</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__card-icon" />
                <h5>Experience</h5>
                <small>I have none.</small>
              </article>
              <article className="about__card">
                <FaUsers className="about__card-icon" />
                <h5>Clients</h5>
                <small>Nobody has ever wanted to work with me.</small>
              </article>
              <article className="about__card">
                <FaCalculator className="about__card-icon" />
                <h5>Projects</h5>
                <small>Multiple calculators!</small>
              </article>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam consequatur quae aliquid. Necessitatibus, voluptate, veniam cupiditate facere tenetur nostrum aperiam harum expedita odio sed delectus reprehenderit illum. Deleniti, nam!
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
          </div>
      </div>
    </section>
    )
}

export default About