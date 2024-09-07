import React, { useContext } from "react";
import ActiveContext from "../ActiveContext";
import { RxHamburgerMenu } from "react-icons/rx";
import profileImage from "../assets/images/admin2.png";
import { Link } from "react-router-dom";
const MobileHeader = () => {
  const { setIsTouched } = useContext(ActiveContext);

  const ClickHandler = () => {
    setIsTouched(true);
  };
  return (
    <header>
      <div className="d-flex justify-content-between">
        <div className="MenuToggler" onClick={ClickHandler}>
          <RxHamburgerMenu />
        </div>
        <Link to="/" className="headreLink">
          <div className="d-flex gap-3 align-items-center">
            <div className="introName">
              <h5 className="mb-0">Gourav Suthar</h5>
              <p className="my-0 text-end">Software Engineer</p>
            </div>
            <div className="adminImg">
              <img src={profileImage} className="w-100" alt="Profile" />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
