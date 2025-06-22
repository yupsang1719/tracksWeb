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
          <div className="relative group">
            <button className="hover:text-[#6D9999] transition">Menu</button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition duration-300 z-50">
              <Link to="/menu/cocktails" className="block px-4 py-2 hover:bg-gray-100">Cocktails</Link>
              <Link to="/menu/wines" className="block px-4 py-2 hover:bg-gray-100">Wines</Link>
            </div>
          </div>

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
            <div className="flex flex-col space-y-1">
              <span className="text-white font-semibold">Menu</span>
              <Link onClick={() => setMenuOpen(false)} to="/menu/cocktails" className="ml-4 text-sm hover:text-[#6D9999]">Cocktail Menu</Link>
              <Link onClick={() => setMenuOpen(false)} to="/menu/wines" className="ml-4 text-sm hover:text-[#6D9999]">Wine Menu</Link>
            </div>
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
