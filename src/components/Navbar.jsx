import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/cv', label: 'Resume' },
  { to: '/volunteerism', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <span>Joshua Mantey</span>
          <em>AI/ML | Data Science | Chemical Engineer</em>
        </NavLink>
        <ul className="nav-menu">
          {links.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-tabs-mobile">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-tab${isActive ? ' active' : ''}`}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
