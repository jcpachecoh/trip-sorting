import {
  DealActions,
  SET_FROM_TRIP,
  SET_TO_TRIP,
} from '../actions/DealsActions';

export const defaultDeals = {
  from: '',
  to: '',
};

export const dealsReducer = (state = defaultDeals, action: DealActions) => {
  switch (action.type) {
    case SET_FROM_TRIP:
      return { ...state, from: action.payload };

    case SET_TO_TRIP:
      return { ...state, to: action.payload };
    default:
      return state;
  }
};
