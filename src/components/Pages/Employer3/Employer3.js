import React,{useEffect} from 'react'
import Footer from '../../Footer'
import Navbarwithavatar from '../../Navbarwithavatar'
import Employer3header from './Employer3header'
import Nav from '../../Nav/Nav'
const Employer3 = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
  <>
    <Nav/>
    <Employer3header/>
    <Footer/>
  </>
  )
}

export default Employer3