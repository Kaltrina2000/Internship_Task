import React from "react";

// Define CSS styles for the header
const headerStyles = {
  textAlign: "center", // Center-align the text
  fontSize: "24px", // Set a smaller font size
};

const stepStyles = {
  fontSize: "16px", // Set a smaller font size for the step
  color: "#888", // Optional: Add a gray color to the step text
};

export function Header({ step }) {
  return (
    <header style={headerStyles}>
      <h1 style={stepStyles}>Choose Service</h1>
      <p style={stepStyles}>Step {step}/2</p>
    </header>
  );
}
