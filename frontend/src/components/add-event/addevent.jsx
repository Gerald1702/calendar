import { DialogContent, DialogActions, DialogTitle } from "@mui/material";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import moment from "moment";
import Button from "@mui/material/Button";
import "./index.css"

export default function AddEvent({ startDate, endDate }) {
  return (
    <>
    <div className="add"><DialogTitle  id="alert-dialog-title" >Add New Event</DialogTitle></div>
      
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch"}, 
        }}
        noValidate
        autoComplete="off"
      >
        <div className="event"><TextField 
          id="standard-basic"
          label=" Event Title"
          variant="standard"
        /></div>
        
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
        <Button
        variant="contained"
        size="small"
        sx={{
          borderRadius: 2,
          padding: 2,
          fontWeight: 'bold',
          textTransform: 'none',
          backgroundColor:'#CA1F3D',
          width:'200px',
          height:'40px',
          // top: '60px',
          Left:'60px',

          '&:hover': {
            backgroundColor: '#CA1F3D',
            boxShadow: 'none',
          },
        }}
      >
       Save
      </Button>
      </DialogActions>
    </>
  );
}
