import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import TicketModal from "./sections/events/TicketModal";


export default function CountdownBanner({ onTicketClick }) {
  const [ticketOpen, setTicketOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const eventDate = new Date("2025-09-5T20:00:00");
    const now = new Date();
    const total = eventDate - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  const TimerCard = ({ value, label }) => (
  <div className="countdown-card">
    <div className="countdown-number">{String(value).padStart(2, "0")}</div>
    <div className="countdown-label">{label}</div>
  </div>
);


  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-[#0F3C5C]/90 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl border-b border-white/10">
      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-2xl font-bold">🎉 Run The Tracks is coming!</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1 text-[#6D9999] text-sm md:text-base">
          <span className="flex items-center gap-1"><FaCalendarAlt /> 5 September 2025</span>
          <span className="flex items-center gap-1"><FaClock /> 8:00 PM</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> The Tracks, Aldershot</span>
        </div>
        <p className="mt-2 text-sm md:text-base">
           <strong>Limited Tickets</strong> available! Book yours before they run out!
        </p>
      </div>

      <div className="flex items-end gap-2 text-center">
        {timeLeft.total > 0 ? (
            <>
            <TimerCard value={timeLeft.days} label="Days" />
            <TimerCard value={timeLeft.hours} label="Hours" />
            <TimerCard value={timeLeft.minutes} label="Min" />
            <TimerCard value={timeLeft.seconds} label="Sec" />
            </>
        ) : (
            <div className="text-lg font-semibold">The event has started!</div>
        )}

        <button
            onClick={() => setTicketOpen(true)}
            className="ml-4 mt-2 bg-[#6D9999] text-white px-4 py-2 rounded hover:bg-[#5b8686] transition text-sm md:text-base"
            >
            Get Tickets
            </button>

            {ticketOpen && (
            <TicketModal
                isOpen={ticketOpen}
                onClose={() => setTicketOpen(false)}
                eventTitle="RUN THE TRACKS"
            />
            )}

        </div>

    </div>
  );
}
