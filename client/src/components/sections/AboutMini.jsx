import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background cropped logo (bottom-right) */}
      <img
        src="/Asst/imgs/tracks1-1-e1713368240604-150x300.png"
        alt="Tracks logo bg"
        className="absolute bottom-0 right-0 w-32 md:w-40 opacity-10 z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
            A WARM WELCOME TO TRACKS, ALDERSHOT
          </h2>
          <div className="mt-4">
            <img
              src="/Asst/imgs/Tracks-2024-JDPIX1-82-1363x2048.jpg"
              alt="Main welcome"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 justify-between">
          <div className="mt-4">
            <img
              src="/Asst/imgs/tracks-2130.jpg"
              alt="Venue"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Handwritten Signature Quote */}
          <div className="italic text-[#6D9999] text-center font-[cursive] text-lg">
            “Where Aldershot gathers.”
            <br />
            <span className="not-italic text-sm text-white">— The Tracks</span>
          </div>

          {/* Description Content */}
          <div className="space-y-4">
            <p>
              Tracks is a fantastic live music venue – supporting local talent, with open mic nights.
            </p>
            <p>
              We are a family friendly venue, with a welcoming location and a beautiful beer garden.
            </p>
            <p>
              Offering fresh food, our menu includes delicious dishes, including wings, burgers and dumplings!
            </p>
            <p>
              We also show live sports at the venue, perfect to view whilst enjoying a drink from our bar!
            </p>
            <p>
              Tracks is also available to be booked for events and celebrations. Please get in touch with us to make an enquiry.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded font-semibold text-center hover:bg-[#5b8686] transition"
              >
                View Our Menus
              </Link>
              <Link
                to="/contact"
                className="border border-[#6D9999] text-white px-6 py-3 rounded text-center hover:bg-[#6D9999] hover:text-[#0F3C5C] transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
