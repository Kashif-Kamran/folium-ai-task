export type StockSymbol = "IBM" | "MSFT" | "GOOGL";

export type TimeRange = "1W" | "1M" | "3M";

export interface StockOverviewData {
  symbol: StockSymbol;
  currentPrice: number;
  open: number;
  high: number;
  low: number;
}

export interface HistoricalDataPoint {
  date: string;
  close: number;
}

export type HistoricalData = HistoricalDataPoint[];
