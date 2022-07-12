import React,{useEffect} from 'react'
import Navbarwithavatar from '../../Navbarwithavatar'
import Employer2header from './Employer2header'
import Table from '../../Table/Table'
import Table2 from '../../Table/Table2'
import Footer from '../../Footer'
import Nav from '../../Nav/Nav'
const Employer2 = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    }, [])
  return (
<>
    <Nav/>
    <Employer2header/>
    <Table/>
    <Table2/>
    <Footer/>
</>
  )
}

export default Employer2