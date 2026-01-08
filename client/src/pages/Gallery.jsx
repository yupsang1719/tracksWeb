import React, { useState, useEffect } from "react";
const galleryImages = [
  "/Asst/imgs/galary/secondPhase8.jpg",
  "/Asst/imgs/galary/secondPhase3.jpg",
  "/Asst/imgs/galary/secondPhase11.jpg",
  "/Asst/imgs/galary/secondPhase9.jpg",
  "/Asst/imgs/galary/secondPhase13.jpg",
  "/Asst/imgs/galary/secondPhase15.jpg",
  "/Asst/imgs/galary/secondPhase18.jpg",
  "/Asst/imgs/galary/gallery-8.jpg",
  "/Asst/imgs/galary/secondPhase19.jpg",
  "/Asst/imgs/galary/gallery-10.jpg",
  "/Asst/imgs/galary/secondPhase1.jpg",
  "/Asst/imgs/galary/secondPhase2.jpg",
  "/Asst/imgs/galary/secondPhase4.jpg",
  "/Asst/imgs/galary/secondPhase12.jpg",
  "/Asst/imgs/galary/secondPhase14.jpg",
  "/Asst/imgs/galary/secondPhase15.jpg",
  "/Asst/imgs/galary/secondPhase17.jpg",
];
export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (index) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // 🔑 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex !== null) {
        if (e.key === "Escape") handleClose();
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="bg-[#0F3C5C] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase mb-6">Gallery</h2>
        <p className="text-lg text-white/80 mb-12">
          See what’s happening and what’s coming up at Tracks – live music, food, drinks, and fun!
        </p>

        {/* 🖼 Masonry Style Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4 mb-12">
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              onClick={() => handleOpen(idx)}
              className="w-full rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* 🪟 Modal with image */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            {/* ❌ Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50 bg-black/40 px-3 py-1 rounded hover:bg-black"
            >
              &times;
            </button>

            {/* 📸 Image */}
            <img
              src={galleryImages[activeIndex]}
              alt={`Gallery ${activeIndex + 1}`}
              className="max-h-[90vh] mx-auto rounded-lg transition-transform duration-300 scale-100"
            />

            {/* ⬅️➡️ Navigation */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-50"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
