import React, { Component } from 'react';
import PropTypes from 'prop-types';

const validIcons = {
  'storm' : 'storm',
  'rain'  : 'rain',
  'clear' : 'sun',
  'clouds' : 'cloud',
  'snow'  : 'snow'
};

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
  }

  getIcon(icon) {
    icon = icon.toLowerCase();

    if (!validIcons[icon]) {
      return validIcons[2];
    }

    return validIcons[icon];
  }
 
 render() {
  const { icon, dimension = 60 } = this.props;
  const iconName = this.getIcon(icon);

  return (
    <img alt={iconName} width={`${dimension}px`} height={`${dimension}px`} src={`${process.env.PUBLIC_URL}/icons/${iconName}.svg`} />
  )
 }
};

export default Icon;
