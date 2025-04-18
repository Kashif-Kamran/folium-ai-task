import { Card, CardContent } from "@/components/ui/card";

export default function StockOverviewWidget() {
  const stockData = {
    name: "AAPL",
    currentPrice: 178.42,
    open: 175.9,
    high: 179.23,
    low: 174.88,
  };

  return (
    <Card className="w-full p-4 shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Stock Overview</h2>
        <div className="text-3xl font-bold mb-2">
          ${stockData.currentPrice.toFixed(2)}
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <span className="block text-gray-400">Open</span>
            <span className="text-base text-white">
              ${stockData.open.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="block text-gray-400">High</span>
            <span className="text-base text-white">
              ${stockData.high.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="block text-gray-400">Low</span>
            <span className="text-base text-white">
              ${stockData.low.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
