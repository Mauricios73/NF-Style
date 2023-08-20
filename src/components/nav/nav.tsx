import '../nav/nav.scss'
import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#" className="current">Home</a></li>
        <li><a href="#container-section1">About</a></li>
        <li><a href="#container-section2">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;