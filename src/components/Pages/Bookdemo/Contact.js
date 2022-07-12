import React from 'react'
import './Conatact.css'
const Contact = () => {
    return (
        <>

            <div className="d-flex justify-content-center">
                <form id="c-form " role="form" className='card-contact'>

                    <div className=" req text-center border-bottom ">
                        <h2>Request a <span className='text-violet'>Demo</span> </h2>
                    </div>


                    <div class="controls mt-57">

                        <div class="row mt-57">
                            <div class="col-md-6">
                                <div class="form-group mt-57">

                                    <input id="form_name" type="text" name="name" class="form-control " placeholder=" First Name " required="required" data-error="Firstname is required." />

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mt-57">

                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Last Name " required="required" data-error="Lastname is required." />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group  mt-57">

                                    <input id="form_name" type="text" name="name" class="form-control " placeholder=" Phone Number" required="required" data-error="Firstname is required." />

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mt-57 ">

                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder=" Work Email " required="required" data-error="Lastname is required." />
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mt-57">

                                    <input id="form_name" type="text" name="name" class="form-control " placeholder=" Company Name " required="required" data-error="Firstname is required." />

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mt-57">

                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Designation " required="required" data-error="Lastname is required." />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mt-57 ">

                                    <input id="form_name" type="text" name="name" class="form-control " placeholder="No of Employees " required="required" data-error="Firstname is required." />

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group  mt-57">

                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Department" required="required" data-error="Lastname is required." />
                                </div>
                            </div>
                        </div>



                        <div class="row">

                            <div class="form-group  mt-57">

                                <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>

                            </div>











                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='sch-btn-x'>
                                <h3>Schedule Demo</h3>
                            </div>
                        </div>



                    </div>
                </form>
            </div>

        </>
    )
}

export default Contact