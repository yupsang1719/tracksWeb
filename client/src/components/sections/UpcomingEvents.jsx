import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events/major")
      .then((r) => r.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to load upcoming events", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 z-10 text-center">
        <p className="text-[#6D9999]">Loading events...</p>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Upcoming Events</h2>
        <p className="text-[#6D9999]">No upcoming events right now. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-serif">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event._id}
              className="relative bg-white/5 backdrop-blur-sm border border-[#6D9999] rounded-lg overflow-hidden shadow-xl group transition-transform hover:scale-[1.02] aspect-[1/1.414]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {event.tag && (
                <div className="absolute top-4 left-4 bg-[#dee43b] text-sm px-3 py-1 rounded-full font-semibold text-[#0F3C5C] shadow">
                  {event.tag}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3C5C]/90 via-[#0F3C5C]/60 to-transparent p-4 flex flex-col justify-end transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                <div className="text-sm text-[#6D9999] flex items-center gap-2 mb-1">
                  <FaCalendarAlt /> {event.date}
                  {event.time && <>&nbsp;|&nbsp;<FaClock /> {event.time}</>}
                </div>
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-white/80 text-sm mt-1 line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

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
