import React from 'react'
import { useHistory } from 'react-router-dom'
import './banner2.css'
const Banner2 = () => {
    const history = useHistory()
    return (
        <section id='subham'>
            <div className='new-banner' style={{ background: "rgba(128, 0, 128, 0.42)" }} >
                <div className="banner-overlay">
                    <img className='img-fluid cls2' src="./images/Banners/newbanner2.svg" alt="" />
                    <div className='main-wrap'>
                        <div className='first-div'>
                            <h1>Are you strugling to retrain and</h1>
                            <h1>attract talent?</h1>
                        </div>

                        <div className='second-div'>
                            <p>

                            Hard-working and dedicated employees do need constant motivation and rewards to stay enthusiastic. We have a variety of options available to reward employees for their talent. 
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

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner2