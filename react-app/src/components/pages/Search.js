import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Preloder from '../layout/Preloder';
import SearchBtn from '../layout/SearchBtn';
import AboutModal from './modals/AboutModal';
import TwitterModal from '../search/twitter/TwitterModal';
import InstagramModal from '../search/instagram/InstagramModal';
import FacebookModal from '../search/facebook/FacebookModal';

const Search = () => {
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
