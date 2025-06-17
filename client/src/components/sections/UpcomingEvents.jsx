import React, { useState } from "react";
import { Link } from "react-router-dom";

// Event data
const events = [
  {
    date: "Jun 1",
    title: "Open Mic Night",
    time: "8:00 PM",
    desc: "Join us for a night of local talent and great vibes. Whether you're a musician, poet, or comedian, our stage is open for you!",
    img: "/Asst/imgs/events/event-2.jpg",
  },
  {
    date: "Jun 8",
    title: "Acoustic Saturday",
    time: "7:30 PM",
    desc: "Enjoy a relaxing night of acoustic performances by some of the region’s finest singer-songwriters.",
    img: "/Asst/imgs/events/event-3.jpg",
  },
  {
    date: "Jun 15",
    title: "DJ Night",
    time: "9:00 PM",
    desc: "Get ready to dance with our resident DJ spinning the latest tracks all night long.",
    img: "/Asst/imgs/events/event-1.jpg",
  },
];

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="relative bg-[#0F3C5C] text-white py-20 px-6 md:px-20 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-serif">
          Upcoming Events
        </h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer bg-white/5 backdrop-blur-sm border border-[#6D9999] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 text-left">
                <div className="text-[#6D9999] font-bold text-lg mb-1">
                  {event.date} @ {event.time}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/events"
            className="inline-block bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded font-semibold hover:bg-[#5b8686] transition"
          >
            See All Events
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div
            className="bg-[#0F3C5C] border border-[#6D9999] rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 relative animate-scaleIn"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-white text-xl hover:text-[#6D9999]"
              onClick={() => setSelectedEvent(null)}
            >
              ✕
            </button>

            {/* Event Image */}
            <img
              src={selectedEvent.img}
              alt={selectedEvent.title}
              className="w-full h-[600px] object-cover rounded mb-6"
            />

            {/* Event Info */}
            <h3 className="text-3xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-[#6D9999] font-semibold mb-3">
              {selectedEvent.date} @ {selectedEvent.time}
            </p>

            {/* Extended Details */}
            <p className="text-white/90 mb-4">{selectedEvent.desc}</p>
            <p className="text-white/80 text-sm italic mb-2">
              🎤 Artist Bio: This event features a rising star from the local music scene with a reputation for energizing live performances.
            </p>
            <p className="text-white/80 text-sm italic">
              📍 Location: Tracks Venue, Garden Stage — family-friendly!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
