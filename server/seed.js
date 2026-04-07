/**
 * One-time seed script — run with: node server/seed.js
 * Populates MajorEvent and RegularEvent collections with the original hardcoded data.
 */

require("dotenv").config();
const mongoose = require("mongoose");
const MajorEvent = require("./models/MajorEvent");
const RegularEvent = require("./models/RegularEvent");

const majorEvents = [
  {
    title: "Pinks - Drum & Bass Night",
    date: "April 17, Friday",
    time: "8:00 PM",
    tag: "Live DJ",
    image: "/Asst/imgs/events/majorEvents/drum_bass.jpg",
    description:
      "Get ready for a high-energy night at Tracks Aldershot as Drum & Bass All Night presents Pinks! Join us on Friday, 17th April from 8:00 PM to 2:00 AM for a full takeover of heavy beats, deep bass, and non-stop vibes. Featuring a stacked lineup including Gizme, Joshwana, Krojo, Lau Dat, Memphis, Mezza, Neil Pwah, and OC, this is set to be an unforgettable night for all drum & bass lovers. Expect powerful sets, an electric crowd, and a proper club atmosphere from start to finish. Whether you're here for the music, the energy, or the full night experience, this is one you don't want to miss. Arrive early, grab your drinks, and get ready to go all night long at Tracks.",
    deadline: "2026-04-17T20:00:00",
    isVisible: true,
  },
  {
    title: "Drag Bingo (Hosted by Lulu)",
    date: "April 5, Sunday",
    time: "4:00 PM",
    tag: "Bingo",
    image: "/Asst/imgs/events/majorEvents/drag_bingo.jpg",
    description:
      "Get ready for an unforgettable afternoon of entertainment at Tracks Aldershot as Lulu's Drag Bingo returns! Join us on Sunday, 5th April from 4:00 PM to 7:30 PM for a high-energy mix of bingo, comedy, and live drag performance — all hosted by the fabulous Lulu herself. Expect big laughs, bold performances, and plenty of surprises throughout the event. Whether you're coming for the bingo, the show, or just a great time with friends, this is one event you don't want to miss. With a lively atmosphere and crowd-favourite moments, Drag Bingo at Tracks always brings the house down. Entry is just £2 to play, with multiple rounds and chances to win prizes throughout the event. Please note: This is a first come, first served event. We are not taking table bookings, so we recommend arriving early to secure your spot. Bring your friends, grab a drink, and get ready for an afternoon full of fun, laughter, and unforgettable vibes.",
    deadline: "2026-04-05T16:00:00",
    isVisible: true,
  },
];

const regularEvents = [
  {
    day: "Sunday",
    title: "Spin The Wheel",
    host: "Rainbow Entertainment",
    flyer: "/Asst/imgs/events/rainbowKaraoke.jpeg",
    description: "The vibes are unreal, the spins were lucky, and the crowd went wild!",
    order: 0,
  },
  {
    day: "Tuesday",
    title: "Exclusive Night",
    host: "Mark Farren",
    flyer: "/Asst/imgs/events/discoKaraoke.jpeg",
    description:
      "Karaoke Night || Come for the deals, stay for the vibes. your tuesday just got exclusive",
    order: 1,
  },
  {
    day: "Wednesday & Thursday",
    title: "Discount Night",
    host: "DJ MDK",
    flyer: "/Asst/imgs/events/discountNightReg.jpeg",
    description: "2-for-1 House Spirits & DJ MDK to heat up midweek nights.",
    order: 2,
  },
  {
    day: "Friday",
    title: "Tracks Hour",
    host: "DJ MDK",
    flyer: "/Asst/imgs/galary/secondPhase18.jpg",
    description:
      "Cocktails - 2 for £15 || House Spirits £4.50 || Shots From £2 || DJ MDK live. ",
    order: 3,
  },
  {
    day: "Saturday",
    title: "Tracks Hour",
    host: "DJ Trinni",
    flyer: "/Asst/imgs/galary/secondPhase3.jpg",
    description:
      "Cocktails - 2 for £15 || House Spirits £4.50 || Shots From £2 || DJ MDK live. ",
    order: 4,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  await MajorEvent.deleteMany({});
  await RegularEvent.deleteMany({});

  await MajorEvent.insertMany(majorEvents);
  await RegularEvent.insertMany(regularEvents);

  console.log("Seeded major events:", majorEvents.length);
  console.log("Seeded regular events:", regularEvents.length);

  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
