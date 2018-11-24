// import { CALL_API, Schemas } from '../middleware/api';
import { GET_CITIES, ADD_CITY } from '../constants/action-types';

// // Fetches a single user from Github API.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchCities = () => ({
//   [CALL_API]: {
//     types: [ CITIES_REQUEST, CITIES_SUCCESS, CITIES_FAILURE ],
//     endpoint: `users/`,
//     schema: Schemas.USER
//   }
// });

export const getCities = () => (dispatch) => {
  return dispatch({type:GET_CITIES});
}


export const addCity = (payload) => (dispatch) => {
    return dispatch({
      type:ADD_CITY,
      payload
    });
}
