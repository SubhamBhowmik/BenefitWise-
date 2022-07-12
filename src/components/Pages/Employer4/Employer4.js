import React,{useEffect} from 'react'
import Navbarwithavatar from '../../Navbarwithavatar'
import Employer4header from './Employer4header'
import Testimonial from '../../Pages/Home/Testimonial'
import Footer from '../../../components/Footer'
import './employer4.css'
import Nav from '../../Nav/Nav'
import Catalog from './Catalog'
const Employer4 = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
    <>
      <Nav />
      <Employer4header />
      <Testimonial />
      <div className='mt-152'>
        <div class="text-center p-2 mt-2 ">
          <h1 className='mt-2' style={{
            color:
              'rgba(37, 70, 74, 1)'
          }}>Running successfully with 50+ Indian Companies
          </h1>


        </div>
        <div className=" d-flex text-center flex-row justify-content-around">
          <img className='imgage-fluid auto-icon-width' src="./images/iconholder/walmart.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/google.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/chase.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/hexawire.svg" alt="" />
          <img className='image-fluid auto-icon-width' src="./images/iconholder/lafrage.svg" alt="" />

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Employer4