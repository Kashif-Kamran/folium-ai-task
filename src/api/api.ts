import { HistoricalData, StockOverviewData, StockSymbol } from "@/types";
import { RealTimeStockPriceMockResponse } from "./data/react-time-stock-price";
import { mapHistoricalResponse, mapRealTimeResponse } from "./mappers";
import { HistoricalDataMockReponse } from "./data/historical-data";
import { getRequest } from "@/lib/api-client";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchRealTimeStockOverview(
  symbol: StockSymbol
): Promise<StockOverviewData> {
  // const resposne = getRequest("/query").catch((error) =>
  //   console.log("Caught the error  ", error)
  // );
  // console.log("Response  :", resposne);
  //   const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
  //   const response = await fetch(url);
  //   const json = (await response.json()) as RealTimeStockPriceApiResponse;
  await delay(2000);
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
  await delay(2000);
  const json = HistoricalDataMockReponse;
  return mapHistoricalResponse(json, days);
}
