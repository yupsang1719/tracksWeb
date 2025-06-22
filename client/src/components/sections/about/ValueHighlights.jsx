// src/components/about/ValueHighlights.jsx
import React from "react";
import { FaMusic, FaBeer, FaUsers, FaHeart } from "react-icons/fa";

const values = [
  {
    icon: <FaMusic className="text-3xl text-[#D4AF37]" />,
    title: "Live Music",
    description: "Experience unforgettable live performances every weekend, featuring local talent and top bands.",
  },
  {
    icon: <FaBeer className="text-3xl text-[#D4AF37]" />,
    title: "Premium Drinks",
    description: "Enjoy a curated selection of cocktails, wines, and craft beers in a cozy, vibrant setting.",
  },
  {
    icon: <FaUsers className="text-3xl text-[#D4AF37]" />,
    title: "Community Vibes",
    description: "We’re a gathering place for all. Everyone’s welcome here — bring your mates or make new ones!",
  },
  {
    icon: <FaHeart className="text-3xl text-[#D4AF37]" />,
    title: "Authentic Atmosphere",
    description: "A perfect blend of music, laughter, and warm hospitality that makes you feel right at home.",
  },
];

export default function ValueHighlights() {
  return (
    <section className="bg-[#0A2A3C] py-16 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-2 border-[#6D9999] inline-block pb-2">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-md border border-white/10 hover:scale-[1.03] transition"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
