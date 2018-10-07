import {
  SET_COMBO_CITIES,
  HANDLE_ERROR_PROMPT,
  SET_TRIP_RESULTS,
  HANDLE_TRIP_FILTER_OPTION,
  SET_ERROR_MESSAGE
} from '../actions/dealActions';
import { DealActions, SET_FROM_TRIP, SET_TO_TRIP } from '../actions/dealActions';

export const defaultDeals = {
  from: '',
  to: '',
  parameter: '',
  tripResults: [],
  cities: [],
  errorMessage: '',
  error: ''
};

export const dealsReducer = (state = defaultDeals, action: DealActions) => {
  switch (action.type) {
    case SET_FROM_TRIP:
      return { ...state, from: action.payload };

    case SET_TO_TRIP:
      return { ...state, to: action.payload };

    case SET_COMBO_CITIES:
      return { ...state, cities: action.payload };
    case SET_TRIP_RESULTS:
      return { ...state, tripResults: action.payload };

    case HANDLE_TRIP_FILTER_OPTION:
      return { ...state, parameter: action.payload };

    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case HANDLE_ERROR_PROMPT:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
