import React from "react";
import { Box, Typography, Button, Container, Paper, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const styles = {
  container: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    p: 6,
    borderRadius: 4,
    background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "linear-gradient(90deg, #e3f2fd, #bbdefb, #e3f2fd)",
    },
  },
  floatingBox: {
    animation: `${float} 3s ease-in-out infinite`,
  },
  errorIcon: {
    fontSize: 120,
    color: "primary.main",
    mb: 3,
    opacity: 0.8,
    animation: `${pulse} 2s ease-in-out infinite`,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: { xs: "5rem", sm: "6rem" },
    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    mb: 2,
  },
  subtitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 500,
    color: "text.primary",
    mb: 3,
  },
  description: {
    color: "text.secondary",
    fontSize: "1.1rem",
    maxWidth: "80%",
    margin: "0 auto",
    mb: 4,
  },
  button: {
    mt: 2,
    py: 1.5,
    px: 4,
    borderRadius: 2,
    fontSize: "1.1rem",
    textTransform: "none",
    background: "linear-gradient(45deg, #1976d2, #42a5f5)",
    boxShadow: "0 4px 20px rgba(25, 118, 210, 0.25)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 25px rgba(25, 118, 210, 0.35)",
    },
  },
};

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={styles.container}>
        <Paper elevation={3} sx={styles.paper}>
          <Box sx={styles.floatingBox}>
            <ErrorOutlineIcon sx={styles.errorIcon} />
          </Box>

          <Typography variant="h1" component="h1" gutterBottom sx={styles.title}>
            404
          </Typography>

          <Typography variant="h4" gutterBottom sx={styles.subtitle}>
            Aradığınız Sayfa Bulunamadı
          </Typography>

          <Typography variant="body1" sx={styles.description}>
            Sanırım yolunuzu kaybettiniz. Sizi ana sayfamıza yönlendirelim.
          </Typography>

          <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.HOME)} sx={styles.button}>
            Ana Sayfaya Dön
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotFound;
