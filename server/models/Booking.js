const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name:            { type: String, required: true, trim: true, maxlength: 100 },
  email:           { type: String, required: true, lowercase: true, trim: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  tickets:         { type: Number, required: true, min: 1, max: 20 },
  message:         { type: String, maxlength: 500, default: "" },
  event:           { type: String, required: true },
  paymentIntentId: { type: String, unique: true, sparse: true },
  ticketNumber:    { type: String },
  createdAt:       { type: Date, default: Date.now },
});

bookingSchema.index({ email: 1 });
bookingSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Booking", bookingSchema);
