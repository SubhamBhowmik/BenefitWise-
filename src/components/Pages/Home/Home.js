import React from 'react'
import Crausal from '../../Crausal'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Homecontianer from './Homecontianer'
import Testimonial from './Testimonial'
import Last from './Last'
import Cradholder from './Cradholder'
import Graycardcontainer from './Graycardcontainer'
import Coloredcardholder from './Coloredcardholder'
import Newhomecard from './Newhomecard'
import Newhomecard2 from './Newhomecard2'
import Prefooter from './Prefooter'
import Homefooter from './Homefooter'

const Home = () => {
    return (


        <>
            <Navbar />
            <Crausal />
            <Newhomecard />
            <Newhomecard2/>
            <Graycardcontainer />
            <Last />
            <Testimonial />
            <Coloredcardholder />
           
           <Prefooter/>
         
            <Homefooter />
        </>
    )
}

export default Home