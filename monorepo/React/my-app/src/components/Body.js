import React from "react";

export function Body() {
  const appStyle = {
    backgroundColor: "#f0f0f0", // Light gray color code
    minHeight: "100vh", // Ensure the background color spans the entire viewport height
    display: "flex", // Optional: Adjust layout properties as needed
    justifyContent: "center", // Optional: Center the content horizontally
    alignItems: "center", // Optional: Center the content vertically
  };
  return (
    <div style={appStyle}>
      <div className="white-background,w-400 h-150">
        <h1>tina</h1>
      </div>
    </div>
  );
}
