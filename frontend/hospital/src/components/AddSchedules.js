import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TimePicker from "@material-ui/lab/TimePicker";
import React, { useState } from "react";

////Main Function
//
//

const AddSchedules = ({ schedule, AddSchedule, setSchedule }) => {
  // console.log(schedule);
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const handleChange = (e) => {
    if (schedule) setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const HandleSchedule = () => {
    var str1 = String(start);
    var res1 = str1.substring(16, 24);
    var str = String(end);
    var res = str.substring(16, 24);
    if (schedule) setSchedule({ ...schedule, open: res1, close: res });
    AddSchedule();
  };
  const handleDialogclose = () => {
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <a
        class="btn btn-theme border btn-xs"
        href="#"
        onClick={() => {
          setOpen(true);
        }}
        style={{ margin: "10px", marginBottom: "20px" }}
      >
        Add Schedule
      </a>
      <br />

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

            <TimePicker
              ampm={false}
              openTo="hours"
              views={["hours", "minutes", "seconds"]}
              inputFormat="HH:mm:ss"
              mask="__:__:__"
              label="Shift Start Time"
              value={start}
              onChange={(newValue) => {
                setStart(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} margin="normal" />
              )}
            />

            <TimePicker
              ampm={false}
              openTo="hours"
              views={["hours", "minutes", "seconds"]}
              inputFormat="HH:mm:ss"
              mask="__:__:__"
              label="Shift End Time"
              value={end}
              onChange={(newValue) => {
                setEnd(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} margin="normal" />
              )}
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
          <Button onClick={HandleSchedule} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default AddSchedules;

/*
 */
