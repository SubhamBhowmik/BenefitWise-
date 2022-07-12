import { Card } from '@mui/material'
import React from 'react'

const Graycard = ({card}) => {
  return (
  <>
      <div id='gray-'>
       <div className='gray-card-'>
          <div className="first">
            <img className='img-fluid' src={card.img} alt="" />
          </div>
          <div className='second-'>
            <h2>{card.title}</h2>
          </div>
          <div>
            <p>{card.details}</p>
          </div>
       </div>
     </div>
  </>
  )
}

export default Graycard