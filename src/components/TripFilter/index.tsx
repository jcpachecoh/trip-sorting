import * as React from 'react';
import { TripSorterComboBox } from './TripSorterComboBox';
import { TripFilterOption } from './TripFilterOption';
import './tripfilter.css';
import { Glyphicon, Button, FormGroup } from 'react-bootstrap';

export interface ITripFilterProps {
  from: string;
  to: string;
  cities: string[];
  setFromTrip: Function;
  setToTrip: Function;
  getComboCities: Function;
  handleTripFilterOption: Function;
  submitForm: Function;
  errorMessage: string;
}

export class TripFilter extends React.Component<ITripFilterProps, {}> {
  constructor(props: ITripFilterProps) {
    super(props);
  }
  componentDidMount() {
    this.props.getComboCities();
  }

  submitForm(e: any) {
    e.preventDefault();
    this.props.submitForm();
  }

  public render() {
    const { from, to, setFromTrip, setToTrip, cities, handleTripFilterOption, errorMessage } = this.props;
    return (
      <div className="trip__filter">
        <form
          onSubmit={(e: any) => {
            this.submitForm(e);
          }}
        >
          <FormGroup>
            {errorMessage && <span className="error__message">{errorMessage}</span>}
            <TripSorterComboBox
              handleTripData={(e: any) => setFromTrip(e.target.value)}
              data={from}
              label="From"
              cities={cities}
            />
            <TripSorterComboBox
              handleTripData={(e: any) => setToTrip(e.target.value)}
              data={to}
              label="To"
              cities={cities}
            />
          </FormGroup>
          <FormGroup>
            <TripFilterOption handleTripFilterOption={(value: string) => handleTripFilterOption(value)} />
          </FormGroup>
          <FormGroup>
            <Button bsSize="small" type="submit" bsStyle="success">
              <Glyphicon glyph="search" /> Search
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
