import { DialogContent, DialogActions, DialogTitle, FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import "./index.css"

export default function AddEvent({ startDate, endDate }) {
  const addEvent = (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);
    // Get data to post
    const data = {
      userId: '662a13c5ec8688c38004dc99', // Hardcoded userId that will be changed once a user is logged in
      title: formData.get('title'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
    }
    console.log(data);
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title" >Add New Event</DialogTitle>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={addEvent}
      >
        <DialogContent>
          <TextField sx={{ mb: '2rem' }} name="title" fullWidth label="Event Title" variant="outlined" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ mb: '2rem' }} fullWidth>
              <DateTimePicker name="startDate" defaultValue={dayjs(startDate)} />
            </FormControl>
            <FormControl sx={{ mb: '2rem' }} fullWidth>
              <DateTimePicker name="endDate" defaultValue={dayjs(endDate)} />
            </FormControl>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              borderRadius: 2,
              padding: 2,
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: '#CA1F3D',
              width: '200px',
              height: '40px',
              // top: '60px',
              Left: '60px',

              '&:hover': {
                backgroundColor: '#CA1F3D',
                boxShadow: 'none',
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Box>
    </>
  );
}
