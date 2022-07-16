import React,{useEffect} from 'react'
import Navbar from '../../Navbar'
import Healthcontaner from './Healthcontaner'
import Healthheader from './Healthheader'
import Testimonial from '../Home/Testimonial'
import Healthlast from './Healthlast'
import Footer from '../../Footer'
const Healthinsurance = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
    <>
      <Navbar />
      <Healthheader />
      <Healthcontaner/>
      <Testimonial/>
      <Healthlast/>
      <Footer/>
    </>

  )
}

export default Healthinsurance