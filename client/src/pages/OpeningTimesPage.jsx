import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PUB, OPENING_HOURS } from "../data/pubConfig";
import { getTodayInfo, getWeekRows, isOpenNow } from "../components/utils/openingHours";

export default function OpeningTimesPage() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const today = useMemo(() => getTodayInfo(OPENING_HOURS, now), [now]);
  const weekRows = useMemo(() => getWeekRows(OPENING_HOURS), []);
  const openNow = useMemo(() => isOpenNow(OPENING_HOURS, now), [now]);

  return (
    <main className="min-h-screen bg-[#061b22] text-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Opening Times
            </h1>
            <p className="text-white/80 mt-3">
              <span className="font-semibold text-white/90">Today ({today.dayName}):</span>{" "}
              <span className="text-[#6D9999] font-semibold">{today.hoursText}</span>
            </p>
          </div>

          <Link to="/" className="text-white/85 hover:text-white underline underline-offset-4">
            ← Back to Home
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span
            className={`text-xs md:text-sm px-3 py-1 rounded-full border ${
              openNow
                ? "bg-emerald-500/15 border-emerald-400/25 text-emerald-200"
                : "bg-rose-500/15 border-rose-400/25 text-rose-200"
            }`}
          >
            {openNow ? "OPEN NOW" : "CLOSED NOW"}
          </span>

          <a
            href={PUB.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/85 hover:text-white underline underline-offset-4"
          >
            View map
          </a>

          <Link
            to="/offers"
            className="text-white/85 hover:text-white underline underline-offset-4"
          >
            View offers
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="font-semibold">{PUB.name}</div>
            <div className="text-white/75 text-sm mt-1">{PUB.address}</div>
          </div>

          <div className="divide-y divide-white/10">
            {weekRows.map((row) => {
              const isTodayRow = row.dayIndex === today.dayIndex;
              return (
                <div
                  key={row.dayIndex}
                  className="px-6 py-4 flex items-center justify-between gap-4"
                >
                  <span className={`font-medium ${isTodayRow ? "text-[#6D9999]" : "text-white/90"}`}>
                    {row.dayName}
                  </span>
                  <span className="text-white/85 tabular-nums">{row.hoursText}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Need to update hours?</h2>
          <p className="text-white/75 mt-2">
            Edit <span className="text-white/90 font-semibold">src/data/pubConfig.js</span> and
            change <span className="text-white/90 font-semibold">OPENING_HOURS</span>. The website
            will update everywhere automatically.
          </p>
        </div>
      </div>
    </main>
  );
}