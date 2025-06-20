const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  tickets: Number,
  message: String,
  event: String,
  paymentIntentId: String,
  ticketNumber: String, // ✅ New field
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
