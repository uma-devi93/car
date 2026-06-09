import React from "react";
import "./CarCarousel.css";

const CARS = [
  { id: 1, title: "Toyota Innova", img: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=80&auto=format&fit=crop" },
  { id: 2, title: "Audi", img: "https://images.pexels.com/photos/14764071/pexels-photo-14764071.jpeg" },
  { id: 3, title: "BMW", img: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym13fGVufDB8fDB8fHww" },
 
 ];

export default function CarCarousel() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Popular Cars</h2>

      <div
        id="carCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >
        <div className="carousel-inner">
          {CARS.map((car, index) => (
            <div
              key={car.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={car.img}
                className="d-block w-100 carousel-img"
                alt={car.title}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                <h5>{car.title}</h5>
                <p>Self Drive · 4 Seats · AC</p>
              </div>
            </div>
          ))}
        </div>

        {/* Previous / Next Buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

        {/* Dots */}
        <div className="carousel-indicators">
          {CARS.map((car, index) => (
            <button
              key={car.id}
              type="button"
              data-bs-target="#carCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
