import React from 'react'
import './detailplan.css'
const Detailplan = () => {
    return (
        <>

            <div className="container-fluid">
                <div className='text-center text-dark-blue  mb-5'>
                    <div id='text-detail-plan' >
                       <h2>Detailed Plan</h2>
                    </div>
                </div>
 
                    <table class="table text-center ">
                        <thead className='border-0'>
                            <tr className='' style={{ borderTop: "hidden" }}>
                                <th scope="col"><h4></h4></th>
                                <th scope="col " className='bg-table-orange text-dark-blue enter-radiuss' style={{ background: "rgba(253, 150, 68, 0.16)" }}><h4>Enterprise</h4></th>
                                <th scope="col " className=' text-dark-blue ' ><h4>Professional</h4></th>
                                <th scope="col " className=' text-dark-blue'><h4>Growth</h4></th>
                                <th scope="col " className=' text-dark-blue'><h4>Startup</h4></th>
                                <th scope="col " className=' text-dark-blue'><h4>Free</h4></th>



                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center '>
                                <th scope="row" className='mb-2'><h5>30-day free trial</h5>
                                    <h5></h5>
                                </th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>

                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Unlimited number</h5>

                                </th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>

                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Projects
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>

                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row" ><h5 >Support
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5>Custom</h5></td>
                                <td></td>

                                <td ><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Projects
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>

                                <td></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Projects
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>

                                <td></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Projects
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>

                                <td></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                                <td><h5><h5><i class="fas fa-check-circle"></i></h5></h5></td>
                            </tr>
                            <tr className='text-center'>
                                <th scope="row"><h5>Projects
                                </h5></th>
                                <td style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>

                                <td></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                                <td><h5><i class="fas fa-check-circle"></i></h5></td>
                            </tr>
                          
                           
                            <tr className='text-center ' style={{ borderBottom: "hidden" }}>
                                <th scope="row" ><h5 >Projects
                                </h5></th>
                                <td className='last-radiuss' style={{ background: "rgba(253, 150, 68, 0.16)" }}><h5>Custom</h5></td>
                                <td><h5>3</h5></td>

                                <td ><h5>2</h5></td>
                                <td><h5>2</h5></td>
                                <td><h5>-</h5></td>
                            </tr>


                        </tbody>
                    </table>
             

            </div>




            <div>

            </div>
        </>
    )
}

export default Detailplan