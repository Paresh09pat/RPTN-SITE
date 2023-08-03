import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Consulting from "./MainPages/Consulting";
import Error404 from "./MainPages/Error";
import Foot from "./Components/Footer/Foot";
import Contact from "./MainPages/Contact";
import Career from "./MainPages/Career";
import WhoWeAre from "./MainPages/WhoWeAre";
import ScrollTop from "./ScrollTop";
import Home from "./MainPages/Home";
import Cloud from "./MainPages/Cloud";
import AI from "./MainPages/AI";
import Cyber from "./MainPages/Cyber";
import Expertise from "./MainPages/Expertise";
import Services from "./MainPages/Services";
import Navbar from "./Components/Nav/Navbar"

const App = () => {
  return (
    <>
      <BrowserRouter>

       <Navbar />
        <ScrollTop />
        <div className="app" style={{ overflow: "hidden", scrollBehavior: "smooth" }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RP/Cloud" element={<Cloud />} />
            <Route path="/RP/AI" element={<AI />} />
            <Route path="/RP/Cyber" element={<Cyber />} />
            <Route path="/RP/Services" element={<Services />} />
            <Route path="/RP/Expertise" element={<Expertise />} />
            <Route path="/RP/Consulting" element={<Consulting />} />
            <Route path="/RP/contact" element={<Contact />} />
            <Route path="/RP/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/RP/carrer" element={<Career />} />
            <Route path="/RP/*" element={<Error404 />} />
            {/* <Route path="*" element={<Error404 />} /> */}
         
          </Routes>
        </div>
        <Foot style={{ position: "sticky" }} />
      </BrowserRouter>
    </>
  );
};

export default App;
