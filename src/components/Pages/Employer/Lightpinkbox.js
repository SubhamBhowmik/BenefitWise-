import React from 'react'

const Lightpinkbox = ({c}) => {
  return (
   <>
        <div className='em-boxex'>
                    <i class="fa-solid fa-gift fa-4x" style={{ color: "orange" }}></i>
                    <div className='text-cont'>
                        <h3>{c.title}</h3>
                        <h6>{c.detail}</h6>
                    </div>
                </div>
   </>
  )
}

export default Lightpinkbox