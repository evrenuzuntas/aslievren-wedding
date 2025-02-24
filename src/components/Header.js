import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Typography, Box } from "@mui/material";

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
      height: "60px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    profileIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.2s ease",
      ":hover": {
        transform: "scale(1.05)",
      },
    },
    iconText: {
      fontSize: "20px",
      color: "#333",
    },
  };

  return (
    <header style={styles.header}>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div style={styles.profileIcon} onClick={() => navigate(ROUTES.HOME)} role="button" aria-label="Go to homepage">
          <span style={styles.iconText}>AS</span>
        </div>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            marginLeft: "-40px", // Icon genişliğini dengelemek için
          }}
        >
          {getPageTitle()}
        </Typography>
      </Box>
    </header>
  );
};

export default Header;
