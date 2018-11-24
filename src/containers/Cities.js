/* eslint-disable no-undef */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCities, addCity } from '../actions';

class CitiesPage extends Component {
  static propTypes = {
    cities: PropTypes.object.isRequired
  }

  componentDidMount() {
        this.props.getCities();

        this.props.addCity({id:3, name:'Milan,IT', days: []});
  }

  render() {
        const { items } = this.props.cities;

        return (
          <div>
            {items.map(item => (
              item.name
            ))}
          </div>
        );
  }
};

const mapDispatchToProps = {
  getCities: getCities,
  addCity: addCity
};

const mapStateToProps = (state) => ({
  cities : state.cities
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(CitiesPage));
