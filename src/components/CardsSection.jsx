import React from "react";
import "./CardsSection.css";

const CARDS = [
  { id: 1, title: "City Tours", desc: "Comfortable rides for city travels", logo: "https://img.icons8.com/ios-filled/50/000000/sedan.png" },
  { id: 2, title: "Airport Transfers", desc: "On-time pickups & drop-offs", logo: "https://img.icons8.com/ios-filled/50/000000/airport.png" },
  { id: 3, title: "Long Drives", desc: "Spacious cars for family trips", logo: "https://img.icons8.com/ios-filled/50/000000/road.png" },
  { id: 4, title: "Hourly Hire", desc: "Pay only for the hours you use", logo: "https://img.icons8.com/ios-filled/50/000000/time.png" },
  { id: 5, title: "Outstation", desc: "Reliable outstation rentals", logo: "https://img.icons8.com/ios-filled/50/000000/map.png" },
];

export default function CardsSection() {
  return (
    <div className="container py-5 cards-section">

      {/* Header */}
      <div className="text-center mb-4 section-head">
        <h2 className="fw-bold">Why Choose Golden CarRental</h2>
        <p className="text-muted">
          Affordable, convenient, and reliable rentals to make your journey unforgettable.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {CARDS.map((c) => (
          <div key={c.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
            <div className="service-card p-4 text-center rounded shadow-sm h-100">
              <div className="card-logo mb-3">
                <img src={c.logo} alt={c.title} className="img-fluid" />
              </div>
              <h4 className="fw-semibold">{c.title}</h4>
              <p className="text-muted small mt-2">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
