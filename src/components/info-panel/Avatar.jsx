import React from "react";
import "./avatar.css";
import profileImage from "../../assets/images/face-1.jpg";
const Avatar = () => {
  return (
    <div className="avatar">
      <div className="profileBox">
        <img src={profileImage} className="w-100" alt="" />
        <div className="popLamp">
          <div className="popTitle"></div>
        </div>
      </div>
    </div>
  );
};
export default Avatar;
