import React from 'react'

import { Avatar } from '@mui/material'
import './Shopingitemcard.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
const ShopingItemcards = () => {
  const history=useHistory()
  return (
    <>
      <div className='' id='shopingitemcard' >
        <div className='mb-vico'>
          <div className='item-card  shadow ' style={{overflow:"hidden" }}>

            <div className='hover-shadow ' style={{  position: "relative", overflow: "hidden" }}>

              <div className='discount-tag text-center tag-div' style={{ position: "absolute" }} >
                <h5 style={{ marginTop: "4px" }}>8% Off</h5>
              </div>
              <div>

              </div>


              <button type="button " class="view-btn  hover-overlay hover-zoom hover-shadow ripple" style={{ position: "absolute", }} onClick={()=>{history.push('/ordersummary')}}
              
               
            >View</button>
              <img  src="./images/items/1.png" alt="" className='shadow ' />


            </div>
          </div>
          <div className='mt-3 myntra-gift-card d-flex justify-content-center' ><h2> Myntra Gift Card</h2></div>

        </div>
      </div>






    </>
  )
}

export default ShopingItemcards;