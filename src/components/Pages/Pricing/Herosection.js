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
                                <h1 class="mt-3 "> <strong>Customize your plans</strong></h1>
                                <h1></h1>
                                <p class=" ">
                                From quarterly, and yearly plans to customized plans, we have a range of options available for users, Pick what is suitable for your requirements!


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