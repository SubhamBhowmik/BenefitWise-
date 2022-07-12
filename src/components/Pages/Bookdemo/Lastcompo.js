import React from 'react'

const Lastcompo = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="text-center p-2 mt-2 ">
          <h1 className='mt-2' style={{
            color:
              'rgba(37, 70, 74, 1)'
          }}>Running successfully with 50+ Indian Companies
          </h1>


        </div>
        <div className=" d-flex text-center flex-row justify-content-around">
          <img className='imgage-fluid auto-icon-width' src="./images/iconholder/walmart.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/google.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/chase.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/hexawire.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/lafrage.svg" alt="" />

        </div>

        <div className="col-md-12 d-flex justify-content-center mt-5 ">

          <div class="col-md-6 ">
            <div class="bg-violet border-radiuss hover-overlay hover-zoom hover-shadow ripple  shadow gradient-custom" width="200" height="50" style={{ border: " 4px solid rgba(253, 150, 68, 0.96)" }}>
              <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple">
                <div className=' border-radiuss hover-overlay hover-zoom hover-shadow ripple d-flex justify-content-center bg-light-blue  '>

                </div>
                <div className="d-flex justify-content-center">
                  <div className="card-body ">
                    <h2 class="card-title text-white text-center
                ">
                      Book A free Demo With
                      <h2>us !</h2>
                    </h2>
                    <div className="text-center">
                      <button class="border-0 bg-white text-dark   hover-overlay hover-zoom hover-shadow ripple rounded">
                        <div className=" text-format   text-decoration-none p-2  ">
                          <h3>Schedule Demo</h3>
                        </div>
                      </button>
                    </div>



                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Lastcompo