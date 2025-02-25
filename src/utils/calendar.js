export const generateICSFile = (event) => {
  // ICS dosyası için içerik oluştur
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Aslı & Evren //TR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${new Date().getTime()}@asli-evren-dugun
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${new Date(event.startTime).toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTEND:${new Date(event.endTime).toISOString().replace(/[-:]/g, "").split(".")[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

  // ICS dosyasını indir
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const filename = `${event.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.ics`;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

  // Kullanıcıya bilgilendirme mesajı göster
  setTimeout(() => {
    alert(`"${filename}" dosyası indirildi.\nİndirilen dosyaya tıklayarak etkinliği takviminize ekleyebilirsiniz.`);
  }, 500);
};
