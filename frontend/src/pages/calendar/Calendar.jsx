// import React from 'react'

// const Calendar = () => {
//   return (
//     <div>Calendar</div>
//   )
// }

// export default Calendar;

import React from 'react'; 
import { Calendar, momentLocalizer } from 'react-big-calendar'; 
import moment from 'moment'; 
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
 
const localizer = momentLocalizer(moment); 
 
const MyCalendar = ({ events }) => ( 
  <> 
   
 
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