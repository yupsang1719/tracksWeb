import React, { useState } from "react";

const cocktails = {
  Classics: [
    { name: "BIG TING *", ingredients: "Spice rum, southern comfort, archers,, pineapple & orange juice", price: "£10.50" },
    { name: "CLOVER CLUB *", ingredients: "Gin, lemon juice, raspberry syrup, egg white", price: "£10.50",bestSeller: true },
    { name: "MAI TAI *", ingredients: "White rum, orange curacao, lime juice, dark rum, pineapple juice and vanilla syrup", price: "£10.50" },
    { name: "BLUE LAGOON *", ingredients: "Vodka, lemon juice, blue curacao, dash of lemonade", price: "£9.50",bestSeller: true },
    { name: "STRAWBERRY COOLIO *", ingredients: "Gin, strawberry liqueur, archers, caramel syrup fresh strawberry", price: "£12.50",bestSeller: true },
    { name: "THREESOME *", ingredients: "Tequila, orange juice, grenadine ", price: "£9.50" },
    { name: "DING DONG ", ingredients: "Tiki Rum, strawberry liquor, malibu, Pineapple juice", price: "£9.50",bestSeller: true },
    { name: "KIWI GARDEN", ingredients: "Midori, apple schnapps, fresh kiwi, lemon and apple juice", price: "£10.50" },
    { name: "CHERRY BLOSSOM", ingredients: "Gin, cherry liqueur, plum sake, cranberry, lemon & tonic", price: "£12.50",bestSeller: true },
    { name: "VICE ADMIRAL SMOKER", ingredients: "Marker’s mark bourbon, peach juice, campari, rhubarb", price: "£12.50" },
    { name: "ELDERFLOWER GIN", ingredients: "Gin, elderflower, Grenadine, vanilla syrup and lemon juice with prosecco", price: "£10.50",bestSeller: true },
    { name: "SEXY BACK", ingredients: "Peach Gin, peach liqueur, elderflower, lemon, apple juice and ginger ale", price: "£10.50",bestSeller: true },
    { name: "LYCHEE MARTINI", ingredients: "Grey goose, Passoa passion fruit liqueur, lychee liqueur, cranberry & pineapple juice", price: "£12.50" },
    { name: "PINA COLADA ", ingredients: "Bacardi , malibu, pineapple, coconut cream", price: "£10.50",bestSeller: true },
    { name: "AFRICAN RUMBLE *", ingredients: "Baileys, kraken, khalua, vanilla syrup topped with cream", price: "£9.50" },
  ],
  Signature: [
    { name: "VIKRUM", ingredients: "Bumbu rum, campari, sugar syrup,lemon & pineapple juice", price: "£12.50", bestSeller: true },
    { name: "ANGELS & DEVILS", ingredients: "Jack daniels, archers, cranberry juice & rose syrup", price: "£9.50" },
    { name: "SILKEN WHISPER", ingredients: "Disaranno velvet, tia maria, vodka", price: "£10.50",bestSeller: true },
    { name: "FIREBALL", ingredients: "Bacardi , malibu, pineapple, coconut cream", price: "£10.50" },
    { name: "RASVERRY REFRESHER", ingredients: "Crushed rasverry, vodka, lime juice, tonic, sugar syrup", price: "£12.50",bestSeller: true },
    { name: "EDEN'S SIP", ingredients: "Hendriks, fresh cucumber, elderflower syrup, apple juice", price: "£12.50" },
    { name: "RIRI", ingredients: "Malibu, Bacardi raspberry, greninande, orange juice, squeeze lime juice", price: "£10.50" },
    { name: "BITTER SWEET", ingredients: "raspberry vodka, tequila, lime juice, pineapple juice ", price: "£10.50" },
  ],
  Shooters: [
    { name: "B-52", ingredients: "Coffee liqueur, Baileys, Grand Marnier", price: "£5",bestSeller: true },
    { name: "BLOW JOB", ingredients: "khalua, Baileys, Wiped cream", price: "£5" },
    { name: "BANANA SPLIT", ingredients: "Banana liqueur, Vodka, Blue curacao", price: "£5" },
    { name: "BLUE KAMIKAZE", ingredients: "Vodka, Blue Curacao Liqueur, Lime Juice", price: "£5",bestSeller: true },
    { name: "MELON BALL", ingredients: "Melon liqueur, Pineapple juice, Vodka", price: "£5" },
    { name: "RED-HEADED SLUT", ingredients: "Peach Schnapps, Cranberry juice, Jagermaster", price: "£5" },
    { name: "TRACKSHOT", ingredients: "Dissarano, Cranberryjuice, Grenadine , Lime juice", price: "£5",bestSeller: true },
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
