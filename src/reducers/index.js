import { combineReducers } from 'redux';
import geolocation from './geolocation';
import cities from './cities';

export default combineReducers({
  cities,
  geolocation
})