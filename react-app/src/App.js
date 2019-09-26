import React, { useEffect } from 'react';
import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <h1>Search Saver</h1>
    </div>
  );
};

export default App;
