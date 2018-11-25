import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../';
import format from 'date-fns/format';
import { unixToDate } from '../../utils/';
import './_current.scss';

class Current extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
  }

  render() {
    const { city } = this.props;
    const forecast = city.forecast[0];
    const mainWeather = forecast && forecast.weather[0].main;
    const descWeather = forecast && forecast.weather[0].description;
    const hour = format( unixToDate(forecast.dt), 'h A' );

    console.log(unixToDate(1543179600));

    if (!forecast) {
      return false;
    }

    return (
      <div className="c-current flexgrid flexgrid-full flexgrid--column u-text--center u-width-100">
        <h1>{city.name} - {city.country}</h1>  
        <div className="a-icon">
          <Icon icon={mainWeather} dimension="200"/>
          </div>
          <div>
                <div className="t-size--large">{Math.round(forecast.main.temp)}<sup>°</sup></div>
                <div className="flexgrid flexgrid--full flexgrid--center u-margin-top--s u-text--center t-size--small">
                  <div>min {Math.round(forecast.main.tempMin)}°</div>  
                  <div className="u-margin-left--s">max {Math.round(forecast.main.tempMax)}°</div>    
                </div>
                <div className="c-current__desc u-margin-top--s t-size--small">{descWeather}</div>
                <div className="u-margin-top--s">{hour}</div>
          </div>
      </div>
    );
  }
}

export default Current;
