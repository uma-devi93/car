import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  pricePerDay: Number,
  image: String,
});

export default mongoose.model("Car", carSchema);
