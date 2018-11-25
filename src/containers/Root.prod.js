import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CitiesPage from './CitiesPage';
import DayPage from './DayPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="flexgrid flexgrid-full flexgrid--center flexgrid--middle u-height--full container">
      <Switch>
        <Route exact path="/:cityId" component={CitiesPage} />
        <Route exact path="/:cityId/:dayId" component={DayPage} />
      </Switch>
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;