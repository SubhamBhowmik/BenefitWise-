import React, { useState, useEffect } from 'react';
import { Link,withRouter } from 'react-router-dom';
import './Navigation.css';
import { Avatar } from '@mui/material'
import Fade from 'react'
function Navbar({history}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closemenu = () => setClick(false);



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const getColor=(curr)=>{
    if(history.location.pathname===curr){
     return "#800080"
    }
   }
  return (
    <>
      <nav className='navbarr' id='nav' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closemenu}>
            <img className='nk' src="./images/nav/BENIFIT WISE-green.svg" alt="" />
          </Link>
          <div className=' input-search' id="navbarNav">
            <input type="" className='' placeholder='search' />
            <i class="bi bi-search"></i>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='right--'>
            <ul className={click ? 'nav-menu active ' : 'nav-menu '}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closemenu}>
                  <p>Home</p>
                </Link>
              </li>
              <li className='nav-item '>
                <Link
                  to='/rewards&recognition'
                  className='nav-links'
                  onClick={closemenu}
                >
                  <p>Reward &Recognition</p>
                </Link>
                <div style={{height:"4px",background:getColor('/rewards&recognition')}}></div>
              </li>
              <li className='nav-item'>
                <Link
                  to='/foodcard'
                  className='nav-links'
                  onClick={closemenu}
                >
                  <p>FoodCard </p>
                </Link>
                <div style={{height:"4px",background:getColor('/foodcard')}}></div>
              </li>
              <li className='nav-item'>
                <Link
                  to='/channelincentivisation'
                  className='nav-links'
                  onClick={closemenu}
                >
                  <p>Channel Incentivisation</p>
                </Link>
                <div style={{height:"4px",background:getColor('/channelincentivisation')}}></div>
              </li>
              <li className='nav-item'>
                <Link
                  to='/employeperks'
                  className='nav-links'
                  onClick={closemenu}
                >
                  <p> Employee Perks</p>
                </Link>
                <div style={{height:"4px",background:getColor('/employeperks')}}></div>
              </li>
              <li className='nav-item'>
                <Link
                  to='/B'
                  className='nav-links'
                  onClick={closemenu}
                >
                  <div className="d-flex justify-content-center">
                    <Avatar alt="Remy Sharp" src="" />
                  </div>

                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);