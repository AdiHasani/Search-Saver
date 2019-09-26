import React from 'react'

const Navbar = () => {
  return (
    <nav class="nav-extended blue">
      <div className="nav-wrapper container">
        <a href="#!" className="brand-logo">
          Search<span className="white blue-text r-p">Saver</span>
        </a>
        <ul class="right">
          <li>
            <a
              href="#!"
              class="waves-effect waves-light btn blue modal-trigger"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#!"
              class="waves-effect waves-light btn blue modal-trigger"
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
  )
}

export default Navbar
