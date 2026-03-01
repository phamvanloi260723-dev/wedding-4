/**
 * Formats a date object into Vietnamese format: DD . MM . YYYY
 */
export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day} . ${month} . ${year}`;
}

/**
 * Formats a date object into Vietnamese time format: HH:mm (Sáng/Chiều)
 */
export function formatTime(date: Date): string {
  const timeStr = date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const period = date.getHours() < 12 ? " Sáng" : " Chiều";
  return `${timeStr}${period}`;
}
