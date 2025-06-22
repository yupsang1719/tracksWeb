// src/components/about/AboutHero.jsx
import React from "react";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/Asst/imgs/tracks-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About The Tracks</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
          A unique pub where community meets music, heritage, and unforgettable moments.
        </p>
      </div>
    </section>
  );
}
