import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import { clearSearches } from '../../actions/searchActions';
import PropTypes from 'prop-types';

const Navbar = ({ user, search, logout, clearSearches }) => {
  const onLogout = () => {
    logout();
  };

  const onClearSearch = () => {
    clearSearches();
  };

  return (
    <nav className="nav-extended blue">
      <div className="nav-wrapper container">
        <a href="#!" className="brand-logo">
          Search<span className="white blue-text r-p">Saver</span>
        </a>
        <ul className="right">
          {search.length > 0 && (
            <li>
              <a href="#!" onClick={onClearSearch}>
                Clear Search
              </a>
            </li>
          )}
          <li>
            <a href="#about-modal" className="modal-trigger">
              About
            </a>
          </li>
          <li className="black-text">Hello {user && user.name}</li>
          <li>
            <a href="#!" onClick={onLogout}>
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
  user: state.auth.user,
  search: state.search.search
});

export default connect(
  mapStateToProps,
  { logout, clearSearches }
)(Navbar);
