// import { CALL_API, Schemas } from '../middleware/api';
import { CALL_API } from '../middleware/api';
import { 
  GET_CITIES,
  ADD_CITY,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  FORECAST_FAILURE,
  GEOLOCATION_REQUEST,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_FAILURE,
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_FAILURE
   } from '../constants/action-types';

// Fetch by city id
const fetchForecastByCityId = (cityId) => ({
  [CALL_API]: {
    types: [ FORECAST_REQUEST, FORECAST_SUCCESS, FORECAST_FAILURE ],
    endpoint: `forecast?id=${cityId}`,
    method: 'GET'
  },
  cityId: cityId
});

export const getForecastByCityId = (cityId) => (dispatch) => {
  return dispatch(fetchForecastByCityId(cityId));
}

// Fetch by Lat Lon
const fetchForecastByLatLon = (lat, lon) => ({
  [CALL_API]: {
    types: [ FORECAST_REQUEST, FORECAST_SUCCESS, FORECAST_FAILURE ],
    endpoint: `forecast?lat=${lat}&lon=${lon}`,
    method: 'GET'
  }
});

export const getForecastByLatLon = (lat, lon) => (dispatch) => {
  return dispatch(fetchForecastByLatLon(lat, lon));
}

// Search by Lat Lon
const fetchSearchLocationByLatLon = (lat, lon) => ({
  [CALL_API]: {
    types: [ SEARCH_LOCATION_REQUEST, SEARCH_LOCATION_SUCCESS, SEARCH_LOCATION_FAILURE ],
    endpoint: `forecast?lat=${lat}&lon=${lon}`,
    method: 'GET'
  }
});

export const searchLocationByLatLon = (lat, lon) => (dispatch) => {
  return dispatch(fetchSearchLocationByLatLon(lat, lon));
}



// Fetch cities
export const getCities = () => (dispatch) => {
  return dispatch({type:GET_CITIES});
}

// Add city
export const addCity = (payload) => (dispatch) => {
    return dispatch({
      type:ADD_CITY,
      payload
    });
}


// Geolocation
export const getGeolocation = () => (dispatch) => {

  const geolocation = navigator.geolocation;

  dispatch({
    type: GEOLOCATION_REQUEST
  });
 

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getPosition().then((position) => {
    dispatch({
      type: GEOLOCATION_SUCCESS,
      position
    })
  })
  .catch((err) => {
    dispatch({
      type: GEOLOCATION_FAILURE,
      err
    });
  })

  return getPosition();

}
