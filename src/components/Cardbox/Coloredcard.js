import React from 'react'
import './coloredcard.css'
const Coloredcard = () => {
    return (
        <>
        
                <div className="colored-card shadow ">



                    <div className="colored-card-overlay " >
                    </div>

                    <div style={{ position: "absolute" }} className=' text-white '>
                        <div className='colored-box-text-wrapper'>
                            <div className=''>
                                Encourage
                                Engagement

                            </div>

                            <div className='d-flex  align-items-center'>
                                <img src="./images/blend/up arrow.png" alt="" className='up-arrow ' />
                                <div className=' '>15%</div>
                            </div>
                        </div>

                    </div>

                </div>
        
        </>
    )
}

export default Coloredcard