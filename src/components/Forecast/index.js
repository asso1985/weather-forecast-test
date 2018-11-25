import React, { Component } from 'react';
import { Day } from '../';
import { groupBy } from '../../utils/';
import PropTypes from 'prop-types';
import './_dayForecast.scss';

class Forecast extends Component {
  static propTypes = {
    day: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="c-days flexgrid flexgrid--full flexgrid--space-around u-width-100">
        day forecast
      </div>
    );
  }
}

export default Forecast;
