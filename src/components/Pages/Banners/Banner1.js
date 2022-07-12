import React from 'react'
import { useHistory } from 'react-router-dom'
import './banner1.css'

const Banner1 = () => {
    const history = useHistory()
    return (
        <>
            <section id='subham'>
                <div className='new-banner' style={{ background: "rgba(253, 150, 68, 0.37)" }} >
                    <div className="banner-overlay">
                        <img className='img-fluid cls3' src="./images/Banners/newbanner1.svg" alt="" />
                        <div className='main-wrap'>
                            <div className='first-div'>
                                <h1>Since you dont know what your</h1>
                                <h1>employ need, stop guessing</h1>
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

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Banner1