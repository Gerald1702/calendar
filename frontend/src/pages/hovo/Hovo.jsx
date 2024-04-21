import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../../pages/hovo/Hovo.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2024, 6, 0),
    end: new Date(2024, 6, 0),
  },

  {
    title: "Vacation",
    start: new Date(2024, 6, 7),
    end: new Date(2024, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2024, 6, 20),
    end: new Date(2024, 6, 23),
  },
];

function Hovo() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvent, newEvent]);
  }

  return (
    <div className="Hovo">
     
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#CA1F3D" }}>
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
              Hovo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px", color: "#CA1F3D" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          calendarClassName="custom-calendar"
        />
        <DatePicker
          placeholderText="End Date"
          style={{ marginRight: "10px", color: "#CA1F3D" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          calendarClassName="custom-calendar"
        />
        <button
          style={{
            marginTop: "10px",
            backgroundColor: "#CA1F3D",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default Hovo;


