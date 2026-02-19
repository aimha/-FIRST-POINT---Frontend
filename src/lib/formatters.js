/**
 * Helper function to convert s in mm:ss
 */
export const durationFormatter = (s) => {
  if (!s || isNaN(s)) return "0s";

  const minutes = Math.floor(s / 60);
  const seconds = s % 60;

  // if less than a minute show only seconds
  if (minutes === 0) {
    return `${seconds}s`;
  }

  // else show formatted duration
  return `${minutes}m ${seconds}s`;
};
