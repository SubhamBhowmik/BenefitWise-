import React from 'react'
import { Fade } from 'react-reveal'
import './em5banner.css'
const Em5banner = () => {
    return (
        <>
            <div id='em2'>
                <div class="pri-header em-bg5  ">
                    <img className='child-img-x' src="./images/employer5/Ellipse 700.svg" alt="" />
                    <img className='child-img-2-x' src="./images/employer5/Ellipse 698.svg" alt="" />
                    <img className='child-img-3-x' src="./images/employer5/Ellipse 700.svg" alt="" />
                    <div class="pri-header-wrapper">


                        <div class="pri-header-left" style={{ width: "50%" }}>

                            <img src="./images/employer5/cz.svg" class="img-fluid mb-3" alt="Web Development" />


                        </div>
                        <div class="pri-header-right-x" style={{ width: "50%" }}>
                            <div className="text-cont">
                                <Fade right duration={2500}>
                                    <h1>Channel Incentivisation</h1>
                                    <div className='s-text'>A token of appriciation to your channel partners  </div>
                                </Fade>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Em5banner