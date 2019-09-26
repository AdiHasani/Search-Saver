import React from 'react';
import Login from '../authentication/Login';
import Register from '../authentication/Register';

const Auth = () => {
  return (
    <div>
      Authentication page
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
