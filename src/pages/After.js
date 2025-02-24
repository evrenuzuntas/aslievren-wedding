import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";

const After = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Asli & Evren After Party",
      description: "Düğün sonrası after party",
      location: "After Party Mekanı",
      startTime: "2024-06-15T22:00:00", // Örnek tarih
      endTime: "2024-06-16T04:00:00",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/[-:]/g, "")}/${event.endTime.replace(/[-:]/g, "")}`;

    window.open(googleCalendarUrl, "_blank");
  };

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
      <Box sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" height="300" image="/after-party-venue.jpg" alt="After Party Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">15 Haziran 2024</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">22:00</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2 }} />
                      <Typography variant="h6">After Party Mekanı</Typography>
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
                Parti Detayları
              </Typography>
              <Typography variant="body1" paragraph>
                • DJ performansı
              </Typography>
              <Typography variant="body1" paragraph>
                • Özel kokteyl menüsü
              </Typography>
              <Typography variant="body1" paragraph>
                • Dans pisti
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Önemli Notlar
              </Typography>
              <Typography variant="body1" paragraph>
                • Dress code: Smart Casual
              </Typography>
              <Typography variant="body1" paragraph>
                • Vale parking hizmeti mevcuttur
              </Typography>
              <Typography variant="body1" paragraph>
                • Parti sabaha kadar devam edecektir
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

export default After;
