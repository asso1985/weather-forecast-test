import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../';
import format from 'date-fns/format';
import { unixToDate } from '../../utils/';
import './_hour.scss';

class Hour extends Component {
  static propTypes = {
    hour: PropTypes.object.isRequired
  }  
  render() {
    const { hour } = this.props;

    const time = format( unixToDate(hour.dt), 'h A' );
    const weather = hour.weather[0].main;
    const min = Math.round(hour.main.tempMin);
    const max = Math.round(hour.main.tempMax);

    return (
      
      <div className="c-hour u-text--center">
        <h3>{time}</h3>
        <div className="a-icon">
          <Icon icon={weather} width={100} height={100}/>
          </div>
          <div>
            <div className="flexgrid flexgrid--full flexgrid--center u-margin-top--s u-text--center">
              <div>
                <div>{min}°</div>
                <small>min</small>
              </div>  
              <div className="u-margin-left--s">
                <div>{max}°</div>
                <small>max</small>
              </div>  
            </div>
          </div>
      </div>
    );
  }
}

export default Hour;
