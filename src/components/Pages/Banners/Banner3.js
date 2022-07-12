import React from 'react'
import { useHistory } from 'react-router-dom'
import './banner3.css'
const Banner3 = () => {
    const history = useHistory()
    return (
        <>
            <section id='subham'>
                <div className='new-banner' style={{ background: "rgba(128, 0, 128, 0.45)" }} >
                    <div className="banner-overlay">
                        <img className='img-fluid cls1' src="./images/Banners/employee-benefits-for-remote-workforce-removebg-preview 1.svg" alt="" />
                        <div className='main-wrap'>
                            <div className='first-div'>
                                <h1>Do you really know what your</h1>
                                <h1>employ need?</h1>
                            </div>

                            <div className='second-div'>
                                <p>

                                    Let your employees be their own boss. Let your employee choose amoung 500+ online and offline options
                                </p>
                            </div>

                            <div className="third-div">
                                <div className='begun-btn shadow ripple text-white ripple' onClick={() => { history.push('/bookdemo') }}>
                                    <h3> Request Demo<i class="ml-10 fa-solid fa-circle-arrow-right"></i></h3>
                                </div>
                                <div className="sada-btn shadow ripple">
                                    <h3>Free Trial<i class="ml-10 fa-solid fa-circle-arrow-right"></i></h3>
                                </div>
                            </div>

                            <div className=" ">
                                <div className="rec-wrap">
                                    <div className='icon-width by '>

                                        <h4 className="text-white  aws ">Recognized by</h4>
                                    </div>
                                    <div className='icon-width rec  '>
                                        <img className="img-fluid " src="./images/Banners/startup.svg" alt="" />
                                    </div>

                                    <div className='icon-width aws-active'>
                                        <h3 className="text-white  text-sm d-flex" >
                                            <div className="aws"> aws</div>
                                            <div  > <i class="fa-4x fa-solid fa-power-off"></i></div>
                                            <div className="aws">   active</div>


                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Banner3