import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, clearErrors } from '../../actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = ({
  auth: { isAuthenticated, error },
  props,
  login,
  clearErrors
}) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Please provide a valid username and password.') {
      M.toast({ html: error });
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { email, password } = user;

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
          <i className="far fa-user prefix" />
          <input
            id="user_prefix"
            type="email"
            name="email"
            className="validate"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="user_prefix">Email Address</label>
        </div>
        <div className="input-field col s12">
          <i className="fas fa-key prefix mb-2"></i>
          <input
            id="pass_prefix"
            type="password"
            name="password"
            className="validate"
            value={password}
            onChange={onChange}
            required
          />
          <label htmlFor="pass_prefix">Password</label>
        </div>
        <button
          className="btn blue darken-2 waves-effect waves-light ml-3"
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
  auth: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  props: props.props
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
