import React from 'react'
import './orderslide.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ordercard from '../../Cardbox/Ordercard'

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

const Orderslide = () => {
    return (
        <>
            <div className=' container-fluid orderslide- ' id='order-last' >

                <div className='text-format  mb-2'>
                    <div className="col-md-12 uu">

                        <h4> Recomended For you</h4>
                    </div>


                </div>
                <div className="">

                    <Carousel


                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        showDots={false}
                        swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
                    >


                        <Ordercard />
                        <Ordercard />
                        <Ordercard />




                    </Carousel>
                </div>

                <div className='line-container d-flex mt-3 mb-3'>
                    <div className='bg-orange left-line' ></div>
                    <div className='bg-light-gray' ></div>
                </div>




                <div className='hui mb-3'>
                <div className='text mb-3 uu'>
                  <h4>FAQ’S</h4>  
                </div>
                <div className=" justify-content-center text-center">
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='vg'>1.How many types of rewards are there?</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='vg'>2.How can I sign up for a channel promotion program?</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='vg'>3.How do I redeem my Gift Card?</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='vg'>4.How does corporate gifting work?</div>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='violet-dot justify-content-center align-items-center text-center' >
                        <i class="fa-solid  fa-plus" style={{
                            color:
                                "rgba(254, 196, 88, 0.92)"
                        }}></i>
                    </div>
                    <div className='vg'>5.What are the payment options? </div>
                </div>
                </div>
              

            </div>
            </div>

           

            
            
        </>
    )
}

export default Orderslide;