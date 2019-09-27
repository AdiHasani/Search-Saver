import React from 'react';

const SelectOptions = () => {
  const options = ['option 1', 'option 2', 'option3'];

  return options.map((o, i) => (
    <option key={i} value={`${o}`}>
      {o}
    </option>
  ));
};

export default SelectOptions;
