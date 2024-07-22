import React from "react";
import "./SkillProgressBar.css";

const skills = [
  { name: "HTML", percent: 70 },
  { name: "CSS", percent: 80 },
  { name: "JS", percent: 50 },
  { name: "React JS", percent: 40 },
  { name: "PHP", percent: 70 },
  { name: "Node JS", percent: 30 },
  { name: "MySQL", percent: 70 },
];

const SkillProgressBar = () => {
  return (
    <section className="skill-container py-4">
      {skills.map((skill, index) => (
        <div key={index} className="skill-items">
          <div className="skill-info">
            <p>{skill.name}</p>
            <p className="percent">{skill.percent}%</p>
          </div>
          <div className="progress-line">
            <div
              className="line-fill"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillProgressBar;
