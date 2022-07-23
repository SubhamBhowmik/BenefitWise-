import React from 'react'
import { Avatar } from '@mui/material'
import './pricingcardbox.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
const Pricingcardbox = ({pricingcard}) => {
    return (
        <>

            <div className="d-flex justify-content-center">
                <div className=' mb-5  ' style={{ maxWidth: '320px' }}>

                    <MDBCardBody className=''>
                        <Avatar className='border hover-overlay ripple  avatar-margin' style={{ borderRadius: "50%", height: "80px", width: "80px", position: "absolute", marginLeft: "104px" }} src="/broken-image.jpg" />

                        <div className='ripple hover-shadow hover-overlay border shadow border-radiuss ' style={{ overflow: "hidden", marginTop: "37px" }}>




                            <MDBCardTitle className='text-center p-5 text-muted'>{pricingcard.title}</MDBCardTitle>
                            <div className='text-justify  text-muted ' style={{ padding: "40px 20px" }}>
                                <h6>Lorem, ipsum dolor sit s doloremque!
                                    \Lorem, ipsum dolor sit s doloremque!
                                    \Lorem, ipsum dolor sit s doloremque!

                                </h6>
                            </div>

                            <div className='text-center border-radiuss bg-radial- ' style={{ height: "7rem", marginTop: "60px" }}>
                                <h2 className='text-white'>{pricingcard.price}</h2>

                                <div className=" d-flex justify-content-center     align-items-center">
                                    <button className='get-started-btn bg-orange text-white ripple hover-overlay hover-shadow' >Get Started</button>
                                </div>

                            </div>

                        </div>

                    </MDBCardBody>
                </div>

            </div>


        </>
    )
}

export default Pricingcardbox;