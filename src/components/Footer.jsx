import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer>
        <div className="copyText">© 2024 Gourav Suthar</div>
        <div>
          Portfolio author:{" "}
          <span className="highlight">
            {" "}
            <Link to="/">Gourav Suthar</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
