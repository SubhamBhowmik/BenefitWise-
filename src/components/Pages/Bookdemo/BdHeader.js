import React from 'react'
import './bdheader.css'
import Contact from './Contact'
const BdHeader = () => {
  return (
    <>
      <div className="container-fluid " id='bookdemo'>
        <div className="col-md-12 jatan text-center    ">
          <h2>
            Learn how  <span className='text-orange'>Benefit</span><span className='text-violet'>-wise</span> DelIvers Better result
          </h2>
        </div>
        <div className="col-md-12 text-center pad-cont text-justify d-flex justify-content-center ">
          <div class="jatan-p">To strengthen Employer-employee relations and business terms, benefit-wise provide the best services at affordable prices and provides amazing discounts on your favourite restaurant, shopping brands and applications. This rewards and caters for the need of an Employer/employee terms and also benefits business relations. 

          </div>
        </div>
      </div>



      <div className="">

        <div className='book-bg'>
          <div className="gg d-flex justify-content-center" >
            <div className=" " style={{position:"absolute"}}>
              <form className='mt-3 mb-5'>
                <div class="">
                  <div class="border bg-white shadow">
                   

                      <div class="container">
                      <Contact/>

                    </div>


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>



    </>
  )
}

export default BdHeader