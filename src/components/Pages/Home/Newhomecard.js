import React from 'react'
import './newhomecard.css'
import NewFlip from './NewFlip'
import NewHcard from '../../Cardbox/New/NewHcard'
const Newhomecard = () => {
  const card5= {
    img: "./images/cardholder/5.svg",
    title1: "Corporate National ",
    title2: "Pension Scheme",
    subtitle: "It offers a platform to save tax and secure the future for employees and employers.",
    bg: " rgba(231, 21, 8, 0.36)"

  }
  const card4 = {
    img: "./images/cardholder/4.svg",
    title1: "Group insurence",
    title2: "",
    subtitle: " Get Insurance which covers a group of employees within the company",
    bg: " rgba(231, 21, 8, 0.36)"
  }
  const card1 = {
    img: "./images/cardholder/1.png",
    title1: "Employee perks ",
    title2: " ",
    subtitle: " Browse more than 500+ online and offline options to motivate and reward your employees.",
    bg:"rgba(14, 90, 205, 0.36)"
  }
  const card2 = {
    img: "./images/cardholder/2.png",
    title1: "Rewards & recognition ",
    title2: "programme",
    subtitle: " Reward your employees for their dedication and constant efforts.",
    bg:"rgba(14, 90, 205, 0.36)"
  }
  const card3 = {
    img: "./images/cardholder/3.png",
    title1: "Food Card",
    title2: "",
    subtitle: " We offer food cards that can be availed on food applications as well as Food Outlets.",
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