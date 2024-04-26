import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "@mui/material";
import AddEvent from "../../components/add-event/addevent";
import ButtonAppBar from "../../components/navbar/Navbar";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
    const data = await response.json();
    // console.log(data);
    const events = data.data.map((event) => ({
      title: event.title,
      start: new Date(event.startDate),
      end: new Date(event.endDate),
    }));
    // Update events in state
    setEvents(events);
  };

  useEffect(() => {
    getAllEvents();
  }, [open]);

  return (
    <>
      <ButtonAppBar />

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AddEvent startDate={startDate} endDate={endDate} setOpen={setOpen} />
      </Dialog>

      <div style={{ height: "800px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: "50px" }}
          selectable={true}
          onSelectSlot={(slotInfo) => {
            // console.log(slotInfo);
            setStartDate(slotInfo.start);
            setEndDate(slotInfo.end);
            setOpen(true);
          }}
        />
      </div>
    </>
  );
};

export default MyCalendar;
