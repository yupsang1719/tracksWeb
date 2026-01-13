// src/components/about/PubStory.jsx
import React from "react";

export default function PubStory() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0F3C5C] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-[#6D9999] inline-block pb-2">
          Our Story
        </h2>
        <p className="text-lg text-white/90 leading-relaxed mt-4">
          At The Tracks, everything starts with music, people, and atmosphere. Based in the heart of Aldershot, 
          we’ve become a go-to destination for live entertainment, vibrant events, and nights that keep the town moving.
        </p>
        <p className="text-lg text-white/90 leading-relaxed mt-6">
          Whether you’re unwinding with a drink, singing your heart out at karaoke, 
          or catching live bands on a Saturday night, The Tracks is more than a pub — it’s where Aldershot comes to feel alive.
        </p>
      </div>
    </section>
  );
}
