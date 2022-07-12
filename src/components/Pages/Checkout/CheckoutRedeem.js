import React, { useEffect } from 'react'
import './checkoutredeem.css'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { useHistory } from 'react-router-dom'
const CheckoutRedeem = () => {

    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <section id='c-r'>
                <div className="parent">

                    <img className="child1" src="./images/Foodcardwallet/violet.svg" alt="" />
                    <img className="child2" src="./images/Foodcardwallet/orange.svg" alt="" />
                    <div className="redeem-coupon">
                        <h1>Redeem <span class="text-orange"> Coupon</span></h1>
                    </div>

                    <div className='cz-wrap'>
                        <div className='firt-div'>
                            <h2>Redemption Process</h2>
                        </div>
                        <div className='second-div'>
                            <h2>Escalation Matrix</h2>
                        </div>
                        <div className='third-div'>
                            <h2>Terms & Conditions</h2>
                        </div>
                    </div>
                </div>


                <div className='list-text-wrap'>
                    <div className="list-text">
                        <ul class="a">
                            <li> Click on the redemption link to open the applicable catalogue: https://myntraapp.onelink.me/1L28/rupay21</li>
                            <li> Select the products you wish to purchase from the catalog</li>
                            <li> Enter the coupon code in “Apply coupon” tab in the cart page to avail the discount.</li>

                        </ul>
                    </div>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className='c-r-last'>
                        <div className='first-div d-flex justify-content-center'>
                            <img src="./images/Foodcardwallet/c-r-pizza-hut.svg" alt="" />
                        </div>
                        <div className='second-div'>
                            <p>Extra Flat Rs 400 discount on a min buy of Rs 2099 on select styles on Myntra</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className='kada'>
                                <h5>AHGRTUOPQ22ER12</h5>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <div className='tap-btn' onClick={() => { history.push('/checkoutpage1') }}>
                                <h2>Tap to copy code</h2>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
            <Footer />
        </>
    )
}

export default CheckoutRedeem