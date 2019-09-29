import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Preloder from '../layout/Preloder';
import SearchBtn from '../layout/SearchBtn';
import AboutModal from './modals/AboutModal';
import TwitterModal from '../search/twitter/TwitterModal';
import InstagramModal from '../search/instagram/InstagramModal';
import FacebookModal from '../search/facebook/FacebookModal';

import M from 'materialize-css/dist/js/materialize.min.js';

const Search = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h3 className="center">Saved Searches</h3>
        <Preloder />
        <SearchBtn />
        <AboutModal />
        <TwitterModal />
        <InstagramModal />
        <FacebookModal />
      </div>
    </Fragment>
  );
};

export default Search;
