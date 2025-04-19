import { HistoricalData, StockOverviewData, StockSymbol } from "@/types";
import { RealTimeStockPriceMockResponse } from "./data/react-time-stock-price";
import { mapHistoricalResponse, mapRealTimeResponse } from "./mappers";
import { HistoricalDataMockReponse } from "./data/historical-data";
import { getRequest } from "@/lib/api-client";
import {
  HistoricalDataApiResponse,
  RealTimeStockPriceApiResponse,
} from "./api-types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchRealTimeStockOverview(
  symbol: StockSymbol
): Promise<StockOverviewData> {
  const response = await getRequest("/query", {
    function: "TIME_SERIES_INTRADAY",
    symbol,
    interval: "5min",
  }).then((output: any) => (output["Error Message"] ? null : output));
  console.log("Response : ", response);
  const json =
    (response as RealTimeStockPriceApiResponse) ??
    RealTimeStockPriceMockResponse;
  return mapRealTimeResponse(json);
}

export async function fetchHistoricalData(
  symbol: StockSymbol,
  days: number = 30
): Promise<HistoricalData> {
  const response = await getRequest("/query", {
    function: "TIME_SERIES_DAILY",
    symbol,
    outputsize: "compact",
  }).then((output: any) => (output["Error Message"] ? null : output));
  console.log("Response : ", response);
  const json =
    (response as HistoricalDataApiResponse) ?? HistoricalDataMockReponse;
  return mapHistoricalResponse(json, days);
}
