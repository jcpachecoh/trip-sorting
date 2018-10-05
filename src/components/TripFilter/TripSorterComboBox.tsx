import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface ITripSorterComboBoxProps {
  handleTripData: Function;
  data: string;
  label: string;
  classes: any;
}

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
}) as any;

class TripSorterComboBox extends React.Component<ITripSorterComboBoxProps, {}> {
  constructor(props: ITripSorterComboBoxProps) {
    super(props);
  }
  public render() {
    const { classes, label } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">{label}</InputLabel>
        <Select
          value={this.props.data}
          onChange={() => this.props.handleTripData}
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(TripSorterComboBox);