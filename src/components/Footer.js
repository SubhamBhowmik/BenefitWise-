import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <>
      <section >
        <div >
          <footer class="text-center text-lg-start  text-dark">

            <div class="text-center text-lg-start  text-dark" >
              {/* <!-- Section: Social media --> */}
              <section
                class="d-flex justify-content-center justify-content-lg-between "
              >
                {/* <!-- Left --> */}
                <div class="me-5 d-none d-lg-block">

                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right -/-> */}

                {/* <!-- Right --> */}
              </section>
              {/* <!-- Section: Social media --> */}

              {/* <!-- Section: Links  --> */}
              <section class="">
                <div class="container text-center text-md-start mt-5">
                  {/* <!-- Grid row --> */}
                  <div class="row mt-3 pt-190">
                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      {/* <!-- Content --> */}
                      <h6 class="text-uppercase fw-bold mb-4">
                        <img src='./images/BENIFIT WISE.svg' />
                      </h6>
                      <p>We envision a world where employees are highly engaged and very happy at their work. Join us in our journey today!

                      </p>
                      <div className='text-decoration-none'>
                        <a href="" class="me-4 text-reset">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                          <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                          <i class="fab fa-instagram"></i>
                        </a>


                      </div>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class="col-md-2 col-lg-2   mb-4">
                      {/* <!-- Links --> */}
                      <h2 class=" fw-bold ">
                        About
                      </h2>
                      <p>
                        <Link to='/about' class="text-reset  text-decoration-none " >About us</Link>
                      </p>
                      <p>
                        <a href="" class="text-reset  text-decoration-none ">ContactUs</a>
                      </p>
                      <p>
                        <a href="" class="text-reset  text-decoration-none ">Career</a>
                      </p>
                      <p>
                        <a href="" class="text-reset  text-decoration-none ">FAQ</a>
                      </p>
                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 col-lg-2 col-xl-2  mb-4">
                      {/* <!-- Links --> */}
                      <h2 class=" fw-bold mb-2">
                        Legal
                      </h2>
                      <p>
                        <Link to='/privacypolicy' class="text-reset  text-decoration-none " >Privacy Policy</Link>
                      </p>
                      <p>
                        <Link to='/termsandconditions' class="text-reset  text-decoration-none " >Terms and conditions</Link>
                      </p>
                      <p>
                        <Link to='/refundpolicy' class="text-reset  text-decoration-none " >Refund policy</Link>
                      </p>



                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      {/* <!-- Links --> */}

                      <h2 class="text-center fw-bold mb-4">
                        Download Now
                      </h2>
                      <p className=' mx-2 text-muted text-center'>
                        Fast, Simple and Delightful.
                        All it takes is 30 seconds to download.

                      </p>
                      <div className="d-flex row  p-2
       ">
                        <div className="d-flex justify-content-center">
                          <div className='m-2'>
                            <img src="./images/footer/googleapp1.svg" alt="" />
                          </div>
                          <div className='m-2'>
                            <img src="./images/footer/googleapp2.svg" alt="" />
                          </div>

                        </div>


                      </div>


                    </div>
                    {/* <!-- Grid column --> */}
                  </div>
                  {/* <!-- Grid row --> */}
                </div>
              </section>
              {/* <!-- Section: Links  --> */}

              {/* <!-- Copyright --> */}

              {/* <!-- Copyright --> */}

            </div>
          </footer>
        </div>

      </section>
    </>
  )
}

export default Footer