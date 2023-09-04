import React from "react";
import logo from "../assets/logo.svg";
export function Footer() {
  const footerStyles = {
    textAlign: "center", // Center-align the text
    fontSize: "14px", // Set a smaller font size
  };

  return (
    <div>
      <footer style={footerStyles}>
        <p>
          Powered By
          <img
            style={{ width: "60px", height: "50px", verticalAlign: "middle" }}
            src={logo}
            alt="My Logo"
          />
        </p>
      </footer>
    </div>
  );
}
