import express from "express";
const router = express.Router();

let currentOtp = null;

router.post("/send", (req, res) => {
  currentOtp = Math.floor(1000 + Math.random() * 9000).toString();
  res.json({ success: true, otp: currentOtp });
});

router.post("/verify", (req, res) => {
  const { otp } = req.body;

  if (otp === currentOtp) {
    currentOtp = null;
    return res.json({ success: true });
  }

  res.status(400).json({ message: "Invalid OTP" });
});

export default router;