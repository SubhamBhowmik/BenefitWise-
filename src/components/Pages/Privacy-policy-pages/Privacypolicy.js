import React,{useEffect} from 'react'
import Navbar from '../../Navbar'

import Pcontainer from './Pcontainer'
const Privacypolicy = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
  <>
    <Navbar/>
    <Pcontainer/>
  </>
  )
}

export default Privacypolicy