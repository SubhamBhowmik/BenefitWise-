import React from 'react'
import { useHistory } from 'react-router-dom'
const Homecard1 = ({card}) => {
    const history=useHistory();
  return (

    <>
  <div class="d-flex justify-content-center">

<div className="card-width gradient-custom hover-overlay hover-zoom hover-shadow ripple bg-white align-items-center border-radiuss border shadow" style={{ overflow: "hidden" }}>
    <div className='d-flex justify-content-center bg-light-blue upper-portion '>
        <img src={card.img} alt="" className='card-img-box' />
    </div>
    <div className='mt-2 ml-20 text'>
        <h4 className=''>{card.title1}</h4>
        <h4 className=''>{card.title2}</h4>
        <h6 class="card-subtitle mt-2 text1 px-1 text-muted">{card.subtitle}</h6>



    </div>
    <div className='d-flex flex-row-reverse p-3'>
        <button className='more-btn ' onClick={()=>{history.push('/solutions#cz')}} >More</button>
    </div>
</div>
</div>
    </>
  )
}

export default Homecard1