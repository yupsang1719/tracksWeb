import React from "react";
import { Link } from "react-router-dom";
import { PUB } from "../data/pubConfig";

export default function DiscountNight() {
  return (
    <main className="bg-[#061b22] text-white min-h-screen">
      {/* Offer Image (no overlay, no text) */}
      <section className="w-full">
        <img
          src="/Asst/imgs/offers/discountNight.png"
          alt="Discount Night"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Centered content */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Discount Night</h1>

        <p className="mt-4 text-white/80 text-lg">
          Great value, midweek.
        </p>

        <p className="mt-6 text-white/85 text-lg leading-relaxed">
          Join us every <span className="font-semibold text-white">Wednesday and Thursday</span>{" "}
          for our Discount Night offers. Enjoy{" "}
          <span className="font-semibold text-white">2 for 1 on selected house spirits</span>, plus{" "}
          <span className="font-semibold text-white">£2.50 shots</span>, available throughout the
          evening.
        </p>

        <p className="mt-8 text-sm text-white/60 leading-relaxed">
          Offer subject to availability. Management reserves the right to refuse service and/or
          withdraw or amend this offer at any time without notice. For full terms and conditions,
          please visit https://tracksaldershot.co.uk/offers.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/offers"
            className="border border-white/20 bg-white/5 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
          >
            ← Back to Offers
          </Link>

          <Link
            to="/opening-times"
            className="bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded-lg font-medium hover:bg-[#5b8686] transition"
          >
            Opening Times
          </Link>

          <a
            href={PUB.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 bg-white/5 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}