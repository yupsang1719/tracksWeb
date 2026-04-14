const express = require("express");
const router = express.Router();
const MajorEvent = require("../models/MajorEvent");
const RegularEvent = require("../models/RegularEvent");
const auth = require("../middleware/auth");

// ── Major Events ──────────────────────────────────────────────

// Public — visible only
router.get("/major", async (req, res) => {
  try {
    const events = await MajorEvent.find({ isVisible: true }).sort({ deadline: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch major events" });
  }
});

// Admin — all events including hidden
router.get("/major/all", auth, async (req, res) => {
  try {
    const events = await MajorEvent.find().sort({ deadline: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch major events" });
  }
});

// Toggle visibility
router.put("/major/:id/toggle", auth, async (req, res) => {
  try {
    const event = await MajorEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    event.isVisible = !event.isVisible;
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/major", auth, async (req, res) => {
  try {
    const event = await MajorEvent.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Invalid event data" });
  }
});

router.put("/major/:id", auth, async (req, res) => {
  try {
    const event = await MajorEvent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: "Invalid event data" });
  }
});

router.delete("/major/:id", auth, async (req, res) => {
  try {
    const event = await MajorEvent.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ── Regular Events ────────────────────────────────────────────

// Public — visible only
router.get("/regular", async (req, res) => {
  try {
    const events = await RegularEvent.find({ isVisible: true }).sort({ order: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch regular events" });
  }
});

// Admin — all events including hidden
router.get("/regular/all", auth, async (req, res) => {
  try {
    const events = await RegularEvent.find().sort({ order: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch regular events" });
  }
});

// Toggle visibility
router.put("/regular/:id/toggle", auth, async (req, res) => {
  try {
    const event = await RegularEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    event.isVisible = !event.isVisible;
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/regular", auth, async (req, res) => {
  try {
    const event = await RegularEvent.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Invalid event data" });
  }
});

router.put("/regular/:id", auth, async (req, res) => {
  try {
    const event = await RegularEvent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: "Invalid event data" });
  }
});

router.delete("/regular/:id", auth, async (req, res) => {
  try {
    const event = await RegularEvent.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
