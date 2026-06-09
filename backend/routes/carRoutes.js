import express from "express";
import Car from "../models/Car.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// ADD CAR
router.post("/add", auth, async (req, res) => {
  const car = await Car.create(req.body);
  res.json(car);
});

// GET ALL CARS
router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// UPDATE CAR
router.put("/:id", auth, async (req, res) => {
  const car = await Car.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(car);
});

// DELETE CAR
router.delete("/:id", auth, async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ msg: "Car deleted" });
});

export default router;
