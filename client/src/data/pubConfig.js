export const PUB = {
  name: "Tracks",
  address: "Tracks, Station Rd, Aldershot GU11 1HT",
  mapsUrl:
  "https://www.google.com/maps/search/?api=1&query=Tracks,+Station+Rd,+Aldershot+GU11+1HT",

  // ✅ Put your real social links here
  socials: {
    facebook: "https://www.facebook.com/thefunkyend",
    instagram: "https://www.instagram.com/tracks_aldershot",
    tiktok: "https://www.tiktok.com/@tracksaldershot?_r=1&_t=ZN-93JUwS6IeJC",
  },

  assets: {
    bgImage: "/Asst/imgs/tracks-bg.jpg",
    logo: "/Asst/imgs/Tracks-Logo.png",
  },
};

/**
 * OPENING HOURS FORMAT (super flexible):
 * - Use 0..6 for Sun..Sat
 * - Each day contains an array of time ranges
 * - Each time range: { open: "HH:MM", close: "HH:MM" }
 * - If close is after midnight (e.g. 01:00), that's supported.
 *
 * Example:
 * 5 (Friday): [{ open: "12:00", close: "01:00" }]
 * meaning open Friday at 12:00 until Saturday 01:00.
 */
export const OPENING_HOURS = {
  0: [{ open: "12:00", close: "23:00" }], // Sunday
  1: [{ open: "3:00", close: "23:00" }], // Monday
  2: [{ open: "3:00", close: "23:30" }], // Tuesday
  3: [{ open: "3:00", close: "00:00" }], // Wednesday
  4: [{ open: "3:00", close: "01:30" }], // Thursday
  5: [{ open: "3:00", close: "01:30" }], // Friday
  6: [{ open: "3:00", close: "23:00" }], // Saturday
};