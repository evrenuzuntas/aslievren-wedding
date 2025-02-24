import React from "react";
import { Box, Typography, Grid, Container, IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProfileImage = styled("img")(({ theme }) => ({
  width: 180,
  height: 180,
  [theme.breakpoints.up("sm")]: {
    width: 200,
    height: 200,
  },
  [theme.breakpoints.up("md")]: {
    width: 220,
    height: 220,
  },
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 2,
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "calc(100vh - 120px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          py: 4,
        }}
      >
        <ProfileImage src={`${process.env.PUBLIC_URL}/nisan_foto.jpg`} alt="fotoğraf" />
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            mt: 3,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "3.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Asli & Evren
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          gutterBottom
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
          }}
        >
          Evlilik Sayfamıza Hoş Geldiniz
        </Typography>
        <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Grid item>
            <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.KINA)}>
              Kına Sayfasına Git
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.NIKAH)}>
              Nikah Sayfasına Git
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.AFTER)}>
              After Sayfasına Git
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: "flex", flexDirection: "row", gap: 2, justifyContent: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SocialButton href="https://www.instagram.com/aslihnbkts/" target="_blank">
              <InstagramIcon />
            </SocialButton>
            <Typography variant="caption" color="textSecondary">
              @aslihnbkts
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SocialButton href="https://www.instagram.com/evoloper0/" target="_blank">
              <InstagramIcon />
            </SocialButton>
            <Typography variant="caption" color="textSecondary">
              @evoloper0
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
