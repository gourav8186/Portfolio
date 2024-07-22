import React from "react";
import "./contact.css";
import Footer from "../Footer";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-lg-12">
            <h4 className="card_title">Contact information</h4>
          </div>
          <div className="col-lg-6">
            <div className="contactCard">
              <ul>
                <li>
                  <h6>Email:</h6>
                  <span>Gouravsuthar564@gmail.com</span>
                </li>
                <li>
                  <h6>Telegram:</h6>
                  <span>Toronto</span>
                </li>
                <li>
                  <h6>Skype:</h6>
                  <span>Gourav</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactCard">
              <ul>
                <li>
                  <h6>Support service::</h6>
                  <span>+78 (098) 333 11 22</span>
                </li>
                <li>
                  <h6>Office::</h6>
                  <span>+78 (098) 333 11 22</span>
                </li>
                <li>
                  <h6>Personal:</h6>
                  <span>+78 (098) 333 11 22</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <h4 className="card_title">Get in touch</h4>
            <div className="formCard">
              <form action="">
                <div className="form-field">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="form-input"
                  />
                  <label htmlFor="name">
                    <FaUserAlt />
                  </label>
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="form-input"
                  />
                  <label htmlFor="email">
                    <MdAlternateEmail />
                  </label>
                </div>
                <div className="form-field textarea">
                  <textarea
                    type="text"
                    id="message"
                    placeholder="Message"
                    style={{ height: "80px" }}
                    className="form-input"
                  ></textarea>
                  <label htmlFor="message">
                    <FaEnvelope />
                  </label>
                </div>
                <div className="subBtn">
                  <button type="submit" className="submitBtnstyle">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
