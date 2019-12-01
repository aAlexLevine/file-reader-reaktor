import React from 'react';
import './Header.css'
import Logo from '../images/reaktor logo.jpg'

const Header = () => (
  <div className="header-banner">
    <img
      className="logo" 
      src={Logo}
      alt="" 
      height="50" 
      width="50"/>
  </div>
)

export default Header;