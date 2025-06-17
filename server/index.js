require("dotenv").config();
const express = require("express");
const cors = require("cors");
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
app.use("/admin", adminRoutes);
app.use("/api/tickets", ticketRoutes);

// Your email confirmation fallback
app.post("/send-confirmation", async (req, res) => {
  // your email logic
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
