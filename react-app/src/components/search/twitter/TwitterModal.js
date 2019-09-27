import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditQueryModal from './EditQueryItem';
import QueryItem from './QueryItem';
import SelectOptions from './SelectOptions';

const TwitterModal = () => {
  const querys = [];
  let loading = true;

  for (let i = 0; i < 15; i++) {
    querys.push({ text: `Javascript ${i + 1}`, id: i + 1 });
  }
  const onSubmit = () => {
    M.toast({ html: 'Hello world, part 2' });
  };

  return (
    <div id="twitter-modal" className="modal" style={modalStyle}>
      <div className="container">
        <div className="modal-head">
          <h4 className="center mb-2 mt-2">Search Twitter's tweets</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="message"
                value="{message}"
                onChange={onSubmit}
              />
              <label htmlFor="message" className="active">
                Search tweets
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col s8 m8 l10">
              <div className="input-field">
                <select
                  name="tech"
                  value="{tech}"
                  className="browser-default"
                  onChange={onSubmit}
                >
                  <option value="" disabled>
                    Most
                  </option>
                  <SelectOptions />
                </select>
              </div>
            </div>
            <div className="col s4 m4 l2">
              <div className="input-field">
                <p>
                  <label>
                    <input
                      type="text"
                      placeholder="1 to 100"
                      onChange={onSubmit}
                    />
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <ul className="collection with-header">
            <li className="collection-header">
              <h5 className="center">Recently searched for</h5>
            </li>
            {!loading && querys.length === 0 ? (
              <p className="center">No logs to show...</p>
            ) : (
              querys
                .slice(0, 10)
                .map(query => <QueryItem query={query} key={query.id} />)
            )}
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
const modalStyle = {
  width: '75vw',
  maxHeight: '75vh'
};

export default TwitterModal;
