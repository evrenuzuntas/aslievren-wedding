export const generateICSFile = (event) => {
  // URL parametrelerini oluştur
  const params = new URLSearchParams({
    text: event.title,
    details: event.description,
    location: event.location,
    dates: `${event.startTime.replace(/[-:]/g, "")}/${event.endTime.replace(/[-:]/g, "")}`,
  });

  // Google Calendar URL'ini oluştur
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;

  // Takvim protokol URL'ini oluştur (Apple Calendar, Outlook vb. için)
  const startDate = new Date(event.startTime);
  const endDate = new Date(event.endTime);
  const calendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  // Önce takvim protokolünü dene
  window.location.href = `webcal:${calendarUrl.substring(5)}`;

  // Eğer takvim protokolü çalışmazsa, 500ms sonra Google Calendar'ı aç
  setTimeout(() => {
    window.open(googleUrl, "_blank");
  }, 500);
};
