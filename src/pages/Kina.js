import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";

const Kina = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Asli & Evren Kına Gecesi",
      description: "Kına gecemize davetlisiniz",
      location: "Kına Mekanı Adresi",
      startTime: "2024-06-14T20:00:00", // Örnek tarih
      endTime: "2024-06-14T23:00:00",
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
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Kına Gecesi
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" height="300" image="/kina-venue.jpg" alt="Kına Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">14 Haziran 2024</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">20:00</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">Kına Mekanı</Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Tam adres bilgisi buraya gelecek
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  <Button variant="contained" startIcon={<CalendarTodayIcon />} onClick={handleAddToCalendar}>
                    Takvime Ekle
                  </Button>
                  <Button variant="outlined" startIcon={<DirectionsIcon />} href="https://maps.google.com" target="_blank">
                    Yol Tarifi
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Program Akışı
              </Typography>
              <Typography variant="body1" paragraph>
                • 20:00 - Karşılama ve Hoş Geldiniz
              </Typography>
              <Typography variant="body1" paragraph>
                • 20:30 - Yemek Servisi
              </Typography>
              <Typography variant="body1" paragraph>
                • 21:30 - Kına Merasimi
              </Typography>
              <Typography variant="body1" paragraph>
                • 22:00 - Müzik ve Eğlence
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Önemli Notlar
              </Typography>
              <Typography variant="body1" paragraph>
                • Mekan içerisinde otopark mevcuttur.
              </Typography>
              <Typography variant="body1" paragraph>
                • Kına yakma merasimi saat 21:30'da başlayacaktır.
              </Typography>
              <Typography variant="body1" paragraph>
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
                bgcolor: "secondary.main",
                "&:hover": {
                  bgcolor: "secondary.dark",
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
