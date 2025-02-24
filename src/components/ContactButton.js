import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const buttonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "transparent",
  color: "#424242",
  border: "2px solid #424242",
  borderRadius: "50px",
  padding: "10px 16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  zIndex: 1000,
  fontSize: "14px",
};

const iconStyle = {
  fontSize: "16px",
};

const ContactButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CONTACT);
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      <i className="fas fa-phone" style={iconStyle}></i>
      <span>Bize Ulaşın</span>
    </button>
  );
};

export default ContactButton;
