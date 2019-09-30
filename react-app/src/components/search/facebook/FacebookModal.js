import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const FacebookModal = () => {
  const onSubmit = () => {
    M.toast({ html: 'Mail me for good Search endpoint' });
  };

  return (
    <div id="facebook-modal" className="modal">
      <div className="search-container">
        <div className="modal-content center">
          <h4>Facebook API !?</h4>
          <p>
            I will try to add new search API whenever I will have free time, if
            you have a good search endpoints API mail me at adnan@hasani.dev
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookModal;
