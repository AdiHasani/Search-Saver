import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Preloder from '../layout/Preloder';

const Search = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h3 className="center">Saved Searches</h3>
        <Preloder />
      </div>
    </Fragment>
  );
};

export default Search;
