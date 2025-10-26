import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDev from "./components/Services/GameDev";
import ArtDesign from "./components/Services/ArtDesign";
import ARVR from "./components/Services/arvr-dev";
import "./index.css"
import GameTesting from "./components/Services/GameTesting";
import Careers from "./components/careers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services/game-development" element={<GameDev />} />
        <Route path="/services/art-design" element={<ArtDesign />} />  {/* Fix */}
        <Route path="/services/ar-vr" element={<ARVR />} />  {/* Fix */}
        <Route path="/services/game-testing" element={<GameTesting />} />  {/* Fix */}
        <Route path="/careers" element={<Careers />} />  {/* Fix */}


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
