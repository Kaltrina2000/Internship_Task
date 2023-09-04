import React, { useState } from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
  const [step, setStep] = useState(1); // You can manage the step state as needed

  return (
    <div className="App">
      <Header step={step} />
      {/* Rest of your application */}
      <Body />
      <Footer />
    </div>
  );
}

export default App;
