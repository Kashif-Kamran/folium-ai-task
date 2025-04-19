import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface ActionBarProps {
  selectedStock: string;
  timeRange: "1W" | "1M" | "3M";
  onStockChange: (stock: string) => void;
  onTimeRangeChange: (range: "1W" | "1M" | "3M") => void;
  onRefresh: () => void;
}

export function ActionBar({
  selectedStock,
  timeRange,
  onStockChange,
  onTimeRangeChange,
  onRefresh,
}: ActionBarProps) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4 bg-card dark:bg-card">
      <Select value={selectedStock} onValueChange={onStockChange}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Select Stock" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="IBM">IBM</SelectItem>
          <SelectItem value="MSFT">MSFT</SelectItem>
          <SelectItem value="GOOGL">GOOGL</SelectItem>
        </SelectContent>
      </Select>

      <Select value={timeRange} onValueChange={onTimeRangeChange}>
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1W">1W</SelectItem>
          <SelectItem value="1M">1M</SelectItem>
          <SelectItem value="3M">3M</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" onClick={onRefresh}>
        <RefreshCw className="w-4 h-4 mr-1" />
        Refresh All
      </Button>
    </div>
  );
}
