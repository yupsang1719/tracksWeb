import React, { useState } from "react";
import EventModal from "../EventModal";
import TicketModal from "./TicketModal"; // New import

export default function MajorEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketOpen, setTicketOpen] = useState(false);

  const majorEvent = {
    title: "Vikrum Fest 2025",
    date: "August 24, 2025",
    image: "/Asst/imgs/vikrum-1.png",
    description: `Join us for Vikrum Fest – a night of vibrant music, good vibes and an unforgettable atmosphere.`,
    artistInfo: `Hosted by Jen Behaving Badly. Special guests await!`,
  };

  return (
    <>
      <div className="cursor-pointer max-w-5xl mx-auto bg-[#0d2d45] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:scale-[1.01] transition">
        <img src={majorEvent.image} alt={majorEvent.title} className="w-full md:w-1/2 object-cover" />
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-2">{majorEvent.title}</h3>
            <p className="text-[#6D9999] mb-4">{majorEvent.date}</p>
            <p className="mb-4">{majorEvent.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button onClick={() => setIsOpen(true)} className="bg-white text-[#0F3C5C] px-6 py-2 rounded font-semibold hover:bg-gray-100">
              View Details
            </button>
            <button onClick={() => setTicketOpen(true)} className="bg-[#6D9999] text-[#0F3C5C] px-6 py-2 rounded font-semibold hover:bg-[#5b8686]">
              Get Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {isOpen && <EventModal isOpen={isOpen} onClose={() => setIsOpen(false)} event={majorEvent} />}

      {/* Ticket Modal */}
      {ticketOpen && <TicketModal isOpen={ticketOpen} onClose={() => setTicketOpen(false)} eventTitle={majorEvent.title} />}
    </>
  );
}
