import { DialogContent, DialogActions, DialogTitle } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";

export default function AddEvent({ startDate, endDate }) {
  return (
    <>
      <DialogTitle id="alert-dialog-title">Add New Event</DialogTitle>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label=" Event Title"
          variant="standard"
        />
      </Box>
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DemoItem label="Start Date">
              <DateTimePicker defaultValue={moment(startDate)} />
            </DemoItem>

            <DemoItem label="End Date">
              <DateTimePicker defaultValue={moment(endDate)} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button>Save</Button>
      </DialogActions>
    </>
  );
}
