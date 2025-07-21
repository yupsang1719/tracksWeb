import React, { useState } from "react";

const wines = {
  "Red Wine": [
    { name: "LA BELLE PINOT NOIR", description: "Smooth, fruity, with hints of cherry and spice", price: "£5.90 / £7.60 / £10.40", bestSeller: true },
    { name: "CUNE RIOJA RESERVA", description: "Rich and earthy with notes of red berries and oak", price: "£6.00 / £7.80 / £9.60" },
    { name: "LUIS FELIPE EDWARD GRAN RESERVA MERLOT", description: "Velvety and ripe, bursting with plum and mocha", price: "£5.60 / £7.20 / £9.60" },
    { name: "MARCELO PELLERITI MALBEC", description: "Bold and juicy, layered with dark fruit and spice", price: "£5.60 / £7.20 / £9.60 / £25", bestSeller: true },
    { name: "BAREFOOT MERLOT", description: "Easy-drinking with soft tannins and blackberry flavours", price: "£5.20 / £6.20 / £8.40", bestSeller: true },
  ],
  "White Wine": [
    { name: "BREAD & BUTTER CHARDONNAY", description: "Creamy and smooth with notes of vanilla and baked apple", price: "£6.00 / £7.80 / £10.40" },
    { name: "VILLA MARIA MARLBOROUGH SAUVIGNON BLANC", description: "Crisp and zesty with tropical fruit and citrus", price: "£5.90 / £7.60 / £10.20"},
    { name: "BAREFOOT SAUVIGNON BLANC", description: "Light and refreshing with hints of lime and green apple", price: "£5.60 / £7.20 / £9.60" },
    { name: "PINOT GRIGIO BREGANZE", description: "Clean and delicate with soft pear and floral notes.", price: "£5.20 / £6.20 / £8.40 / £25" , bestSeller: true },
  ],
  "Rosé": [
    { name: "IDEALYSTA ROSATO", description: "Fresh and fruity with notes of red berries and a crisp finish", price: "£7.00 / £8.50 / £10.20", bestSeller: true },
    { name: "PEYRASSOL", description: "Elegant and dry with delicate floral and strawberry notes", price: "£6.40 / £8.90 / £12.10" },
    { name: "BAREFOOT WHITE ZINFANDEL", description: "Sweet and juicy with hints of watermelon and peach", price: "£5.20 / £6.60 / £8.70" },
  ],
  "Sparkling": [
    { name: "PROSECCO", description: "Light, bubbly, and refreshing with apple and citrus notes", price: "£30", bestSeller: true  },
    { name: "MOËT & CHANDON", description: "Luxurious and refined with fine bubbles and notes of brioche and stone fruit", price: "£110"},
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
