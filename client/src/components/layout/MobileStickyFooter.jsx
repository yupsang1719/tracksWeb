import React from "react";
import { FaTicketAlt, FaPhoneAlt, FaGlassCheers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileStickyFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F3C5C] text-white shadow-inner md:hidden flex justify-around items-center py-3 border-t border-[#6D9999] text-sm">
      
      {/* Menu Button */}
      <button
        onClick={() => navigate("/menu")}
        className="flex flex-col items-center"
      >
        <FaGlassCheers size={18} />
        <span className="mt-1">Menu</span>
      </button>

      {/* Get Tickets Button */}
      <button
        onClick={() => navigate("/#tickets")}
        className="flex flex-col items-center"
      >
        <FaTicketAlt size={18} />
        <span className="mt-1">Tickets</span>
      </button>

      {/* Call Button */}
      <a
        href="tel:+447123456789"
        className="flex flex-col items-center"
      >
        <FaPhoneAlt size={18} />
        <span className="mt-1">Call</span>
      </a>
    </div>
  );
};

export default MobileStickyFooter;
