import React, { useState, Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      M.toast({ html: 'Please enter all fields' });
    } else if (password !== confirmPassword) {
      M.toast({ html: 'Passwords do not match' });
    } else {
      //TODO send post request to the server
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
          <i className="fas fa-database"></i>{' '}
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
