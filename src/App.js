import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./components/homepage/Home";
import About from "./components/Aboutpage/About";
import Contact from "./components/Contactpage/Contact";
const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>

  );
};

export default App;