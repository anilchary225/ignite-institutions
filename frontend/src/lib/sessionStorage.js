// Popups must still open and close when the browser blocks session storage.
const fallbackValues = new Map();

export function readSessionValue(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return fallbackValues.get(key) ?? null;
  }
}

export function writeSessionValue(key, value) {
  fallbackValues.set(key, String(value));
  try {
    window.sessionStorage.setItem(key, String(value));
  } catch {
    // Keep the preference in memory for the current page session.
  }
}
