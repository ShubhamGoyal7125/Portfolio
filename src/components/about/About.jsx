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
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>Hi there! I'm Shubham Goyal, a skilled Full-stack web developer experienced in the MERN Stack. I've successfully developed the official website for GGSIPU while leading the Web Development Team at SDC-USICT, GGSIPU.

As a Backend Developer at SalesCaptain Company, I contributed to the team's success. I also built an impressive E-Commerce metaverse mall with AR and VR functionalities during my internship at Utkrisht - USICT, GGSIPU.

I take pride in being recognized by the Vice Chancellor for my work on the university's annual cultural fest website. With over 250 solved Data Structures and Algorithms questions, I'm dedicated to continuous growth. <b>Let's connect and collaborate on impactful projects.</b> </p>
          <a href="#contact" className='btn btn-primary'>Message Me</a>
        </div>

      </div>
    </section>
  )
}

export default About