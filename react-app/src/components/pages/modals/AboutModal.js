import React from 'react';

const AboutModal = () => {
  return (
    <div id="about-modal" className="modal  bottom-sheet">
      <div className="container">
        <div className="modal-content">
          <h4>
            About Search<span className="r-p blue white-text">Saver</span>
          </h4>
          <p>
            Inspired by a job assigment that I got. Right now I have only
            Twitters search API included but maybe later on there will be more
          </p>
          <p>
            Right now is only e Desktop App I didn't had time to work on
            responibility and accessibility but of course that is something in
            my TODO list for this APP and also after I will finish with the
            front-end in React and Backend in NodeJS i will do my best to make
            it with Angular and Vue (maybe Svelte will be there) for testing how
            each framework / library works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
