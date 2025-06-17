import React from "react";
import Hero from "../components/sections/Hero";
import AboutMini from "../components/sections/AboutMini";
import ParallaxBreak from "../components/sections/ParallaxBreak";
import UpcomingEvents from "../components/sections/UpcomingEvents";
import BarIntro from "../components/sections/BarIntro";
import GalleryPreview from "../components/sections/GalaryPreview";
import ParallaxBreakSmall from "../components/sections/ParallaxBreakSmall";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMini />
      <ParallaxBreak />
      <UpcomingEvents />
      <BarIntro />
      <GalleryPreview />
      <ParallaxBreakSmall />
      {/* Add FeaturedMenu, Events, etc. here as you build them */}
    </div>
  );
};

export default Home;
