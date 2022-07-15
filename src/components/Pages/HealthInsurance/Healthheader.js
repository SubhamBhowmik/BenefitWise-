import React from 'react'
import './Healthheader.css'
const Healthheader = () => {
    return (
        <>
            <section id='health'>
                <div class="pri-header em-bg4 ">
                    {/* <img className='child-img ' src="./images/employer4/Ellipse 700.svg" alt="" />
                    <img className='child-img-2 ' src="./images/employer4/Ellipse 698.svg" alt="" />
                    <img className='child-img-3 ' src="./images/employer4/Ellipse 700.svg" alt="" /> */}
                    <div class="pri-header-wrapper --new--pad">


                        <div class=" " style={{ width: "50%" }}>

                            <img src="./images/healthinsurance/header.svg" class="img-fluid" alt="Web Development" />


                        </div>
                        <div class="right" style={{ width: "50%" }}>
                            <div className="text-cont">
                                <h1>Group Insurance</h1>
                      
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}

export default Healthheader