import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, clearErrors } from '../../actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = ({ auth: { isAuthenticated, error }, login, clearErrors }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      onLogin();
    }

    if (error === 'Please provide a valid username and password.') {
      M.toast({ html: error });
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const { email, password } = user;

  const onLogin = () => <Redirect to="/" />;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      M.toast({ html: 'Please fill in all fields' });
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <Fragment>
      <form>
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
          />
        </div>
        <button
          className="btn blue darken-2 waves-effect waves-light"
          onClick={onSubmit}
        >
          {' '}
          Login {'  '}
          <i className="fas fa-unlock-alt" />{' '}
        </button>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
