import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';
import Preloder from '../layout/Preloder';
import SearchBtn from '../layout/SearchBtn';
import AboutModal from './modals/AboutModal';
import TwitterModal from '../search/twitter/TwitterModal';
import InstagramModal from '../search/instagram/InstagramModal';
import FacebookModal from '../search/facebook/FacebookModal';
import { getData } from '../../actions/searchActions';
import M from 'materialize-css';
import SearchItem from '../search/twitter/SearchItem';

const Search = ({ userData: { loading, data, search }, getData }) => {
  useEffect(() => {
    getData();
    M.AutoInit();
  }, [getData]);

  if (loading) {
    return <Preloder />;
  } else {
    M.AutoInit();
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        {search.length !== 0 ? (
          <Fragment>
            <h3 className="center">Searches Result</h3>
            <div className="row">
              {search.map(res => (
                <SearchItem resData={res} key={res._id} />
              ))}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h3 className="center">Saved Searches</h3>
            {data.searches.length === 0 ? (
              <p className="center">You don't have saved searches</p>
            ) : (
              data.searches.map(search => <p>Saved Search</p>)
            )}
          </Fragment>
        )}
        <SearchBtn />
        <AboutModal />
        <TwitterModal />
        <InstagramModal />
        <FacebookModal />
      </div>
    </Fragment>
  );
};

Search.propTypes = {
  userData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userData: state.search
});

export default connect(
  mapStateToProps,
  { getData }
)(Search);
