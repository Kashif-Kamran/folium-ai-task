import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/providers/redux";

interface StockOverviewWidgetProps {}

export default function StockOverviewWidget({}: StockOverviewWidgetProps) {
  const { data } = useAppSelector((state) => state.stockOverviewData);

  if (!data) {
    return (
      <div>
        <h1>Data is Loading</h1>
      </div>
    );
  }

  return (
    <Card className="w-full  shadow-md rounded-2xl">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Stock Overview</h2>
        <div className="text-3xl font-bold mb-2">
          ${data.currentPrice.toFixed(2)}
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <span className="block text-gray-400">Open</span>
            <span className="text-base text-white">
              ${data.open.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="block text-gray-400">High</span>
            <span className="text-base text-white">
              ${data.high.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="block text-gray-400">Low</span>
            <span className="text-base text-white">${data.low.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
