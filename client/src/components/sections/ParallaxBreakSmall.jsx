import React from "react";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-[50vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/Asst/imgs/tracks-bg.jpg')", // Replace with your actual image
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Optional: overlay */}
      <div className="absolute inset-0 bg-[#6D9999]/40" />
    </section>
  );
}
