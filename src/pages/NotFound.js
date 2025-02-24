import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "primary.main", mb: 3 }} />
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
          }}
        >
          Aradığınız Sayfa Bulunamadı
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Sanırım yanlış bir adrese geldiniz. Nikah sayfamıza gitmek ister misiniz?
        </Typography>
        <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.NIKAH)} sx={{ mt: 3 }}>
          Nikah Sayfasına Git
        </Button>
        <Button variant="text" onClick={() => navigate(ROUTES.HOME)} sx={{ mt: 2 }}>
          Ana Sayfaya Dön
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
