export const generateICSFile = (event) => {
  const formatDate = (date) => {
    return date.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aslı & Evren Düğün//TR
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${new Date().getTime()}@asli-evren-dugun
DTSTAMP:${formatDate(new Date().toISOString())}
DTSTART:${formatDate(event.startTime)}
DTEND:${formatDate(event.endTime)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:${event.title} yarın!
END:VALARM
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:${event.title} 2 saat sonra başlıyor!
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${event.title.replace(/\s+/g, "-")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};
