import React from 'react';
import { NavLink } from 'react-router-dom';
// import { GiMagicHat } from 'react-icons/gi';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/math-magicians/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/math-magicians/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/math-magicians/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <h1 className="navHeader">Math Magicians</h1>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id} className="navLink">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
