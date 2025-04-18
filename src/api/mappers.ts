import {
  HistoricalData,
  HistoricalDataPoint,
  StockOverviewData,
  StockSymbol,
} from "@/types";
import {
  HistoricalDataApiResponse,
  RealTimeStockPriceApiResponse,
} from "./api-types";

export function mapRealTimeResponse(
  api: RealTimeStockPriceApiResponse
): StockOverviewData {
  const meta = api["Meta Data"];
  const lastRefreshed = meta["3. Last Refreshed"];
  const series = api["Time Series (5min)"];
  const point = series[lastRefreshed];

  return {
    symbol: meta["2. Symbol"] as StockSymbol,
    currentPrice: parseFloat(point["4. close"]),
    open: parseFloat(point["1. open"]),
    high: parseFloat(point["2. high"]),
    low: parseFloat(point["3. low"]),
  };
}

/**
 * Map raw daily API response to HistoricalData array
 */
export function mapHistoricalResponse(
  api: HistoricalDataApiResponse,
  limit: number = 30
): HistoricalData {
  const series = api["Time Series (Daily)"];
  const entries = Object.entries(series)
    // sort descending by date
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    // take the most recent `limit` points
    .slice(0, limit)
    // map to HistoricalDataPoint[]
    .map<HistoricalDataPoint>(([dateStr, vals]) => ({
      date: dateStr,
      close: parseFloat(vals["4. close"]),
    }));

  // reverse to chronological order
  return entries.reverse();
}
