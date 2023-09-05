import React from "react";

export function Header({ step, selectedOption }) {
  const headerStyles = {
    textAlign: "center",
    fontSize: "24px",
    color: "white",
    height: "60px",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
  };

  const stepStyles = {
    fontSize: "16px",
    color: "#888",
    margin: "0",
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
