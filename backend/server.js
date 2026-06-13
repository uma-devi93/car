import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import otp from "./routes/otp.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DEBUG LOG
app.use((req, res, next) => {
  console.log("👉 METHOD:", req.method, "| URL:", req.url);
  console.log("👉 BODY:", req.body);
  next();
});

// ROUTES (IMPORTANT)
app.use("/api/auth", authRoutes);
app.use("/api/otp", otp);
app.use("/api/bookings", bookingRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// DB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000 🚀");
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });