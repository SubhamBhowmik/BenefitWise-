import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const Solutioncontainer = () => {
    const history=useHistory()
    return (

        <>

            <div id='solution'>
                <div className="bg-solution">
                    <div className="solution-overlay">
                        <div className="sol-header" >
                            <div className="header-line display-4 font-weight-bold text-white">
                                <div className='first'>
                                    <h1> Providing <span className='text-orange'>Best Solutions among 100+</span></h1>
                                    <h1>companies</h1>
                                </div>
                            </div>
                            <div className='second'>
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae   </p>
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut erro</p>

                            </div>
                            <div className="thirddd">
                            <button className='my-btn-1' onClick={()=>history.push('/bookdemo')} >Schedule Demo</button>
                            </div>



                        </div>

                    </div>





                </div>
            </div>






        </>
    )
}

export default Solutioncontainer