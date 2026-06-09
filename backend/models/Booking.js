import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  carName: String,
  pickup: String,
  drop: String,
  pickupDate: String,
  dropDate: String,
  payment: String,
  amount: Number,
  image:String
});

export default mongoose.model("Booking", bookingSchema);
