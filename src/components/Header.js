import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case ROUTES.KINA:
        return "Kına Gecesi";
      case ROUTES.NIKAH:
        return "Nikah Töreni";
      case ROUTES.AFTER:
        return "After Party";
      default:
        return "Asli & Evren";
    }
  };

  const styles = {
    header: {
      width: "100%",
      height: "80px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    homeButton: {
      padding: "8px 16px",
      borderRadius: "20px",
      backgroundColor: "#f8f8f8",
      border: "1px solid #e0e0e0",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        transform: "translateY(-1px)",
      },
    },
    homeText: {
      fontSize: "16px",
      fontWeight: 700,
      color: "#333",
      fontFamily: "'Playfair Display', serif",
    },
  };

  return (
    <Grid container style={styles.header} justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box sx={styles.homeButton} onClick={() => navigate(ROUTES.HOME)} role="button" aria-label="Go to homepage">
          <Typography sx={styles.homeText}>A&E</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
          }}
        >
          {getPageTitle()}
        </Typography>
      </Grid>
      <Grid item>
        <SocialButton
          onClick={() => {
            alert("Çektiğiniz fotoğrafları lütfen buraya yükleyiiz");
            window.open("https://drive.google.com/drive/folders/12eVLkbkzbaA4XI5CkGsYP-NZqgG-V9N1?usp=sharing", "_blank");
          }}
        >
          <AddToDriveOutlinedIcon />
        </SocialButton>
      </Grid>
    </Grid>
  );
};

export default Header;
