import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import "./index.scss";

const store = configureStore();
const supportsHistory = 'pushState' in window.history

render(
  <BrowserRouter basename={'/weather-forecast-test'} forceRefresh={!supportsHistory}>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById('root')
);