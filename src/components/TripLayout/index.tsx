import * as React from 'react';
import TripFilterContainer from '../../containers/TripFilterContainer';
import ErrorContainer from '../../containers/ErrorContainer';
import { Grid, Col, Row } from 'react-bootstrap';
import { TripSortingTitle } from '../TripSortingTitle';
import TripResultContainer from '../../containers/TripResultContainer';

export class TripLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="tripsorter tripsorter--layout">
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <TripSortingTitle />
            </Col>
            <Col md={4}>
              <TripFilterContainer />
            </Col>
            <Col md={8}>
              <TripResultContainer />
            </Col>
          </Row>
        </Grid>
        <ErrorContainer />
      </div>
    );
  }
}
