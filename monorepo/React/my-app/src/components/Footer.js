import React from "react";
import logo from "../logo.svg";

export function Footer() {
  const footerStyles = {
    textAlign: "center", // Center-align the text
    fontSize: "13px", // Set a smaller font size
    padding: "50px ,0", // Add padding to control the footer height
    margin: "0",
  
  };

  return (
    <div>
      <footer style={footerStyles}>
        <p style={{ fontWeight: "500", color: "grey" }}>
          Powered By
          <img
            style={{ width: "60px",height:"20px", verticalAlign: "middle" }}
            src={logo}
            alt="My Logo"
          />
        </p>
      </footer>
    </div>
  );
}
