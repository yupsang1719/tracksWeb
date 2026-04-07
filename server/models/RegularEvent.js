const mongoose = require("mongoose");

const regularEventSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    title: { type: String, required: true },
    host: { type: String, required: true },
    flyer: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 0 },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RegularEvent", regularEventSchema);
