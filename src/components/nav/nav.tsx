import '../nav/nav.scss'
import React from 'react';
import { Link } from 'react-scroll';

const Nav: React.FC = () => {
  return (
    <ul>
      <li><a href='/' className='current'>Home</a></li>
      <li><Link to="container-section1" smooth={true} duration={500}>About</Link></li>
      <li><Link to="container-section2" smooth={true} duration={500}>Services</Link></li>
      <li><Link to="container-section4" smooth={true} duration={500}>Contact</Link></li>
    </ul>
  );
};

export default Nav;