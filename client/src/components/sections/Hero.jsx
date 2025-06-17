import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background image behind all content */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Asst/imgs/tracks-bg.jpg')", // Update if needed
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Foreground Content (2 stacked sections) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* SECTION 1: Logo fullscreen */}
        <div className="h-screen flex items-center justify-center bg-black/70">
          <img
            src="/Asst/imgs/Tracks-Logo.png"  // ← Replace this with your actual logo filename in /public
            alt="Tracks Logo"
            className="w-40 md:w-60 lg:w-72 object-contain"
          />
        </div>


        {/* SECTION 2: Hero Info */}
        <div className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center bg-black/70">
          <h1 className="font-serif text-5xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-[#6D9999]">Tracks</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            A Classic British Pub Experience
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#6D9999] text-[#0F3C5C] font-semibold px-6 py-3 rounded hover:bg-[#5b8686] transition">
              Book a Table
            </button>
            <button className="border border-[#6D9999] px-6 py-3 rounded hover:bg-[#6D9999] hover:text-[#0F3C5C] transition">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
