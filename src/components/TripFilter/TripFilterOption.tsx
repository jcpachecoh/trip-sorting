import * as React from 'react';
import { Radio } from 'react-bootstrap';

interface ITripFilterOptionProps {
  handleTripFilterOption: Function;
}

export class TripFilterOption extends React.Component<ITripFilterOptionProps, {}> {
  public render() {
    const { handleTripFilterOption } = this.props;
    return (
      <div className="tripsorter__options">
        <label className="options__cheapest">
          <Radio
            name="trip-parameter"
            value={'cheapest'}
            inline={true}
            onChange={(e: any) => handleTripFilterOption(e.target.value)}
          >
            <span>Cheapest</span>
          </Radio>
        </label>
        <label className="options__fastests">
          <Radio
            name="trip-parameter"
            value={'fastest'}
            inline={true}
            onChange={(e: any) => handleTripFilterOption(e.target.value)}
          >
            <span>Fastest</span>
          </Radio>
        </label>
      </div>
    );
  }
}
