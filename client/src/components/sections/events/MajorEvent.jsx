import React, { useState, useEffect } from "react";
import EventModal from "../EventModal";
import TicketModal from "./TicketModal";
import CountdownTimer from "../../CountDownTimer";

export default function MajorEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(null);
  const [ticketOpen, setTicketOpen] = useState(null);

  useEffect(() => {
    fetch("/api/events/major")
      .then((r) => r.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to load major events", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="bg-[#041D2F] pt-6 pb-10 px-4 text-center">
        <p className="text-[#6D9999]">Loading events...</p>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="bg-[#041D2F] pt-6 pb-10 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">🎉 Major Events</h2>
        <p className="text-[#6D9999]">No upcoming major events. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="bg-[#041D2F] pt-6 pb-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">🎉 Major Events</h2>
        <p className="text-[#6D9999] text-sm mt-2">Tap a card to get tickets or view more.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={event._id}
            className="bg-[#0d2d45] rounded-xl shadow-lg overflow-hidden border border-[#2A5B8A] transition hover:shadow-xl hover:scale-[1.01] cursor-pointer"
          >
            {/* A4 Portrait Poster */}
            <div className="relative w-full aspect-[1/1.414]">
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Minimal Event Content */}
            <div className="px-5 py-4 text-white">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-[#6D9999] text-sm mb-3">{event.date}</p>

              <div className="text-yellow-300 text-lg font-bold mb-4 animate-pulse block tracking-wide">
                ⏳ <CountdownTimer deadline={event.deadline} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsOpen(index)}
                  className="bg-white text-[#0F3C5C] py-2 px-4 rounded font-semibold hover:bg-gray-100 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isOpen !== null && (
        <EventModal
          isOpen={true}
          onClose={() => setIsOpen(null)}
          event={events[isOpen]}
        />
      )}

      {ticketOpen !== null && (
        <TicketModal
          isOpen={true}
          onClose={() => setTicketOpen(null)}
          eventTitle={events[ticketOpen].title}
        />
      )}
    </section>
  );
}
