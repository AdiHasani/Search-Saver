import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/pages/Search';
import Auth from './components/pages/Auth';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
