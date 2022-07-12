import React from 'react'
import './newhomecard.css'
import NewFlip from './NewFlip'
import NewHcard from '../../Cardbox/New/NewHcard'
const Newhomecard = () => {
  const card1 = {
    img: "./images/cardholder/left1.png",
    title1: "Channel",
    title2: "promotion programs",
    subtitle: "Encourage your employees by giving seemless.",
    bg: " rgba(231, 21, 8, 0.36)"

  }
  const card2 = {
    img: "./images/cardholder/right1.png",
    title1: "Corporate",
    title2: "gifting",
    subtitle: "Encourage your employees by giving seemless.",
    bg: " rgba(231, 21, 8, 0.36)"
  }
  const card3 = {
    img: "./images/cardholder/1.png",
    title1: "Employee perks ",
    title2: " ",
    subtitle: "Encourage your employees by giving seemless.",
    bg:"rgba(14, 90, 205, 0.36)"
  }
  const card4 = {
    img: "./images/cardholder/2.png",
    title1: "Rewards & recognition ",
    title2: "programme",
    subtitle: "Encourage your employees by giving seemless.",
    bg:"rgba(14, 90, 205, 0.36)"
  }
  const card5 = {
    img: "./images/cardholder/3.png",
    title1: "Food Card",
    title2: "",
    subtitle: "Encourage your employees by giving seemless.",
    bg:"rgba(14, 90, 205, 0.36)"
  }
  return (
    <>
      <section id='homecard' className="pb-5 whole-section">

        <div className="container" >
          <div className='sol-'>
            <div className='text-center'>
              <h1>Solutions for</h1>
              <h1>Marketing and Sales Team</h1>
            </div>

          </div>

          <div className="container"
          >

            <div className="new-card-wrap">
              <NewHcard card={card1} />
              <NewHcard card={card2} />
            </div>
            <div className="new-card-wrap mt-mb-89">
              <NewHcard card={card3} />
              <NewHcard card={card4} />
            </div>
            <div className='third-wrap'>
              <NewHcard card={card5} />
            </div>


          </div>
        </div>


      </section>

    </>
  )
}

export default Newhomecard