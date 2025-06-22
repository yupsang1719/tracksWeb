import React, { useState } from "react";

const cocktails = {
  Classics: [
    { name: "Margarita", ingredients: "Tequila, Cointreau, Lime juice", price: "£9" },
    { name: "Mojito", ingredients: "White rum, Mint, Lime, Sugar, Soda", price: "£8" },
    { name: "Espresso Martini", ingredients: "Vodka, Coffee liqueur, Espresso", price: "£10",bestSeller: true },
    { name: "Negroni", ingredients: "Gin, Campari, Vermouth Rosso", price: "£9" },
    { name: "Old Fashioned", ingredients: "Bourbon, Sugar, Bitters, Orange", price: "£10",bestSeller: true },
  ],
  Signature: [
    { name: "Tracks Twist", ingredients: "Rum, Elderflower, Grapefruit, Bitters", price: "£11",bestSeller: true },
    { name: "Garden Zen", ingredients: "Gin, Basil, Cucumber, Lemon", price: "£10" },
    { name: "Spicy Sunset", ingredients: "Tequila, Chilli, Mango, Lime", price: "£11" },
    { name: "Velvet Smoke", ingredients: "Scotch, Honey, Orange bitters", price: "£12",bestSeller: true },
    { name: "Royal Blush", ingredients: "Vodka, Raspberry, Rose syrup", price: "£10" },
  ],
  Mocktails: [
    { name: "Virgin Mojito", ingredients: "Mint, Lime, Sugar, Soda", price: "£6" },
    { name: "Sunset Cooler", ingredients: "Pineapple, Orange, Grenadine", price: "£6" },
    { name: "Cucumber Fizz", ingredients: "Cucumber, Lime, Soda, Mint", price: "£6" },
    { name: "Tropical Zing", ingredients: "Passionfruit, Mango, Lime", price: "£6",bestSeller: true },
    { name: "Berry Bloom", ingredients: "Mixed berries, Lemon, Soda", price: "£6" },
  ],
};

const CocktailMenu = () => {
  const [activeTab, setActiveTab] = useState("Classics");

  return (
    <div className="min-h-screen bg-[#0F3C5C] text-white py-16 px-6 md:px-12 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-10 border-b-2 border-[#6D9999] pb-4">🍸 Cocktail Menu</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 text-lg md:text-xl font-semibold">
        {Object.keys(cocktails).map((category) => (
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
        {cocktails[activeTab].map((drink, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/10 rounded-xl p-6 transition hover:scale-[1.02] backdrop-blur-sm"
          >
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{drink.name}</h3>
                {drink.bestSeller && (
                <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    Best Seller
                </span>
                )}
            </div>
            <span className="text-[#D4AF37] font-semibold">{drink.price}</span>
        </div>

            <p className="text-sm text-white/80 mt-2">{drink.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default CocktailMenu;
