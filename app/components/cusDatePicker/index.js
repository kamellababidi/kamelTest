import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import './_cus_date_picker.css';

const styles = theme => ({
    input: {
        color: "#828282",
        paddingRight: 22,
        fontSize: 14,
    },
    kamel: {
        disableUnderline: true,

    }
  });

function CusDatePicker({ classes, ...rest }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          InputProps={{ className: classes.input }}
          style={{ className: classes.kamel }}
          variant="inline"
          className='kamel'
          format="MM/dd/yyyy"
        //   margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
  );
}

export default withStyles(styles)(CusDatePicker);