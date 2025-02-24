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
const ProfileImage = styled("img")({
  width: 150,
  height: 150,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 2,
});

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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 8,
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

        <Button variant="outlined" startIcon={<PhoneIcon />} component={Link} to={ROUTES.CONTACT} sx={{ mt: 4 }}>
          Bize Ulaşın
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
