import React from 'react'
import './contactus.css'
const Contactus = () => {
    return (
        <>
            <div class="pg-pink mb-5 contact-us-container">

                <div className="row mt-5">


                    <div className="col-md-6 p-5 mt-5 d-flex justify-content-center align-items-center">

                        <div className="  align-items-center" id='lets-talk'>
                            <div className=' text-center mt-3'>
                                <h2>Lets Talk to  Sales
                                </h2>
                            </div>
                            <div className=' text-center '>
                                <h2 className='text-violet'>Team</h2>

                            </div>
                        </div>


                    </div>



                    <div className="col-md-6 d-flex justify-content-center border-radiuss mt-5 mb-5 ">
                        <form>
                            <div class="">
                                <div class="border bg-white border-radiuss mt-2 p-4 float-left">
                                    <div class="card-body">

                                        <div class="container">
                                            <form id="contact-form bg-white" role="form">

                                                <div className="text-format text-center border-bottom mb-3">
                                                    <h2 style={{ fontWeight: "600" }}>Contact</h2>
                                                </div>


                                                <div class="controls">

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">

                                                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" First Name " required="required" data-error="Firstname is required." />

                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">

                                                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Last Name " required="required" data-error="Lastname is required." />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mt-3">

                                                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Phone Number" required="required" data-error="Firstname is required." />

                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group  mt-3">

                                                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Work Email " required="required" data-error="Lastname is required." />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mt-3">

                                                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Company Name " required="required" data-error="Firstname is required." />

                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mt-3">

                                                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Designation " required="required" data-error="Lastname is required." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mt-3">

                                                                <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder="No of Employees " required="required" data-error="Firstname is required." />

                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mt-3">

                                                                <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Department" required="required" data-error="Lastname is required." />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="row">

                                                        <div class="form-group mt-3">

                                                            <textarea id="form_message" name="message" class="form-control" placeholder="Tell Us more about your needs" rows="4" required="required" data-error="Please, leave us a message."></textarea>

                                                        </div>





                                                        <div className='text-center'>
                                                            <button className='contact-us-btn text-white'>Contact Us</button>
                                                        </div>





                                                    </div>


                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </form>
                    </div>


                </div>




            </div>


            {/* mdb */}


            {/* <!-- Pills content --> */}

        </>
    )
}

export default Contactus