import React,{useEffect} from 'react'
import Navbar from '../../Navbar'
import BdHeader from './BdHeader'
import Testimonial from '../Home/Testimonial.js'
import Lastcompo from './Lastcompo'
import Footer from '../../Footer'
const Bookdemo = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
    
  return (
   <>
       <Navbar/>
       <BdHeader/>
       <Testimonial/>
       <Lastcompo/>
       <Footer/>
   </>
  )
}

export default Bookdemo