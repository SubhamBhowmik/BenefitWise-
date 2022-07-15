import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
import './checkbalance.css'
const CheckBalance = () => {
    const [counter, setCounter] = useState(1);
    const handleIncrement = () => {
        setCounter(counter => counter + 1);
    };

    const [state, setstate] = useState(true)
    const history = useHistory()
    const [open, setOpen] = React.useState(false);
    console.log(open);


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>



       

                        <section id='checkbalance'>
                            <div className='box-'>
                                <div className='semi-box'>
                                    <div className="first">
                                        <h1>Your balance</h1>
                                        <h1>Rs x</h1>
                                        
                                    </div>

                                    <div className='sec'>
                                        <h1>Transfer Details</h1>
                                        <div className='ac-wrap'>
                                            <h3>Account Number</h3>
                                            <h3>123XXXXXXXXX67764</h3>
                                        </div>
                                        <div className='ac-wrap2'>
                                            <h3>IFSC Code</h3>
                                            <h3>123XXXXXXXXX67764</h3>
                                        </div>
                                    </div>

                                    {/* <div className=''>
                                        <div class=" tap-wrap btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-secondary active">
                                                <input type="radio" name="options" id="option1" autocomplete="off" /> <h2>$100</h2>
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="options" id="option2" autocomplete="off" checked /> <h2>$500</h2>
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="options" id="option3" autocomplete="off" /> <h2>$1000</h2>
                                            </label>
                                            <label class="btn btn-secondary">
                                                <input type="radio" name="options" id="option4" autocomplete="off" /> <h2>$2000</h2>
                                            </label>
                                        </div>
                                    </div> */}


                                    <div className="third">
                                        <div><h5>Enter Amount</h5></div>
                                        {/* <div className='quantity'>
                                            <h6>QTY</h6>
                                            <h6 style={{ cursor: "pointer" }} onClick={() => handleIncrement()}>+</h6>
                                            <h6 >{counter}</h6>
                                        </div> */}
                                    </div>

                                    <div className="fourth">
                                        <input type="text" />
                                        <h6>Minimum amount is $100</h6>
                                    </div>

                                    <div className="fift">
                                        <h5>Check out</h5>
                                    </div>


                                </div>
                            </div>
                        </section>

        


        </>
    )
}

export default CheckBalance