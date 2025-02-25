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
  cardMedia: {
    cursor: "pointer",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    mb: 2,
  },
  buttonContainer: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
    gap: 2,
    flexWrap: "wrap",
  },
  directionButton: (color) => ({
    color: color,
    borderColor: color,
    "&:hover": {
      borderColor: `${color}CC`,
      color: `${color}CC`,
    },
  }),
  downloadButton: (color) => ({
    mt: 2,
    py: 2,
    bgcolor: color,
    "&:hover": {
      bgcolor: `${color}CC`,
    },
  }),
  paper: (color) => ({
    p: 3,
    bgcolor: `${color}0D`,
  }),
  card: (color) => ({
    bgcolor: `${color}0D`,
  }),
  icon: (color) => ({
    mr: 2,
    color: color,
  }),
  coloredText: (color) => ({
    color: color,
  }),
};

const Nikah = () => {
  const event = EVENTS.NIKAH;

  const handleDownloadInvitation = () => {
    window.open("https://www.canva.com/design/DAGfeoCjBFA/EWYBjkotorz3m1YyaL1gQg/view?utm_content=DAGfeoCjBFA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hccf109337d", "_blank");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Nikah Töreni
      </Typography>
      <CountdownTimer targetDate={EVENTS.NIKAH.startTime} eventName="Nikah Töreni" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={styles.card(event.color)}>
            <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_2.png`} alt="Nikah Mekanı" sx={styles.cardMedia} onClick={() => window.open(event.mapsUrl, "_blank")} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={styles.iconBox}>
                    <CalendarTodayIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.coloredText(event.color)}>
                      18 Mayıs 2025
                    </Typography>
                  </Box>
                  <Box sx={styles.iconBox}>
                    <AccessTimeIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.coloredText(event.color)}>
                      14:00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={styles.iconBox}>
                    <LocationOnIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.coloredText(event.color)}>
                      {event.venue}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={styles.coloredText(event.color)}>
                    {event.address}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={styles.buttonContainer}>
                <AddToCalendarButton
                  event={event}
                  buttonStyle={{
                    bgcolor: event.color,
                    "&:hover": {
                      bgcolor: `${event.color}CC`,
                    },
                  }}
                />
                <Button variant="outlined" startIcon={<DirectionsIcon />} href={event.mapsUrl} target="_blank" sx={styles.directionButton(event.color)}>
                  Yol Tarifi
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.paper(event.color)}>
            <Typography variant="h5" gutterBottom sx={styles.coloredText(event.color)}>
              Önemli Bilgiler
            </Typography>
            {event.notes.map((note, index) => (
              <Typography key={index} variant="body1" paragraph sx={styles.coloredText(event.color)}>
                • {note}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth size="large" startIcon={<DownloadIcon />} onClick={handleDownloadInvitation} sx={styles.downloadButton(event.color)}>
            Davetiyeyi İndir
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nikah;
