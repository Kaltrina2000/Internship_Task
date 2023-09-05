import React from "react";

export function Header({ step, selectedOption }) {
  const headerStyles = {
    textAlign: "center", // Center-align the text
    fontSize: "24px", // Set a smaller font size
    color: "white",
    height: "60px", // Set a fixed height for the header
    backgroundColor: "white", // Set the background color to white
    position: "fixed", // Fix the header in place
    top: "0", // Position it at the top of the viewport
    left: "0", // Align it to the left
    width: "100%", // Make it span the entire width
  };

  const stepStyles = {
    fontSize: "16px", // Set a smaller font size for the step
    color: "#888", // Optional: Add a gray color to the step text
    margin: "0", // Remove any top and bottom margin
    lineHeight: "1",
    padding: "5px 0",
  };

  return (
    <header style={headerStyles}>
      {selectedOption ? (
        <h1 style={stepStyles}>{selectedOption}</h1>
      ) : (
        <h1 style={stepStyles}>Choose Service</h1>
      )}

      <p style={stepStyles}>Step {step === 2 ? "2/2" : "1/2"}</p>
    </header>
  );
}
