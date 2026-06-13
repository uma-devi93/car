import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    car: String,
    pickup: String,
    drop: String,
    pickupDate: String,
    dropDate: String,
    pickupTime: String,
    dropTime: String,
    paymentMethod: String,
    amount: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);