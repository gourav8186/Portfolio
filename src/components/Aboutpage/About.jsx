import React from "react";
import "./about.css";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Animations";

const About = () => {
  const EducationData = [
    {
      title: "Secondary Education , Rajasthan",
      subTitle: "10th Standard",
      date: "April 2016 - march 2017",
      description: `Completed 10th grade from Galaxy Senior Secondary School, Jodhpur, in 2017 with 67.20%. Developed problem-solving and teamwork skills while participating in extracurricular activities, building a strong academic foundation.`,
    },
    {
      title: "Senior Secondary Education , Rajasthan",
      subTitle: "12th Standard",
      date: "April 2018 - March 2019",
      description: `Completed 12th with PCM subjects, achieving 75.20%. Developed strong analytical skills and a solid foundation in science and mathematics, preparing for technical education.`,
    },
    {
      title: "Bachelor of Computer Applications",
      subTitle: "Under Graduation",
      date: "Oct 2021 - may 2024",
      description: `Completed BCA from Lachoo Memorial College in May 2024 with 63.33%, gaining skills in computer applications, programming, and web development through practical projects and coursework.`,
    },
    {
      title: "Master of Computer Applications",
      subTitle: "Post Graduation",
      date: "Oct 2024 - Pursuing",
      description: `Pursuing MCA with a focus on advanced computing, programming, and software development. Enhancing skills in data structures, algorithms, and project management, preparing for a career in technology.`,
    },
  ];
  const WorkHistoryData = [
    {
      title: "Ws Cube Tech",
      subTitle: "Full Stack Developer Training",
      date: "March 2022 - September 2022",
      description: `Completed a web development course covering HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. Gained hands-on experience in building responsive, dynamic websites and managing databases.`,
    },
    {
      title: "TFour Tech Pvt. Ltd.",
      subTitle: "Full Stack Developer Internship",
      date: "March 2023 - September 2024",
      description: `Completed a 6-month Full Stack Developer internship, gaining hands-on experience with HTML, CSS, JavaScript, Bootstrap, React.js, PHP, and MySQL, enhancing skills in both frontend and backend development.`,
    },
    {
      title: "WordPress Woo Commerce project",
      subTitle: "Freelancing Project",
      date: "March 2024 - May 2024",
      description: `Developed a WordPress WooCommerce site as a freelancer, creating a user-friendly online store with custom features, optimized performance, and integrated payment solutions for a seamless shopping experience.`,
    },
    {
      title: "MERN STACK",
      subTitle: "Self Learning on going journey",
      date: "March 2024 - Present",
      description: `Currently self-learning MERN stack, focusing on MongoDB, Express.js, React.js, and Node.js. Gaining hands-on experience with full-stack development, building projects to enhance skills and practical knowledge.`,
    },
  ];
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="motion"
    >
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-lg-6">
            <div className="col-lg-12">
              <h4 className="card_title">Education</h4>
            </div>
            <div className="aboutGallary">
              {EducationData.map((education, index) => (
                <div className="aboutItem" key={index}>
                  <div className="itemMarklight"></div>
                  <div className="itemContent">
                    <div className="itemHeader">
                      <div className="leftSide">
                        <h5>{education.title}</h5>
                        <p className="subTitle">{education.subTitle}</p>
                      </div>
                      <div className="rightSide mb-3">
                        <div className="dateBox">{education.date}</div>
                      </div>
                    </div>
                    <p>{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-lg-12">
              <h4 className="card_title">Work History</h4>
            </div>
            <div className="aboutGallary">
              {WorkHistoryData.map((workHistory, index) => (
                <div className="aboutItem" key={index}>
                  <div className="itemMarklight"></div>
                  <div className="itemContent">
                    <div className="itemHeader">
                      <div className="leftSide">
                        <h5>{workHistory.title}</h5>
                        <p className="subTitle">{workHistory.subTitle}</p>
                      </div>
                      <div className="rightSide mb-3">
                        <div className="dateBox">{workHistory.date}</div>
                      </div>
                    </div>
                    <p>{workHistory.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
