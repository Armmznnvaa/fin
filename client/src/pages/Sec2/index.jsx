import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./sec2.scss"
const Sec2 = () => {
  return (
    <div>
      <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="bckone">

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bcktwo">

        </div>
      </SwiperSlide>
      
      ...
    </Swiper>
    </div>
  )
}

export default Sec2
