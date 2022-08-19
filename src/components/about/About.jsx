import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {BsBuilding} from 'react-icons/bs'
import {RiFolderChartLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me__image">
            <img src={ME} alt="about-me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ years Working</small>
            </article>

            <article className="about__card">
              <BsBuilding className='about__icon'/>
              <h5>Internships</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia non ex totam enim veniam eius praesentium consequuntur, doloribus qui laborum id nobis sapiente repellat natus cum ea aperiam fugit.</p>
          <a href="#contact" className='btn btn-primary'>Message Me</a>
        </div>

      </div>
    </section>
  )
}

export default About