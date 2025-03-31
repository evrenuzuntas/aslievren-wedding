import React, { useState } from "react";
import { Box, Typography, Grid, Container, IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  mainBox: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    py: 4,
  },
  mainTitle: {
    mt: 3,
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "3.5rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
  subtitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 500,
  },
  buttonGrid: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
    mt: 3,
  },
  socialBox: {
    mt: 4,
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
  },
  socialItemBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

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
  border: "8px solid rgba(255, 255, 255, 0.8)",
  boxShadow: "0 0 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 0, 0, 0.15)",
    border: "8px solid rgba(255, 255, 255, 0.9)",
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  borderRadius: "30px",
  fontSize: "1.1rem",
  fontFamily: "'Playfair Display', serif",
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  background: "linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
    background: "linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.3rem",
    marginRight: "8px",
    transition: "transform 0.3s ease",
  },
  "&:hover .MuiSvgIcon-root": {
    transform: "scale(1.2) rotate(-10deg)",
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      navigate(ROUTES.AFTER);
      setClickCount(0);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={styles.mainBox}>
        <ProfileImage src={`${process.env.PUBLIC_URL}/nisan_foto.jpg`} alt="fotoğraf" onClick={handleImageClick} sx={{ cursor: "pointer" }} />
        <Typography variant="h2" component="h1" gutterBottom sx={styles.mainTitle}>
          Aslı & Evren
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom sx={styles.subtitle}>
          Evlilik Sayfamıza Hoş Geldiniz
        </Typography>
        <Grid container spacing={2} sx={styles.buttonGrid}>
          <Grid item>
            <StyledButton startIcon={<FavoriteIcon />} onClick={() => navigate(ROUTES.NIKAH)}>
              Nikah Sayfasına Git
            </StyledButton>
          </Grid>
        </Grid>

        <Box sx={styles.socialBox}>
          <Box sx={styles.socialItemBox}>
            <SocialButton href="https://www.instagram.com/aslihnbkts/" target="_blank">
              <InstagramIcon />
            </SocialButton>
            <Typography variant="caption" color="textSecondary">
              @aslihnbkts
            </Typography>
          </Box>
          <Box sx={styles.socialItemBox}>
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
