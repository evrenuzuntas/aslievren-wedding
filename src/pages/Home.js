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
        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 3 }}>
          Asli & Evren
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Evlilik Sayfamıza Hoş Geldiniz
        </Typography>

        <Button variant="contained" size="large" startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.NIKAH)} sx={{ mt: 3 }}>
          Nikah Sayfasına Git
        </Button>

        <Box sx={{ mt: 4 }}>
          <SocialButton href="https://drive.google.com/drive/folders/12eVLkbkzbaA4XI5CkGsYP-NZqgG-V9N1?usp=sharing" target="_blank">
            <AddToDriveOutlinedIcon />
          </SocialButton>
          <SocialButton href="https://www.instagram.com/aslihnbkts/" target="_blank">
            <InstagramIcon />
          </SocialButton>
          <SocialButton href="https://www.instagram.com/evoloper0/" target="_blank">
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
