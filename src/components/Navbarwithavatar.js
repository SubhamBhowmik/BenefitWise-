
import LoginDialogOTP from './Pages/Login/LoginDialogOTP.js'
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import './navavatar.css'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid ">
                    <Link to='/' className='navbar-logo p-2' >

                        <img src='./images/BENIFIT WISE.svg' />
                    </Link>
                    <div className=' navbar-nav nav-item collapse navbar-collapse input-search d-flex row-reverse border-0'  id="navbarNav">
                    <input type="" className='border-radiuss p-2' placeholder='search' />
                    <i class="bi bi-search"></i>
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-auto " id="navbarNav">

                        <ul class="navbar-nav ms-auto  ">


                 
                            <li class="nav-item mx-5 ">
                                <Link to='/' class="nav-link active hover-overlay text-bold ripple rounded hover-zoom  " >Home</Link>
                            </li>
                            <li class="nav-item mx-5">
                                <Link to='/solutions' class="nav-link active hover-overlay ripple rounded hover-zoom  " > Employee perks</Link>              </li>
                            <li class="nav-item mx-5">
                                <Link to='/pricing' class="nav-link active hover-overlay ripple rounded hover-zoom " >FoodCard Wallet</Link>
                            </li>
                         
                            <li class="nav-item mx-5">
                                <Link to='/pricing' class="nav-link active hover-overlay ripple rounded hover-zoom " >About Us</Link>
                            </li>
                            <li class="nav-item mx-5">
                            <Avatar  alt="Remy Sharp" src=""/>
                            </li>
                         
                    
                          
                          
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar