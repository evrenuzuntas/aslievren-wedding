import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Contact = () => {
  const navigate = useNavigate();
  const phoneNumber = "+905402028484";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber.replace("+", "")}`;
  };

  const handleDonation = () => {
    // IBAN veya bağış linkini buraya ekleyebilirsiniz
    window.location.href = "YOUR_DONATION_LINK_HERE";
  };

  const handleAddContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Asli & Evren Düğün
TEL:${phoneNumber}
END:VCARD`;
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "asli-evren-dugun.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          py: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom align="center">
            İletişim
          </Typography>

          <Typography variant="body1" color="text.secondary" align="center" paragraph>
            Sorularınız için bize ulaşabilirsiniz
          </Typography>

          <Button variant="contained" size="large" startIcon={<PhoneIcon />} onClick={handleCall} fullWidth sx={{ mb: 2 }}>
            {phoneNumber}
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            fullWidth
            sx={{
              mb: 2,
              bgcolor: "#25D366",
              "&:hover": {
                bgcolor: "#128C7E",
              },
            }}
          >
            WhatsApp'tan Mesaj Gönder
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<ContactPhoneIcon />}
            onClick={handleAddContact}
            fullWidth
            sx={{
              mb: 2,
              bgcolor: "#1976d2",
              "&:hover": {
                bgcolor: "#115293",
              },
            }}
          >
            Rehbere Ekle
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<CurrencyLiraIcon />}
            onClick={handleDonation}
            fullWidth
            sx={{
              mb: 2,
              bgcolor: "#4CAF50",
              "&:hover": {
                bgcolor: "#388E3C",
              },
            }}
          >
            Bağış Yap
          </Button>

          <Button variant="outlined" startIcon={<HomeIcon />} onClick={() => navigate(ROUTES.HOME)} fullWidth>
            Ana Sayfaya Dön
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Contact;
