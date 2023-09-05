import React from "react";

export function OptionPage({ onBack }) {
  return (
    
    <div style={{ textAlign: "center" }}>
   
      <button
        onClick={onBack}
        style={{
          backgroundColor: "dodgerblue",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Back
      </button>
    </div>
  );
}
