import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

const Navbar = ({ user, logout }) => {
  const onLogout = () => {
    logout();
  };

  return (
    <nav className="nav-extended blue">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          Search<span className="white blue-text r-p">Saver</span>
        </a>
        <ul className="right">
          <li>
            <a href="#about-modal" className="modal-trigger">
              About
            </a>
          </li>
          <li>Hello {user && user.name}</li>
          <li>
            <a href="" onClick={onLogout}>
              <i className="fas fa-sign-out-alt fa-sm" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
