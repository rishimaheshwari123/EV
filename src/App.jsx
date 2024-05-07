import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scrollbar/Scroll";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Scroll />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
