const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");

router.post("/", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      // 1. Save to DB
      const booking = new Booking({
        name: session.metadata.name,
        email: session.metadata.email,
        tickets: parseInt(session.metadata.tickets),
        message: session.metadata.message || "",
        event: session.metadata.event || "Unknown",
        paymentIntentId: session.payment_intent,
      });

      await booking.save();

      // 2. Send confirmation email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"The Tracks Team" <${process.env.EMAIL_USER}>`,
        to: booking.email,
        subject: "🎫 Your VIKRUM Fest Entry Pass",
        text: `
Hi ${booking.name},

🎉 Your ticket(s) to "${booking.event}" have been confirmed!

Details:
- Name: ${booking.name}
- Tickets: ${booking.tickets}
- Event: ${booking.event}
- Payment ID: ${booking.paymentIntentId}

Please show this email as your entry pass at the venue.

See you there!
— The Tracks Team
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("✅ Email confirmation sent");

    } catch (err) {
      console.error("❌ Failed to process booking:", err);
    }
  }

  res.status(200).send("Webhook received");
});

module.exports = router;
