import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "12px 0",
        textAlign: "center",
        borderTop: "1px solid #eaeaea",
        fontSize: "14px",
        color: "#666",
        backdropFilter: "blur(5px)",
      }}
    >
      <a
        href="https://evoloper.net"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          transition: "all 0.3s ease",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
        onMouseOver={(e) => {
          e.target.style.color = "#000";
          e.target.style.transform = "translateY(-1px)";
        }}
        onMouseOut={(e) => {
          e.target.style.color = "#666";
          e.target.style.transform = "translateY(0)";
        }}
      >
        <span style={{ fontSize: "16px" }}>♥</span>
        <span>sevgiyle tasarlandı</span>
        <span style={{ fontSize: "16px" }}>&copy;</span>
        <span style={{ fontWeight: "500" }}>evoloper</span>
      </a>
    </footer>
  );
};

export default Footer;
