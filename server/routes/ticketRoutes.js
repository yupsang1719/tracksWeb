const express = require("express");
const router = express.Router();
require("dotenv").config();

const stripe = process.env.STRIPE_SECRET_KEY ? require("stripe")(process.env.STRIPE_SECRET_KEY) : null;

router.post("/create-checkout-session", async (req, res) => {
  const { name, email, tickets, message, eventTitle } = req.body;

  // 🎟️ Define ticket prices for known events (in pence for GBP)
  const eventPrices = {
    "Vikrum Fest 2025": 1000,       // £10.00
    "RUN THE TRACKS": 500,         // £5.00
  };

  // 🛡️ Fallback to default price
  const ticketPrice = eventPrices[eventTitle] || 1000;

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
      success_url: "https://tracksaldershot.co.uk/success",
      cancel_url: "https://tracksaldershot.co.uk/cancel",
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Failed to create checkout session." });
  }
});

module.exports = router;
