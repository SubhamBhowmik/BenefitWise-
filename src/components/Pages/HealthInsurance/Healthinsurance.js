import React from 'react'
import Nav from '../../Nav/Nav'
import Healthcontaner from './Healthcontaner'
import Healthheader from './Healthheader'
import Testimonial from '../Home/Testimonial'
import Healthlast from './Healthlast'
import Footer from '../../Footer'
const Healthinsurance = () => {
  return (
    <>
      <Nav />
      <Healthheader />
      <Healthcontaner/>
      <Testimonial/>
      <Healthlast/>
      <Footer/>
    </>

  )
}

export default Healthinsurance