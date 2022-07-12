import React from 'react'
import "./cardholder.css"
const
    Cardholder1 = () => {
        return (
            <>
                <section className='Cardholder1' id='cardholder1'>
                    <div className="cardholder" >
                        <div className="wrapper">


                            <video width="736px" height=" 452px" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />

                            </video>

                            <div className="spantag">
                                <span>Get an easy and quick meaningful  Employee Engagement  orboarding with us for your entire farm</span>
                            </div>
                            <span>How this portal can be helpful to you </span>

                            <div className="flapper-wrapper">
                                <div className="item-container">
                                    <div className="item">

                                        <div className="cards">
                                            <img src="./images/cardholder1/blue.png" />
                                        </div>
                                        <div className="cards">
                                            <img src="./images/cardholder1/red.png" />
                                        </div>
                                    </div>
                                    <div className="item1">

                                        <div className="cards">
                                            <img src="./images/cardholder1/green.png" />
                                        </div>
                                        <div className="cards">
                                            <img src="./images/cardholder1/yellow.png" />
                                        </div>
                                    </div>
                                    <div className="item">

                                        <div className="cards">
                                            <img src="./images/cardholder1/purple.png" />
                                        </div>
                                        <div className="cards">
                                            <img src="./images/cardholder1/blue.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="headin tect">
                                <span>Benefits For</span>
                            </div>



                            <div className="switch">
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>

                            <div className="compo-wrapper" id="compo">
                                <div className="compo-conatainer">
                                    <div className="compo-col">
                                        <div className="items">
                                            <h1>item1</h1>
                                        </div>
                                        <div className="items">
                                            <h1>item2</h1>
                                        </div>
                                    </div>
                                    <div className="compo-col">
                                        <div className="items">
                                            <h1>item3</h1>
                                        </div>
                                        <div className="items">
                                            <h1>item4</h1>
                                        </div>
                                    </div>
                                    <div className="compo-col">
                                        <div className="items">
                                            <h1>item3</h1>
                                        </div>
                                        <div className="items">
                                            <h1>item4</h1>
                                        </div>
                                    </div>

                                </div>
                            </div>





                        </div>

                    </div>
                </section>
            </>
        )
    }

export default Cardholder1