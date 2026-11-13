/**
 * Format date string into human readable luxury wedding style
 * e.g., "2026-11-26" -> "Thursday, November 26, 2026"
 */
export function formatWeddingDate(dateString) {
  if (!dateString) return '';
  try {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (err) {
    return dateString;
  }
}

/**
 * Short date format e.g., "26 NOV 2026"
 */
export function formatShortDate(dateString) {
  if (!dateString) return '';
  try {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parts[2];
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      return `${day} ${months[monthIdx]} ${year}`;
    }
    return dateString;
  } catch (e) {
    return dateString;
  }
}

/**
 * Calculate difference between target wedding date/time and now
 */
export function calculateTimeRemaining(targetDateStr = '2026-11-26', targetTimeStr = '19:00', timezone = 'Asia/Kolkata') {
  try {
    // 26 Nov 2026, 19:00 IST (UTC+05:30)
    const targetISO = `${targetDateStr}T19:00:00+05:30`;
    const target = new Date(targetISO).getTime();
    const now = Date.now();
    const difference = target - now;

    if (difference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: true
      };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
      isCompleted: false
    };
  } catch (err) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: false
    };
  }
}

/**
 * Generate direct Google Calendar Event URL
 */
export function getGoogleCalendarUrl({
  title = "Priyanka Weds Reon - Wedding Ceremony",
  details = "Wedding Ceremony of Priyanka & Reon at Ashoka Lodge, Kharagpur. We look forward to celebrating together!",
  location = "Ashoka Lodge, Near Bazar Kolkata, Malancha Road, Kharagpur, West Bengal 721301",
  startDate = "20261126T190000",
  endDate = "20261126T230000"
}) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: title,
    dates: `${startDate}/${endDate}`,
    details: details,
    location: location,
    ctz: "Asia/Kolkata"
  });
  return `${base}&${params.toString()}`;
}

/**
 * Download standard iCal (.ics) file for Apple Calendar, Outlook, etc.
 */
export function downloadICalFile({
  title = "Priyanka Weds Reon - Wedding Ceremony",
  details = "Wedding Ceremony of Priyanka & Reon at Ashoka Lodge, Kharagpur. We look forward to celebrating together!",
  location = "Ashoka Lodge, Near Bazar Kolkata, Malancha Road, Kharagpur, West Bengal 721301",
  startDate = "20261126T133000Z", // 19:00 IST in UTC is 13:30 UTC
  endDate = "20261126T173000Z"
}) {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Priyanka Weds Reon//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${location}`,
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT24H",
    "DESCRIPTION:Reminder: Priyanka & Reon's Wedding Ceremony Tomorrow!",
    "ACTION:DISPLAY",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Priyanka-Weds-Reon-Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
