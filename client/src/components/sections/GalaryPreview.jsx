import { Link } from "react-router-dom";

const previewImages = [
  { src: "/Asst/imgs/galary/gallery-6.jpg", alt: "Open Mic", category: "Open Mic" },
  { src: "/Asst/imgs/galary/gallery-2.jpg", alt: "Disco Karaoke", category: "Karaoke" },
  { src: "/Asst/imgs/galary/gallery-9.jpg", alt: "Ladies Night", category: "Ladies" },
  { src: "/Asst/imgs/galary/gallery-4.jpg", alt: "Live Music", category: "Live" },
  { src: "/Asst/imgs/galary/gallery-5.jpg", alt: "Rainbow Karaoke", category: "Rainbow" },
  { src: "/Asst/imgs/galary/gallery-6.jpg", alt: "Discount Night", category: "Discount" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#0F3C5C] py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#e5eff7] mb-10">Glimpse of The Tracks</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {previewImages.map((img, idx) => (
          <Link to="/gallery" key={idx} className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-sm md:text-lg">
              View More →
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/gallery"
        className="mt-10 inline-block bg-[#6D9999] text-white px-6 py-3 rounded hover:bg-[#5b8686] transition"
      >
        Explore Full Gallery
      </Link>
    </section>
  );
}
