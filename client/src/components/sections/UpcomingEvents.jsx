import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

// Sample events
const events = [
  {
    date: "March 07, Sunday",
    title: "Live Band - Sweat Violet",
    time: "Time Will Published Soon",
    desc: "Sweet Violet seek alwasy to take music and performance to it's high octane limits and beyond",
    img: "/Asst/imgs/events/sweatviolet.png",
    tag: "Special",
  },
  {
    date: "March 21, Saturday",
    title: "Tracks Second Anniversary",
    time: "Time Will be Published Soon",
    desc: "This is going to be Epic Experience, More Information on the way",
    img: "/Asst/imgs/galary/secondPhase7.jpg",
    tag: "Special",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-serif">
          Upcoming Events
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-[#6D9999] rounded-lg overflow-hidden shadow-xl group transition-transform hover:scale-[1.02]"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#dee43b] text-sm px-3 py-1 rounded-full font-semibold text-[#0F3C5C] shadow">
                {event.tag}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3C5C]/90 via-[#0F3C5C]/60 to-transparent p-4 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                <div className="text-sm text-[#6D9999] flex items-center gap-2 mb-1">
                  <FaCalendarAlt /> {event.date} &nbsp;|&nbsp;
                  <FaClock /> {event.time}
                </div>
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-white/80 text-sm mt-1">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            to="/events"
            className="inline-block bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded font-semibold hover:bg-[#5b8686] transition"
          >
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
