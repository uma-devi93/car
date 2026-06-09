import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* TOP SECTION */}
        <div className="footer-top">
          
          {/* LOGO */}
          <div className="footer-logo">
            Golden <span>CarRental</span>
          </div>

          {/* NAV LINKS */}
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/affiliate">Affiliate</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/account">My Account</Link>
          </nav>

          {/* CONTACT + SOCIAL */}
          <div className="footer-contact">
            <p>Contact: +91 790 281 0000</p>
            <p>Email: support@Goldencarrental.com</p>

            <div className="footer-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer-bottom">
          <p>© 2025 Golden CarRental. All rights reserved.</p>

          <div className="footer-policy">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/refund">Refund Policy</Link>
            <Link to="/cancel">Cancellation Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
