import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import Newswiper from './Newswiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import ShopingItemcards from '../../Cardbox/ShopingItemcards';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import ShopingItecards from '../../Cardbox/ShopingItemcards'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

const Epmulticardcarousel = () => {

  return (
    <>
      <div className='mbb-50 pl-64 ' id='monika' >
        <div className=''>
          <div className='first'>

            <i class="fa-solid fa-gift fa-4x" style={{ color: "orange" }}></i>
            <h2>Top Selling Deals</h2>
            <h4>( Additional Discounts )</h4>



          </div>
        </div>
      
           <Newswiper/> 
       
      </div>
    </>
  )
}

export default Epmulticardcarousel;