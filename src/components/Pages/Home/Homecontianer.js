import React, { useEffect } from 'react'
import Scroll from 'react-scroll'
import '../../Cardbox/coloredcard.css'
import { useLocation } from 'react-router-dom'
import { scroller } from "react-scroll";
import { Link, useHistory } from "react-router-dom";
const ScrollLink = Scroll.Link;

const Homecontianer = () => {

  const history = useHistory()

  return (
    <>
      <section>
        <div class="container-fluid " >
          <div class="text-center p-2 mt-3 ">
            <h1 className='font-weight-bold'>Watch it</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <video class='video-tag' controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="col-md-12  text-center d-flex rounded justify-content-center">
            <div class="col-md-12" >
              <div class="embed-responsive ">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
              </div>

            </div>

          </div>


          <div class="text-center p-2 mt-5 ">
            <h1>Get an easy and quick meaningful  <span class='text-violet'>Employee Engagement</span> </h1>
            <h1>orboarding with us for your entire farm</h1>
            <p className='text-muted font-weight-500'>How this portal can be helpful to you </p>
          </div>


          {/* Blending image sectiom */}

          <section className=''>
            <div className="colored-card-wrapper">
              <div id='content1' className='p-3 faltu-mt'>

                <div className='d-flex justify-content-center'>
                  <div className="colored-card shadow ">



                    <div className="colored-card-overlay " style={{ background: " rgba(15, 70, 153, 0.45)" }}>
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper'>
                        <div className=''>
                        <div>Encourage</div>  
                         <div> Engagement</div>

                        </div>

                        <div className='d-flex  align-items-center'>
                        <div> <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' /></div> 
                          <div><div className='mt-5 '>15%</div></div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div id='content2' className='p-3'>
                <div className='d-flex justify-content-center'>
                  <div className="colored-card shadow ">



                    <div className="colored-card-overlay " style={{ background: "rgba(25, 198, 83, 0.52)" }}>
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper'>
                        <div className=''>
                         <div> Create a culture</div>
                         <div> of appreciation</div>

                        </div>

                        <div className='d-flex  align-items-center'>
                          <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                          <div className='mt-5 '>15%</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div id='content3' className='p-3 faltu-mt'>
                <div className='d-flex justify-content-center'>
                  <div className="colored-card shadow ">



                    <div className="colored-card-overlay " style={{ background: "rgba(221, 38, 121, 0.5)" }}>
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper'>
                        <div className=''>
                         <div> Be a workplace</div>
                         <div> people love to work</div>

                        </div>

                        <div className='d-flex  align-items-center'>
                          <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                          <div className=' mt-5'>15%</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              <div id='content4' className='p-3 faltu-mt' >
                <div className='d-flex justify-content-center'>
                  <div className="colored-card shadow ">



                    <div className="colored-card-overlay " style={{ background: "rgba(178, 24, 14, 0.49)" }}>
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper'>
                        <div className=''>
                        <div>Enhance </div> 
                       <div> efficiency </div>

                        </div>

                        <div className='d-flex  align-items-center'>
                          <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                          <div className='mt-5 '>15%</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div id='content5' className='p-3' >
                <div className='d-flex justify-content-center'>
                  <div className="colored-card shadow ">



                    <div className="colored-card-overlay " style={{ background: "rgba(255, 177, 33, 0.57)" }}  >
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper'>
                      
                       <div>Best ROI on an</div> 
                       <div> incentive programmes </div> 
                       


                        <div className='d-flex  align-items-center'>
                          <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                          <div className='mt-5'>100%</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div id='content6' className='p-3 faltu-mt'>
                <div className='d-flex justify-content-center' >
                  <div className="colored-card shadow " >



                    <div className="colored-card-overlay " style={{ background: "rgba(0, 0, 0, 0.54)" }}  >
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                      <div className='colored-box-text-wrapper' >
                        <div className=''>
                       <div>Nurture</div>
                       <div>innovation</div>

                        </div>

                        <div className='d-flex  align-items-center'>
                          <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                          <div className='mt-5 '>15%</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>

          </section>









        </div>



      </section>




    </>
  )
}

export default Homecontianer