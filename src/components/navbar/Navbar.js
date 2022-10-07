import React from 'react'
import './Navbar.css'

// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.nav-menu');

// menu.addEventListener('click', function(){
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });

export default function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <a href="#" style={{ width: 300 }}>
            <img
              className="logo"
              src="images/Aerophilia-logo.png"
              alt="Aerophilia Logo"
            />
          </a>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
          <u1 className="nav-menu">
            <li>
              <a href="#" className="nav-links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Worshops
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Sponsors
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-links nav-links-btn">
                Login
              </a>
            </li>
          </u1>
        </nav>
      </div>
    </div>
  )
}
