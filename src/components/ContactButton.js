import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useTheme, useMediaQuery } from "@mui/material";

const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Don't show the button on the contact page
  if (location.pathname === ROUTES.CONTACT) {
    return null;
  }

  const buttonStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "transparent",
    color: "#424242",
    border: "2px solid #424242",
    borderRadius: "50px",
    padding: isMobile ? "8px" : "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "0" : "8px",
    cursor: "pointer",
    zIndex: 1000,
    fontSize: "14px",
  };

  const iconStyle = {
    fontSize: "16px",
  };

  const handleClick = () => {
    navigate(ROUTES.CONTACT);
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      <i className="fas fa-phone" style={iconStyle}></i>
      {!isMobile && <span>Bize Ulaşın</span>}
    </button>
  );
};

export default ContactButton;
