import React from 'react'
import './Fwheader.css'
const Fwheader = () => {
    const imageURL = './images/Foodcardwallet/card-img.svg'
    return (
        <section id='pricing'>
            <div class="pri-header ">

                <div class="pri-header-wrapper">


                    <div class="pri-header-left">
                        <h1 class="mt-3 ">Get Amazing <span style={{ color: "red" }}>Offers,</span> </h1>
                        <h1><span style={{ color: "red" }}> Discounts </span> on Food</h1>
                        <p class=" ">
                        Use our services to win amazing offers and discounts on your favourite food items and restaurants!
                        </p>

                        <div className='last-div'>


                        </div>



                    </div>
                    <div class="pri-header-right" style={{ width: "50%" }}>
                        <img src="./images/Foodcardwallet/new-ill.svg" class="img-fluid" alt="Web Development" />
                    </div>
                </div>


            </div>


            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="fw-card "   >
                        <div className="rupay">
                            <img src="./images/Foodcardwallet/RUPAY.svg" alt="" />
                        </div>
                        <div className='content'>
                            <div className='card-number'>
                                <h5>Card  Number</h5>
                            </div>
                            <div className='card-number'>
                                <h5>Card Balance</h5>
                            </div>
                            <div className='expiry-date'>
                                <h5>Expiry date</h5>
                                <img src="./images/Foodcardwallet/Calendar.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='exclusive-offer'>
                <div>
                    <img src="./images/Foodcardwallet/violet.svg" alt="" />
                </div>
           
                <div className='h1-text'><h1>Exclusive <span className='text-violet'>Offers</span> </h1></div>
                <div >
                    <img src="./images/Foodcardwallet/orange.svg" alt="" />
                </div>
            </div>

        </section>

    )
}

export default Fwheader