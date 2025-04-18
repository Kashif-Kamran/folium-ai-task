export function parseDailyApiDate(dateStr: string): Date {
  // Construct from ISO format
  return new Date(dateStr);
}

/**
 * Parse an intraday API datetime string ("YYYY-MM-DD HH:mm:ss") into a Date
 */
export function parseIntradayApiDate(dateTimeStr: string): Date {
  // Replace space with 'T' to conform to ISO format
  return new Date(dateTimeStr.replace(" ", "T"));
}
