import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Animations";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      emailjs
        .sendForm("service_ow3gl3b", "template_w4oa02m", form.current, {
          publicKey: "Bpg_jWJJHx0uBmdmv",
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
            setIsSubmitting(false);
          },
          (error) => {
            toast.error("Failed to send message...");
            console.log("FAILED...", error.text);
            setIsSubmitting(false);
          }
        );
    }, 2000);
  };
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
          <div className="col-lg-12">
            <h4 className="card_title">Contact information</h4>
          </div>
          <div className="col-lg-6">
            <div className="contactCard">
              <ul>
                <li>
                  <h6>Email:</h6>
                  <span>
                    <Link to="mailto:gouravsuthar564@gmail.com">
                      Gouravsuthar564@gmail.com
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contactCard">
              <ul>
                <li>
                  <h6>Support service::</h6>
                  <span>
                    <Link to="tel:9024818628">+91 9024818628</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <h4 className="card_title">Get in touch</h4>
            <div className="formCard">
              <form ref={form} onSubmit={sendEmail} noValidate>
                <div className="form-field">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="form-input"
                    name="user_name"
                    required
                  />
                  <label htmlFor="name">
                    <FaUserAlt />
                  </label>
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    className="form-input"
                    required
                  />
                  <label htmlFor="email">
                    <MdAlternateEmail />
                  </label>
                </div>
                <div className="form-field textarea">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                    style={{ height: "80px" }}
                    className="form-input"
                    required
                  ></textarea>
                  <label htmlFor="message">
                    <FaEnvelope />
                  </label>
                </div>
                <div className="subBtn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submitBtnstyle"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
