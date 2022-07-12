import React from 'react'
import "./Emlast1.css"
const Emlast1 = () => {
    return (
        <>
            <section>

            <div class="text-center p-2 mt-174 ">
          <h1 className='mt-2' style={{
            color:
              'rgba(37, 70, 74, 1)'
          }}>Running successfully with 50+ Indian Companies
          </h1>


        </div>
        <div className=" d-flex text-center flex-row justify-content-around mb-290">
          <img className='imgage-fluid auto-icon-width' src="./images/iconholder/walmart.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/google.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/chase.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/hexawire.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/lafrage.svg" alt="" />

        </div>

            <div className="bg-testimonial py-2">
        <div className="container mt-3">
        
          <div className="d-flex justify-content-center">
            <form className='mt-3 mb-5 mx-3'>
              <div class="">
                <div class="border shadow bg-white border-radiuss m-2 p-4 float-left">
                  <div class="card-body">

                    <div class="container">
                      <form id="contact-form bg-white m-2" role="form">

                        <div className="text-format text-center border-bottom mb-3">
                          <h2>Request a <span className='text-violet'>Demo</span> </h2>
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

                              <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>

                            </div>











                          </div>
                          <div className='d-flex justify-content-center'>
                            <div className='sch-btn  hover-shadow ripple'>
                              <h3>Schedule Demo</h3>
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
            </section>
            <section id='flapo' style={{ background: "rgba(253, 150, 68, 0.06)" }}>
                <div class="pri-header " >

                    <div class="pri-header-wrapper">


                        <div class="pri-header-left" style={{ width: "50%" }}>

                            <h1>
                                Win the loyalty of
                            </h1>
                            <h1>your Network</h1>




                        </div>
                        <div class="pri-header-right p-2" style={{ width: "50%" }}>
                            <img src="./images/employer-1/fuckoff.svg" class="img-fluid" alt="Web Development" />
                        </div>
                    </div>


                </div>

                <div className="three-prg" >
                    <div className='prg-cer'>
                        <h3>Program Certification</h3>
                    </div>
                    <div className='prg-cer'>
                        <h3>Program Certification</h3>
                    </div>
                    <div className='prg-cer'>
                        <h3>Program Certification</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center last-mt-prg pb-5">
                    <div className='prg-cer'>
                        <h3>Program Certification</h3>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Emlast1