import { fetchHistoricalData, fetchRealTimeStockOverview } from "@/api/api";
import { updateHistoricalData, useAppDispatch } from "@/providers/redux";
import { HistoricalData, StockOverviewData, StockSymbol } from "@/types";
import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { updateStockData } from "@/providers/redux";
import { useEffect } from "react";
import { toast } from "sonner";

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
  const dispatch = useAppDispatch();

  const query = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchRealTimeStockOverview(symbol),
    ...options,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(updateStockData(query.data));
    }
  }, [query.data, dispatch]);

  useEffect(() => {
    if (query.isError && query.error) {
      toast.error(`${query.error}`);
    }
  }, [query.error, query.isError]);
  return query;
}

export function useHistoricalData(
  symbol: StockSymbol,
  days: number = 30,
  options?: UseQueryOptions<HistoricalData, Error, HistoricalData, QueryKey>
): UseQueryResult<HistoricalData, Error> {
  const queryKey = ["historical", symbol, days] as const;
  const dispatch = useAppDispatch();

  const query = useQuery<HistoricalData, Error>({
    queryKey,
    queryFn: () => fetchHistoricalData(symbol, days),
    ...options,
  });

  useEffect(() => {
    if (query.data) {
      dispatch(updateHistoricalData(query.data));
    }
  }, [query.data, dispatch]);

  useEffect(() => {
    if (query.isError && query.error) {
      toast.error(`${query.error.message}`);
    }
  }, [query.error, query.isError]);

  return query;
}
