import React,{useEffect} from 'react'
import Footer from '../../Footer'
import Navbarwithavatar from '../../Navbarwithavatar'
import Checkoutcontainer from './Checkoutcontainer'
import Nav from '../../Nav/Nav'
const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
  return (
    <>
        <Nav/>
        <Checkoutcontainer/>
        <Footer/>
    </>
  )
}

export default Checkout