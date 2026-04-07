require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const webhookRoutes = require("./routes/webhook");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = process.env.PORT || 8000;
const isProd = process.env.NODE_ENV === "production";

// Connect to MongoDB
connectDB();

// CORS — open in dev, locked to domain in production
app.use(cors({
  origin: isProd ? process.env.CLIENT_URL : (_origin, cb) => cb(null, true),
  credentials: true,
}));

// ⚠️ Stripe webhook must come BEFORE express.json()
app.use("/webhook", webhookRoutes);

// Body parser
app.use(express.json());

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/events", eventRoutes);

// Email confirmation
app.post("/send-confirmation", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: `"Tracks Contact Form" <${process.env.EMAIL_USER}>`,
      to: "funkyend51@gmail.com",
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    res.status(200).send("Email sent");
  } catch (err) {
    console.error("Failed to send email:", err);
    res.status(500).send("Email sending failed");
  }
});

// Serve React build in production
if (isProd) {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));
  // All non-API routes return the React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${isProd ? "production" : "development"}]`);
});
