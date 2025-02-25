import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";
import CountdownTimer from "../components/CountdownTimer";
import { EVENTS } from "../utils/Constants";
import AddToCalendarButton from "../components/AddToCalendarButton";

const styles = {
  pageTitle: (color) => ({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    mb: 4,
    color: color,
    fontSize: "3.5rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  }),
  eventCard: (color) => ({
    bgcolor: `${color}0D`,
  }),
  cardMedia: {
    cursor: "not-allowed",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    mb: 2,
  },
  icon: (color) => ({
    mr: 2,
    color: color,
  }),
  buttonContainer: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
    gap: 2,
    flexWrap: "wrap",
  },
  calendarButton: (color) => ({
    bgcolor: color,
    "&:hover": {
      bgcolor: `${color}CC`,
    },
  }),
  contentPaper: (color) => ({
    p: 3,
    bgcolor: `${color}0D`,
  }),
  sectionTitle: (color) => ({
    color: color,
    fontWeight: "bold",
  }),
  contentText: (color) => ({
    color: color,
  }),
};

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
      <Typography variant="h2" align="center" gutterBottom sx={styles.pageTitle(event.color)}>
        After Party
      </Typography>
      <CountdownTimer targetDate={EVENTS.AFTER.startTime} eventName="After Party" />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={styles.eventCard(event.color)}>
            <CardMedia component="img" height="300" image="/after-party-venue.jpg" alt="After Party Mekanı" sx={styles.cardMedia} onClick={() => alert("Mekan bilgisi daha sonra eklenecektir.")} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={styles.iconWrapper}>
                    <CalendarTodayIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.contentText(event.color)}>
                      {new Date(event.startTime).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </Typography>
                  </Box>
                  <Box sx={styles.iconWrapper}>
                    <AccessTimeIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.contentText(event.color)}>
                      22:00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={styles.iconWrapper}>
                    <LocationOnIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.contentText(event.color)}>
                      {event.venue}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={styles.buttonContainer}>
                <AddToCalendarButton event={event} buttonStyle={styles.calendarButton(event.color)} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.contentPaper(event.color)}>
            <Typography variant="h5" gutterBottom sx={styles.sectionTitle(event.color)}>
              Parti Detayları
            </Typography>
            {event.features.map((feature, index) => (
              <Typography key={index} variant="body1" paragraph sx={styles.contentText(event.color)}>
                • {feature}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.contentPaper(event.color)}>
            <Typography variant="h5" gutterBottom sx={styles.sectionTitle(event.color)}>
              Önemli Notlar
            </Typography>
            {event.notes.map((note, index) => (
              <Typography key={index} variant="body1" paragraph sx={styles.contentText(event.color)}>
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
