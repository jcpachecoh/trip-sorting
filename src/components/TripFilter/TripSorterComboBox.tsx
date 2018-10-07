import * as React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

interface ITripSorterComboBoxProps {
  handleTripData: Function;
  data: string;
  label: string;
  cities: string[];
}

export class TripSorterComboBox extends React.Component<ITripSorterComboBoxProps, {}> {
  constructor(props: ITripSorterComboBoxProps) {
    super(props);
  }
  public render() {
    const { label, cities } = this.props;

    return (
      <FormGroup controlId="comobo-box">
        <ControlLabel>{label}</ControlLabel>
        <FormControl componentClass="select" placeholder="Select a city" onChange={(e) => this.props.handleTripData(e)}>
          <option value="--">select a city</option>
          {cities &&
            cities.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
        </FormControl>
      </FormGroup>
    );
  }
}