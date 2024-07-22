import React from "react";
import "./language.css";
import { CircularProgressbar } from "react-circular-progressbar";
const Languages = () => {
  const percentage = 50;
  const percentage2 = 70;
  return (
    <div className="d-flex justify-content-center gap-5 flex-wrap pt-4 pb-3">
      <div className="langItems">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        <h6 className="skillName">English</h6>
      </div>
      <div className="langItems">
        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />;
        <h6 className="skillName">Hindi</h6>
      </div>
    </div>
  );
};

export default Languages;
