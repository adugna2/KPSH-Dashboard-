
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BedOccupancyData } from "@/types";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Skeleton } from "../ui/skeleton";

interface BedOccupancyChartProps {
  data: BedOccupancyData[];
  isLoading?: boolean;
  className?: string;
}

export function BedOccupancyChart({ data, isLoading, className }: BedOccupancyChartProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Bed Occupancy Rate</CardTitle>
          <CardDescription>Monthly average percentage of beds occupied</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Bed Occupancy Rate</CardTitle>
        <CardDescription>Monthly average percentage of beds occupied</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A99E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00A99E" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderColor: '#00A99E',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                formatter={(value: number) => [`${value}%`, 'Occupancy Rate']}
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#00A99E"
                fillOpacity={1}
                fill="url(#colorRate)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
