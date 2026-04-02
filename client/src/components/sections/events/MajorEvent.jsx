import React, { useState } from "react";
import EventModal from "../EventModal";
import TicketModal from "./TicketModal";
import CountdownTimer from "../../CountDownTimer";

const events = [
  {
    title: "Pinks - Drum & Bass Night",
    date: "April 17, Friday",
    image: "/Asst/imgs/events/majorEvents/drum_bass.jpg",
    description: "Get ready for a high-energy night at Tracks Aldershot as Drum & Bass All Night presents Pinks! Join us on Friday, 17th April from 8:00 PM to 2:00 AM for a full takeover of heavy beats, deep bass, and non-stop vibes. Featuring a stacked lineup including Gizme, Joshwana, Krojo, Lau Dat, Memphis, Mezza, Neil Pwah, and OC, this is set to be an unforgettable night for all drum & bass lovers. Expect powerful sets, an electric crowd, and a proper club atmosphere from start to finish. Whether you're here for the music, the energy, or the full night experience, this is one you don’t want to miss. Arrive early, grab your drinks, and get ready to go all night long at Tracks.",
      deadline: "2026-04-17T20:00:00",
  },
  {
    title: "Drag Bingo (Hosted by Lulu)",
    date: "April 5, Sunday",
    image: "/Asst/imgs/events/majorEvents/drag_bingo.jpg",
    description: "Get ready for an unforgettable afternoon of entertainment at Tracks Aldershot as Lulu’s Drag Bingo returns! Join us on Sunday, 5th April from 4:00 PM to 7:30 PM for a high-energy mix of bingo, comedy, and live drag performance — all hosted by the fabulous Lulu herself. Expect big laughs, bold performances, and plenty of surprises throughout the event. Whether you're coming for the bingo, the show, or just a great time with friends, this is one event you don’t want to miss. With a lively atmosphere and crowd-favourite moments, Drag Bingo at Tracks always brings the house down. Entry is just £2 to play, with multiple rounds and chances to win prizes throughout the event. Please note: This is a first come, first served event. We are not taking table bookings, so we recommend arriving early to secure your spot. Bring your friends, grab a drink, and get ready for an afternoon full of fun, laughter, and unforgettable vibes.",
      deadline: "2026-04-05T16:00:00",
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
              {/* <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full shadow-md">
                🔥 Limited Offer
              </div> */}
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
                {/* <button
                  onClick={() => setTicketOpen(index)}
                  className="bg-yellow-500 text-black py-2 px-4 rounded font-bold hover:bg-yellow-400 transition animate-pulse"
                >
                  Get Tickets
                </button> */}
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

