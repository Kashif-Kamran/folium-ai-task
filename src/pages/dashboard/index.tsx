import React from "react";
import { useState } from "react";
import { ActionBar } from "./components/action-bar";
import { StockSymbol, TimeRange } from "@/types";
import { useHistoricalData, useRealTimeStockOverview } from "@/hooks/api.hooks";
const StockOverViewWidgetLazy = React.lazy(
  () => import("./components/stock-overview-widget")
);
const HistoricalDataChartWidgetLazy = React.lazy(
  () => import("./components/history-data-chart-widget")
);

const rangeToDays: Record<TimeRange, number> = {
  "1W": 7,
  "1M": 30,
  "3M": 90,
};

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState<StockSymbol>("IBM");
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");

  const { refetch: refetchOverview } = useRealTimeStockOverview(selectedStock);

  const { refetch: refetchHistorical } = useHistoricalData(
    selectedStock,
    rangeToDays[timeRange]
  );

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
      <StockOverViewWidgetLazy />
      <HistoricalDataChartWidgetLazy />
    </div>
  );
}

export default Dashboard;
