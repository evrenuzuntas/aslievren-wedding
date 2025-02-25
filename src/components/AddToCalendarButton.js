import React from "react";
import { Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { generateICSFile } from "../utils/calendar";

const AddToCalendarButton = ({ event, buttonStyle }) => {
  const handleAddToCalendar = () => {
    generateICSFile(event);
  };

  return (
    <Button variant="contained" startIcon={<CalendarTodayIcon />} onClick={handleAddToCalendar} sx={buttonStyle || {}}>
      Takvime Ekle
    </Button>
  );
};

export default AddToCalendarButton;
