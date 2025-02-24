import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const TimerBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  margin: theme.spacing(2),
  display: "inline-block",
  minWidth: "80px",
}));

const CountdownTimer = ({ targetDate, eventName }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (Object.keys(timeLeft).length === 0) {
    return (
      <Box textAlign="center" my={4}>
        <Typography variant="h5" color="primary">
          {eventName} başladı! 🎉
        </Typography>
      </Box>
    );
  }

  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h5" color="primary" gutterBottom>
        {eventName}'a kalan süre
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        <TimerBox elevation={3}>
          <Typography variant="h4" color="primary">
            {timeLeft.days}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Gün
          </Typography>
        </TimerBox>
        <TimerBox elevation={3}>
          <Typography variant="h4" color="primary">
            {timeLeft.hours}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Saat
          </Typography>
        </TimerBox>
        <TimerBox elevation={3}>
          <Typography variant="h4" color="primary">
            {timeLeft.minutes}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Dakika
          </Typography>
        </TimerBox>
        <TimerBox elevation={3}>
          <Typography variant="h4" color="primary">
            {timeLeft.seconds}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Saniye
          </Typography>
        </TimerBox>
      </Box>
    </Box>
  );
};

export default CountdownTimer;
