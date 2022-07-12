import React,{useEffect} from 'react'
import Em5banner from './Em5banner'
import Nav from '../../Nav/Nav'
import Em5container from './Em5container'
import Table from '../../Table/Table'
import Table2 from '../../Table/Table2'
import Footer from '../../Footer.js'
import Frequentlyasked from './Frequentlyasked'
const Employer5 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
        }, [])
    return (
        <>
            <Nav />
            <Em5banner />
            <Em5container />
            <Table />
            <Table2 />
            <Frequentlyasked/>
            <Footer />
        </>
    )
}

export default Employer5