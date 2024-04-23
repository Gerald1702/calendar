import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog } from "@mui/material";
import AddEvent from "../../components/add-event/addevent";
import ButtonAppBar from "../../components/navbar/Navbar";



const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        <AddEvent startDate={startDate} endDate={endDate} />
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
