import React from 'react';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const QueryItem = ({ query }) => {
  const onDelete = () => {
    M.toast({ html: 'Deleted query' });
  };
  const onEdit = () => {
    M.toast({ html: 'Edited query' });
  };
  const onSubmit = () => {
    M.toast({ html: 'Submited query' });
  };

  return (
    <li className="collection-item">
      <a
        href="#!"
        className={`modal-trigger blue-text`}
        onClick={onSubmit}
        style={{ display: 'inline-block' }}
      >
        {query.text}
      </a>
      <a
        href="#!"
        onClick={onDelete}
        className="secondary-content red-text darken-4 ml-1"
      >
        <i className="far fa-trash-alt"></i>
      </a>
      <a
        href="#edit-query-modal"
        onClick={onEdit}
        className="secondary-content green-text darken-3"
      >
        <i className="far fa-edit fa-xl"></i>
      </a>
    </li>
  );
};

QueryItem.propTypes = {
  query: PropTypes.object.isRequired
};

export default QueryItem;
