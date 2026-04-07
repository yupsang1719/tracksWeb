import React, { useState, useEffect } from "react";

export default function RegularEvents() {
  const [regularEvents, setRegularEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("/api/events/regular")
      .then((r) => r.json())
      .then((data) => setRegularEvents(data))
      .catch((err) => console.error("Failed to load regular events", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-[#6D9999] text-center py-8">Loading events...</p>;
  }

  if (regularEvents.length === 0) {
    return <p className="text-[#6D9999] text-center py-8">No regular events at the moment.</p>;
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {regularEvents.map((event) => (
          <div
            key={event._id}
            className="bg-[#123b58] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => setSelectedEvent(event)}
          >
            <img
              src={event.flyer}
              alt={`${event.title} flyer`}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="text-xl font-bold text-[#6D9999]">{event.day}</h3>
              <p className="text-lg font-semibold">{event.title}</p>
              <p className="text-sm opacity-80">Hosted by {event.host}</p>
              <p className="text-sm mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full max-h-[95vh] mx-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-red-600 z-10"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>

            <div className="flex-1 overflow-auto">
              <img
                src={selectedEvent.flyer}
                alt={selectedEvent.title}
                className="w-full object-contain max-h-[80vh] mx-auto"
              />
            </div>

            <div className="p-6 text-black space-y-2 bg-white">
              <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
              <p className="text-sm text-gray-700">Hosted by: {selectedEvent.host}</p>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
