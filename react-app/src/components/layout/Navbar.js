import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-extended blue">
      <div className="nav-wrapper container">
        <a href="#!" className="brand-logo">
          Search<span className="white blue-text r-p">Saver</span>
        </a>
        <ul className="right">
          <li>
            <a
              href="#!"
              className="waves-effect waves-light btn blue modal-trigger"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-modal"
              className="waves-effect waves-light btn blue modal-trigger"
            >
              About
            </a>
          </li>
          <li>
            <a href="#!">
              Logout <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
