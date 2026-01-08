import React, { useState } from "react";

// Sample data for regular events
const regularEvents = [
  {
    day: "Sunday",
    title: "Spin The Wheel",
    host: "Rainbow Entertainment",
    flyer: "/Asst/imgs/events/rainbowKaraoke.jpeg",
    description: "The vibes are unreal, the spins were lucky, and the crowd went wild!",
  },
  {
    day: "Tuesday",
    title: "Exclusive Night",
    host: "Mark Farren",
    flyer: "/Asst/imgs/events/discoKaraoke.jpeg",
    description: "Karaoke Night || Come for the deals, stay for the vibes. your tuesday just got exclusive",
  },
  {
    day: "Wednesday & Thursday",
    title: "Discount Night",
    host: "DJ MDK",
    flyer: "/Asst/imgs/events/discountNightReg.jpeg",
    description: "2-for-1 House Spirits & DJ MDK to heat up midweek nights.",
  },
  {
    day: "Friday",
    title: "Tracks Hour",
    host: "DJ MDK",
    flyer: "/Asst/imgs/galary/secondPhase18.jpg",
    description: "Cocktails - 2 for £15 || House Spirits £4.50 || Shots From £2 || DJ MDK live. ",
  },
  {
    day: "Saturday",
    title: "Tracks Hour",
    host: "DJ Trinni",
    flyer: "/Asst/imgs/galary/secondPhase3.jpg",
    description: "Cocktails - 2 for £15 || House Spirits £4.50 || Shots From £2 || DJ MDK live. ",
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
