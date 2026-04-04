require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const webhookRoutes = require("./routes/webhook");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// CORS
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// ⚠️ Stripe webhook route must come BEFORE express.json()
app.use("/webhook", webhookRoutes);

// Now use JSON body parser for the rest
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/tickets", ticketRoutes);

// Your email confirmation fallback
app.post("/send-confirmation", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
