/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Spinner, Forecast } from '../components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DEFAULT_CITY } from '../constants/config';
import format from 'date-fns/format';
import { unixToDate } from '../utils/';
import {
  addCity,
  getForecastByCityId,
  getGeolocation,
  searchLocationByLatLon
} from '../actions';

class DayPage extends Component {
  static propTypes = {
    cities: PropTypes.object.isRequired,
  }

  componentDidMount() {

    

    // console.log(match.params.dayId)

    this.getForecastByLocation();


  }

  componentDidUpdate() {
    this.getCurrentDay();
  }

  getDefualtCityForecast() {
    this.props.getForecastByCityId(DEFAULT_CITY.id).then((data) => {
      this.addCity(data.response.city.id, data.response.city.name, data.response.city.country, data.response.list);
    })
  }

  getForecastByLocation () {
    this.props.getGeolocation().then((data) => {
      if (data.coords) {
        this.props.searchLocationByLatLon(data.coords.latitude, data.coords.longitude).then((data) => {
          this.addCity(data.response.city.id, data.response.city.name,data.response.city.country, data.response.list);
        });
      }
    })
    .catch((err) => {
      this.getDefualtCityForecast();
    });
  }

  addCity(cityId, cityName, country, forecast) {
    this.props.addCity({id: cityId, name:cityName, country:country, forecast: forecast});
  }

  getCurrentCity() {
    const { cities } = this.props;
    return cities.items.filter(city => city.selected)[0];
  }

  getCurrentDay() {
    const arr = this.getCurrentCity();
    const { match } = this.props;
    if (arr) {
      const filtered = arr.forecast.filter(item => {
        return item.dtTxt.startsWith(match.params.dayId)
      });

      return filtered;
    }

    return false;
  }

  render() {
        const currentDay = this.getCurrentDay();
        const currentCity = this.getCurrentCity();
        
        if (!currentCity || ! currentDay) {
          return <Spinner />;
        }

        const date = format( unixToDate(currentDay[0].dt), 'dddd, D MMMM' );

        return (
          <>
            <div className="u-text--center">
              <h1>{currentCity.name} - {currentCity.country}</h1>
              <h2>{date}</h2>
            </div>
            {currentDay && <Forecast day={currentDay} />}
          </>
        );
  }
};

const mapDispatchToProps = {
  addCity,
  getForecastByCityId,
  getGeolocation,
  searchLocationByLatLon
};

const mapStateToProps = (state) => ({
  cities : state.cities,
  geolocation: state.geolocation
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(DayPage));
