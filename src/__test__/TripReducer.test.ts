jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import { defaultDeals, dealsReducer } from '../reducers/dealsReducer';
import { setTripResults, setFromTrip, setToTrip, setComboCities, handleTripFilterOption, setErrorMessage } from '../actions/dealActions';

describe('Test Trip reducer', () => {
  const mockStore = configureMockStore();
  let defaultTripMock: any,
    store: any,
    storeActions: any,
    action: any,
    from: string = 'London',
    to: string = 'Amsterdam',
    cities: string[] = ['London', 'Lisbon', 'Moscow'],
    parameter: string = 'cheapest',
    error: string = 'Please confirm form',
    dealsMock: any = [
      {
        transport: 'train',
        departure: 'London',
        arrival: 'Amsterdam',
        duration: { h: '05', m: '00' },
        cost: 160,
        discount: 0,
        reference: 'TLA0500'
      },
      {
        transport: 'bus',
        departure: 'London',
        arrival: 'Amsterdam',
        duration: { h: '07', m: '45' },
        cost: 40,
        discount: 25,
        reference: 'BLA0745'
      },
      {
        transport: 'car',
        departure: 'London',
        arrival: 'Amsterdam',
        duration: { h: '04', m: '45' },
        cost: 120,
        discount: 0,
        reference: 'CLA0445'
      }
    ];

  beforeEach(() => {
    store = createStore(dealsReducer);
    defaultTripMock = {
      from: '',
      to: '',
      parameter: '',
      tripResults: [],
      cities: [],
      errorMessage: '',
      error: ''
    };
    storeActions = mockStore(defaultDeals);
  });
  describe('Test general actions reducer transactions', () => {
    it('Return initial state', () => {
      expect(defaultTripMock).toEqual(defaultDeals);
    });

    it('should call SetAllTrips function', () => {
      storeActions.dispatch(setTripResults(dealsMock));
      action = storeActions.getActions();
      expect(action[0].type).toBe('SetTripResults');
    });

    it('should change payload calling SetAllTrips function', () => {
      storeActions.dispatch(setTripResults(dealsMock));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(dealsMock);
    });

    it('should change store with setAllTrips', () => {
      store.dispatch(setTripResults(dealsMock));
      store = store.getState();
      expect(store.tripResults).toBe(dealsMock);
    });

    it('should call setFromTrip function', () => {
      storeActions.dispatch(setFromTrip(from));
      action = storeActions.getActions();
      expect(action[0].type).toBe('SetFromTrip');
    });

    it('should change payload calling setFromTrip function', () => {
      storeActions.dispatch(setFromTrip(from));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(from);
    });

    it('should change store with setFromTrip', () => {
      store.dispatch(setFromTrip(from));
      store = store.getState();
      expect(store.from).toBe(from);
    });

    it('should call setToTrip function', () => {
      storeActions.dispatch(setToTrip(to));
      action = storeActions.getActions();
      expect(action[0].type).toBe('SetToTrip');
    });

    it('should change payload calling setToTrip function', () => {
      storeActions.dispatch(setToTrip(to));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(to);
    });

    it('should change store with setToTrip', () => {
      store.dispatch(setToTrip(to));
      store = store.getState();
      expect(store.to).toBe(to);
    });

    it('should call SetComboCities function', () => {
      storeActions.dispatch(setComboCities(cities));
      action = storeActions.getActions();
      expect(action[0].type).toBe('SetComboCities');
    });

    it('should change payload calling SetComboCities function', () => {
      storeActions.dispatch(setComboCities(cities));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(cities);
    });

    it('should change store with SetComboCities', () => {
      store.dispatch(setComboCities(cities));
      store = store.getState();
      expect(store.cities).toBe(cities);
    });

    it('should call handleTripFilterOption function', () => {
      storeActions.dispatch(handleTripFilterOption(parameter));
      action = storeActions.getActions();
      expect(action[0].type).toBe('handleTripFilterOption');
    });

    it('should change payload calling handleTripFilterOption function', () => {
      storeActions.dispatch(handleTripFilterOption(parameter));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(parameter);
    });

    it('should change store with handleTripFilterOption', () => {
      store.dispatch(handleTripFilterOption(parameter));
      store = store.getState();
      expect(store.parameter).toBe(parameter);
    });

    it('should call SetErrorMessage function', () => {
      storeActions.dispatch(setErrorMessage(error));
      action = storeActions.getActions();
      expect(action[0].type).toBe('SetErrorMessage');
    });

    it('should change payload calling SetErrorMessage function', () => {
      storeActions.dispatch(setErrorMessage(error));
      action = storeActions.getActions();
      expect(action[0].payload).toBe(error);
    });

    it('should change store with SetErrorMessage', () => {
      store.dispatch(setErrorMessage(error));
      store = store.getState();
      expect(store.errorMessage).toBe(error);
    });
  });
});
