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
          The Tracks was founded with a simple goal: to bring people together through great music,
          good food, and unforgettable memories. Located in the heart of Aldershot, we’ve grown from
          a humble pub into a vibrant cultural hub where local talent shines and the community
          thrives.
        </p>
        <p className="text-lg text-white/90 leading-relaxed mt-6">
          Whether you're here for a quiet drink in the garden or a wild Saturday night with live
          bands, The Tracks is more than just a pub — it's where stories begin and friendships
          last.
        </p>
      </div>
    </section>
  );
}
