import React from 'react';

const TesterModal = () => {
  return (
    <div id="tester-modal" className="modal  bottom-sheet">
      <div className="container">
        <div className="modal-content">
          <h4>
            Spin Search<span className="r-p blue white-text">Saver</span>
          </h4>
          <p>
            If you dont want to create acount then this is a tester account use
            this credentials to Login.
          </p>
          <ul className="mb-3">
            <li>
              email:{' '}
              <span className="blue-text darken-4">tester@hasani.dev</span>
            </li>
            <li>
              password: <span className="blue-text darken-4">1234567</span>
            </li>
          </ul>
          <p>
            This is not a production ready app there are a lot of
            functionalities that are not tested.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TesterModal;
