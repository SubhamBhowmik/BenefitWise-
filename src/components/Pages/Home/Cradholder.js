import React from 'react'
import { useHistory } from 'react-router-dom'
import Homecard from '../../Cardbox/Homecard'
import Homecard1 from '../../Cardbox/Homecard1'
import Flipcard from '../../Cardbox/Flipcard'
import Flipcard1 from '../../Cardbox/Flipcard1'
import Flipcard3 from '../../Cardbox/Flipcard3'
const Cradholder = () => {
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
    subtitle: " Reward your employees for their dedication and constant efforts"
  }
  const card5 = {
    img: "./images/cardholder/3.png",
    title1: "Food Card",
    title2: "",
    subtitle: "Encourage your employees by giving seemless."
  }
  const history = useHistory()
  return (
    <>

      <section id='second' className='p-3 mt-5' style={{ background: "rgba(179, 24, 14, 0.05)" }}>
        <div className='high text-center'>
          <div><h1>Solutions for</h1></div>
          <div> <h1> Marketing and Sales Team</h1></div>

        </div>
        <div className="container" >

          <div class="second-grid-container">
            <div class="second-item1">
              <Flipcard card={card1} />
            </div>
            <div class="second-item2">
              <Flipcard card={card2} />
            </div>


          </div>


        </div>
      </section>
      <section className='mt-5 p-3' id='second' style={{ background: "rgba(14, 90, 205, 0.05)" }}>
        <div className='high text-center'>
          <div><h1>Solutions for</h1></div>
          <div> <h1>Human Resources(HR)</h1></div>


        </div>
        <div className="container" >

          <div class="second-grid-container">
            <div class="second-item1  ">
              <Flipcard1 card={card3} />
            </div>
            <div class="second-item2">
              <Flipcard1 card={card4} />
            </div>


          </div>


        </div>
      </section>
      {/* <section className='py-2' style={{ background: "rgba(14, 90, 205, 0.05)" }}>
      <div className="container"  >
        <div className='flipcard-down-wrapper'>
          <Flipcard3 card={card5} />
        </div>
      </div>
      </section> */}
     


      <section>
        <div class="text-center p-2 mt-5 mb-5 ">
          <h1 className='font-weight-bold'>Watch it</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <video class='video-tag' controls>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />

          </video>
        </div>

        <div class="get-text mt-5 text-center">
          <h1 >Get an easy and quick meaningful  <span class='text-violet'>Employee Engagement</span> </h1>
          <h1 >orboarding with us for your entire farm</h1>
          <p className='text-muted '>How this portal can be helpful to you </p>
        </div>
      </section>


    </>
  )
}

export default Cradholder