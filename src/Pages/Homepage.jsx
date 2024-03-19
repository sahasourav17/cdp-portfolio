import PropTypes from "prop-types"; // Import PropTypes
import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "../components/Contact Component/Contact";
import DummyData from "../components/DummyData";
import Experience from "../components/Experience Components/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero Component/Hero";
import Assignments from "../components/Portfolio Component/Portfolio";
import Error from "./Error";

const Homepage = ({ darkMode }) => {
  return (
    <Router basename={`/Portfolio-Vite`}>
      <div className={darkMode ? "dark" : ""}>
        <Routes>
          <Route path="" index element={<Hero />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Dummydata" element={<DummyData />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

Homepage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Homepage;
