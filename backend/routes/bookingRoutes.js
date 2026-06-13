import express from "express";
import Booking from "../models/Booking.js";


const router = express.Router();

// CREATE BOOKING
router.post("/create", async (req, res) => {
  try {
    console.log("BOOKING RECEIVED:", req.body);

    const booking = await Booking.create(req.body);

    console.log("BOOKING SAVED:", booking);

    res.json({
      success: true,
      message: "Booking Successful",
      booking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET BOOKINGS
router.get("/my", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;