import React, { useState } from "react";
import axios from "axios";
import "./Footer.css"; // Import the CSS file

const handleSubscribe = (email) => {
  axios.post("/subscribe", {
    email,
  });
};

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h2 className="footer__heading">XYZ Industries</h2>
          <p className="footer__text">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
        </div>
        <div className="footer__col">
          <h2 className="footer__heading">Quick Links</h2>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Site Map
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h2 className="footer__heading">Customer Support</h2>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Feedback
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Report a Problem
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Terms and Conditions
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h2 className="footer__heading">Subscribe Us</h2>
          <form className="footer__form">
            <input
              type="email"
              placeholder="Email Id"
              className="footer__input"
              onBlur={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              className="footer__button"
              onClick={(e) => {
                e.preventDefault();
                handleSubscribe(email);
              }}
            >
              Subscribe
            </button>
          </form>
          <p className="footer__copy">©2024 XYZ Industries</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
