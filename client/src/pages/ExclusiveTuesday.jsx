import React from "react";
import { Link } from "react-router-dom";
import { PUB } from "../data/pubConfig";

export default function ExclusiveTuesday() {
  return (
    <main className="bg-[#061b22] text-white min-h-screen">
      {/* Offer Image */}
      <section className="w-full">
        <img
          src="/Asst/imgs/offers/exclusiveTuesday.png"
          alt="Exclusive Tuesday"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Centered content */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Exclusive Tuesday</h1>

        <p className="mt-4 text-white/80 text-lg">
          A little extra value to start the week right.
        </p>

        <p className="mt-6 text-white/85 text-lg leading-relaxed">
          Join us on <span className="font-semibold text-white">Tuesdays</span> for Exclusive Tuesday
          offers, including <span className="font-semibold text-white">20% off selected draught beers</span>{" "}
          and <span className="font-semibold text-white">2 bottles for £7.50</span> (selected range),
          available during the offer period.
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