const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controller/adminController");
const Booking = require("../models/Booking");

router.post("/login", loginAdmin);

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});


module.exports = router;
