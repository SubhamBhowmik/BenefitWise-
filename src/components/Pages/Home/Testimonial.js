import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cardbox from '../../Cardbox/Cardbox'
import './testimonial.css'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Testimonial = () => {
    return (
        <>
    

            <div className='testimonial  ' style={{ position: "relative" }}>

<div className="col-md-12 text-center  ">
    <div className=' '><h1>Testimonials</h1></div>
    <h3 className=' '>What are customers Say</h3>
</div>
    {/* <div className='testi-circle-logo float-end'>
        <img src="./images/testimonial/logo1.png" alt="" />
    </div> */}

    <Carousel

       ssr={true}
        infinite={true}
   
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={true}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "desktop"]}
    >


        <Cardbox />
        <Cardbox />

        <Cardbox />
        <Cardbox />
    





    </Carousel>


</div>


        </>
    )
}

export default Testimonial