import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Icon } from '../';
import format from 'date-fns/format';
import { unixToDate } from '../../utils/';
import './_day.scss';

class Day extends Component {
  static propTypes = {
    day: PropTypes.array.isRequired,
    dayId: PropTypes.string.isRequired,
  }  
  render() {
    const { day, dayId } = this.props;

    const date = format( unixToDate(day[0].dt), 'ddd' );
    const weather = day[0].weather[0].main;
    const min = Math.round(day[0].main.tempMin);
    const max = Math.round(day[0].main.tempMax);

    return (
      
      <div className="c-day u-text--center">
        <Link to={`${process.env.PUBLIC_URL}/${dayId}`}>
        <h3>{date}</h3>
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
        </Link>
      </div>
    );
  }
}

export default Day;
