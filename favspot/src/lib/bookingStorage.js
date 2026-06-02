export function saveLastBooking(booking) {
  try {
    localStorage.setItem("zazu:lastBooking", JSON.stringify(booking));
  } catch {
    // ignore
  }
}

export function loadLastBooking() {
  try {
    const raw = localStorage.getItem("zazu:lastBooking");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

