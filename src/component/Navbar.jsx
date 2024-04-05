import React from 'react'
import { Link } from 'react-router-dom'
import logo_rubik from './logo_rubik.jpeg'
import nit from './nit.png'

export default function Navbar() {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img className='fuck' src={nit} alt="" />
          <img className='fuck' src={logo_rubik} alt="" />
            <a class="navbar-brand">Rubiks</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link to="/" style={linkStyle}>Home</Link>
                    
                    </li>
                    <li class="nav-item">
                    <Link  style={linkStyle}>Former Member</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/teams" style={linkStyle}>Teams</Link>
                    </li>
                    <li class="nav-item">
                    <Link style={linkStyle}>Events</Link>
                    </li>
                    <li class="nav-item">
                    <Link  style={linkStyle}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
