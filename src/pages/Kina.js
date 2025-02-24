import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";
import CountdownTimer from "../components/CountdownTimer";
import { EVENT_DATES } from "../constants/dates";

const Kina = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Aslı & Evren Kına Gecesi",
      description: "Aslı & Evren'in Kına Gecesine davetlisiniz",
      location: "Livza Organizasyon, Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara",
      startTime: "2025-05-17T18:00:00",
      endTime: "2025-05-17T23:00:00",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/[-:]/g, "")}/${event.endTime.replace(/[-:]/g, "")}`;

    window.open(googleCalendarUrl, "_blank");
  };

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
      <Box py={4}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Kına Gecesi
        </Typography>
        <CountdownTimer targetDate={EVENT_DATES.KINA} eventName="Kına Gecesi" />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "rgba(128, 0, 32, 0.05)" }}>
              <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_1.png`} alt="Kına Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2, color: "#800020" }} />
                      <Typography variant="h6" sx={{ color: "#800020" }}>
                        17 Mayıs 2025
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2, color: "#800020" }} />
                      <Typography variant="h6" sx={{ color: "#800020" }}>
                        18:00
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2, color: "#800020" }} />
                      <Typography variant="h6" sx={{ color: "#800020" }}>
                        Livza Organizasyon
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: "#800020" }}>
                      Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    startIcon={<CalendarTodayIcon />}
                    onClick={handleAddToCalendar}
                    sx={{
                      bgcolor: "#800020",
                      "&:hover": {
                        bgcolor: "#600018",
                      },
                    }}
                  >
                    Takvime Ekle
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DirectionsIcon />}
                    href="https://maps.app.goo.gl/TgFgrsgt9wEGN72o7"
                    target="_blank"
                    sx={{
                      color: "#800020",
                      borderColor: "#800020",
                      "&:hover": {
                        borderColor: "#600018",
                        color: "#600018",
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
            <Paper sx={{ p: 3, bgcolor: "rgba(128, 0, 32, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "#800020" }}>
                Program Akışı
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • 18:00 - Karşılama ve Hoş Geldiniz
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • 18:30 - Yemek Servisi
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • 19:30 - Kına Merasimi
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • 20:00 - Müzik ve Eğlence
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3, bgcolor: "rgba(128, 0, 32, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "#800020" }}>
                Önemli Notlar
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • Mekan içerisinde otopark mevcuttur.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • Kına yakma merasimi saat 19:30'da başlayacaktır.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#800020" }}>
                • Fotoğraf çekimi için uygun alanlar bulunmaktadır.
              </Typography>
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
                bgcolor: "#800020",
                "&:hover": {
                  bgcolor: "#600018",
                },
              }}
            >
              Davetiyeyi İndir
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Kina;
