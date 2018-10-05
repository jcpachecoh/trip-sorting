import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TripSortingTitile from './TripSortingTitle';
import { TripFilter } from '../TripFilter/TripFilter';

const styles = (theme: any) =>
  ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#D11E5D',
    },
  } as any);

interface ITripLayoutProps {
  classes: any;
}

export class TripLayout extends React.Component<ITripLayoutProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TripSortingTitile />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <TripFilter />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TripLayout);
