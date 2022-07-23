import React from 'react'
import './epheader.css'
const Epheader = () => {
  return (
    <>
      <div class="pri-header ep-bg ">

        <div class="pri-header-wrapper">


          <div class="pri-header-left" style={{ width: "50%" }}>

            <div >
              <i class="fa-solid fa-gift fa-4x" style={{ color: "orange" }}></i>
            </div>
            <div className="ep-text ">
              <h1>Enjoy Perks</h1>
              <h1> and amazing discounts
              </h1>
              <h1>like never before.</h1>
            </div>

          </div>
          <div class="pri-header-right" style={{ width: "50%" }}>
            <div className="pade">
              <img className='ep-new-img' src="./images/emloyeeperks/new-hii.svg" alt="" />
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default Epheader