import React from 'react'
import Navbar from '../../Navbar'
import { Redirect } from 'react-router-dom'
import  { useState } from 'react'
import Solutionheader from './Solutionheader'
import SolutionContainer from './SolutionContainer'
import Testimonial from '../Home/Testimonial'
import Footer from '../../Footer'
const Solutions = () => {
    const [state, setstate] = useState(false)
    if(state){
        return <Redirect to="/"/>
      }
  return (
  
    <>
        <Navbar/>
        <Solutionheader/>
        <SolutionContainer/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Solutions