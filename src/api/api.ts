import { HistoricalData, StockOverviewData, StockSymbol } from "@/types";
import { RealTimeStockPriceMockResponse } from "./data/react-time-stock-price";
import { mapHistoricalResponse, mapRealTimeResponse } from "./mappers";
import { HistoricalDataMockReponse } from "./data/historical-data";

export async function fetchRealTimeStockOverview(
  symbol: StockSymbol
): Promise<StockOverviewData> {
  //   const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
  //   const response = await fetch(url);
  //   const json = (await response.json()) as RealTimeStockPriceApiResponse;
  const json = RealTimeStockPriceMockResponse;
  return mapRealTimeResponse(json);
}

/**
 * Fetch historical daily data
 */
export async function fetchHistoricalData(
  symbol: StockSymbol,
  days: number = 30
): Promise<HistoricalData> {
  //   const url = `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
  //   const response = await fetch(url);
  //   const json = (await response.json()) as HistoricalDataApiResponse;
  const json = HistoricalDataMockReponse;
  return mapHistoricalResponse(json, days);
}
