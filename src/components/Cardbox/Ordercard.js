import React from 'react'

const Ordercard = () => {
  return (
    <>
      <div className='text-center'>
        <div className="ordercard-whole-wrap">


          <div className="new-order-card " >
            <button type="button " class=" mt-ml-view order-view-btn hover-overlay hover-zoom hover-shadow ripple" style={{ position: "absolute", }}>View</button>
            <div>
              <img  src="./images/ordersummary/electronics-removebg-preview 4.png" alt="" className='img-fluid' style={{ poistion: "relative" }} />
            </div>


          </div>
          <div className="electro">
          <h6>Electronics</h6>
        </div>
        </div>
       
      </div>



    </>
  )
}

export default Ordercard