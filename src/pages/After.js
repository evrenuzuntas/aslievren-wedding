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
      description: "Nikah sonrası after party",
      location: "Mekan daha sonra belirlenecektir",
      startTime: "2025-05-18T22:00:00",
      endTime: "2025-05-19T04:00:00",
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
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 4,
            color: "#000080",
            fontSize: "3.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          After Party
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "rgba(0, 0, 128, 0.05)" }}>
              <CardMedia component="img" height="300" image="/after-party-venue.jpg" alt="After Party Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2, color: "#000080" }} />
                      <Typography variant="h6" sx={{ color: "#000080" }}>
                        18 Mayıs 2025
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2, color: "#000080" }} />
                      <Typography variant="h6" sx={{ color: "#000080" }}>
                        22:00
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2, color: "#000080" }} />
                      <Typography variant="h6" sx={{ color: "#000080" }}>
                        Mekan Daha Sonra Belirlenecektir
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    startIcon={<CalendarTodayIcon />}
                    onClick={handleAddToCalendar}
                    sx={{
                      bgcolor: "#000080",
                      "&:hover": {
                        bgcolor: "#000066",
                      },
                    }}
                  >
                    Takvime Ekle
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3, bgcolor: "rgba(0, 0, 128, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "#000080", fontWeight: "bold" }}>
                Parti Detayları
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • DJ performansı
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • Özel kokteyl menüsü
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • Dans pisti
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3, bgcolor: "rgba(0, 0, 128, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "#000080", fontWeight: "bold" }}>
                Önemli Notlar
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • Dress code: Smart Casual
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • Vale parking hizmeti mevcuttur
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#000080" }}>
                • Parti sabaha kadar devam edecektir
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default After;
