import React, { useEffect, useState } from 'react'
import './Graycardcontainer.css'

import { Link, Redirect, useHistory } from 'react-router-dom'
import Graycard from './Graycard'
const Graycardcontainer = () => {
  const history = useHistory()
  const [bg1, setbg1] = useState('white')
  const [bg2, setbg2] = useState('black')
  const [state, setstate] = useState(false)

  useEffect(() => {
  setstate(false)
  }, [])
  

  const colorChange = () => {

    setstate(!state);
    switch (state) {
      case true:
        setbg1('black');
        setbg2('white')
        break;
      case false:
        setbg1('white');
        setbg2('black')
        break;


    }




  }





  const graycard = {
    title: " Instant  Activation ",

    details: " Give your employees some extra benefits."
  }
  const graycard1 = {
    title: "One Card",
    img: "./images/gray-card/msg-box.svg",
    details: "Give your employees some extra benefits."
  }
  const graycard2 = {
    title: "Expiry",
    img: "./images/gray-card/alarm.svg",
    details: "Give your employees some extra benefits."
  }
  const graycard4 = {
    title: "100% Security",
    img: "./images/gray-card/sheild.svg",
    details: "Give your employees some extra benefits."
  }
  const graycard3 = {
    title: "  Instant Activation",
    img: "./images/gray-card/power-off.svg",
    details: "Give your employees some extra benefits."
  }
  const graycard5 = {
    title: "Free KYC",
    img: "./images/gray-card/profile.svg",
    details: "Give your employees some extra benefits."
  }
  const graycard6 = {
    title: "Acceptance",
    img: "./images/gray-card/circle-arrow.svg",
    details: "Give your employees some extra benefits."
  }
  return (
    <>
      <section style={{ background: "#F4E8F4" }}>

        <div className="d-flex justify-content-center mt-benefit">
          <div className='bene' ><h1>Benefits For</h1></div>
        </div>

         <div className='text-center m-3'>

          <label class="switch " >
            <input type="checkbox" />
            <span class="slider">
              <div className='switch-text em-wrap'>

                {
                  state ?

                    <div className='switch-text em-wrap '>
                      <h2 className='text-dark  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                      <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                    </div>
                    :
                    <div className='switch-text em-wrap'>
                      <h2 className='text-white  switch-text-font' onClick={() => { setstate(!state) }}>Employee</h2>
                      <h2 className='text-dark switch-text-font' onClick={() => { setstate(!state) }}>Employer</h2>
                    </div>


                }
              </div>


            </span>
          </label>


        </div> 

        {/* <div className='text-center m-3'>

          <label class="switch " onClick={colorChange}>
            <input type="checkbox" />
            <span class="slider">
              <div className='switch-text em-wrap'>

                <div className='mt-2 ' style={{ color: bg1 }}> <h2>Employee</h2></div>
                <div className='mt-2  ml-4  float-right' style={{ color: bg2 }}> <h2>Employee</h2> </div>
              </div>


            </span>
          </label>


        </div> */}

        <div id='gray-card'>
          <div className="container d-flex justify-content-center">
            <div class="gray-grid-container ">
              <div class="gray-item1">
                <Graycard card={graycard1} />

              </div>
              <div class="gray-item2">
                <Graycard card={graycard2} />
              </div>
              <div class="gray-item3">
                <Graycard card={graycard3} />
              </div>
              <div class="gray-item4">
                <Graycard card={graycard4} />
              </div>
              <div class="gray-item5">
                <Graycard card={graycard5} />
              </div>
              <div class="gray-item6">
                <div className="">
                  <Graycard card={graycard6} />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Graycardcontainer