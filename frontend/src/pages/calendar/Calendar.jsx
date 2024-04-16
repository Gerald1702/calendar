import React from 'react'; 
import { Calendar, momentLocalizer } from 'react-big-calendar'; 
import moment from 'moment'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 
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