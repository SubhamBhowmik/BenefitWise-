import React from 'react'
import Navbar from '../../Navbar'
import Herosection from './Herosection'
import Detailplan from './Detailplan'
import Contactus from './Contactus'
import Pricingcardbox from '../../Cardbox/Pricingcardbox'
import Multiswiper from '../../Multiswiper'
import Footer from '../../Footer'
const Pricing = () => {
  return (
   <>
    <Navbar/>
     <Herosection/>
     <Multiswiper/>
     <Detailplan/>
     <Contactus/>
     <Footer/>
   </>
  )
}

export default Pricing