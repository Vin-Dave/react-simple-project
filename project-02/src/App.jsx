import { useState } from "react";

import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AboutSection />
      </div>
    </>
  );
}

export default App;
