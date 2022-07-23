import React from "react";
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import './Crausal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Banner3 from "./Pages/Banners/Banner3";
import Banner2 from "./Pages/Banners/Banner2"
import Banner1 from "./Pages/Banners/Banner1"

const Crausal = () => {

  const history = useHistory()



  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay,Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}

      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      onSwiper={(swiper) => console.log(swiper)}
   
    >
      <SwiperSlide>
        <Banner3/>
      </SwiperSlide>
      <SwiperSlide>
        <Banner2/>
      </SwiperSlide>
      <SwiperSlide>
        <Banner1/>
      </SwiperSlide>


    </Swiper>
  )
}

export default Crausal;