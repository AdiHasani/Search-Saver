import React from 'react';

const Preloder = () => {
  return (
    <div className="lds-css">
      <div style={{ width: '100%', height: '100%' }} className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloder;
