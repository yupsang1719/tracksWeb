import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Requires lucide-react or switch to any icon lib you use

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[#090909] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-[60px] lg:space-x-[100px] text-[20px] lg:text-[25px] font-semibold w-full justify-center">
          <Link to="/" className="hover:text-[#6D9999] transition">Home</Link>
          <Link to="/menu" className="hover:text-[#6D9999] transition">Menu</Link>
          <Link to="/events" className="hover:text-[#6D9999] transition">Events</Link>
          <Link to="/gallery" className="hover:text-[#6D9999] transition">Gallery</Link>
          <Link to="/about" className="hover:text-[#6D9999] transition">About</Link>
          <Link to="/contact" className="hover:text-[#6D9999] transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-1/2 text-white bg-[#0F3C5C]/90 backdrop-blur-sm z-40 p-6 md:hidden shadow-lg">
            <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
            </button>
            </div>
            <div className="mt-10 flex flex-col space-y-6 text-[20px] font-semibold">
            <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-[#6D9999] transition">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/menu" className="hover:text-[#6D9999] transition">Menu</Link>
            <Link onClick={() => setMenuOpen(false)} to="/events" className="hover:text-[#6D9999] transition">Events</Link>
            <Link onClick={() => setMenuOpen(false)} to="/gallery" className="hover:text-[#6D9999] transition">Gallery</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-[#6D9999] transition">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-[#6D9999] transition">Contact</Link>
            </div>
        </div>
        )}

    </header>
  );
};

export default Header;
