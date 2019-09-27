import React from 'react';

const AboutModal = () => {
  return (
    <div id="about-modal" className="modal  bottom-sheet">
      <div className="modal-container">
        <div className="modal-content">
          <h4>
            About Search<span className="r-p blue white-text">Saver</span>
          </h4>
          <p>
            Inspired by a job assigment that I got, Right now I have only
            Twitters search API included but maybe later on there will be more
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
