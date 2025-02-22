import React from "react";
import { Box, Typography, Grid, Container, IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

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
  const path = useLocation();
  console.log(path, "path");

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
        <ProfileImage src="/profile-image.jpg" alt="Düğün" />
        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 3 }}>
          Asli & Evren
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Düğünümüze Hoş Geldiniz
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Link to={ROUTES.KINA} style={{ textDecoration: "none" }}>
              <Typography variant="button" color="primary">
                Kına
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to={ROUTES.NIKAH} style={{ textDecoration: "none" }}>
              <Typography variant="button" color="primary">
                Nikah
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to={ROUTES.AFTER} style={{ textDecoration: "none" }}>
              <Typography variant="button" color="primary">
                After Party
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to={ROUTES.CONTACT} style={{ textDecoration: "none" }}>
              <Typography variant="button" color="primary">
                İletişim
              </Typography>
            </Link>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <SocialButton href="https://github.com/yourusername" target="_blank">
            <GitHubIcon />
          </SocialButton>
          <SocialButton href="https://linkedin.com/in/yourusername" target="_blank">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton href="https://instagram.com/yourusername" target="_blank">
            <InstagramIcon />
          </SocialButton>
        </Box>

        <Button variant="outlined" startIcon={<PhoneIcon />} component={Link} to={ROUTES.CONTACT} sx={{ mt: 4 }}>
          Bize Ulaşın
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
