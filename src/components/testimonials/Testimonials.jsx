import React from 'react'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'


const data = [
  {
    avatar: Avatar1,
    name: 'SalesCaptain',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore explicabo aliquid beatae cupiditate placeat architecto quis tenetur, rem blanditiis dignissimos optio magnam iure natus sapiente odit officia similique ullam velit totam reprehenderit dolores ut exercitationem! Quis architecto quas sint.'
  },
  {
    avatar: Avatar2,
    name: 'Software Development Cell, Guru Gobind Singh Indraprastha University',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore explicabo aliquid beatae cupiditate placeat architecto quis tenetur, rem blanditiis dignissimos optio magnam iure natus sapiente odit officia similique ullam velit totam reprehenderit dolores ut exercitationem! Quis architecto quas sint.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (

              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>

            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials