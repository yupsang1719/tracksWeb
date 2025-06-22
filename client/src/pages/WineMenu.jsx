import React, { useState } from "react";

const wines = {
  "Red Wine": [
    { name: "Merlot", description: "Soft, ripe and elegant", price: "£7 / £25", bestSeller: true },
    { name: "Cabernet Sauvignon", description: "Full-bodied with dark fruit flavours", price: "£8 / £28" },
    { name: "Malbec", description: "Smooth and rich with plum notes", price: "£7.5 / £27" },
  ],
  "White Wine": [
    { name: "Sauvignon Blanc", description: "Zesty and fresh with citrus aromas", price: "£7 / £24" },
    { name: "Chardonnay", description: "Creamy and elegant with oak tones", price: "£7.5 / £26", bestSeller: true },
    { name: "Pinot Grigio", description: "Light, crisp and refreshing", price: "£6.5 / £22" },
  ],
  "Rosé": [
    { name: "Zinfandel Rosé", description: "Sweet and fruity with strawberry notes", price: "£6.5 / £23", bestSeller: true },
    { name: "Provence Rosé", description: "Delicate and dry with floral aromas", price: "£8 / £29" },
  ],
  "Sparkling": [
    { name: "Prosecco", description: "Light and bubbly Italian classic", price: "£7 / £26" },
    { name: "Champagne Brut", description: "Elegant with fine bubbles", price: "£12 / £45", bestSeller: true },
  ],
};

const WineMenu = () => {
  const [activeTab, setActiveTab] = useState("Red Wine");

  return (
    <div className="min-h-screen bg-[#0F3C5C] text-white py-16 px-6 md:px-12 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-10 border-b-2 border-[#6D9999] pb-4">🍷 Wine Menu</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 text-lg md:text-xl font-semibold">
        {Object.keys(wines).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`pb-2 border-b-2 transition ${
              activeTab === category ? "border-[#D4AF37] text-[#D4AF37]" : "border-transparent hover:text-[#6D9999]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {wines[activeTab].map((wine, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/10 rounded-xl p-6 transition hover:scale-[1.02] backdrop-blur-sm"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold flex items-center">
                {wine.name}
                {wine.bestSeller && (
                  <span className="ml-2 inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
              </h3>
              <span className="text-[#D4AF37] font-semibold">{wine.price}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">{wine.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineMenu;
