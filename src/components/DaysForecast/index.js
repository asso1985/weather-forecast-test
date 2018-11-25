import React, { Component } from 'react';
import { Day } from '../';
import { groupBy } from '../../utils/';
import PropTypes from 'prop-types';
import './_days.scss';

class DaysForecast extends Component {
  static propTypes = {
    days: PropTypes.array.isRequired,
    params: PropTypes.object.isRequired
  }

  groupForecastByDay(days) {
    return groupBy(days, 'dtTxt');
  }

  printDays() {
    const { days, params } = this.props;

    if (days.length === 0) {
      return false;
    }

    const forecastByDays = this.groupForecastByDay(days);

    if (!forecastByDays.length === 0) {
      return false;
    }

    return Object.keys(forecastByDays).map((day, index) => (
      index > 0 && <Day key={index} day={forecastByDays[day]} params={params} />
    ));
  }

  render() {
    const days = this.printDays();
    return (
      <div className="c-days flexgrid flexgrid--full u-width-100">
        {days}
      </div>
    );
  }
}

export default DaysForecast;
