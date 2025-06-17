import React from "react";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/Asst/imgs/vikrum-1.png')", // Replace with your actual image
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Optional: overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}
