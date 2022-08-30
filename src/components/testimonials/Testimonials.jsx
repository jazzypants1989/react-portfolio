import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, aliquid libero facilis quaerat itaque ex quas nemo sunt rerum?'
  },
  {
    avatar: AVTR2,
    name: 'Dick Buttley',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, aliquid libero facilis quaerat itaque ex quas nemo sunt rerum?'
  },
  {
    avatar: AVTR3,
    name: 'Joe Mohma',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, aliquid libero facilis quaerat itaque ex quas nemo sunt rerum?'
  },
  {
    avatar: AVTR4,
    name: 'Berten Ernie',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reprehenderit, aliquid libero facilis quaerat itaque ex quas nemo sunt rerum?'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What people say about me.</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {
          data.map(({ avatar, name, review }, index) =>  {
          return (
            <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="client avatar one" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )})}
      </Swiper>
    </section>
  )
}

export default Testimonials