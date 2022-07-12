import React,{useEffect} from 'react'
import Banner from './Banner'
import Navbarwithavatar from '../../Navbarwithavatar'
import Ordercontainer from './Ordercontainer'
import Orderslide from './Orderslide'
import Footer from '../../Footer'

import Nav from '../../Nav/Nav'
const Ordersummary = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
  return (
   <>
         <Nav/>
        <Banner/>
       <Ordercontainer/>
       <Orderslide/>
       <Footer/>
   </>
  )
}

export default Ordersummary