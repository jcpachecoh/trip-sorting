import 'typeface-roboto';
import * as React from 'react';
import './tripsortertitle.css';

export class TripSortingTitle extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="tripsorter__title">
          <h1>TRIP SORTER</h1>
      </div>
    );
  }
}
