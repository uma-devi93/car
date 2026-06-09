import express from "express";
const router = express.Router();

let currentOtp = null;

// SEND OTP
router.post("/send", (req, res) => {
  currentOtp = Math.floor(1000 + Math.random() * 9000).toString();
  console.log("Demo OTP:", currentOtp);

  res.json({ success: true, otp: currentOtp });
});

// VERIFY OTP
router.post("/verify", (req, res) => {
  const { otp } = req.body;

  if (otp === currentOtp) {
    currentOtp = null;
    return res.json({ success: true });
  }

  res.status(400).json({ message: "Invalid OTP" });
});

export default router;
