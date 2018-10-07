import { mount } from 'enzyme';
import * as React from 'react';
import store from '../store-index';
import { Provider } from 'react-redux';
import { TripFilter } from '../components/TripFilter/index';

describe('--------trip filter tests-------------', () => {
  let wrapper: any,
    mockFn: Function = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TripFilter
          from={'london'}
          to={'lisbon'}
          cities={['lisbon', 'london']}
          setFromTrip={mockFn}
          setToTrip={mockFn}
          getComboCities={mockFn}
          handleTripFilterOption={mockFn}
          submitForm={mockFn}
          errorMessage={'please complete form'}
        />
      </Provider>
    );
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have a 7 divs', () => {
    expect(wrapper.find('div')).toHaveLength(7);
  });
  it('should have 2 a tag', () => {
    expect(wrapper.find('select')).toHaveLength(2);
  });
  it('should have a 1 span', () => {
    expect(wrapper.find('span')).toHaveLength(4);
  });
});
