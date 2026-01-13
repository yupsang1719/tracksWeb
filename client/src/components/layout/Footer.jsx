import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#090909] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm md:text-base">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">The Tracks</h2>
          <p className="text-gray-600 mb-3">
            Where music meets the moment. Cocktails, community, and unforgettable nights in Aldershot.
          </p>
          <p className="text-gray-700 text-sm mb-1"><strong>📍 Address:</strong> Station Rd, Aldershot GU11 1HT</p>
          <p className="text-gray-700 text-sm"><strong>📞 Phone:</strong> <a href="tel:+447123456789" className="hover:text-[#6D9999]">+44 7123 456789</a></p>
          <div className="flex gap-4 mt-4 text-xl text-[#0F3C5C]">
            <a href="https://www.facebook.com/thefunkyend" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/tracks_aldershot?igsh=NWIxazRlNW1vMWwz&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@tracksaldershot?_t=ZN-8xQ6C8eXsus&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#6D9999]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#6D9999]">About</Link></li>
            <li><Link to="/events" className="hover:text-[#6D9999]">Events</Link></li>
            <li><Link to="/contact" className="hover:text-[#6D9999]">Contact</Link></li>
          </ul>
        </div>

        {/* Menu Submenu */}
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li><Link to="/menu/cocktails" className="hover:text-[#6D9999]">Cocktails</Link></li>
            <li><Link to="/menu/wines" className="hover:text-[#6D9999]">Wines</Link></li>
            <li><Link to="/menu" className="hover:text-[#6D9999]">Full Menu</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/gallery" className="hover:text-[#6D9999]">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-[#6D9999]">Book a Table</Link></li>
            <li><Link to="/admin/login" className="hover:text-[#6D9999]">Admin Login</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-semibold mb-3">Opening Hours</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>Monday: 3–11 pm</li>
            <li>Tuesday: 3–11:30 pm</li>
            <li>Wednesday: 3 pm–12am</li>
            <li>Thursday: 3 pm–1:30am</li>
            <li>Friday: 3 pm–1:30am</li>
            <li>Saturday: 12 pm–1:30am</li>
            <li>Sunday: 12–11 pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-6 border-t border-gray-100 text-gray-500 text-xs">
        © {new Date().getFullYear()} The Tracks, Aldershot. All rights reserved.
      </div>
    </footer>
  );
}
