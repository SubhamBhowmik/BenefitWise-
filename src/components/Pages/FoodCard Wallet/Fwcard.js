import React from 'react'
import './Fwcard.css'
import { useHistory } from 'react-router-dom'
const Fwcard = () => {
    const history=useHistory()
    return (
        <>
            <div className='d-flex justify-content-center' id='fwcard'>
                <div className="fw-card-box">
                    <div className='first-div'>
                        <div className='expire-card'>

                            <h5> <span style={{ fontWeight: "600" }}>Expires</span> on</h5>
                            <h5>10. Dec 2021</h5>
                        </div>
                        <div className='pizza-hut'>
                            <img src="./images/Foodcardwallet/Pizza_Hut.svg" alt="" />
                        </div>
                    </div>

                    <div className="text-content">
                        <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea
                            iure aspernatur. Qui quia consectetur sit animi eius </p>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='redeem hover-shadow ripple' onClick={()=>{history.push('/checkoutredeem')}}>
                            <h2>Redeem Now</h2>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Fwcard