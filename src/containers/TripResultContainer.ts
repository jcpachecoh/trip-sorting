import { connect } from 'react-redux';
import { ITripResultsProps, TripResults } from '../components/TripResults';

export type ConnectedStateProps = Pick<ITripResultsProps, 'tripResults'>;

export function mapStateToProps({ dealsReducer: { tripResults } }: any): ConnectedStateProps {
  return {
    tripResults
  };
}

export default connect(
  mapStateToProps,
  null
)(TripResults);
