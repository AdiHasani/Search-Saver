import React from 'react';

const SelectOptions = () => {
  const options = ['Tweets results type', 'popular', 'recent', 'mixed'];

  return options.map((o, i) => (
    <option key={i} value={`${o}`} disabled={i === 0}>
      {o}
    </option>
  ));
};

export default SelectOptions;
