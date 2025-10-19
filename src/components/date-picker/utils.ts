export function formatWithLeadingZero(num: string, length: number = 2) {
  return num.padStart(length, '0');
}
