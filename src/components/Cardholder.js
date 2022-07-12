import React from 'react'
import "./cardholder.css"
const Cardholder = () => {
  const rightheader=` promotion \n programs`;
  const title=`Solutions for`;
  return (
    <>

      <section className='Cardholder' id='cardholder'>
        <div className="cardholder" >

          <div className="wrapper">

            <div className="first-wrapper">
              <div className="headin">
                 <div>{title}</div>
                  <div>Marketing and Sales Team</div>
              </div>
              <div className="flexer">

              
                <div className="right">
                  <div className="card">
                    <div className="imageholder">
                      <img src='./images/cardholder/left1.png' />
                    </div>
                    <div>{rightheader}</div>
                  
                    <p>Corporate gifying <br></br></p>
                    <spane>
                      Encourage your employees by giving seemless.
                    </spane>
                    <div className="btn">
                      <a href='#'>more</a>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="card">
                    <div className="imageholder">
                      <img src='./images/cardholder/right1.png' />
                    </div>
                    <div>{rightheader}</div>
                  
                    <p>Corporate gifying <br></br></p>
                    <spane>
                      Encourage your employees by giving seemless.
                    </spane>
                    <div className="btn">
                      <a href='#'>more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          

          <div className="card-containrr">
               
           <div className="headin">
            <div>{title}</div>
              <span>
               
                Human Resources(HR)
              </span>
            </div>

            
            <div className="card-wrapper">
              <div className="left">
                <div className="card">
                  <div className="imageholder" id='third'>
                    <img src='./images/cardholder/1.png' />
                  </div>
                  <h3>
                    Corporate
                    gifting
                  </h3>
                  <spane>
                    Encourage your employees by giving seemless.
                  </spane>
                  <div className="btn">
                    <a href='#'>more</a>
                  </div>
                </div>
              </div>


              <div className="left">
                <div className="card">
                  <div className="imageholder" id='third'>
                    <img src='./images/cardholder/2.png' />
                  </div>
                  <h3>Channel
                    promotion programs
                  </h3>
                  <spane>
                    Encourage your employees by giving seemless.
                  </spane>
                  <div className="btn">
                    <a href='#'>more</a>
                  </div>
                </div>
              </div>


            </div>


            
            <div className="lower-wrapper" id='lower'>
              <div className="left">
                <div className="card">
                  <div className="imageholder" id='third'>
                    <img src='./images/cardholder/3.png' />
                  </div>
                  <h3>Channel
                    promotion programs
                  </h3>
                  <spane>
                    Encourage your employees by giving seemless.
                  </spane>
                  <div className="btn">
                    <a href='#'>more</a>
                  </div>
                </div>
              </div>

            </div>








          </div>
           


            <div className="headin">
              <span>Watch It</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Cardholder