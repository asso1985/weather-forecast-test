import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CitiesPage from './CitiesPage';
import DayPage from './DayPage';

const supportsHistory = 'pushState' in window.history;

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter basename={'/weather-forecast-test'} forceRefresh={!supportsHistory}>
    <div className="flexgrid flexgrid-full flexgrid--center flexgrid--middle flexgrid--column u-height--full container">
      <Switch>
        <Route exact path={`/`} component={CitiesPage} />
        <Route path={`/:dayId`} component={DayPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;