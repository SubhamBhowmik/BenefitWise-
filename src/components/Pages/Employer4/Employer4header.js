import React from 'react'
import './Employer4header.css'
import Switch from '@mui/material/Switch';
import Catalog from './Catalog';
import { Fade } from 'react-reveal';

const Employer4header = () => {
    return (
        <>
            <section id='em2'>
                <div class="pri-header em-bg4 ">
                    {/* <img className='child-img ' src="./images/employer4/Ellipse 700.svg" alt="" />
                    <img className='child-img-2 ' src="./images/employer4/Ellipse 698.svg" alt="" />
                    <img className='child-img-3 ' src="./images/employer4/Ellipse 700.svg" alt="" /> */}
                    <div class="pri-header-wrapper --new--pad">


                        <div class="pri-header-left " style={{ width: "50%" }}>

                            <img src="./images/employer5/cz.svg" class="img-fluid" alt="Web Development" />


                        </div>
                        <div class="pri-header-rightt" style={{ width: "50%" }}>
                            <div className="text-cont">
                                <Fade right durartion={2000}>
                                    <h1>Employee Perks</h1>
                                    <div className='s-text'>Saving Tax now easily </div>
                                </Fade>


                            </div>
                        </div>
                    </div>


                </div>



                <div className='suno-na' style={{ position: "relative" }}>

                    <div className="suno-na-wrap" style={{ background: "rgba(253, 150, 68, 0.18)" }}>
                        <div className='left-box'>
                            <div>
                                <h1>Give them Choice to choose</h1>
                                <h1>best</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                    . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className=' big-box shadow hover-shadow'>

                            <div className="text-center">
                                <h1>Gift Vouchers</h1>
                            </div>
                            <div className="white-box shadow">
                                <div className="first-wrap">
                                    <div style={{ width: "50%" }}>
                                        <h1 className='cat'>category</h1>
                                        <div className="first">

                                            <h6>Cosmatic</h6>
                                        </div>
                                        <div className="second-">
                                            <h6>Cosmatic</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='cat'>Brand</h1>
                                        <div className="first">

                                            <h6>Lakme</h6>
                                        </div>
                                        <div className="second-">
                                            <h6>Lakme</h6>
                                            <Switch defaultChecked color="warning" />

                                        </div>
                                    </div>
                                </div>



                                <div>
                                    <div className="white-grid-container">
                                        <div>
                                            <img className='cosco ' src="./images/employer4/lakme.svg" alt="" />
                                        </div>
                                        <div>
                                            <img className='cosco' src="./images/employer4/lakme.svg" alt="" />
                                        </div>
                                        <div>
                                            <img className='cosco ' src="./images/employer4/lakme.svg" alt="" />
                                        </div>
                                        <div>
                                            <img className='cosco ' src="./images/employer4/lakme.svg" alt="" />
                                        </div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="">
                    <div className="dashboard-wrap ">
                        <div className="d-img">
                            <img class='img-fluid' src="./images/employer4/dashboard.svg" alt="" />
                        </div>
                        <div className='d-text'>
                            <div className='text-center'>
                                <h1>Dashboard</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="table-wrap">
                    <div className='float-end p-r-58'>
                        <div className="money-saved-grid-container">
                            <div>No Of Employees</div>
                            <div>Platform Visited</div>
                            <div>No Of Transactions</div>
                            <div>Money Saved</div>
                        </div>

                        <div className='info-row'>
                            <div>Subham bhowmik</div>
                            <div>CZsubham</div>
                            <div>300</div>
                            <div>09806</div>
                        </div>

                        <div className='info-row'>
                            <div>Subham bhowmik</div>
                            <div>CZsubham</div>
                            <div>300</div>
                            <div>09806</div>
                        </div>

                        <div className='info-row'>
                            <div>Subham bhowmik</div>
                            <div>CZsubham</div>
                            <div>300</div>
                            <div>09806</div>
                        </div>
                    </div>


                </div>

                <Catalog />














                <div className="d-flex justify-content-center">
                    <div className="data-graph">

                        <img className='img-fluid' src="./images/employer4/data-graph.svg" alt="" />

                        <div className='texty'>
                            <h1>Lets See Quaterly Graphs</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        </div>
                    </div>
                </div>



                <div className="container-fluid">
                    <div className='satisfaction-wrap'>
                        <div className='vio-line'></div>
                        <div className="data-graph-1">
                            <div>
                                <img className='img-fluid' src="./images/employer4/Satisfaction.svg" alt="" />
                            </div>
                            <div className='texty'>
                                <h1>Our 100% Care Guarantee</h1>
                                <p>
                                    Our experts do all the work to help you design a one-of-a-kind gift box for any occasion.


                                </p>
                            </div>
                        </div>
                        <div className='vio-line'></div>
                    </div>



                </div>




                <div className="whole-sam-wrap">

                    <div className="samsung-wrap">
                        <div className='sam-left' >
                            <h1>Providing the Best with 1000+</h1>
                            <h1> Brands </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className='' style={{ width: "50%" }}>
                            <div className='logo-wrap'>  <img className='logo-width' src="./images/employer4/samsung.svg" alt="" />
                                <img className='logo-width' src="./images/employer4/myntra1.svg" alt="" />
                                <img className='logo-width' src="./images/employer4/mama.svg" alt="" /></div>
                            <div className='logo-wrap nicha'>  <img className='logo-width' src="./images/employer4/samsung.svg" alt="" />
                                <img className='logo-width' src="./images/employer4/myntra1.svg" alt="" />
                                <img className='logo-width' src="./images/employer4/mama.svg" alt="" /></div>

                        </div>

                    </div>

                </div>


            </section>







        </>
    )
}

export default Employer4header