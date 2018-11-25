import {
  GET_CITIES,
  ADD_CITY,
  FORECAST_REQUEST,
  FORECAST_SUCCESS,
  FORECAST_FAILURE  
} from '../constants/action-types';

import { findObjIndex } from '../utils/';

const initialState = {
  isLoading: true,
  items:[]
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: parseInt(action.payload.id),
            name: action.payload.name,
            country: action.payload.country,
            selected: true,
            forecast: action.payload.forecast
          }
        ]
      }
    case GET_CITIES:
      return {
        isLoading: false,
        ...state
      }
    case FORECAST_REQUEST:
      return state
    case FORECAST_SUCCESS:
      state.items[findObjIndex(state.items, 'id', action.response.city.id)] = {
        ...state.items[0],
        forecast: action.response.list
      }
      return {
          ...state
      }
    case FORECAST_FAILURE:
      return state
    default:
      return state
  }
}

export default cities;