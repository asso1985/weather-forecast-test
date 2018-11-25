import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import "./index.scss";

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
);