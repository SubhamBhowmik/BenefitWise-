import React from 'react'
import './epcontainer.css'
import { InputBase } from '@mui/material';
const Epcontainer = () => {
    return (
        <>
            <section id='ep'>


                <div className="bg1">
                    <div className='container' >

                        <div className=' d-flex justify-content-center text-center'>


                            <div id='hlw'>
                                <div className='text-center perks-text'>
                                    <h1>Perks Balance details</h1>
                                </div>
                                <div className=' top-border'>
                                    <div class="ep-card  hover-shadow hover-shadow " >
                                        <div class="ep-card-body"  >

                                            <img className='ep-crad-top-img' src="./images/gray-card/msg-box.svg" style={{background:"white"}} />
                                            <div className="msg-div">
                                                
                                            </div>
                                            <div className='second-div'>
                                                <div> <h2>Credit Points</h2>  </div>
                                                <div>    <h2>5000 Rs</h2> </div>


                                            </div>
                                            <div className='second-div'>
                                                <div> <h2>Recharge your Wallet</h2>  </div>
                                                <button className='my-btn-x text-white'>Recharge Now</button>


                                            </div>





                                        </div>

                                    </div>
                                    <div className=' rounded-violet-div bg-violet' ></div>
                                </div>
                            </div>





                        </div>
                    </div>


                </div>







                <div className="keep-wrap">
                    <div className="text-center keep ">
                        <h2>Keep using your perk Benefits to redeem your </h2>
                        <h2>favourite gift cards</h2>
                    </div>
                </div>

                <div className="d-flex justify-content-center play ">
                    <img src="./images/emloyeeperks/play.png" alt="" />
                </div>
                <div className="container-fluid mb-5">
                    <div className='bg-src  '>
                        <div class="src-wrap ">
                            <div className='lorem-text' >
                                Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur
                                Lorem ipsum dolor sit amet. 33 internos vitae aut
                            </div>
                            <div class="">
                                <div className=''>
                                    <div class="search-box">

                                        <i class="ico fa-solid fa-magnifying-glass"></i>
                                        <input type="text" placeholder='Search here' />
                                    </div>
                                </div>

                            </div>

                            <div class="" >

                                <button type="submit" class="my-btn-2 text-white hover-shadow ripple " style={{ background: "rgba(128, 0, 128, 0.81)" }}>search here</button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Epcontainer