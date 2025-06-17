import React, { useState } from "react";
import EventModal from "../EventModal";

const events = [
  {
    title: "VIKRUM Festival",
    date: "Sunday, Auguust 24",
    image: "/Asst/imgs/vikrum-1.png",
    description: "A night of dance, drinks, and DJs spinning until late!",
    ticketLink: "https://ticketlink.com",
  },
  {
    title: "Karaoke Madness",
    date: "Friday, June 28",
    image: "/Asst/imgs/event2.jpg",
    description: "Warm up your vocal cords and sing your heart out!",
  },
  // Add more events as needed
];

export default function UpcomingEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="bg-[#0d2d45] cursor-pointer rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-[#6D9999]">{event.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
}
