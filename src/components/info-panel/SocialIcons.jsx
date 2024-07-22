import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="socialmedia">
      <ul className="socialAccounts d-flex justify-content-between align-items-center mb-0">
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
