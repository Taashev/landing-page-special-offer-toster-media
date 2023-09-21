export function getUTCDateFormat(seconds) {
  const date = new Date(seconds * 1000);

  const h = date.getUTCHours();
  const m = date.getUTCMinutes();
  const s = date.getUTCSeconds();

  const fullTime = h.toString().padStart(2, '0') + ':' +
    m.toString().padStart(2, '0') + ':' +
    s.toString().padStart(2, '0');

  return fullTime;
}
