import React,{useEffect} from 'react'
import './newcheckout.css'

import Footer from '../../Footer'
import Nav from '../../Nav/Nav.js'
import { useHistory } from 'react-router-dom'
const Newcheckout = () => {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <Nav/>
            <section id='newout' className='mb-5'>
                <div className="container-fluid">
                    <div className='first-p'>
                        <h1>Your order</h1>
                    </div>
                </div>

                <div className="sec-2-wrap">
                    <div className=''>
                        <div className='gray-box-'>

                        </div>
                        <div className='mt-42 cui'>
                            <h2>Cupon Code</h2>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='kada-bx'>
                                <h5>AHGRTUOPQ22ER12</h5>
                            </div>
                        </div>

                    </div>
                    <div className='left-seg'>
                        <div className='numb'>
                            <h4>Order Number</h4>
                            <h5 className='b'>123XXXXXXXXXX</h5>
                        </div>
                        <div className='numb mt-59'>
                            <h4>Tracking ID</h4>
                            <h5 className='b'>12438720129272</h5>
                        </div>
                        <div className='numb mt-106'>
                            <h4>Payment Status</h4>
                            <h5 className='b' style={{ color: "#008080" }}>Completed</h5>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Newcheckout