import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TripFilter, ITripFilterProps } from '../components/TripFilter';
import { setFromTrip, DealActions, setToTrip, getComboCities, handleTripFilterOption, submitForm } from '../actions/dealActions';

export type ConnectedStateProps = Pick<ITripFilterProps, 'from' | 'to' | 'cities' | 'errorMessage'>;

export function mapStateToProps({ dealsReducer: { from, to, cities, errorMessage } }: any): ConnectedStateProps {
  return {
    from,
    to,
    cities,
    errorMessage
  };
}

export type ConnectedDispatchProps = Pick<
  ITripFilterProps,
  'submitForm' | 'setFromTrip' | 'setToTrip' | 'getComboCities' | 'handleTripFilterOption'
>;
export function mapDispatchToProps(dispatch: Dispatch<DealActions>): ConnectedDispatchProps {
  return {
    setFromTrip: (value: string) => dispatch(setFromTrip(value)),
    setToTrip: (value: string) => dispatch(setToTrip(value)),
    getComboCities: () => dispatch(getComboCities()),
    handleTripFilterOption: (value: string) => dispatch(handleTripFilterOption(value)),
    submitForm: () => dispatch(submitForm())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripFilter);
