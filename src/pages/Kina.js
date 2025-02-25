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

const Kina = () => {
  const event = EVENTS.KINA;

  const handleDownloadInvitation = () => {
    // Davetiye dosyası hazır olduğunda burası güncellenecek
    const invitationUrl = "/davetiyeler/kina-davetiye.jpg";
    const link = document.createElement("a");
    link.href = invitationUrl;
    link.download = "Kina-Davetiyesi.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Kına Gecesi
      </Typography>
      <CountdownTimer targetDate={EVENTS.KINA.startTime} eventName="Kına Gecesi" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={{ bgcolor: `${event.color}0D` }}>
            <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_1.png`} alt="Kına Mekanı" sx={{ cursor: "pointer" }} onClick={() => window.open(event.mapsUrl, "_blank")} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CalendarTodayIcon sx={{ mr: 2, color: event.color }} />
                    <Typography variant="h6" sx={{ color: event.color }}>
                      17 Mayıs 2025
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <AccessTimeIcon sx={{ mr: 2, color: event.color }} />
                    <Typography variant="h6" sx={{ color: event.color }}>
                      18:00
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
                  <Typography variant="body1" sx={{ color: event.color }}>
                    {event.address}
                  </Typography>
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
                <Button
                  variant="outlined"
                  startIcon={<DirectionsIcon />}
                  href={event.mapsUrl}
                  target="_blank"
                  sx={{
                    color: event.color,
                    borderColor: event.color,
                    "&:hover": {
                      borderColor: `${event.color}CC`,
                      color: `${event.color}CC`,
                    },
                  }}
                >
                  Yol Tarifi
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, bgcolor: `${event.color}0D` }}>
            <Typography variant="h5" gutterBottom sx={{ color: event.color }}>
              Program Akışı
            </Typography>
            {event.schedule.map((item, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ color: event.color }}>
                • {item}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, bgcolor: `${event.color}0D` }}>
            <Typography variant="h5" gutterBottom sx={{ color: event.color }}>
              Önemli Notlar
            </Typography>
            {event.notes.map((note, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ color: event.color }}>
                • {note}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadInvitation}
            sx={{
              mt: 2,
              py: 2,
              bgcolor: event.color,
              "&:hover": {
                bgcolor: `${event.color}CC`,
              },
            }}
          >
            Davetiyeyi İndir
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Kina;
