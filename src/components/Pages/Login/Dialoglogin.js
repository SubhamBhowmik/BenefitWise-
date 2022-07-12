import React from 'react'

const Dialoglogin = ({handleOtpopen}) => {
  return (
   <>
     <div className='bg-login-main'>
              <div class=" p-md-5 mx-md-4 ">



                <form className='p-5 '>


                  <div className='text-center text-format text-violet mb-5 px-2 '>
                    Login
                  </div>

                  <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Username" required="required" data-error="Firstname is required." />
                  <input id="form_name" type="text" name="name" class="form-control mb-3" placeholder=" Password" required="required" data-error="Firstname is required." />
                  <div class="col">

                    <a href="#!" className='text-decoration-none'>Forgot password?</a>
                  </div>

                  <div className="hover-overlay text-center mt-2  ripple text-decoration-none ripple rounded hover-zoom  border-radiuss">
                    <div id='loginpage'>
                      <button className='my-btn-2 bg-violet text-white' onClick={handleOtpopen}>Login</button>

                    </div>
                  </div>



                  <div class="d-flex align-items-center justify-content-center pb-4">
                    {/* <p class="mb-0 me-2 ">Don't have an account?</p> */}

                  </div>

                </form>

              </div>
            </div>
   </>
  )
}

export default Dialoglogin