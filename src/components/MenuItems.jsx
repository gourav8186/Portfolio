import React, { useContext } from "react";
import HoverContext from "../HoverContext";
import "./menu-items.css";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiInformation2Fill } from "react-icons/ri";
const MenuItems = () => {
  const { setIsHovered } = useContext(HoverContext);
  const { setIsOpacity } = useContext(HoverContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsOpacity(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsOpacity(false);
  };
  return (
    <div
      className="menu-bar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flagBox">
        <div className="flag"></div>
      </div>
      <nav>
        <ul className="menu_items">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <IoHomeOutline />
              <h4>Home</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <RiInformation2Fill />
              <h4>About</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <MdOutlineEmail />
              <h4>Contact</h4>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FaBlog />
              <h4>Blogs</h4>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="langSymbol">
        <div className="langName">EN</div>
      </div>
    </div>
  );
};

export default MenuItems;
