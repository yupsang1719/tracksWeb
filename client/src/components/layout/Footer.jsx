import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F3C5C] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Brand Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-[#6D9999]">
          TRACKS
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm md:text-base font-medium uppercase tracking-wider">
          <Link to="/" className="hover:text-[#6D9999] transition">Home</Link>
          <Link to="/menu" className="hover:text-[#6D9999] transition">Menu</Link>
          <Link to="/events" className="hover:text-[#6D9999] transition">Events</Link>
          <Link to="/gallery" className="hover:text-[#6D9999] transition">Gallery</Link>
          <Link to="/about" className="hover:text-[#6D9999] transition">About</Link>
          <Link to="/contact" className="hover:text-[#6D9999] transition">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 text-[#6D9999]">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebookF size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTiktok size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Tracks Aldershot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
