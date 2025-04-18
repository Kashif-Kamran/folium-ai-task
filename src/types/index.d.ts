// Define generalized types for the dashboard

/**
 * Available stock symbols for selection
 */
export type StockSymbol = "AAPL" | "MSFT" | "GOOGL";

/**
 * Available time ranges for historical data
 */
export type TimeRange = "1W" | "1M" | "3M";

/**
 * Data shape for the real-time stock overview widget
 */
export interface StockOverviewData {
  symbol: StockSymbol;
  currentPrice: number;
  open: number;
  high: number;
  low: number;
}

/**
 * Data point shape for the historical data chart widget
 */
export interface HistoricalDataPoint {
  date: string; // e.g., "2025-04-15" or formatted label
  close: number; // closing price
}

/**
 * Example container: an array of historical data points
 */
export type HistoricalData = HistoricalDataPoint[];
