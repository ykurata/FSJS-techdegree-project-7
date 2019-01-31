import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/horses'>Horses</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
