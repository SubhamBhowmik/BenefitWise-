import React from 'react'
import { Link } from 'react-router-dom'
import Frequentlyasked from '../Employer5/Frequentlyasked'
import './Npscontainer.css'
const Npscontainer = () => {
    return (
        <>
            <section id='healthcontainer'>
                <div className='d-flex justify-content-center'>
                    <div className='f'>
                        <h1>Tax Benefits for Employee under</h1>
                        <h1> Corporate NPS</h1>
                        <div className='mt-29'>
                            <h6>Our customers have got better business ROIs with high eNPS,</h6>
                            <h6> better CSAT, lower attrition & higher sales performance.</h6>
                        </div>

                    </div>

                </div>





                <section id='last' className='mt-161'>
                    {/* css in cradholder.css */}
                    <div className="container">
                        <div className="last-grid-container">
                            <div class="last-item1">
                                <div className=''>
                                    <h1>
                                        Contribution routed through

                                    </h1>
                                    <h1> Employer</h1>

                                </div>

                                <div className="lorem-mt">
                                    <div className='text-box'>

                                    </div>
                                    <h6 class="card-subtitle text1 text-muted">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum, impedit provident repellat adipisci sint maxime recusandae, quod quis expedita aliquam soluta ipsa saepe repudiandae eaque tenetur consequatur omnis voluptatibus!
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
                                <div className="img-box">
                                    <img class=' last-img' src="./images/NPS/1.svg" alt="" />
                                </div>

                            </div>
                            <div class="last-item3">
                                <div className='img-box'>
                                    <img className='' src="./images/NPS/2.svg" alt="" />
                                </div>

                            </div>
                            <div class="last-item4">


                                <div className='mt-45'>
                                    <h1> Employee’s own contribution
                                    </h1>
                                </div>


                                <div className="lorem-mt">
                                    <h6 class="card-subtitle text1 text-muted">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti incidunt tenetur ab molestias ea reiciendis nam dolores amet magni qui quis doloribus aspernatur, distinctio, temporibus id quasi, aperiam possimus pariatur.

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

                        </div>
                    </div>
                </section>
            </section>

            <div className="new-div" id='nps'>
                <div className='firstc' >
                    <h1>Everything to know about Corporate NPS
                    </h1>
                </div>

                <div className='secondc'>
                    <p>
                        Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut nesciunt voluptates et tempore delectus At error
                        Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur.
                        Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut nesciunt voluptates et tempore delectus At error
                        Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur.
                    </p>
                </div>

                <div className='thirdc'>
                    <ol>
                        <li>  Equal contribution from employer and employee  </li>
                        <li>  Un-equal contribution from employer and employee
                        </li>
                        <li>  Contribution either from employer or employee</li>
                    </ol>
                </div>
            </div>



            <div className='seg-div'>
                <div>
                    <h1>Who can join Corporate NPS?</h1>
                </div>

                <div className="f-grid-">
                    <div>

                        <div className="item-g-1">
                            <div className='d-flex justify-content-center'>
                                <img className=' img-bo' src="./images/NPS/g-12.png" alt="" />
                            </div>

                            <h6 className='text-center'>Employer enrolled for Corporate NPS</h6>
                        </div>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <img className='img-bo' src="./images/NPS/g-2.svg" alt="" />
                        </div>

                        <h6 className='text-center'>Indian Citizen including NRI & OCI</h6>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <img className='img-bo' src="./images/NPS/g-3.svg" alt="" />
                        </div>

                        <h6 className='text-center'>Compliant with KYC norms</h6>

                    </div>
                    <div>
                        <div className='d-flex justify-content-center '>
                            <img className='img-bo' src="./images/NPS/g-4.png" alt="" />
                        </div>

                        <h6 className='text-center'>Age: 18 to 70 years</h6>

                    </div>


                </div>

                <div className='mt-173'>
                    <h1>How Corporate NPS works</h1>
                </div>


                <div className='d-flex justify-content-center' >
                    <img className='img-fluid' src="./images/NPS/last.svg" alt="" />
                </div>

                <div className='kji'>
                    <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi eius ut nesciunt voluptates </p>
                </div>
                <Frequentlyasked/>

            </div>
        </>
    )
}

export default Npscontainer