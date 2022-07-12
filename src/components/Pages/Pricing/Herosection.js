import React from 'react'
import { Link } from 'react-router-dom'
import Detailplan from './Detailplan'
import './herosection.css'
const Herosection = () => {
    return (
        <>

            <section id='pricing'>
                <div class="pri-header ">
                    
                        <div class="pri-header-wrapper">


                            <div class="pri-header-left">
                                <h1 class="mt-3 "> <strong>Choose the best</strong></h1>
                                <h1>out of it</h1>
                                <p class=" ">
                                    Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur.
                                    Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur.
                                </p>
                              
                                <div className='last-div'>

                                    <button class="border-0  text-white hover-overlay hover-zoom hover-shadow ripple  ">
                                      
                                            Get Started For Free
                                     
                                    </button>

                                </div>



                            </div>
                            <div class="pri-header-right" style={{width:"50%"}}>
                                <img src="./images/pricing/1.svg" class="img-fluid"  alt="Web Development" />
                            </div>
                        </div>
                   

                </div>
            </section>




        </>
    )
}

export default Herosection