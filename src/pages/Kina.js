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
  icon: (color) => ({
    mr: 2,
    color: color,
  }),
  typography: (color) => ({
    color: color,
  }),
  card: (color) => ({
    bgcolor: `${color}0D`,
  }),
  addToCalendarButton: (color) => ({
    bgcolor: color,
    "&:hover": {
      bgcolor: `${color}CC`,
    },
  }),
  directionsButton: (color) => ({
    color: color,
    borderColor: color,
    "&:hover": {
      borderColor: `${color}CC`,
      color: `${color}CC`,
    },
  }),
  paper: (color) => ({
    p: 3,
    bgcolor: `${color}0D`,
  }),
  downloadButton: (color) => ({
    mt: 2,
    py: 2,
    bgcolor: color,
    "&:hover": {
      bgcolor: `${color}CC`,
    },
  }),
  buttonContainer: {
    mt: 4,
    display: "flex",
    justifyContent: "center",
    gap: 2,
    flexWrap: "wrap",
  },
};

const Kina = () => {
  const event = EVENTS.KINA;

  const handleDownloadInvitation = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/aslievren-kina-davetiyesi.png`;
    link.download = "aslievren-kina-davetiyesi.png";
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

      <Paper sx={{ ...styles.paper(event.color), mb: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ ...styles.typography(event.color), fontWeight: "bold" }}>
          🌿 Kına Gecemize Davetlisiniz! 🌿
        </Typography>
        <Typography variant="body1" paragraph sx={styles.typography(event.color)}>
          Sevdiklerimiz olmadan bu özel gece eksik kalırdı! 🎶✨
        </Typography>
        <Typography variant="body1" paragraph sx={styles.typography(event.color)}>
          Sizleri, mutluluğumuzu paylaşmaya ve eğlencemize ortak olmaya davet ediyoruz.
        </Typography>
        <Typography variant="body1" paragraph sx={styles.typography(event.color)}>
          Kına yakılır, dualar edilir, oyunlar oynanır… Birlikte çok güzel bir gece geçireceğimize eminiz! 🌺
        </Typography>
        <Typography variant="body1" paragraph sx={styles.typography(event.color)}>
          Bekliyoruz! ❤️💃
        </Typography>
        <Typography variant="body1" sx={{ ...styles.typography(event.color), fontStyle: "italic", mt: 2 }}>
          (Katılımınızı bildirirseniz çok seviniriz.)
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={styles.card(event.color)}>
            <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_1.png`} alt="Kına Mekanı" sx={styles.cardMedia} onClick={() => window.open(event.mapsUrl, "_blank")} />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CalendarTodayIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.typography(event.color)}>
                      17 Mayıs 2025
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <AccessTimeIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.typography(event.color)}>
                      18:00
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LocationOnIcon sx={styles.icon(event.color)} />
                    <Typography variant="h6" sx={styles.typography(event.color)}>
                      {event.venue}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={styles.typography(event.color)}>
                    {event.address}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={styles.buttonContainer}>
                <AddToCalendarButton event={event} buttonStyle={styles.addToCalendarButton(event.color)} />
                <Button variant="outlined" startIcon={<DirectionsIcon />} href={event.mapsUrl} target="_blank" sx={styles.directionsButton(event.color)}>
                  Yol Tarifi
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.paper(event.color)}>
            <Typography variant="h5" gutterBottom sx={styles.typography(event.color)}>
              Program Akışı
            </Typography>
            {event.schedule.map((item, index) => (
              <Typography key={index} variant="body1" paragraph sx={styles.typography(event.color)}>
                • {item}
              </Typography>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={styles.paper(event.color)}>
            <Typography variant="h5" gutterBottom sx={styles.typography(event.color)}>
              Önemli Notlar
            </Typography>
            {event.notes.map((note, index) => (
              <Typography key={index} variant="body1" paragraph sx={styles.typography(event.color)}>
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

export default Kina;
