const express = require("express");
const router = express.Router();
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const { name, email, tickets, message } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Tracks Event Ticket",
              description: `Ticket for: ${name}`,
            },
            unit_amount: 100, // £5 per ticket
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
        event: "Vikrum Fest 2025",
      },
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Failed to create checkout session." });
  }
});

module.exports = router;
