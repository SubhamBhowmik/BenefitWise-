import React from 'react'
import './buttons.css'
const Butttons = () => {
  return (
    <>
      <div className="bg-success">
        <button className='my-btn-2'>Request Demo<i class="ml-10 fa-solid fa-circle-arrow-right"></i></button>
      </div>

      <button className='my-btn-1'>Free Trial<i class="p-2 fa-solid fa-circle-arrow-right"></i></button>
      <button className='get-started-btn'>Get Started<i class="p-2 fa-solid fa-circle-arrow-right"></i></button>


      <h1>switch</h1>

      <label class="toggle">
        <input type="checkbox"/>
          <span class="slider"></span>
      </label>










    </>
  )
}

export default Butttons