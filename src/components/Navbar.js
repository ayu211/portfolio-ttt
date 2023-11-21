import React from 'react'
import logo from '../images/a-portfolio.webp';
// import { Link } from 'react-router-dom';

import './navbar.css';


function Navbar() {
  return (
    <>
    {/* <nav className='container'> */}
      <div className="topnav">
        <img src={logo} alt="Portfolio.." />
        <div className="loginbtn">
            <button>Login</button>
        </div>
      </div>
      {/* </nav> */}
    </>
  )
}

export default Navbar
