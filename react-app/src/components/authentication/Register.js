import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register, clearErrors } from '../../actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = ({
  auth: { isAuthenticated, error },
  register,
  clearErrors
}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = user;

  useEffect(() => {
    if (isAuthenticated) {
      onRegister();
    }

    if (
      error ===
      'An account with that email address already exists. Please login to continue.'
    ) {
      M.toast({ html: error });
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const onRegister = () => {
    return <Redirect to="/" />;
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      M.toast({ html: 'Please enter all fields' });
    } else if (password !== confirmPassword) {
      M.toast({ html: 'Passwords do not match' });
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <Fragment>
      <form>
        <div className="input-field col s12">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-field col s12">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-field col s12">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="input-field col s12">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <button
          className="btn blue darken-2 waves-effect waves-light"
          onClick={onSubmit}
        >
          {' '}
          Register{'  '}
          <i className="fas fa-database" />{' '}
        </button>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Register);
