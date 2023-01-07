import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiFolderChartLine } from 'react-icons/ri'

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
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.5+ years Working</small>
            </article>

            <article className="about__card">
              <BsBuilding className='about__icon' />
              <h5>Internships</h5>
              <small>3+ Completed/Ongoing</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>Hello, I am Shubham Goyal. I am a Full-stack web developer (MERN).
            I was the lead of the Web Development Team of SDC-USICT, GGSIPU.
            Recently, I did an internship at SalesCaptain Company as a Backend Developer. Also I did an an internship at Utkrisht - USICT, GGSIPU under my University Professor in which I built a E-Commerce metaverse mall with AR and VR functionalities.
            You can talk to me about Software Designing and Development.</p>
          <a href="#contact" className='btn btn-primary'>Message Me</a>
        </div>

      </div>
    </section>
  )
}

export default About