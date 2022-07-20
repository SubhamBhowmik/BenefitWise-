import React, { useState } from 'react'
import Navbar from './Navbar'
import Homecard from './Cardbox/Homecard';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Homecard1 from './Cardbox/Homecard1';
import './Pages/Home/cradholder.css'
import './Pages/Home/Graycardcontainer.css'
// import '../components/Cardbox/coloredcard.css'
// import './Cardbox/graycard.css'
// import './Pages/Home/Graycardcontainer.css'
// import Graycard from './Cardbox/Graycard'
// // import Groupdiv from './Pages/Checkout/Groupdiv';
import './Pages/Home/switchbutton.css'
// import './Pages/Solutions/solutioncontainer.css'
// // import div from '@mui/material/div';
// import divGroup from '@mui/material/divGroup';
// import { Button, makeStyles } from '@mui/material';
// import Footer from './Footer';
import Butttons from './Butttons';
// import Coloredcard from './Cardbox/Coloredcard';
// import Last from './Pages/Home/Last';
import Coloredcard from './Cardbox/Coloredcard'
import Avatar from '@mui/material/Avatar';
import './Pages/Home/Newcardcontainer.css'
import Graycard from './Cardbox/Graycard';
import Flipcard from './Cardbox/Flipcard';
import Flipcard1 from './Cardbox/Flipcard1';
import Flipcard3 from './Cardbox/Flipcard3';
import '../components/Cardbox/Shopingitemcard.css'
import CheckoutRedeem from './Pages/Checkout/CheckoutRedeem';
import Employer1 from './Pages/Employer/Employer1';
import Table from './Table/Table';
import Table2 from './Table/Table2';
import Employer2 from './Pages/Employer2/Employer2';
import LoginDialogOTP from './Pages/Login/LoginDialogOTP';
import Checkoutpage1 from './Pages/Checkout/Checkoutpage1';
import Employer3 from './Pages/Employer3/Employer3';
import Table1 from './Table/Table1';
import Employer4 from './Pages/Employer4/Employer4';
import Privacypolicy from './Pages/Privacy-policy-pages/Privacypolicy';
import Termsandcondition from './Pages/Privacy-policy-pages/Termsandcondition';
import Refundpolicy from './Pages/Privacy-policy-pages/Refundpolicy';
import Newhomecard from './Pages/Home/Newhomecard';
import NewFlip from './Pages/Home/NewFlip';
import ShopingItemcards from './Cardbox/ShopingItemcards';
import NewHcard from './Cardbox/New/NewHcard';
import Nav from './Nav/Nav'
import Ordercard from './Cardbox/Ordercard';
import Lightpinkbox from './Pages/Employer/Lightpinkbox';
import Banner1 from './Pages/Banners/Banner1';
import Banner2 from './Pages/Banners/Banner2';
import Banner3 from './Pages/Banners/Banner3';
import Testimonial from './Pages/Home/Testimonial';
import Cardbox from './Cardbox/Cardbox'
import CheckBalance from './Pages/Checkout/CheckBalance';
import BdHeader from './Pages/Bookdemo/BdHeader';
import Catalog from './Pages/Employer4/Catalog';
import Newcheckout from './Pages/Checkout/Newcheckout';
import Frequentlyasked from './Pages/Employer5/Frequentlyasked';
import Homefooter from './Pages/Home/Homefooter';
import Contact from './Pages/Bookdemo/Contact';
import Newswiper from './Pages/Employee perks/Newswiper';
import NewEpcarousel from './Pages/Employee perks/NewEpcarousel'
import Authaws from './Authaws'
import AuthSignflow from './AuthSignflow/AuthSignflow';

const Demo = () => {
  const c3 = {
    title: "Rewards & Recongnition",
    detail: "Employee hapiness One click away"
  }
  const card1 = {
    img: "./images/cardholder/left1.png",
    title1: "Channel",
    title2: "promotion programs",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card2 = {
    img: "./images/cardholder/right1.png",
    title1: "Corporate",
    title2: "gifting",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card3 = {
    img: "./images/cardholder/1.png",
    title1: "Employee",
    title2: " perks",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card4 = {
    img: "./images/cardholder/2.png",
    title1: "Rewards & recognition ",
    title2: "programme",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card5 = {
    img: "./images/cardholder/3.png",
    title1: "Food Card",
    title2: "",
    subtitle: "Encourage your employees by giving seemless."
  }
  const card = {
    title: "sfgy1",
    title: "tdcvw",
    subtitle: "vynaigy"
  }

  const graycard = {
    title: " Instant  Activation ",

    details: " Give your employees some extra benefits."
  }

  const [state, setstate] = useState(true)
  return (
    <>

      {
        state ?

          <div className='d-flex '>
            <h2 className='text-dark switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
            <h2 className='text-danger switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
          </div>
          :
          <div className='d-flex'>
            <h2 className='text-danger switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
            <h2 className='text-dark switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
          </div>


      }


      {/* <div>
        <section class="" style={{position:"relative",background:"orange"}}>
        <img src="./images/footer/bg.png" className='img-fluid' style={{ width: "100%", position: "absolute" }} alt="" />
          <div class="container text-center text-md-start mt-5">
         
            <div class="row mt-3 pt-190">
           
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
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
             
              <div class="col-md-2 col-lg-2   mb-4">
           
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
           

           
              <div class="col-md-3 col-lg-2 col-xl-2  mb-4">
            
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
           

           
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              

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
           
            </div>
      
          </div>
        </section>
    
      </div> */}

    </>
  )
}

export default Demo