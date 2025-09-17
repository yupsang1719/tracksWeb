import React, { useState } from "react";
import EventModal from "../EventModal";
import TicketModal from "./TicketModal";
import CountdownTimer from "../../CountDownTimer";

const events = [
  // {
  //   title: "Vikrum Fest 2025",
  //   date: "August 24, 2025",
  //   image: "/Asst/imgs/vikrum-1.png",
  //   description:
  //     "Celebrate the 3rd VIKRUM Fest at Tracks on Sunday, 24 August 2025! Enjoy a vibrant mix of live acoustic performances, full band shows, and DJ sets in the garden. Get a free rum punch on entry and explore over 100 rum flavours, cocktails, sisha, and a tropical terrace garden. 🎶 Tickets: £5 Early Bird, £10 Standard, £15 at the door. Follow us on socials for artist reveals. This is your ultimate end-of-summer bash!",
  //   deadline: "2025-08-15T23:59:59",
  // },
  {
    title: "The Scribes",
    date: "October 3, 2025",
    image: "/Asst/imgs/scribes.png",
    description:
      "The Scribes Live at Tracks – Friday, October 3rd from 9:00 PM. We’re ecstatic to welcome The Scribes, a multi award-winning hip hop act, to Tracks Aldershot for an unmissable night of beatboxing, freestyle, crowd interaction, and block party vibes. Festival favourites with appearances at Glastonbury, Wireless, WOMAD, Isle of Wight, Latitude and more, they’ve shared the stage with Wu-Tang Clan, Dizzee Rascal, Kelis, Rag N Bone Man, Jurassic 5, De La Soul and many others. Critically acclaimed as 'The UK’s hottest hip hop' by 24/7 Magazine. Awards include Best UK Urban Act (Exposure Music Awards) and Best Live Act (EatMusic Radio Awards). Support act: Olski & The Groove Surgeons. FREE ENTRY – arrive early, this will be a busy one!",
    deadline: "2025-10-03T20:00:00",
  },
  {
    title: "The Evil Night : Halloween",
    date: "Ocoter 31, 2025",
    image: "/Asst/imgs/evilNight.png",
    description:
      "The Evil Night at Tracks – October 29th to 31st. This Halloween, Tracks transforms into a dark haven for three nights of spine-tingling energy and music. Kicking off on Wednesday and Thursday, Discount Night takes a sinister twist with blood-soaked vibes and DJ MDK on the decks. On Friday, the finale brings the ultimate Halloween experience – a Drum & Bass takeover: Sound of Evil with DJ Neyullp. Expect haunting beats, chilling visuals, and a dancefloor packed with costumed creatures until late.Award-winning DJs and an atmosphere like no other make this the Halloween event you cannot miss. Whether you come for the mid-week madness or the Friday night mayhem, prepare yourself for The Evil Night.FREE ENTRY on Discount Nights (Oct 29 & 30). Special Halloween Drum & Bass event on Oct 31 – arrive early, this will be a busy one!",
    deadline: "2025-10-31T20:00:00",
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

