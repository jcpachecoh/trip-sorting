import * as React from 'react';
import TripSorterComboBox from './TripSorterComboBox';

export class TripFilter extends React.Component {
  public render() {
    return (
      <div>
        <TripSorterComboBox handleTripData={() => {}} data="ss" label="From" />
        <TripSorterComboBox handleTripData={() => {}} data="ss" label="To" />
      </div>
    );
  }
}
