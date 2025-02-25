import React from "react";
import { Box, Typography, Paper, Grid, Button, Container, Card, CardContent, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import DownloadIcon from "@mui/icons-material/Download";
import CountdownTimer from "../components/CountdownTimer";
import { EVENT_DATES } from "../constants/dates";
import AddToCalendarButton from "../components/AddToCalendarButton";

const Nikah = () => {
  const event = {
    title: "Aslı & Evren Nikah Töreni",
    description: "Nikah törenimize davetlisiniz",
    location: "Vedat Dalokay Nikah Salonu, Fidanlık, Prof. Dr. Nusret Fişek Cd. No:39, 06420 Çankaya/Ankara",
    startTime: "2025-05-18T14:00:00",
    endTime: "2025-05-18T15:00:00",
  };

  const handleDownloadInvitation = () => {
    window.open("https://www.canva.com/design/DAGfeoCjBFA/EWYBjkotorz3m1YyaL1gQg/view?utm_content=DAGfeoCjBFA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hccf109337d", "_blank");
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Nikah Töreni
        </Typography>
        <CountdownTimer targetDate={EVENT_DATES.NIKAH} eventName="Nikah Töreni" />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "rgba(95, 111, 82, 0.05)" }}>
              <CardMedia component="img" height="400" src={`${process.env.PUBLIC_URL}/Screenshot_2.png`} alt="Nikah Mekanı" sx={{ cursor: "pointer" }} onClick={() => window.open("https://maps.app.goo.gl/AHxNU1uunaA6pgMS6", "_blank")} />
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
                  <AddToCalendarButton
                    event={event}
                    buttonStyle={{
                      bgcolor: "#5F6F52",
                      "&:hover": {
                        bgcolor: "#4A5940",
                      },
                    }}
                  />
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
