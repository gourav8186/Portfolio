import React, { useContext, useEffect, useRef } from "react";
import ActiveContext from "../../ActiveContext";
import SocialIcons from "./SocialIcons";
import InfoScroll from "./InfoScroll";
import "./sidepanel.css";
import Avatar from "./Avatar";
import { RxHamburgerMenu } from "react-icons/rx";

const SidePanel = () => {
  const { isTouched, setIsTouched } = useContext(ActiveContext);
  const panelRef = useRef(null);
  const handleDocumentClick = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setIsTouched(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  });

  const ClickHandler = () => {
    setIsTouched(false);
  };
  return (
    <div ref={panelRef} className={`sidebar ${isTouched ? "activePanel" : ""}`}>
      <div className="headTop d-flex flex-column justify-content-center align-items-center pb-2">
        <div className="MenuCloser" onClick={ClickHandler}>
          <RxHamburgerMenu />
        </div>
        <Avatar />
        <h5 className="adminName">Gourav Suthar</h5>
        <div className="adminTxt">
          Software Engineer <br /> Front-end Developer,
        </div>
      </div>
      <InfoScroll />
      <SocialIcons />
    </div>
  );
};

export default SidePanel;
