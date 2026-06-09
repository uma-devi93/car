import React, { useState } from "react";
import "./BookingForm.css";
export default function BookingForm() {
  const [carType, setCarType] = useState("normal");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [hourly, setHourly] = useState(false);
  const [hours, setHours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      carType, pickup, dropoff, pickupDate, pickupTime, dropDate, dropTime, hourly, hours
    };
    alert("Form submitted\n\n" + JSON.stringify(payload, null, 2));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Book Your Ride</h2>

      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">

        {/* Radio Buttons */}
        <div className="row mb-3">
          <div className="col d-flex gap-4 justify-content-center">
            <div className="form-check">
              <input
                type="radio"
                name="type"
                className="form-check-input"
                checked={carType === "luxury"}
                onChange={() => setCarType("luxury")}
              />
              <label className="form-check-label">Luxury</label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                name="type"
                className="form-check-input"
                checked={carType === "normal"}
                onChange={() => setCarType("normal")}
              />
              <label className="form-check-label">Normal</label>
            </div>
          </div>
        </div>

        {/* Pickup & Drop-off */}
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Pickup Location</label>
            <input
              className="form-control"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="City or landmark"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Drop-off Location</label>
            <input
              className="form-control"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="City or landmark"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="row g-3 mt-2">
          <div className="col-md-3">
            <label className="form-label">Pickup Date</label>
            <input
              type="date"
              className="form-control"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Pickup Time</label>
            <input
              type="time"
              className="form-control"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Drop Date</label>
            <input
              type="date"
              className="form-control"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Drop Time</label>
            <input
              type="time"
              className="form-control"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
            />
          </div>
        </div>

        {/* Hourly Checkbox */}
        <div className="row mt-3">
          <div className="col-md-6 d-flex align-items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hourly}
              onChange={() => setHourly(!hourly)}
            />
            <label className="form-check-label">Hourly Rental</label>
          </div>

          {hourly && (
            <div className="col-md-6">
              <label className="form-label">Hours</label>
              <input
                type="number"
                min="1"
                max="24"
                className="form-control"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-primary px-4" type="submit">
            submit
          </button>
          <button
            className="btn btn-outline-secondary px-4"
            type="button"
            onClick={() => {
              setCarType("normal");
              setPickup("");
              setDropoff("");
              setPickupDate("");
              setPickupTime("");
              setDropDate("");
              setDropTime("");
              setHourly(false);
              setHours(1);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
