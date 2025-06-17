import React, { useState } from "react";

// Sample data for regular events
const regularEvents = [
  {
    day: "Monday",
    title: "Open Mic",
    host: "Jen N Tonic",
    flyer: "/Asst/imgs/events/monday.png",
    description: "Join us for an open mic night supporting local talent!",
  },
  {
    day: "Tuesday",
    title: "Disco Karaoke",
    host: "Mark",
    flyer: "/Asst/imgs/events/tuesday.png",
    description: "Sing your heart out with our disco karaoke hosted by Mark.",
  },
  {
    day: "Wednesday & Thursday",
    title: "Discount Night",
    host: "DJ MDK",
    flyer: "/Asst/imgs/events/wedThu.png",
    description: "2-for-1 House Spirits & DJ MDK to heat up midweek nights.",
  },
  {
    day: "Friday",
    title: "Girls Night",
    host: "DJ MDK",
    flyer: "/Asst/imgs/events/friday.png",
    description: "Happy Hour on Cocktails. DJ MDK live. The best way to start the weekend!",
  },
  {
    day: "Saturday",
    title: "Live Band",
    host: "Different band each week",
    flyer: "/Asst/imgs/events/liveBand.png",
    description: "Live music every Saturday. Discover new bands weekly!",
  },
  {
    day: "Sunday",
    title: "Rainbow Karaoke",
    host: "Brian & Roy",
    flyer: "/Asst/imgs/events/rainbowKaraoke.png",
    description: "Colourful, inclusive karaoke fun with Brian and Roy!",
  },
];

export default function RegularEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {regularEvents.map((event, index) => (
          <div
            key={index}
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

            {/* Flyer */}
            <div className="flex-1 overflow-auto">
              <img
                src={selectedEvent.flyer}
                alt={selectedEvent.title}
                className="w-full object-contain max-h-[80vh] mx-auto"
              />
            </div>

            {/* Content */}
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
