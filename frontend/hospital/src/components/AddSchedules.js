import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

////Main Function
//
//

const AddSchedules = ({ schedule, AddSchedule, setSchedule }) => {
  console.log(schedule);
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    if (schedule) setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };
  const handleOpen = (date, value) => {
    if (schedule) setSchedule({ ...schedule, open: value });
  };
  const handleClose = (date, value) => {
    if (schedule) setSchedule({ ...schedule, close: value });
  };
  const handleDialogclose = () => {
    setOpen(false);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Tooltip title="Edit details" placement="top">
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <Button color="primary" variant="contained">
            Add Schedule
          </Button>
        </IconButton>
      </Tooltip>
      <Dialog open={open} fullWidth maxWidth="sm">
        <DialogTitle>Edit your details</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="day"
              type="text"
              label="day"
              placeholder="Day"
              onChange={handleChange}
              fullWidth
            />

            <KeyboardTimePicker
              margin="normal"
              //   name="open"
              id="time-picker"
              label="Shift Start Time"
              ampm={false}
              onChange={handleOpen}
              defaultValue="00:00"
              value={schedule.open}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              name="close"
              id="time-picker"
              label="Shift End Time"
              ampm={false}
              defaultValue="00:00"
              value={schedule.close}
              onChange={handleClose}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button onClick={AddSchedule} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MuiPickersUtilsProvider>
  );
};

export default AddSchedules;
