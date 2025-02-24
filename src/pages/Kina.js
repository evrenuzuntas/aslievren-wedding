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
      description: "Asli & Evren'in Kına Gecesine davetlisiniz",
      location: "Livza Organizasyon, Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara",
      startTime: "2024-05-17T18:00:00",
      endTime: "2024-05-17T23:00:00",
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
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" height="300" src={`${process.env.PUBLIC_URL}/Screenshot_1.png`} alt="Kına Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">17 Mayıs 2024</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">18:00</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">Livza Organizasyon</Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Ata, 3497. Sk. Ankor AVM No.4/1, 06000 Yenimahalle/Ankara
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  <Button variant="contained" startIcon={<CalendarTodayIcon />} onClick={handleAddToCalendar}>
                    Takvime Ekle
                  </Button>
                  <Button variant="outlined" startIcon={<DirectionsIcon />} href="https://maps.app.goo.gl/TgFgrsgt9wEGN72o7" target="_blank">
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
                • 18:00 - Karşılama ve Hoş Geldiniz
              </Typography>
              <Typography variant="body1" paragraph>
                • 18:30 - Yemek Servisi
              </Typography>
              <Typography variant="body1" paragraph>
                • 19:30 - Kına Merasimi
              </Typography>
              <Typography variant="body1" paragraph>
                • 20:00 - Müzik ve Eğlence
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
                • Kına yakma merasimi saat 19:30'da başlayacaktır.
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
