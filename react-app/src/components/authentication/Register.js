import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register, clearErrors } from '../../actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = ({
  auth: { isAuthenticated, error, loading },
  props,
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
      M.toast({ html: 'Registration was successfull' });
      props.history.push('/');
    }
    if (
      error ===
      'An account with that email address already exists. Please login to continue.'
    ) {
      M.toast({ html: error });
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history, clearErrors]);

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
          <i className="far fa-user prefix" />
          <input
            id="reguser_prefix"
            type="text"
            name="name"
            className="validate"
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor="reguser_prefix ">Name</label>
        </div>
        <div className="input-field col s12">
          <i className="fas fa-at prefix"></i>
          <input
            id="email_prefix"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="email_prefix">Email Address</label>
        </div>
        <div className="input-field col s12">
          <i className="fas fa-key prefix"></i>
          <input
            id="regpass_prefix"
            type="password"
            name="password"
            className="validate"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
          <label htmlFor="regpass_prefix">Password</label>
        </div>
        <div className="input-field col s12">
          <i className="fas fa-key prefix"></i>
          <input
            id="regpass2_prefix"
            type="password"
            name="confirmPassword"
            className="validate"
            value={confirmPassword}
            onChange={onChange}
            minLength="6"
            required
          />
          <label htmlFor="regpass2_prefix">Confirm Password</label>
        </div>
        <button
          className="btn blue darken-2 waves-effect waves-light ml-3"
          onClick={onSubmit}
        >
          {' '}
          Register{'  '}
          {loading ? (
            <i className="fas fa-spinner btn-spiner"></i>
          ) : (
            <i className="fas fa-database" />
          )}{' '}
        </button>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  props: props.props
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Register);
