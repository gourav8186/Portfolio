import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const CardData = [
  {
    name: "Front End Development",
    description: `Specialized in designing and developing websites using HTML, CSS, JavaScript, Bootstrap, and React.js. Created responsive, user-friendly designs with modern front-end technologies for optimal performance and efficiency.`,
  },
  {
    name: "Back End Development",
    description: `Experienced in intermediate-level back-end development with PHP and Node.js. Proficient in managing databases with MongoDB and MySQL, and skilled in creating and integrating REST APIs for robust applications.`,
  },
  {
    name: "WordPress Development",
    description: `Experienced in WordPress development with a focus on WooCommerce and paid themes. Proficient in setting up and customizing e-commerce platforms, ensuring responsive and user-friendly websites with optimized functionality and design.`,
  },
];

const MyServicesCards = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="card_title">My Services</h4>
        </div>
        {CardData.map((cardData, index) => (
          <div key={index} className="col-lg-6 col-sm-6 col-md-6">
            <div className="cardBox">
              <h5>{cardData.name}</h5>
              <p>{cardData.description}</p>
              <div className="orderBtn">
                <Link to="/contact">
                  Contact Me <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServicesCards;
