import React, { useState, Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user;

  const onChange = e => {
    console.log('value att:', e.target.value, 'name att:', e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(email);
    if (email === '' || password === '') {
      M.toast({ html: 'Please fill in all fields' });
    } else {
      // TODO calling the action to login
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
          <i className="fas fa-unlock-alt"></i>{' '}
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
