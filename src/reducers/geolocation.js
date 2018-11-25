import { 
  GEOLOCATION_REQUEST,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_FAILURE
} from '../constants/action-types';

const initialState = {
  isLoading: false,
  position: {},
  error: false
};

const geolocation = (state = initialState, action) => {
  switch (action.type) {
    case GEOLOCATION_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GEOLOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        position: action.position
      }
    case GEOLOCATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default geolocation;