import React from 'react'
// import './Iconholder.css'
const Iconholder = () => {
    const icon1 = "./images/iconholder/walmart.svg";
    const icon2 = "./images/iconholder/google.svg";
    const icon3 = "./images/iconholder/chase.svg";
    const icon4 = "./images/iconholder/hexawire.svg";
    const icon5 = "./images/iconholder/lafrage.svg";


    return (

        <>
            <div className="iconholder" id='iconholder'>

                <div className="conatainer">
                    <div className="iconholder-wrapper">

                        <div className='text'>Running successfully with 50+ Indian Companies</div>

                        <div className="icon-wrapper">
                            <div className="icon">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="icon">
                                <img src={icon2} alt="" />
                            </div>
                            <div className="icon">
                                <img src={icon3} alt="" />
                            </div>
                            <div className="icon">
                                <img src={icon4} alt="" />
                            </div>
                            <div className="icon">
                                <img src={icon5} alt="" />
                            </div>
                        </div>

                        <div className="text1">
                            <div> A complete Gifting as a Service based offerings </div>
                            <div>Our  customers have got better business ROIs with high eNPS,</div>
                            <div> better CSAT, lower attrition & higher sales performance.</div>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}

export default Iconholder