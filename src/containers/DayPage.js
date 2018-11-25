/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Spinner, Forecast } from '../components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DEFAULT_CITY } from '../constants/config';
import {
  getCities,
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

    this.getForecastByLocation();

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

  render() {
        const currentCity = this.getCurrentCity();
        return (
          <>
            {!currentCity && <Spinner />}
            {currentCity && <Forecast day={currentCity.forecast} />}
          </>
        );
  }
};

const mapDispatchToProps = {
  getCities,
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
