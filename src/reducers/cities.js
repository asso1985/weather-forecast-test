import { GET_CITIES, ADD_CITY } from '../constants/action-types';
import { listMap } from '../mappers/listMap';

const initialState = {
  isLoading: true,
  items:[ 
    {
      id: 0,
      name: 'Ny York',
      days: []
    }
  ]
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            days: []
          }
        ]
      }
    case GET_CITIES:
      return state
    default:
      return state
  }
}

export default cities