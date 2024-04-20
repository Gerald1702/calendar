import React from 'react'; 
import { Calendar, momentLocalizer } from 'react-big-calendar'; 
import moment from 'moment'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddEvent from '../../components/add-event/addevent';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import {  DemoItem } from '@mui/x-date-pickers/internals/demo';

 
const localizer = momentLocalizer(moment); 


 
const MyCalendar = ({ events }) => ( 
  <> 
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{bgcolor:"#CA1F3D"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOVO
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>

    <Dialog
    
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          Add New Event
        </DialogTitle>
        <DialogContent>
          <AddEvent />
        </DialogContent>
        <DialogActions>
        {/* <DemoItem label="Controlled picker" component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem> */}
          <Button>
            Save
          </Button>
        </DialogActions>
      </Dialog>
 
    <div  style={{ height: '800px' }}> 
      <Calendar 
        localizer={localizer} 
        events={events} 
        startAccessor="start" 
        endAccessor="end" 
        style={{ margin: '50px' }} 
      /> 
    </div> 
  </> 
); 
 
export default MyCalendar;


// import React, { useState } from 'react'; 
// import { Calendar, momentLocalizer } from 'react-big-calendar'; 
// import moment from 'moment'; 
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import AddEvent from '../../components/add-event/addevent';
// // import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// // import {  DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


// const localizer = momentLocalizer(moment); 

// const MyCalendar = ({ events }) => {
//   const [value, setValue] = useState(null);

//   return (
//     <> 
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static"  sx={{bgcolor:"#CA1F3D"}}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               HOVO
//             </Typography>
//             {/* <Button color="inherit">Login</Button> */}
//           </Toolbar>
//         </AppBar>
//       </Box>
  
//       <Dialog
//           open={true}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             Add New Event
//           </DialogTitle>
//           <DialogContent>
//             <AddEvent />
//           </DialogContent>
//           <DialogActions>
            
//             <Button>
//               Save
//             </Button>
//           </DialogActions>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
//       </DemoContainer>
//           <DemoItem label="Controlled picker" component="DateRangePicker">
//               <DateRangePicker
//                 value={value}
//                 onChange={(newValue) => setValue(newValue)}
//               />
//             </DemoItem>
//             </LocalizationProvider>
//         </Dialog>
    
//       <div  style={{ height: '800px' }}> 
//         <Calendar 
//           localizer={localizer} 
//           events={events} 
//           startAccessor="start" 
//           endAccessor="end" 
//           style={{ margin: '50px' }} 
//         /> 
//       </div> 
//     </> 
//   );
// };

// export default MyCalendar;
