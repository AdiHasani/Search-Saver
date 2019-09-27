import React from 'react';
import Login from '../authentication/Login';
import Register from '../authentication/Register';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="card mt-2">
        <div className="card-content">
          <h2 className="h2 center">
            Search
            <span className="blue lighten-2 text-primary r-p">Saver</span>
          </h2>
        </div>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab">
              <a href="!#login">Login</a>
            </li>
            <li className="tab">
              <a href="!#register">Register</a>
            </li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="login">
            <Login />
          </div>
          <div id="register">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
