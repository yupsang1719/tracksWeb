import React from "react";
import { X } from "lucide-react"; // or any close icon

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-[#0F3C5C] text-white max-w-4xl w-full mx-4 md:mx-0 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#6D9999] transition"
        >
          <X size={28} />
        </button>

        {/* Image and Info */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full md:w-1/2 rounded-md object-cover"
          />
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-3xl font-bold">{event.title}</h2>
            <p className="text-[#6D9999]">{event.date}</p>
            <p>{event.description}</p>
            {event.ticketLink && (
              <a
                href={event.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#6D9999] text-[#0F3C5C] px-6 py-2 rounded font-semibold hover:bg-[#5b8686] transition"
              >
                Get Tickets
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
