import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Properties from "./pages/Properties";
import Home from "./pages/Home";
import Aos from "aos";
import About from "./pages/About";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
