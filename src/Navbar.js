import React from 'react'
import './Navbar.css'
import { FaGlobe, FaProductHunt,} from 'react-icons/fa';
import LogoImage from './images/uber-15-logo-png-transparent-removebg-preview.png'
const Navbar = () => {
  return (
    <>
    
    <nav>
    <div className="navbar-container">
      <div className="logo">
        <img src={LogoImage} alt="Logo" className="logo-img" />
        <div className="menu-item parent">company
    <div className="submenu">
      <div className="submenu-item">company</div>
      <div className="submenu-item">our ofering</div>
      <div className="submenu-item">how uber works</div>
      <div className="submenu-item">global citizenship</div>
      <div className="submenu-item">investor relations</div>
      <div className="submenu-item">blogs</div>
      <div className="submenu-item">careers</div>
      <div className="submenu-item">news</div>
      <div className="submenu-item">updates & new</div>
    </div>
  </div>
        <div className="menu-item">safety</div>
        <div className="menu-item">help</div>
       
      </div>
      <div className="menu-container">
        <div className="menu-item"><FaGlobe className="icon" /></div>
        <div className="menu-item"><FaProductHunt className="icon" /></div>
        <div className="menu-item"><p id='LOGIN'>LOG IN</p></div>
        <div className="menu-item">
          <button>sign up</button>
        </div>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar