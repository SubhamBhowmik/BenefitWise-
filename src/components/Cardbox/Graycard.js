import React from 'react'
import './graycard.css'

// css is in graycard.css
const Graycard = ({ graycard }) => {
  return (
    <>

      <div className="gray-card ">

        <div className="gray-cardbox-wrapper">
          <div className='d-flex justify-content-center'>
            <img src="./images/gray-card/circle-arrow.svg" alt="" />
          </div>



          <div className='h4-wrapper ' >
               <h4>Acceptance</h4>
               <h4></h4>
          </div>

          <div className='text-left h4-wrapper'>
            <p>Give your employees some</p>
            <p>extra benefits</p>
          </div>
        </div>



      </div>

    </>
  )
}

export default Graycard