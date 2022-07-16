import React,{useEffect} from 'react'
import Navbar from "../../Navbar"
import Npscontainer from './Npscontainer'
import Npsheader from './Npsheader'
import Footer from '../../Footer'
const CorporateNps = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
    <>
        <Navbar/>
        <Npsheader/>
        <Npscontainer/>
        <Footer/>
    </>
  )
}

export default CorporateNps