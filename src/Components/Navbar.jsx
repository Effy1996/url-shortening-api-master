import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import '../App.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <nav>
        <ul className='nav-list'>
            <img src={logo} alt="" />
            <li>
                <a href="">Features</a>
            </li>
            <li>
                <a href="">Pricing</a>
            </li>
            <li>
                <a href="">Resources</a>
            </li>
        </ul>
        <div>
            <ul className='access'>
                <li>
                    <a href="">Login</a>
                </li>
                <li>
                    <a href="">Sign Up</a>
                </li>
            </ul>
        </div>
      </nav>
      <div className='nav'>
        <img src={logo} alt="" />
        <div className="nav-responsive">
          <i className="bi bi-list menu" onClick={() => setShowNav(prev => !prev)}></i>
          {showNav && (<ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <hr />
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
