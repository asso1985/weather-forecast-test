import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hour from '../Hour/';
import { makeId } from '../../utils';
import './_dayForecast.scss';

class Forecast extends Component {
  static propTypes = {
    day: PropTypes.array.isRequired
  }

  printHours(day) {
    return day.map((item, index) => {
      return (<Hour key={makeId(5)} hour={item} />);
    })
  }

  render() {
    const { day } = this.props;
    const hours = day && this.printHours(day);
    return (
      <div className="c-days flexgrid flexgrid--full flexgrid--space-around u-width-100 u-margin-top--l">
        {hours}
      </div>
    );
  }
}

export default Forecast;
