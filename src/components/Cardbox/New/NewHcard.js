import React, { useState } from 'react'
import './NewHcard.css'

import ReactCardFlip from 'react-card-flip';
import { useHistory } from 'react-router-dom';
const NewHcard = ({card}) => {
    const [isFlipped, setisFlipped] = useState(false)
    const handleClick = () => {
        setisFlipped(!isFlipped)
    }
    const history = useHistory()
    return (

    
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
     
        <div className="" id='newhcard'  >
                <div className="card-- hover-zoom shadow" >
                    <div className='first-div'>
                        <h1>{card.title1}</h1>
                        <h1>{card.title2}</h1>
                    </div>
                    <div className=' second d-flex justify-content-center'>
                       <div className='img-wrap'>
                       <img className='img-box' src={card.img} alt="" />
                       </div>
                       
                    </div>
                    <div className='third-div '>
                        <p>{card.subtitle}</p>
                    </div>

                    <div className='fourth-div'>
                        <div className='more- shadow ripple ' onClick={()=>{history.push('/solutions#cz')}}><h3>More</h3></div>
                    </div>

                </div>
            </div>
        <div className="" id='newhcard' onClick={handleClick} >
                <div className="card--  shadow" >
                   
                    <div className='fout-div '>
                        <h6>Encourage your employees by giving 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt tempore facilis totam itaque repellendus rem ipsa voluptas labore sit dolorum ex, 
                        delectus qui veniam adipisci suscipit, consequatur in error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi nostrum architecto corporis quasi sit magnam blanditiis vero, natus, explicabo modi. Quam quod tempore
                         incidunt est laudantium beatae maxime ut!
                        </h6>
                       
                    </div>

                </div>
            </div>
      
        </ReactCardFlip>
      
          

       

  


    )
}

export default NewHcard