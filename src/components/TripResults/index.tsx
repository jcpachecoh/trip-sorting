import * as React from 'react';
import { Deal } from '../../models/Deal';
import './tripresults.css';
import { Well } from 'react-bootstrap';
import * as _ from 'lodash';

export interface ITripResultsProps {
  tripResults: Deal[];
}

export class TripResults extends React.Component<ITripResultsProps, {}> {
  public render() {
    const { tripResults } = this.props;
    return (
      <div className="tripsorter__results">
        {_.isEmpty(tripResults) && <Well bsSize="large">!There is no deals between these cities!!</Well>}
        {tripResults &&
          tripResults.map((item, index) => {
            return (
              <div key={index} className="tripsorter__results__item">
                <div className="tripsorter__results__info">
                  <span className="tripsorter__results__from"> {item.departure}</span>
                  <span className="tripsorter__results__union"> > </span>
                  <span className="tripsorter__results__to"> {item.arrival}</span>
                  <span className="tripsorter__results__cost"><b>EUR </b>{item.cost}</span>
                </div>
                <div className="tripsorter__results__info_secondary">
                  <span className="tripsorter__results__transport"><b>{_.camelCase(item.transport)}</b></span>
                  <span className="tripsorter__results__reference">{item.reference}</span>
                  <span className="tripsorter__results__duration">
                   For {item.duration.h} - {item.duration.m}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
