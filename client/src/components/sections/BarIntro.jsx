import React from "react";
import { Link } from "react-router-dom";

export default function BarIntro() {
  return (
    <section className="bg-[#6D9999] text-[#0F3C5C] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT - IMAGE */}
        <div>
          <img
            src="/Asst/imgs/home/cocktail4.jpg" // Replace with your actual image
            alt="Cocktails at Tracks"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-wide">
              The Bar at Tracks
            </h2>
            <hr className="border-t border-[#0F3C5C] w-16 mt-4" />
            <p className="text-md md:text-lg font-medium mt-2 italic">
              Premium drinks. Relaxed vibes. Garden cocktails.
            </p>
          </div>

          <p className="text-lg md:text-xl font-light">
            Our bar is stocked full of premium drinks – including wines, spirits and beers.
          </p>
          <p className="text-lg md:text-xl font-light">
            We also have cocktails on offer! Perfect for enjoying in our beer garden.
          </p>

          {/* CTA BUTTON */}
          <div>
            <Link
              to="/menu"
              className="inline-block bg-[#0F3C5C] text-white px-6 py-3 rounded font-semibold hover:bg-[#0c304b] transition"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
