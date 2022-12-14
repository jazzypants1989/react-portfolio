import React from 'react'
import './Experience.css'
import { FaRegCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div> 
              <h4>HTML</h4>
              <small className='text-light'>I've done it!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>I know it!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Let me show you!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Check it out!</small>
              </div>
              </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>It seems pointless!</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>I've done it!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>I know it!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Let me show you!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Check it out!</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Like a snake!</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience