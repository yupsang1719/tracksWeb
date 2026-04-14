const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controller/adminController");
const auth = require("../middleware/auth");
const Booking = require("../models/Booking");

router.post("/login", loginAdmin);

// Get all bookings (admin only)
router.get("/bookings", auth, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});


module.exports = router;
