import React from "react";
import MajorEvent from "../components/sections/events/MajorEvent";
import UpcomingEvents from "../components/sections/events/UpcomingEvents";
import RegularEvents from "../components/sections/events/RegularEvents";
import ParallaxBreakSmall from "../components/sections/ParallaxBreakSmall";

export default function Events() {
  return (
    <section className="bg-[#0F3C5C] text-white">
      {/* Page Header */}
      <div className="text-center py-16 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          What’s On at <span className="text-[#6D9999]">Tracks</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
          Live bands, karaoke, open mic nights, quiz shows and more — all in one place.
        </p>
      </div>

      {/* Major Event Section */}
      <section className="py-16 px-6 md:px-20">
        <MajorEvent />
      </section>

      {/* Optional Divider */}
      <ParallaxBreakSmall />

      {/* Upcoming Events Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
        <UpcomingEvents />
      </section>

      {/* Regular Weekly Events */}
      <section className="bg-[#0d2d45] py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Weekly Regulars</h2>
        <RegularEvents />
      </section>
    </section>
  );
}
