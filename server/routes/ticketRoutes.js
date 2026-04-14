const express = require("express");
const router = express.Router();
require("dotenv").config();

const stripe = process.env.STRIPE_SECRET_KEY ? require("stripe")(process.env.STRIPE_SECRET_KEY) : null;

router.post("/create-checkout-session", async (req, res) => {
  const { name, email, tickets, message, eventTitle } = req.body;

  // Input validation
  if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
    return res.status(400).json({ error: "Invalid name" });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (!tickets || !Number.isInteger(Number(tickets)) || tickets < 1 || tickets > 20) {
    return res.status(400).json({ error: "Invalid ticket quantity (1–20)" });
  }
  if (!eventTitle || typeof eventTitle !== "string") {
    return res.status(400).json({ error: "Invalid event" });
  }
  if (message && message.length > 500) {
    return res.status(400).json({ error: "Message too long (max 500 chars)" });
  }

  // Define ticket prices for known events (in pence for GBP)
  const eventPrices = {
    "Vikrum Fest 2025": 1000,
    "RUN THE TRACKS": 500,
  };

  const ticketPrice = eventPrices[eventTitle] || 1000;
  const baseUrl = process.env.CLIENT_URL || "https://tracksaldershot.co.uk";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: `Ticket for: ${eventTitle}`,
              description: `Ticket for: ${name}`,
            },
            unit_amount: ticketPrice,
          },
          quantity: tickets,
        },
      ],
      customer_email: email,
      metadata: {
        name,
        email,
        tickets: String(tickets),
        message,
        event: eventTitle,
      },
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Failed to create checkout session." });
  }
});

module.exports = router;
