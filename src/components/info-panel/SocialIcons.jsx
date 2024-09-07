import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
const SocialIcons = () => {
  return (
    <div className="socialmedia">
      <ul className="socialAccounts d-flex justify-content-between align-items-center mb-0">
        <li>
          <Link to="https://www.linkedin.com/in/gourav-suthar-91857723b/">
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/gourav8186">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/wonderwithgourav?igsh=MWF3b2lqM3oycnJycg==">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="mailto:gouravsuthar564@gmail.com">
            <BiLogoGmail />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
