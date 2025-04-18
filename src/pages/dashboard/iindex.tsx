import StockOverviewWidget from "./components/stock-overview-widget";
import HistoricalDataChartWidget from "./components/history-data-chart-widget";
import { ActionBar } from "./components/action-bar";
import { useState } from "react";

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState<string>("AAPL");
  const [timeRange, setTimeRange] = useState<"1W" | "1M" | "3M">("1W");

  const handleRefresh = () => {
    // trigger data refetch for both widgets
    console.log("Refreshing data for", selectedStock, "over", timeRange);
  };
  return (
    <div className="w-3/4 mx-auto">
      <ActionBar
        selectedStock={selectedStock}
        timeRange={timeRange}
        onStockChange={setSelectedStock}
        onTimeRangeChange={setTimeRange}
        onRefresh={handleRefresh}
      />
      <StockOverviewWidget />
      <HistoricalDataChartWidget />
    </div>
  );
}

export default Dashboard;
