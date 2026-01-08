import React from "react";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/Asst/imgs/galary/secondPhase3.jpg)",
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
