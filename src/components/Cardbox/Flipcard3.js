import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import './Flipcard3.css'

const Flipcard3 = ({card}) => {

    const [isFlipped, setisFlipped] = useState(false)
  const handleClick = () => {
    setisFlipped(!isFlipped)
  }
  return (
     <div className="flipcard-box">
        <div className="card-">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="home-card-container shadow">
            <div className=' up d-flex' style={{background:'rgba(14, 90, 205, 0.36)'}}>
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
              <button className='more-btn ' onClick={handleClick} >More</button>
            </div>
          </div>
          {/* back */}
          <div className=' shadow' onClick={handleClick}>
         

                
                <div className='px-3' >
                  <p className='text-dark text-muted  ' >
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

        </div>
     </div>
  )
}

export default Flipcard3