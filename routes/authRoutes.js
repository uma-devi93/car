import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    email = email.trim().toLowerCase();

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    res.json({ msg: "Registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    console.log("📩 BACKEND RECEIVED DATA:", { email, password });

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    // Safety: Trim spaces and change to lower case
    email = email.trim().toLowerCase();

    // Database check
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`❌ User with email ${email} NOT found in database`);
      return res.status(400).json({ msg: "User not found" });
    }

    // Password check
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("❌ Password did not match");
      return res.status(400).json({ msg: "Invalid password" });
    }

    // Token checking
    if (!process.env.JWT_SECRET) {
      console.error("❌ CRITICAL: JWT_SECRET is missing in .env file!");
      return res.status(500).json({ msg: "Server Configuration Error" });
    }

    const token = jwt.sign(
      { user: { id: user._id } },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("✅ LOGIN SUCCESS FOR:", email);
    res.json({ msg: "Login successful", token });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
