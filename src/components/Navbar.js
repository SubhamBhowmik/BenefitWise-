

import React from 'react'
import { withRouter } from 'react-router-dom';

// styles are stored in button .css
import { Link } from 'react-router-dom'
import './navbar.css'
import LoginDialogpage from './Pages/Login/LoginDialogpage';
const Navbar = ({history}) => {
  console.log(history,'from navbar');
  const getColor=(curr)=>{
   if(history.location.pathname===curr){
    return "#800080"
   }
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " >
        <div class="container-fluid">
          <Link to='/' className='navbar-logo p-2' >

            <img class="benefit-wise-logo" src='./images/BENIFIT WISE.svg' />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse  " id="navbarNav">
            <ul class="navbar-nav   ms-auto ">
              <li class="nav-item mx-5 ">
                <Link to='/' class="nav-link active  "  >
                  <div className='font-weight-500 '>Home</div>
                 
                </Link>
                <div style={{height:"5px",background:getColor('/')}}></div>
              </li>

              <li class="nav-item  mx-5 temp-ml">
                <Link to='/solutions' class="nav-link active "  >Solutions</Link>
                <div style={{height:"5px",background:getColor('/solutions')}}></div>
              </li>
              <li class="nav-item mx-5">
                <Link to='/pricing' class="nav-link active  "  >Pricing</Link>
                <div style={{height:"5px",background:getColor('/pricing')}}></div>
              </li>
              <li class="nav-item mx-5">
                <Link to='/employeeperks' class="nav-link active  " >Employee Perks</Link>
                <div style={{height:"5px",background:getColor('/employeeperks')}}></div>
              </li>
              <li class="nav-item mx-5 ">
                
                <Link to='/foodcardwallet' class=" nav-link active " >Foodcard Wallet</Link>
                <div style={{height:"5px",background:getColor('/foodcardwallet')}}></div>
             
              </li>

              <li class="nav-item temp-mx d-flex align-items-center huya">
              <LoginDialogpage />
              </li>
             
               
              

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default withRouter(Navbar);