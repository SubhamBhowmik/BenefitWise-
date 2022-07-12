import React from 'react'
import { Link } from 'react-router-dom'

const Last = () => {
  return (
    <>

      <section>
        <div className="container-fluid ">
          {/* 
          <div className="">
            <div class="text-center p-2 mt-5 ">
              <h2 className='mt-2' style={{
                color:
                  'rgba(37, 70, 74, 1)'
              }}>Running successfully with 50+ Indian Companies
              </h2>


            </div>
            <div className=" d-flex text-center flex-row justify-content-around mb-5">
              <img className='imgage-fluid auto-icon-width' src="./images/iconholder/walmart.svg" alt="" />
              <img className='image-fluid auto-icon-width' src="./images/iconholder/google.svg" alt="" />
              <img className='image-fluid auto-icon-width' src="./images/iconholder/chase.svg" alt="" />
              <img className='image-fluid auto-icon-width' src="./images/iconholder/hexawire.svg" alt="" />
              <img className='image-fluid auto-icon-width' src="./images/iconholder/lafrage.svg" alt="" />

            </div>
          </div> */}

          <div class="text-center p-2  complete-mt ">
            <h1 className=' font-50 '> A complete Gifting as a Service</h1>
            <h1 className='font-50'> based offerings
            </h1>


          </div>

          <div class="our-customer-text text-center p-2 subham-mb ">
            <h4>Our customers have got better business ROIs with high eNPS,</h4>
            <h4> better CSAT, lower attrition & higher sales performance.</h4>


          </div>







        </div>
      </section>

      <section id='last' className='mt-3'>
        {/* css in cradholder.css */}
        <div className="container">
          <div className="last-grid-container">
            <div class="last-item1">
              <div className='poi'>
                <h1>
                  Amazon based <span className='text-violet'>security </span></h1>
                <h1>service</h1>
              </div>

              <div className="lorem-mt">
                <h6 class="card-subtitle text1 text-muted">
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                </h6>
              </div>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>


            </div>
            <div class="last-item2">
              <img class=' last-img' src="./images/iconholder/new-cyber.svg" alt="" />
            </div>
            <div class="last-item3">
              <img className='' src="./images/banner/new-pass.svg" alt="" style={{ width: "320px" }} />
            </div>
            <div class="last-item4">



              <h1>Cost <span className='text-violet'>Benefits </span></h1>

              <div className="lorem-mt">
                <h6 class="card-subtitle text1 text-muted">
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                </h6>
              </div>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>


            </div>
            <div class="last-item5">

              <h1>
                <span className='text-violet '>Scalability </span>    </h1>

              <div className="lorem-mt">
                <h6 class="card-subtitle text1 text-muted">
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                  Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte
                </h6>
              </div>
              <div className="k-wrap">
                <div className=' hi'>
                  <h3>6.7M</h3>
                  <p>Nulla facilisis.</p>
                </div>
                <div className=' '>
                  <h3>56.2K</h3>
                  <p>Nulla facilisis.</p>
                </div>
              </div>
              <div>
                <Link class="hover text-decoration-none text-violet learn">Learn More<i class="p-2 fa-solid fa-circle-arrow-right"></i> </Link>

              </div>
            </div>
            <div class="last-item6">
              <img className='last-img ' src="./images/infocard/3.png" alt="" />
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Last