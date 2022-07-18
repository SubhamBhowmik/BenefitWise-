import React,{useEffect} from 'react'
import Navbarwithavatar from '../../Navbarwithavatar'
import Emploheader1 from './Emploheader1'
import Testimonial from '../Home/Testimonial'
import Emlast1 from './Emlast1'
import Footer from "../../Footer"
import Bookdemo from '../Bookdemo/Bookdemo'
import Nav from '../../Nav/Nav'
const Employer1 = ({signOut}) => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
<>
  <Nav signOut={signOut}/>
  <Emploheader1/>
  <Testimonial/>

  <Emlast1/>
  <Footer/>
</>
  )
}

export default Employer1