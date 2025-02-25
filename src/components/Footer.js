import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import { Grid, IconButton, Typography, Button, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show the contact button on the contact page
  const showContactButton = location.pathname !== ROUTES.CONTACT;

  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: 2,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
          <a href="https://evoloper.net" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <FavoriteIcon sx={{ color: "error.main", fontSize: 16 }} />
              sevgiyle tasarlandı
              <Box component="span" sx={{ mx: 0.5 }}>
                &copy;
              </Box>
              evoloper
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "right" } }}>
          {showContactButton && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<PhoneIcon />}
              onClick={() => navigate(ROUTES.CONTACT)}
              sx={{
                borderRadius: 20,
                textTransform: "none",
                px: 2,
              }}
            >
              Bize Ulaşın
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
