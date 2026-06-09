import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://v.ftcdn.net/09/04/19/13/700_F_904191380_fmPZ3tDbxguj9ZyCPv1acZwayc0aMLJL_ST.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Golden Car Rental</h1>
        <p className="hero-subtitle">Book your perfect car today!</p>
      </div>

      {/* Moving Register Button */}
      <a href="/register" className="hero-btn moving-btn">
        Register Now <span className="arrow">→</span>
      </a>
    </section>
  );
}
