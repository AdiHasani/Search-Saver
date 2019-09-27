import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SelectOptions from './SelectOptions';

const EditQueryModal = () => {
  const onSubmit = () => {
    M.toast({ html: `Query updated on ${new Date().getTime()}` });
  };

  return (
    <div id="edit-query-modal" className="modal">
      <div className="modal-content">
        <h4>Update your query</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" onChange={onSubmit} />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select name="yes" className="browser-default" onChange={onSubmit}>
              <option value="" disabled>
                Select option
              </option>
              <SelectOptions />
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Update
        </a>
      </div>
    </div>
  );
};

export default EditQueryModal;
