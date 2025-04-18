"use client";

import { useState } from "react";
import StockOverviewWidget from "./components/stock-overview-widget";
import HistoricalDataChartWidget from "./components/history-data-chart-widget";
import { ActionBar } from "./components/action-bar";
import { StockSymbol, TimeRange } from "@/types";
import { useHistoricalData, useRealTimeStockOverview } from "@/hooks/api.hooks";

const rangeToDays: Record<TimeRange, number> = {
  "1W": 7,
  "1M": 30,
  "3M": 90,
};

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState<StockSymbol>("AAPL");
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");

  const {
    data: stockOverviewData,
    isLoading: isOverviewLoading,
    refetch: refetchOverview,
  } = useRealTimeStockOverview(selectedStock);

  const {
    data: historicalData,
    isLoading: isHistoricalLoading,
    refetch: refetchHistorical,
  } = useHistoricalData(selectedStock, rangeToDays[timeRange]);

  const handleRefresh = () => {
    refetchOverview();
    refetchHistorical();
  };

  return (
    <div className="w-3/4 mx-auto">
      <ActionBar
        selectedStock={selectedStock}
        timeRange={timeRange}
        onStockChange={(value) => setSelectedStock(value as StockSymbol)}
        onTimeRangeChange={setTimeRange}
        onRefresh={handleRefresh}
      />

      {stockOverviewData && <StockOverviewWidget data={stockOverviewData} />}

      {historicalData && <HistoricalDataChartWidget data={historicalData} />}

      {(isOverviewLoading || isHistoricalLoading) && (
        <p className="text-sm text-gray-400 mt-4">Loading data...</p>
      )}
    </div>
  );
}

export default Dashboard;
