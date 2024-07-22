import React from "react";
import "./about.css";
import Footer from "../Footer";

const About = () => {
  const EducationData = [
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
  ];
  const WorkHistoryData = [
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
    {
      title: "University of India",
      subTitle: "Student",
      date: "jan 2018 - may 2020",
      description: `Dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde? Iste voluptatibus minus
                  veritatis qui ut.`,
    },
  ];
  return (
    <section>
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
    </section>
  );
};

export default About;
