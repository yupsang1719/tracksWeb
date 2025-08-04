import React, { useState } from "react";
import EventModal from "../EventModal";
import TicketModal from "./TicketModal";
import CountdownTimer from "../../CountDownTimer";

const events = [
  {
    title: "Vikrum Fest 2025",
    date: "August 24, 2025",
    image: "/Asst/imgs/vikrum-1.png",
    description:
      "Join us for Vikrum Fest – a night of vibrant music, good vibes and an unforgettable atmosphere.",
    deadline: "2025-08-15T23:59:59",
  },
  {
    title: "RUN THE TRACKS",
    date: "September 5, 2025",
    image: "/Asst/imgs/runthetracks-cover.png",
    description:
      "Dance into the fall with live DJs, soulful performances, and energetic vibes at Autumn Beats!",
    deadline: "2025-09-04T23:59:59",
  },
];

export default function MajorEvent() {
  const [isOpen, setIsOpen] = useState(null);
  const [ticketOpen, setTicketOpen] = useState(null);

  return (
    <section className="bg-[#041D2F] pt-6 pb-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">🎉 Major Events</h2>
        <p className="text-[#6D9999] text-sm mt-2">Tap a card to get tickets or view more.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#0d2d45] rounded-xl shadow-lg overflow-hidden border border-[#2A5B8A] transition hover:shadow-xl hover:scale-[1.01] cursor-pointer"
          >
            {/* Facebook-Style Cover Image (820x312) */}
            <div className="relative" style={{ height: "300px" }}>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full shadow-md">
                🔥 Limited Offer
              </div>
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
                <button
                  onClick={() => setTicketOpen(index)}
                  className="bg-yellow-500 text-black py-2 px-4 rounded font-bold hover:bg-yellow-400 transition animate-pulse"
                >
                  Get Tickets
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

