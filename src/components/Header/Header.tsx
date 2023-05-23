import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '@/Assets/img/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <Link to="#work" className="nav-link ml-auto">
          WORK
        </Link>
        <Link to="#skills" className="nav-link">
          TECHNICAL SKILLS
        </Link>
        <Link to="#about-me" className="nav-link">
          ABOUT ME
        </Link>
        <Link to="#contact" className="nav-link">
          WORK WITH ME
        </Link>
      </div>
    </header>
  );
};

export default Header;
