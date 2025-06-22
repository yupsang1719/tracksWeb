// src/pages/About.jsx
import React from "react";
import AboutHero from "../components/sections/about/AboutHero";
import PubStory from "../components/sections/about/PubStory";
import ValueHighlights from "../components/sections/about/ValueHighlights";

export default function About() {
  return (
    <div className="bg-[#0F3C5C] text-white">
      <AboutHero />
      <PubStory />
      <ValueHighlights />
    </div>
  );
}
