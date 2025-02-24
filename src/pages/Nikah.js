import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";

const Nikah = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Asli & Evren Nikah Töreni",
      description: "Nikah törenimize davetlisiniz",
      location: "Vedat Dalokay Nikah Salonu, Fidanlık, Prof. Dr. Nusret Fişek Cd. No:39, 06420 Çankaya/Ankara",
      startTime: "2025-05-18T14:00:00",
      endTime: "2025-05-18T15:00:00",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/[-:]/g, "")}/${event.endTime.replace(/[-:]/g, "")}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const handleDownloadInvitation = () => {
    // Davetiye dosyası hazır olduğunda burası güncellenecek
    const invitationUrl = "/davetiyeler/nikah-davetiye.jpg";
    const link = document.createElement("a");
    link.href = invitationUrl;
    link.download = "Nikah-Davetiyesi.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 4,
            color: "#5F6F52",
            fontSize: "3.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Nikah Töreni
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "rgba(95, 111, 82, 0.05)" }}>
              <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_2.png`} alt="Nikah Mekanı" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarTodayIcon sx={{ mr: 2, color: "#5F6F52" }} />
                      <Typography variant="h6" sx={{ color: "#5F6F52" }}>
                        18 Mayıs 2025
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <AccessTimeIcon sx={{ mr: 2, color: "#5F6F52" }} />
                      <Typography variant="h6" sx={{ color: "#5F6F52" }}>
                        14:00
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon sx={{ mr: 2, color: "#5F6F52" }} />
                      <Typography variant="h6" sx={{ color: "#5F6F52" }}>
                        Vedat Dalokay Nikah Salonu
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: "#5F6F52" }}>
                      Fidanlık, Prof. Dr. Nusret Fişek Cd. No:39, 06420 Çankaya/Ankara
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    startIcon={<CalendarTodayIcon />}
                    onClick={handleAddToCalendar}
                    sx={{
                      bgcolor: "#5F6F52",
                      "&:hover": {
                        bgcolor: "#4A5940",
                      },
                    }}
                  >
                    Takvime Ekle
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DirectionsIcon />}
                    href="https://maps.app.goo.gl/AHxNU1uunaA6pgMS6"
                    target="_blank"
                    sx={{
                      color: "#5F6F52",
                      borderColor: "#5F6F52",
                      "&:hover": {
                        borderColor: "#4A5940",
                        color: "#4A5940",
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
            <Paper sx={{ p: 3, bgcolor: "rgba(95, 111, 82, 0.05)" }}>
              <Typography variant="h5" gutterBottom sx={{ color: "#5F6F52" }}>
                Önemli Bilgiler
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#5F6F52" }}>
                • Nikah töreni tam olarak 14:00'da başlayacaktır.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#5F6F52" }}>
                • Fotoğraf çekimi için uygun alan bulunmaktadır.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: "#5F6F52" }}>
                • Otopark için Sıhhiye Çok Katlı Otopark'ı kullanabilirsiniz.
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
                bgcolor: "#5F6F52",
                "&:hover": {
                  bgcolor: "#4A5940",
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

export default Nikah;
