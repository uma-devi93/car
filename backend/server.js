import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import otpRoutes from "./routes/otp.js"; 

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Fix %0A bug
app.use((req, res, next) => {
  req.url = req.url.trim();
  next();
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/otp", otpRoutes); //  OTP API

// DATABASE + SERVER
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch((err) => console.error(err));
