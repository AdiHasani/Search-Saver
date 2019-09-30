import React from 'react';
import PropTypes from 'prop-types';

const SearchItem = ({ resData }) => {
  const onSaveSearch = e => {
    e.preventDefault();
  };

  return (
    <div className="col s12 m6">
      <div className="card search-card white mb-2">
        <div className="card-content blue-text darken-4">
          <p className="card-title blue lighten-5 r-p">
            Twitter username:{' '}
            <span className="black-text">{resData.user.screen_name}</span>
          </p>
          {resData.user.description.length > 0 && (
            <p>
              Description:{' '}
              <span className="black-text">{resData.user.description}</span>
            </p>
          )}
          <p className="mb-2">
            twitter member since:{' '}
            <span className="black-text">{resData.user.created_at}</span>
          </p>
          <p className="black-text">{resData.text}</p>
        </div>

        {resData.tweetURL[0] && (
          <div className="card-action">
            <a
              href={resData.tweetURL[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="waves-effect waves-light blue btn"
            >
              Read more <i className="fas fa-external-link-alt right"></i>
            </a>
          </div>
        )}
        <a
          href="#!"
          onClick={onSaveSearch}
          className="btn-floating halfway-fab waves-effect waves-light btn green"
        >
          <i className="far fa-save" />
        </a>
      </div>
    </div>
  );
};

SearchItem.propTypes = {
  resData: PropTypes.object.isRequired
};

export default SearchItem;
