import React from "react";

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0F3C5C] text-white px-6">
      <div className="text-center space-y-6">
        {/* Emoji or Icon */}
        <div className="text-6xl animate-bounce">🍻</div>

        {/* Funny Headline */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#6D9999]">
          Oops... You’re Early!
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-md mx-auto text-white/80">
          This page is still brewing. Grab a pint 🍺 and check back soon. Good things take time — like our beer!
        </p>

        {/* “Back to Home” Button */}
        <a
          href="/"
          className="inline-block bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded font-semibold mt-4 hover:bg-[#5b8686] transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
