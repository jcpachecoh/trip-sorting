import 'typeface-roboto';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff'
  },
} as any;

interface ITripSortingTitleProps {
  classes: any;
}

class TripSortingTitle extends React.Component<ITripSortingTitleProps, {}> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Sorting Trip</h1>
      </div>
    );
  }
}

export default withStyles(styles)(TripSortingTitle);
