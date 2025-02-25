import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";
import CountdownTimer from "../components/CountdownTimer";
import { EVENTS } from "../utils/constants/Constants";
import AddToCalendarButton from "../components/AddToCalendarButton";

const After = () => {
  const event = EVENTS.AFTER;

  const handleDownloadInvitation = () => {
    // Davetiye dosyası hazır olduğunda burası güncellenecek
    const invitationUrl = "/davetiyeler/after-party-davetiye.jpg";
    const link = document.createElement("a");
    link.href = invitationUrl;
    link.download = "After-Party-Davetiyesi.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          mb: 4,
          color: event.color,
          fontSize: "3.5rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        After Party
      </Typography>
      <CountdownTimer targetDate={EVENTS.AFTER.startTime} eventName="After Party" />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={{ bgcolor: `${event.color}0D` }}>
            <CardMedia component="img" height="300" image="/after-party-venue.jpg" alt="After Party Mekanı" sx={{ cursor: "not-allowed" }} onClick={() => alert("Mekan bilgisi daha sonra eklenecektir.")} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CalendarTodayIcon sx={{ mr: 2, color: event.color }} />
                    <Typography variant="h6" sx={{ color: event.color }}>
                      {new Date(event.startTime).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <AccessTimeIcon sx={{ mr: 2, color: event.color }} />
                    <Typography variant="h6" sx={{ color: event.color }}>
                      22:00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LocationOnIcon sx={{ mr: 2, color: event.color }} />
                    <Typography variant="h6" sx={{ color: event.color }}>
                      {event.venue}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <AddToCalendarButton
                  event={event}
                  buttonStyle={{
                    bgcolor: event.color,
                    "&:hover": {
                      bgcolor: `${event.color}CC`,
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, bgcolor: `${event.color}0D` }}>
            <Typography variant="h5" gutterBottom sx={{ color: event.color, fontWeight: "bold" }}>
              Parti Detayları
            </Typography>
            {event.features.map((feature, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ color: event.color }}>
                • {feature}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, bgcolor: `${event.color}0D` }}>
            <Typography variant="h5" gutterBottom sx={{ color: event.color, fontWeight: "bold" }}>
              Önemli Notlar
            </Typography>
            {event.notes.map((note, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ color: event.color }}>
                • {note}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default After;
