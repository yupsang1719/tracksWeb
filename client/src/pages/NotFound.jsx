import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0F3C5C] text-white text-center px-6">
      <h1 className="text-6xl font-bold text-[#6D9999]">404</h1>
      <p className="text-2xl mt-4 font-serif">Well, this is awkward... 😅</p>
      <p className="mt-2 text-white/80">The page you're looking for doesn't exist or is still at the pub 🍺</p>
      
      <Link
        to="/"
        className="mt-6 bg-[#6D9999] text-[#0F3C5C] px-6 py-3 rounded font-semibold hover:bg-[#5b8686] transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
