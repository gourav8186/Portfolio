import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const CardData = [
  {
    name: "Web Development",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.`,
  },
  {
    name: "UI/UX Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.`,
  },
  {
    name: "Sound Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.`,
  },
  {
    name: "Game Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.`,
  },
  {
    name: "Advertising",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.`,
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
          <div key={index} className="col-lg-4 col-sm-6 col-md-6">
            <div className="cardBox">
              <h5>{cardData.name}</h5>
              <p>{cardData.description}</p>
              <div className="orderBtn">
                order now <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServicesCards;
