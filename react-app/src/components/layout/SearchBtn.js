import React from 'react';

const SearchBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#!"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="fas fa-search"></i>
      </a>
      <ul>
        <li>
          <a
            href="#facebook-modal"
            className="btn-floating facebook-color modal-trigger"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            href="#insta-modal"
            className="btn-floating insta-color modal-trigger"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="#twitter-modal"
            className="btn-floating twitter-color modal-trigger"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchBtn;
