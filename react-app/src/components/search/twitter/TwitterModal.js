import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditQueryModal from './EditQueryItem';
import QueryItem from './QueryItem';
import SelectOptions from './SelectOptions';
import { searchTwitter, clearCurrent } from '../../../actions/searchActions';

const TwitterModal = ({
  userData,
  loading,
  current,
  searchTwitter,
  clearCurrent
}) => {
  const [query, setQuery] = useState({
    q: '',
    result_type: 'popular',
    count: 25
  });
  const { q, result_type, count } = query;

  useEffect(() => {
    if (current !== null) {
      setQuery(current);
      searchTwitter(current);
      clearCurrent();
    }
  }, [current]);

  const onChange = e => setQuery({ ...query, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.stopPropagation();
    if (q === '') {
      M.toast({ html: 'Please enter a query.' });
    } else {
      searchTwitter(query);
      setQuery({
        q: '',
        result_type: 'popular',
        count: 25
      });
    }
  };

  return (
    <div id="twitter-modal" className="modal">
      <div className="container">
        <div className="modal-head">
          <h4 className="center mb-2 mt-2">Search Twitter's tweets</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="q"
                value={q}
                placeholder="Standard tweet search"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col s8 m8 l10">
              <div className="input-field">
                <select
                  name="result_type"
                  value={result_type}
                  className="browser-default"
                  onChange={onChange}
                >
                  <SelectOptions />
                </select>
              </div>
            </div>
            <div className="col s4 m4 l2">
              <div className="input-field">
                <p>
                  <label>
                    <input
                      type="number"
                      name="count"
                      value={count}
                      placeholder="1 to 100"
                      onChange={onChange}
                    />
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <ul className="collection with-header">
            {!loading && userData.queries.length === 0 ? (
              <li className="collection-header">
                <h5 className="center">No saved search queries</h5>
              </li>
            ) : (
              <li className="collection-header">
                <h5 className="center">Recently searched for:</h5>
              </li>
            )}
            {!loading &&
              userData.queries.length !== 0 &&
              userData.queries
                .slice(Math.max(userData.queries.length - 10, 1))
                .reverse()
                .map(query => (
                  <QueryItem query={query.query} key={query._id} />
                ))}
          </ul>
        </div>
        <div className="modal-footer center">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Search Tweets
          </a>
        </div>
      </div>
      <EditQueryModal />
    </div>
  );
};

TwitterModal.propTypes = {
  userData: PropTypes.object.isRequired,
  current: PropTypes.object
};

const mapStateToProps = state => ({
  userData: state.search.data,
  current: state.search.current
});

export default connect(
  mapStateToProps,
  { searchTwitter, clearCurrent }
)(TwitterModal);
