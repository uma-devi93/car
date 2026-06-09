import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// CREATE BOOKING
router.post("/create", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

// GET BOOKINGS
router.get("/my", async (req, res) => {
  const bookings = await Booking.find().sort({ _id: -1 });
  res.json(bookings);
});

export default router;
