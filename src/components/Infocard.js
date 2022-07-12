import React from 'react'
import { Link } from 'react-router-dom'
import './infocard.css'
const Infocard = () => {
    const image1 = './images/infocard/1.png'
    const image2 = './images/infocard/2.png'
    const image3 = './images/infocard/3.png'
    return (

        <>
            <div className="infocard" id='infocard'>
                <div className="container">
                    <div class="grid-container">
                        <div class="grid-item">
                            <div id='text'>Amazon based <span id='bg-text' >security</span>  service</div>
                            <span id='small-text'>Lorem ipsum dolor siit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte</span>
                            <div className="digits-container">
                                <div className="digits">
                                    <h5 id='digits'>6.7 M</h5>
                                    <p  id='micro'>Nulla facilisis.</p>
                                </div>
                                <div className="digits">
                                    <h5  id='digits'>56.2 K</h5>
                                    <p  id='micro'>Nulla facilisis.</p>
                                </div>
                                 
                            </div>
                            <div>
                        
                            </div>
                            <a href='#'>Learn More <i class="fa-solid fa-circle-arrow-right"/></a>
                        </div>
                        <div class="grid-item">
                            <img src={image1} alt="" />
                        </div>
                        <div class="grid-item">
                            <img src={image2} alt="" />
                        </div>
                        <div class="grid-item">

                            <div id='text'>
                            Cost  <span id='bg-text' >Benefits</span>
                            </div>
                            <span id='small-text' >Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte</span>
                            <div className="digits-container">
                                <div className="digits">
                                    <h5  id='digits'>6.7 M</h5>
                                    <p  id='micro'>Nulla facilisis.</p>
                                </div>
                                <div className="digits">
                                    <h5  id='digits' >56.2 K</h5>
                                    <p  id='micro'>Nulla facilisis.</p>
                                </div>

                            </div>
                          <a href='#'>Learn More <i class="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                        <div class="grid-item">

                        <div id='text'>
                        <span id='bg-text' >   Scalability</span>
                     
                            </div>
                            <span id='small-text'>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consecte</span>
                            <div className="digits-container">
                                <div className="digits">
                                    <h5  id='digits'>6.7 M</h5>
                                    <p id='micro'>Nulla facilisis.</p>
                                </div>
                                <div className="digits">
                                    <h5  id='digits'>56.2 K</h5>
                                    <p  id='micro'>Nulla facilisis.</p>
                                </div>

                            </div>
                            <a href='#'>Learn More <i class="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                        <div class="grid-item">
                            <img src={image3} alt="" />
                        </div>

                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Infocard