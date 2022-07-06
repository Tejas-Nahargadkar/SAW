import React from "react";
import "./App.css";
import Home from "./components/home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Diagram from "./components/ProcessFlowDiagram/Diagram.jsx";
import AcidProofBrick from "./components/AcidProofBrick/AcidProofBrick";
import FireProofBrick from './components/FireProofBrick/FireProofBrick.jsx'
import AluminaBrick from './components/AluminaBrick/AluminaBrick.jsx'
import FireInsulation from './components/Fireinsulation/FireInsulation'
import FireClay from "./components/FireClay/FireClay";
import Navbar from './components/navbar/Navbar.jsx'
import Hdcarausel from "./components/3dcarousel/3dcarousel";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Diagram" element={<Diagram />} />
          <Route path="/AcidProofBrick" element={<AcidProofBrick />} />
          <Route path="/AluminaBrick" element={<AluminaBrick />} />
          <Route path="/FireProofBrick" element={<FireProofBrick />} />
          <Route path="/InsulationBrick" element={<FireInsulation />} />
          <Route path="/FireClay" element={<FireClay />} />
          <Route path="/Gallery" element={<Hdcarausel />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
