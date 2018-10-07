import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DealActions, handleErrorPrompt } from '../actions/dealActions';
import { IErrorPromptProps, ErrorPrompt } from '../components/Error/ErrorPrompt';

export type ConnectedStateProps = Pick<IErrorPromptProps, 'error'>;

export function mapStateToProps({ dealsReducer: { error } }: any): ConnectedStateProps {
  return {
    error
  };
}

export type ConnectedDispatchProps = Pick<IErrorPromptProps, 'handleErrorPrompt'>;
export function mapDispatchToProps(dispatch: Dispatch<DealActions>): ConnectedDispatchProps {
  return {
    handleErrorPrompt: (value: string) => dispatch(handleErrorPrompt(value))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorPrompt);
