import React,{useEffect} from 'react'
import Navbar from '../../Navbar'
import AboutContainer from './AboutContainer'
import Footer from '../../Footer'

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
  return (
    <>
   <Navbar/>
   <AboutContainer/>
   <Footer/>
    </>

  )
}

export default About