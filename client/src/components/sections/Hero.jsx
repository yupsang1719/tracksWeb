import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PUB, OPENING_HOURS } from "../../data/pubConfig";
import { getTodayInfo, isOpenNow } from "../utils/openingHours";

export default function Hero() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const today = useMemo(() => getTodayInfo(OPENING_HOURS, now), [now]);
  const openNow = useMemo(() => isOpenNow(OPENING_HOURS, now), [now]);

  return (
    <section className="relative w-full text-white overflow-hidden bg-black">
      {/* ================= TOP STRIP ================= */}
      <div className="relative z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base">
            <span className="font-semibold text-white/90">Open Today</span>
            <span className="text-white/70">•</span>
            <span className="text-[#6D9999] font-semibold">
              {today.hoursText}
            </span>

            <span className="text-white/70 hidden sm:inline">•</span>

            <span
              className={`text-xs md:text-sm px-3 py-1 rounded-full border ${
                openNow
                  ? "bg-emerald-500/15 border-emerald-400/25 text-emerald-200"
                  : "bg-rose-500/15 border-rose-400/25 text-rose-200"
              }`}
            >
              {openNow ? "OPEN NOW" : "CLOSED NOW"}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm md:text-base">
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
        </div>
      </div>

      {/* ================= HERO IMAGE (CLICKABLE) ================= */}
      <div className="relative w-full">
        <div className="mx-auto w-full max-w-[1920px]">
          <div
            className="
              relative
              w-full
              overflow-hidden
              aspect-[16/7.5]
              min-h-[320px]
              sm:min-h-[420px]
              md:min-h-[520px]
              bg-black
            "
          >
            {/* ✅ Clickable hero image */}
            <Link
              to="/offers"
              aria-label="View current offers"
              title="View current offers"
              className="absolute inset-0 block cursor-pointer group"
            >
              <img
                src="/Asst/imgs/hero/hero.png"
                alt="Tracks offers and highlights"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Subtle hover affordance (desktop only) */}
              <div className="hidden md:block absolute inset-0 ring-0 group-hover:ring-2 ring-[#6D9999]/30 transition" />
            </Link>

            {/* Optional subtle wash */}
            <div className="pointer-events-none absolute inset-0 bg-black/10" />

            {/* Desktop overlay ONLY */}
            <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl">
              <InfoBox today={today} openNow={openNow} />
            </div>
          </div>

          {/* Mobile / tablet info box BELOW image */}
          <div className="md:hidden px-4 sm:px-6 py-6">
            <InfoBox today={today} openNow={openNow} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= INFO BOX COMPONENT ================= */

function InfoBox({ today, openNow }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 sm:p-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Open {today.dayName}
          </h3>

          <p className="text-white/85 mt-1">
            <span className="font-semibold text-[#6D9999]">
              {today.hoursText}
            </span>
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span
              className={`text-xs md:text-sm px-3 py-1 rounded-full border ${
                openNow
                  ? "bg-emerald-500/15 border-emerald-400/25 text-emerald-200"
                  : "bg-rose-500/15 border-rose-400/25 text-rose-200"
              }`}
            >
              {openNow ? "OPEN NOW" : "CLOSED NOW"}
            </span>

            <span className="text-white/70 text-sm">
              Updated daily — times change automatically
            </span>
          </div>

          <div className="mt-4 text-sm md:text-base text-white/80">
            <span className="font-semibold text-white/90">📍</span>{" "}
            <a
              href={PUB.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white transition"
            >
              {PUB.address}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/offers"
            className="bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#5b8686] transition"
          >
            Explore Offers
          </Link>

          <Link
            to="/opening-times"
            className="border border-white/20 bg-white/5 px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition"
          >
            View Opening Times
          </Link>
        </div>
      </div>
    </div>
  );
}