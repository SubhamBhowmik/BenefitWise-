import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { useHistory } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
const Flipcard = ({card}) => {
  const [isFlipped, setisFlipped] = useState(false)
  const handleClick = () => {
    setisFlipped(!isFlipped)
  }
  const history=useHistory()

  return (
    <>


      {/* css in cradholder.css/ */}
 
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="home-card-container  hover-zoom hover-shadow ripple hover-overlay"  onClick={handleClick}>
            <div className='bg-pink up'>
              <img src={card.img} alt="" />

              <div className='h5-wrap'>
                <h5>{card.title1}</h5>
                <h5>{card.title2}</h5>
              </div>

            </div>
            <div className='mid'>
              <p className='text-dark text-muted'>Encourage your employees by giving seemless.</p>
            </div>
            <div className='low d-flex flex-row-reverse '>
              <button className='more-btn '   smooth={true} duration={500} onClick={()=>{history.push('/solutions#cz')}}  >More</button>
            </div>
          </div>
          {/* back */}
          <div className='home-card-container shadow' onClick={handleClick}>
         

                
                <div className='back-container' >
                  <p className='text-dark text-muted' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Q
               
                     
                  </p>
              
               
              </div>
        
          </div>
        </ReactCardFlip>






    </>
  )
}

export default Flipcard