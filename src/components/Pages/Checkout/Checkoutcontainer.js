import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./checkoutcontainer.css"
const Checkoutcontainer = () => {
    const history=useHistory();
    return (
        <>
            <div className="conatainer-fluid p-5">

                <div class="col-md-12 d-flex justify-content-center ">
                    <div class="col-md-6 ">
                        <div class="border-radiuss hover-overlay hover-shadow ripple  shadow gradient-custom" width="200" height="50">
                            <div class="">
                                <div className='d-flex justify-content-center border-radiuss  '>
                                    <img className='image-fluid' src="./images/check/check1.png" alt="" style={{height:"30vh"}}/>
                                </div>
                                <div className=" ko">
                                <div className='d-flex justify-content-center'>
                                <h5 class="card-title  text-center p-1 ">
                                        Thank you so much  for your order
                                    </h5>
                                </div>
                                   
                                
                                    <div className='d-flex justify-content-center p-2'>
                                        <div class="hui-btn hover-overlay hover-zoom hover-shadow ripple">
                                            <h2 className="  text-decoration-none  " onClick={()=>{history.push('checkoutstatus')}}>
                                            Check Status
                                            </h2>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkoutcontainer