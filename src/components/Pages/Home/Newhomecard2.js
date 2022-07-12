import React from 'react'
import NewHcard from '../../Cardbox/New/NewHcard'
import NewFlip from './NewFlip'
import './newhomecard2.css'
const Newhomecard2 = () => {
  
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
            <section id='homecard' className='newhome2 pb-5'  >

                <div className="container" >
                    <div className='sol-'>
                        <div className='text-center'>
                            <h1>Solutions for</h1>
                            <h1>
                                Human Resources(HR)</h1>
                        </div>

                    </div>

                    <div className="container"
                    >

                        <div className="new-card-wrap">
                          <NewHcard card={card3}/>
                          <NewHcard card={card4}/>
                        </div>
                        


                    </div>
                </div>


            </section>
        </>
    )
}

export default Newhomecard2