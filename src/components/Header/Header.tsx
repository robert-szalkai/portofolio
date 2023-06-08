import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '@/Assets/img/logo.svg';
import closeIcon from '@/Assets/img/close.svg';

const Header = () => {
  return (
    <header>
      <nav className="header-container">
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" />
        </Link>

        <div className="desktop-links">
          <Link to="#work" className="nav-link">
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

        <div className="mobile-menu-container">
          <input type="checkbox" name="menu" id="menu" className="hidden" />
          <label htmlFor="menu" className="flex items-center">
            <span className="line"></span>
          </label>
          <label htmlFor="menu" className="menu-overlay"></label>

          <ul className="mobile-menu-links">
            <label htmlFor="menu" className="flex justify-end">
              <img src={closeIcon} alt="close" />
            </label>
            <Link to="#work" className="nav-link">
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
