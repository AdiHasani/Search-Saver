import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrent } from '../../../actions/searchActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const QueryItem = ({ query, setCurrent }) => {
  const onDelete = e => {
    e.preventDefault();
    M.toast({ html: 'In my TODO list!' });
  };
  const onEdit = e => {
    e.preventDefault();
    e.stopPropagation();

    M.toast({ html: 'In my TODO list!' });
  };
  const onSubmit = e => {
    e.preventDefault();
    setCurrent(query);
    M.toast({ html: `Searching for: ${query.q}` });
    e.stopPropagation();
  };
  return (
    <li className="collection-item">
      <a
        href="#!"
        className={`modal-trigger blue-text`}
        onClick={onSubmit}
        style={{ display: 'inline-block' }}
      >
        {query.q}
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

export default connect(
  null,
  { setCurrent }
)(QueryItem);
