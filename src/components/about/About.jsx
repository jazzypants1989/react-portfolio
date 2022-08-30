import React from 'react'
import './About.css'
import ME from '../../assets/peng40.jpeg'
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
                <small>Growing every day!</small>
              </article>
              <article className="about__card">
                <FaUsers className="about__card-icon" />
                <h5>Clients</h5>
                <small>Multiple freelancing clients!</small>
              </article>
              <article className="about__card">
                <FaCalculator className="about__card-icon" />
                <h5>Projects</h5>
                <small>Several calculators!</small>
              </article>
            </div>
            <p>
              Although my experience is very limited at the moment, I am always looking for new opportunities to grow and learn. One look at my Github commit history should be enough to quell any doubts about my determination.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
          </div>
      </div>
    </section>
    )
}

export default About