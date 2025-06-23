import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function OffersModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Reopen Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 bg-[#6D9999] text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm md:text-base animate-bounce hover:bg-[#5b8686]"
        >
          🎉 Offers
        </button>
      )}

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full shadow-xl text-[#0F3C5C] relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-[#0F3C5C] hover:text-[#6D9999]"
            >
              <FaTimes size={18} />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">🔥 Weekly Offers</h2>

              <ul className="space-y-4 text-sm md:text-base">
                <li>
                  <strong>💃 Girls Night – Fridays</strong><br />
                  Happy Hour on all cocktails. Start your weekend in style!
                </li>
                <li>
                  <strong>🥂 Discount Night – Wed & Thu</strong><br />
                  2-for-1 on house spirits and shots from only £2.50!
                </li>
                <li>
                  <strong>🎓 Student Friendly</strong><br />
                  Affordable drinks and vibes all week. Bring your ID!
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
