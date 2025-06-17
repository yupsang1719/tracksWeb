import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe("pk_live_51Rak0GDGDVBsojmjhJ7OHFqMugy6mi0NBzjnfbUhYNU8dSUblejWgmSlw4RqZkRt3FPqpmfxQAz6cJwluoDv8iFr00qS1jdWQ5");

export default function TicketModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const stripe = await stripePromise;

      const res = await fetch("http://localhost:5000/api/tickets/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.id) {
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Stripe redirect error:", err);
      alert("Error connecting to payment system.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black w-full max-w-lg p-6 rounded-lg shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Book Your Tickets</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="tickets"
            min="1"
            value={formData.tickets}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Optional Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-[#6D9999] text-white px-6 py-2 rounded hover:bg-[#5b8686] transition w-full"
          >
            Pay & Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
