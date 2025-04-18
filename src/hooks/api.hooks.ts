import { fetchHistoricalData, fetchRealTimeStockOverview } from "@/api/api";
import { HistoricalData, StockOverviewData, StockSymbol } from "@/types";
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export function useRealTimeStockOverview(
  symbol: StockSymbol,
  options?: UseQueryOptions<
    StockOverviewData,
    Error,
    StockOverviewData,
    QueryKey
  >
): UseQueryResult<StockOverviewData, Error> {
  const queryKey = ["realTime", symbol];
  return useQuery({
    queryKey: queryKey,
    queryFn: () => fetchRealTimeStockOverview(symbol),
    ...options,
  });
}

/**
 * React Query hook for historical data
 */
export function useHistoricalData(
  symbol: StockSymbol,
  days: number = 30,
  options?: UseQueryOptions<HistoricalData, Error, HistoricalData, QueryKey>
): UseQueryResult<HistoricalData, Error> {
  const queryKey = ["historical", symbol, days] as const;
  return useQuery<HistoricalData, Error>({
    queryKey,
    queryFn: () => fetchHistoricalData(symbol, days),
    ...options,
  });
}
