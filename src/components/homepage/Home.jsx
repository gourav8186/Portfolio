import React from "react";
import "./home.css";
// import AdminPng from "../../assets/images/face-2.png";
import { TypeAnimation } from "react-type-animation";
import CountingAnimation from "./CountingAnimation";
import MyServicesCards from "./MyServicesCards";
import Projects from "./Projects";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Animations";
import { Link } from "react-router-dom";

const counters = [
  { end: 1.5, text: "Years Experience", hasPlus: true },
  { end: 5, text: "Completed Projects", hasPlus: false },
  { end: 1, text: "Happy Customers", hasPlus: false },
  { end: 0, text: "Honors and Awards", hasPlus: true },
];
const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home-page motion"
    >
      <div className="container-fluid">
        <div className="row mt-4 pt-2">
          <div className="col-lg-12">
            <div className="bgBanner">
              <div className="banOver">
                <div className="banner-title">
                  <h1 className="mb-2">
                    Explore My Full Stack <br /> Creations!
                  </h1>
                  <div className="type-animation d-flex">
                    <p className="iSymbol d-flex">
                      &lt;<div className="iCode">code</div>&gt;
                    </p>
                    <TypeAnimation
                      sequence={[
                        "I build Web interfaces.",
                        1000,
                        "I build Web sites.",
                        1000,
                        "I build Web Applications.",
                        1000,
                        "I build e-commerce stores.",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                    <p className="iSymbol d-flex">
                      &lt;/<div className="iCode">code</div>&gt;
                    </p>
                  </div>
                  <Link to="/contact">
                    <div className="btn-frame">
                      <span>EXPLORE NOW</span>
                    </div>
                  </Link>
                </div>
                {/* <img src={AdminPng} className="adminProfile" alt="Profile" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row pt-3 mt-3">
          {counters.map((counter, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className="count-frame">
                <div className="counterBox">
                  <CountingAnimation
                    start={0}
                    end={counter.end}
                    duration={2000}
                  />
                  {counter.hasPlus && (
                    <span className="count-value ps-1">+</span>
                  )}
                </div>
                <h6>{counter.text}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyServicesCards />
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default Home;
