import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function DatePickerIndex(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container justify="center" style={{ maxWidth: 90 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          format="MM/dd/yyyy"
          label={props.label}
          id={props.id}
          InputProps={{
            disableUnderline: true,
            "aria-label": "Click To Change Date",
          }}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}
