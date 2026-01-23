import React from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    id: "discount-night",
    image: "/Asst/imgs/offers/discountNight.png",
    link: "/offers/discount-night",
  },
  {
    id: "exclusive-tuesday",
    image: "/Asst/imgs/offers/exclusiveTuesday.png",
    link: "/offers/exclusive-tuesday",
  },
  {
    id: "tracks-hour",
    image: "/Asst/imgs/offers/tracksHour.png",
    link: "/offers/tracks-hour",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#061b22] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Current Offers
        </h1>

        <div className="space-y-8">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to={offer.link}
              className="block group rounded-2xl overflow-hidden border border-white/10 bg-black"
            >
              <img
                src={offer.image}
                alt={offer.id}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* subtle hover indicator */}
              <div className="absolute inset-0 pointer-events-none group-hover:ring-2 ring-[#6D9999]/40 rounded-2xl transition" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}