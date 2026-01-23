const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const UK_DAY_ORDER = [1, 2, 3, 4, 5, 6, 0]; // Mon..Sun

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatRange(open, close) {
  return `${open} – ${close}`;
}

function formatDayRanges(ranges = []) {
  if (!ranges.length) return "Closed";
  return ranges.map((r) => formatRange(r.open, r.close)).join(" / ");
}

/**
 * Check if "now" is within any time range for today's schedule.
 * Supports close after midnight: if close <= open, treat close as next day.
 */
export function isOpenNow(openingHours, now = new Date()) {
  const day = now.getDay(); // 0..6
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const ranges = openingHours?.[day] ?? [];

  for (const r of ranges) {
    const openMin = toMinutes(r.open);
    const closeMin = toMinutes(r.close);

    // Same-day close
    if (closeMin > openMin) {
      if (minutesNow >= openMin && minutesNow < closeMin) return true;
    } else {
      // After-midnight close (e.g., 12:00–01:00)
      // Open from openMin -> 1440, and 0 -> closeMin
      if (minutesNow >= openMin || minutesNow < closeMin) return true;
    }
  }

  return false;
}

export function getTodayInfo(openingHours, now = new Date()) {
  const day = now.getDay();
  const ranges = openingHours?.[day] ?? [];
  return {
    dayIndex: day,
    dayName: DAY_NAMES[day],
    hoursText: formatDayRanges(ranges),
  };
}

export function getWeekRows(openingHours) {
  return UK_DAY_ORDER.map((dayIndex) => ({
    dayIndex,
    dayName: DAY_NAMES[dayIndex],
    hoursText: formatDayRanges(openingHours?.[dayIndex] ?? []),
  }));
}

export function getDayName(dayIndex) {
  return DAY_NAMES[dayIndex] ?? "Day";
}