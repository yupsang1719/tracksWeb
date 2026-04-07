const mongoose = require("mongoose");

const majorEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, default: "" },
    tag: { type: String, default: "" },
    image: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: String, required: true },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MajorEvent", majorEventSchema);
