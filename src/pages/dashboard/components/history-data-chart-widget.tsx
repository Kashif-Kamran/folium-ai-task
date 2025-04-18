"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const historicalData = [
  { date: "Apr 1", close: 102 },
  { date: "Apr 2", close: 148 },
  { date: "Apr 3", close: 130 },
  { date: "Apr 4", close: 60 },
  { date: "Apr 5", close: 80 },
  { date: "Apr 6", close: 177 },
  { date: "Apr 7", close: 120 },
  { date: "Apr 8", close: 162 },
];

const chartConfig = {
  close: {
    label: "Close Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function HistoricalDataChartWidget() {
  return (
    <Card className="w-full  mx-auto shadow-md rounded-2xl mt-8">
      <CardHeader>
        <CardTitle>Historical Data Chart</CardTitle>
        <CardDescription>Closing prices for the last 8 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <AreaChart
            accessibilityLayer
            data={historicalData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="close"
              type="natural"
              fill="var(--color-chart-1)"
              fillOpacity={0.4}
              stroke="var(--color-chart-1)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Apr 1 - Apr 8, 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
