import React, { useEffect } from 'react';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import TesterModal from './modals/TesterModal';

import M from 'materialize-css/dist/js/materialize.min.js';

const Auth = props => {
  useEffect(() => {
    M.AutoInit();
  });

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
              <a href="#login">Login</a>
            </li>
            <li className="tab">
              <a href="#register">Register</a>
            </li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="login">
            <Login props={props} />
          </div>
          <div id="register">
            <Register props={props} />
          </div>
        </div>
        <a
          href="#tester-modal"
          className="btn-floating halfway-fab waves-effect waves-light btn blue modal-trigger"
        >
          <i className="fas fa-door-open" />
        </a>
      </div>
      <TesterModal />
    </div>
  );
};

export default Auth;
